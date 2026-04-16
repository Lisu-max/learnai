import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { getServiceSupabase } from "@/lib/stripe-helpers";

// Extract period end from subscription items (Stripe v20 moved it there)
function getSubscriptionPeriodEnd(subscription: Stripe.Subscription): string | null {
  const firstItem = subscription.items?.data?.[0];
  if (firstItem?.current_period_end) {
    return new Date(firstItem.current_period_end * 1000).toISOString();
  }
  if (subscription.cancel_at) {
    return new Date(subscription.cancel_at * 1000).toISOString();
  }
  return null;
}

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET ?? ""
    );
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    console.error("Webhook signature verification failed:", message);
    return NextResponse.json(
      { error: `Webhook Error: ${message}` },
      { status: 400 }
    );
  }

  const supabase = getServiceSupabase();

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;

        // One-time course purchase
        if (session.mode === "payment") {
          const userId = session.metadata?.userId;
          const courseSlug = session.metadata?.courseSlug;
          if (userId && courseSlug && session.payment_status === "paid") {
            await supabase.from("purchases").upsert(
              {
                user_id: userId,
                course_slug: courseSlug,
                stripe_session_id: session.id,
                amount_paid: session.amount_total || 0,
              },
              { onConflict: "user_id,course_slug" }
            );
            if (session.customer) {
              await supabase
                .from("profiles")
                .update({ stripe_customer_id: session.customer as string })
                .eq("id", userId);
            }
          }
        }

        // Subscription purchase
        if (session.mode === "subscription" && session.subscription) {
          const userId = session.metadata?.userId || session.metadata?.supabase_user_id;
          if (userId) {
            const sub = await getStripe().subscriptions.retrieve(
              session.subscription as string,
              { expand: ["items.data"] }
            ) as Stripe.Subscription;
            await supabase
              .from("profiles")
              .update({
                subscription_status: "pro",
                subscription_id: sub.id,
                stripe_customer_id: session.customer as string,
                subscription_end_date: getSubscriptionPeriodEnd(sub),
              })
              .eq("id", userId);
          }
        }
        break;
      }

      case "customer.subscription.updated": {
        const subscription = event.data.object as Stripe.Subscription;
        let userId = subscription.metadata?.userId || subscription.metadata?.supabase_user_id;

        // Fallback: find user by stripe_customer_id if metadata is missing
        if (!userId) {
          const customerId = subscription.customer as string;
          const { data: profile } = await supabase
            .from("profiles")
            .select("id")
            .eq("stripe_customer_id", customerId)
            .single();
          userId = profile?.id;
        }

        if (userId) {
          let status: string;
          switch (subscription.status) {
            case "active":
              status = "pro";
              break;
            case "past_due":
              status = "past_due";
              break;
            case "canceled":
            case "unpaid":
              status = "free";
              break;
            default:
              status = subscription.status;
          }
          await supabase
            .from("profiles")
            .update({
              subscription_status: status,
              subscription_id: subscription.id,
              subscription_end_date: getSubscriptionPeriodEnd(subscription),
            })
            .eq("id", userId);
        } else {
          console.error("customer.subscription.updated: could not resolve user for subscription", subscription.id);
        }
        break;
      }

      case "customer.subscription.deleted": {
        const subscription = event.data.object as Stripe.Subscription;
        let userId = subscription.metadata?.userId || subscription.metadata?.supabase_user_id;

        // Fallback: find user by stripe_customer_id if metadata is missing
        if (!userId) {
          const customerId = subscription.customer as string;
          const { data: profile } = await supabase
            .from("profiles")
            .select("id")
            .eq("stripe_customer_id", customerId)
            .single();
          userId = profile?.id;
        }

        if (userId) {
          await supabase
            .from("profiles")
            .update({
              subscription_status: "free",
              subscription_id: null,
              subscription_end_date: null,
            })
            .eq("id", userId);
        } else {
          console.error("customer.subscription.deleted: could not resolve user for subscription", subscription.id);
        }
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const customerId = invoice.customer as string;
        const { data: profile } = await supabase
          .from("profiles")
          .select("id")
          .eq("stripe_customer_id", customerId)
          .single();

        if (profile) {
          await supabase
            .from("profiles")
            .update({ subscription_status: "past_due" })
            .eq("id", profile.id);
        }
        break;
      }
    }
  } catch (error) {
    console.error("Webhook handler error:", error);
    return NextResponse.json(
      { error: "Webhook handler failed" },
      { status: 500 }
    );
  }

  return NextResponse.json({ received: true });
}
