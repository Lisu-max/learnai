import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { ShieldCheck } from "lucide-react";
import { getCourseBySlug } from "@/lib/courses";
import { siteConfig } from "@/config/site";

function getServiceSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set");
  }
  return createServiceClient(url, key);
}

async function getCertificateData(code: string) {
  const db = getServiceSupabase();

  const { data: cert } = await db
    .from("certificates")
    .select("user_id, course_slug, score, issued_at")
    .eq("verify_code", code)
    .single();

  if (!cert) return null;

  const { data: profile } = await db
    .from("profiles")
    .select("full_name")
    .eq("id", cert.user_id)
    .single();

  const course = getCourseBySlug(cert.course_slug);

  return {
    userName: profile?.full_name ?? "Utilisateur",
    courseTitle: course?.title ?? cert.course_slug,
    courseColor: course?.color ?? "from-purple-500 to-pink-500",
    score: cert.score,
    issuedAt: cert.issued_at,
  };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code } = await params;
  const data = await getCertificateData(code);

  if (!data) {
    return { title: "Certificat introuvable" };
  }

  const title = `Certificat ${siteConfig.name} — ${data.courseTitle}`;
  const description = `${data.userName} a terminé ${data.courseTitle} avec un score de ${data.score}%`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}

export default async function VerifyPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;
  const data = await getCertificateData(code);

  if (!data) {
    notFound();
  }

  const formattedDate = new Date(data.issuedAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-16 bg-grid">
      <div className="w-full max-w-lg">
        <div className="rounded-2xl border border-border/50 bg-card/80 backdrop-blur-sm p-8 text-center space-y-6">
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 ring-1 ring-emerald-500/30">
            <ShieldCheck className="h-8 w-8 text-emerald-400" />
          </div>

          {/* Title */}
          <div>
            <h1 className="text-2xl font-bold text-foreground">
              Certificat Authentique
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Ce certificat a été vérifié par {siteConfig.name}
            </p>
          </div>

          {/* Divider */}
          <div className="h-px bg-border/50" />

          {/* Details */}
          <div className="space-y-4 text-left">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Décerné à
              </p>
              <p className="mt-1 text-lg font-semibold text-foreground">
                {data.userName}
              </p>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Formation
              </p>
              <p
                className={`mt-1 text-lg font-semibold bg-gradient-to-r ${data.courseColor} bg-clip-text text-transparent`}
              >
                {data.courseTitle}
              </p>
            </div>

            <div className="flex gap-8">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Score
                </p>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  {data.score}%
                </p>
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Date
                </p>
                <p className="mt-1 text-lg font-semibold text-foreground">
                  {formattedDate}
                </p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border/50" />

          {/* Footer */}
          <p className="text-xs text-muted-foreground">
            Code de vérification : <code className="text-foreground/70">{code}</code>
          </p>
        </div>
      </div>
    </div>
  );
}
