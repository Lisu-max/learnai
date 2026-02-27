import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { getCourseBySlug } from "@/lib/courses";

export async function POST(req: NextRequest) {
  try {
    const { courseSlug } = await req.json();

    const course = getCourseBySlug(courseSlug);
    if (!course) {
      return NextResponse.json(
        { error: "Formation introuvable" },
        { status: 404 }
      );
    }

    const session = await stripe.checkout.sessions.create({
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
      metadata: {
        courseSlug: course.slug,
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de la session de paiement" },
      { status: 500 }
    );
  }
}
