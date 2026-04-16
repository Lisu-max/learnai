import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getOrCreateStripeCustomer } from "@/lib/stripe-helpers";
import { createClient } from "@/lib/supabase/server";
import { siteConfig } from "@/config/site";

export async function POST() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user || !user.email) {
      return NextResponse.json(
        { error: "Vous devez être connecté." },
        { status: 401 }
      );
    }

    const customerId = await getOrCreateStripeCustomer(user.id, user.email);
    const appUrl = siteConfig.url;

    const priceId = process.env.STRIPE_PRICE_PRO_MONTHLY;
    if (!priceId) {
      console.error("STRIPE_PRICE_PRO_MONTHLY environment variable is not set");
      return NextResponse.json(
        { error: "Configuration de paiement manquante." },
        { status: 500 }
      );
    }

    const session = await getStripe().checkout.sessions.create({
      customer: customerId,
      mode: "subscription",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
      success_url: `${appUrl}/compte?success=true`,
      cancel_url: `${appUrl}/cours?canceled=true`,
      subscription_data: {
        metadata: { userId: user.id },
      },
      metadata: { userId: user.id },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe subscription checkout error:", error);
    return NextResponse.json(
      { error: "Erreur lors de la création de la session d'abonnement" },
      { status: 500 }
    );
  }
}
