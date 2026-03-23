import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getCourseBySlug } from "@/lib/courses";
import { createClient } from "@/lib/supabase/server";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("STRIPE_SECRET_KEY is not set");
      return NextResponse.json(
        { error: "Configuration Stripe manquante sur le serveur." },
        { status: 500 }
      );
    }

    const supabase = await createClient();
    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser();

    if (authError) {
      console.error("Auth error:", authError.message);
    }

    if (!user) {
      return NextResponse.json(
        { error: "Vous devez être connecté pour acheter." },
        { status: 401 }
      );
    }

    const { courseSlug, courseLang } = await req.json();

    const course = getCourseBySlug(courseSlug);
    if (!course) {
      return NextResponse.json(
        { error: "Formation introuvable" },
        { status: 404 }
      );
    }

    const session = await getStripe().checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: course.title,
              description: course.description,
            },
            unit_amount: course.price,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cours/${course.slug}`,
      customer_email: user.email,
      metadata: {
        courseSlug: course.slug,
        userId: user.id,
        courseLang: courseLang || "fr",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    console.error("Stripe checkout error:", message);
    return NextResponse.json(
      { error: `Erreur checkout: ${message}` },
      { status: 500 }
    );
  }
}
