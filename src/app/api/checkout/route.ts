import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getCourseBySlug } from "@/lib/courses";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  // Step 1: Check env
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "STRIPE_SECRET_KEY manquante" },
      { status: 500 }
    );
  }

  // Step 2: Auth
  let user;
  try {
    const supabase = await createClient();
    const { data, error: authError } = await supabase.auth.getUser();
    if (authError) {
      return NextResponse.json(
        { error: `Auth error: ${authError.message}` },
        { status: 401 }
      );
    }
    user = data.user;
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json(
      { error: `Supabase error: ${msg}` },
      { status: 500 }
    );
  }

  if (!user) {
    return NextResponse.json(
      { error: "Vous devez être connecté pour acheter." },
      { status: 401 }
    );
  }

  // Step 3: Parse body
  let courseSlug: string;
  let courseLang: string;
  try {
    const body = await req.json();
    courseSlug = body.courseSlug;
    courseLang = body.courseLang || "fr";
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json(
      { error: `Body parse error: ${msg}` },
      { status: 400 }
    );
  }

  // Step 4: Find course
  const course = getCourseBySlug(courseSlug);
  if (!course) {
    return NextResponse.json(
      { error: `Formation introuvable: ${courseSlug}` },
      { status: 404 }
    );
  }

  // Step 5: Create Stripe session
  try {
    const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_APP_URL || "https://learnai-csa3.vercel.app").trim();
    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: course.title,
              description: course.description.substring(0, 500),
            },
            unit_amount: 999, // 9,99€ par formation
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${baseUrl}/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cours/${course.slug}`,
      customer_email: user.email,
      metadata: {
        courseSlug: course.slug,
        userId: user.id,
        courseLang: courseLang,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json(
      { error: `Stripe error: ${msg}` },
      { status: 500 }
    );
  }
}
