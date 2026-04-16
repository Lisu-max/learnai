import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { getCourseBySlug } from "@/lib/courses";
import { generateVerifyCode, generateCertificatePDF } from "@/lib/certificates";

function getServiceSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set");
  }
  return createServiceClient(url, key);
}

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    // 1. Auth check
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "Non authentifié" }, { status: 401 });
    }

    // 2. Validate course exists
    const course = getCourseBySlug(slug);
    if (!course) {
      return NextResponse.json({ error: "Formation introuvable" }, { status: 404 });
    }

    const serviceDb = getServiceSupabase();
    const userId = user.id;

    // 3. Check eligibility: all chapters completed + all quizzes passed (>=70%)
    const [chaptersRes, quizzesRes] = await Promise.all([
      serviceDb
        .from("chapter_progress")
        .select("chapter_number")
        .eq("user_id", userId)
        .eq("course_slug", slug)
        .eq("completed", true),
      serviceDb
        .from("quiz_results")
        .select("chapter_number, score, total_questions")
        .eq("user_id", userId)
        .eq("course_slug", slug),
    ]);

    const completedChapters = chaptersRes.data?.length ?? 0;
    const passedQuizzes =
      quizzesRes.data?.filter(
        (q) => q.total_questions > 0 && (q.score / q.total_questions) * 100 >= 70
      ) ?? [];

    if (completedChapters < course.chapters || passedQuizzes.length < course.chapters) {
      return NextResponse.json(
        {
          error: "Conditions non remplies",
          details: {
            chaptersCompleted: completedChapters,
            chaptersRequired: course.chapters,
            quizzesPassed: passedQuizzes.length,
            quizzesRequired: course.chapters,
          },
        },
        { status: 403 }
      );
    }

    // 4. Get or create certificate
    const { data: existingCert } = await serviceDb
      .from("certificates")
      .select("id, verify_code, score, issued_at")
      .eq("user_id", userId)
      .eq("course_slug", slug)
      .single();

    let verifyCode: string;
    let score: number;
    let issuedAt: string;

    if (existingCert) {
      verifyCode = existingCert.verify_code;
      score = existingCert.score;
      issuedAt = existingCert.issued_at;
    } else {
      // Calculate average score
      const totalScore = passedQuizzes.reduce((sum, q) => {
        return sum + Math.round((q.score / q.total_questions) * 100);
      }, 0);
      score = Math.round(totalScore / passedQuizzes.length);
      verifyCode = generateVerifyCode();
      issuedAt = new Date().toISOString();

      const { error: insertError } = await serviceDb.from("certificates").insert({
        user_id: userId,
        course_slug: slug,
        score,
        verify_code: verifyCode,
        issued_at: issuedAt,
      });

      if (insertError) {
        // Handle race condition — another request may have created it
        if (insertError.code === "23505") {
          const { data: raceCert } = await serviceDb
            .from("certificates")
            .select("verify_code, score, issued_at")
            .eq("user_id", userId)
            .eq("course_slug", slug)
            .single();
          if (raceCert) {
            verifyCode = raceCert.verify_code;
            score = raceCert.score;
            issuedAt = raceCert.issued_at;
          } else {
            throw insertError;
          }
        } else {
          throw insertError;
        }
      }
    }

    // 5. Get user name
    const { data: profile } = await serviceDb
      .from("profiles")
      .select("full_name")
      .eq("id", userId)
      .single();

    let userName = profile?.full_name;
    if (!userName) {
      const firstName = user.user_metadata?.first_name ?? "";
      const lastName = user.user_metadata?.last_name ?? "";
      userName = `${firstName} ${lastName}`.trim();
    }
    if (!userName) {
      userName = user.email ?? "Utilisateur";
    }

    // 6. Generate PDF
    const formattedDate = new Date(issuedAt).toLocaleDateString("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

    const pdfBytes = await generateCertificatePDF({
      userName,
      courseTitle: course.title,
      score,
      date: formattedDate,
      verifyCode,
      courseColor: course.color,
    });

    // 7. Return PDF
    return new NextResponse(Buffer.from(pdfBytes), {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `inline; filename="certificat-${slug}.pdf"`,
        "Cache-Control": "private, no-store",
      },
    });
  } catch (error) {
    console.error("Certificate generation error:", error);
    return NextResponse.json(
      { error: "Erreur interne du serveur" },
      { status: 500 }
    );
  }
}
