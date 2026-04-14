import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getStripe, getStripePriceId } from "@/lib/stripe";
import { getOrCreateStripeCustomer } from "@/lib/stripe-helpers";
import { getCourseBySlug, isFreeCourse } from "@/lib/courses";
import { createClient } from "@/lib/supabase/server";
import { logRequest, logError } from "@/lib/logger";

const CheckoutSchema = z.object({
  courseSlug: z.string().min(1).max(100).regex(/^[a-z0-9-]+$/),
  courseLang: z.enum(["fr", "en"]).default("fr"),
});

export async function POST(req: NextRequest) {
  if (!process.env.STRIPE_SECRET_KEY) {
    return NextResponse.json(
      { error: "Configuration Stripe manquante" },
      { status: 500 }
    );
  }

  // Auth
  const supabase = await createClient();
  const { data: { user }, error: authError } = await supabase.auth.getUser();

  if (authError || !user || !user.email) {
    return NextResponse.json(
      { error: "Vous devez être connecté pour acheter." },
      { status: 401 }
    );
  }

  // Parse & validate body
  let courseSlug: string;
  let courseLang: "fr" | "en";
  try {
    const parsed = CheckoutSchema.safeParse(await req.json());
    if (!parsed.success) {
      return NextResponse.json({ error: "Paramètres invalides" }, { status: 400 });
    }
    courseSlug = parsed.data.courseSlug;
    courseLang = parsed.data.courseLang;
  } catch {
    return NextResponse.json({ error: "Body invalide" }, { status: 400 });
  }

  // Validate course
  const course = getCourseBySlug(courseSlug);
  if (!course) {
    return NextResponse.json(
      { error: "Formation introuvable." },
      { status: 404 }
    );
  }

  if (isFreeCourse(courseSlug)) {
    return NextResponse.json(
      { error: "Cette formation est gratuite." },
      { status: 400 }
    );
  }

  // Get Stripe price ID
  const priceId = getStripePriceId(courseSlug);
  if (!priceId) {
    console.error(`No Stripe price ID configured for slug: ${courseSlug}`);
    return NextResponse.json(
      { error: "Prix non configuré pour cette formation." },
      { status: 500 }
    );
  }

  try {
    const customerId = await getOrCreateStripeCustomer(user.id, user.email);
    const baseUrl = (process.env.NEXT_PUBLIC_BASE_URL || process.env.NEXT_PUBLIC_APP_URL || "https://learnai-gules.vercel.app").trim();

    const session = await getStripe().checkout.sessions.create({
      customer: customerId,
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "payment",
      success_url: `${baseUrl}/succes?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/cours/${course.slug}`,
      metadata: {
        courseSlug: course.slug,
        userId: user.id,
        courseLang,
      },
    });

    logRequest("/api/checkout", 200, user.id);
    return NextResponse.json({ url: session.url });
  } catch (e) {
    logError("/api/checkout", e, user.id);
    return NextResponse.json(
      { error: "Erreur lors de la création du paiement." },
      { status: 500 }
    );
  }
}
