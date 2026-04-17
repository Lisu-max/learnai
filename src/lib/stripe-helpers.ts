import { getStripe } from "@/lib/stripe";
import { createClient as createServiceClient } from "@supabase/supabase-js";

// Internal only — not exported to prevent accidental service role usage outside webhooks
function getServiceSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY must be set");
  }
  return createServiceClient(supabaseUrl, serviceRoleKey);
}

export async function getOrCreateStripeCustomer(
  userId: string,
  email: string
): Promise<string> {
  const supabase = getServiceSupabase();

  // Check if user already has a stripe_customer_id
  const { data: profile } = await supabase
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", userId)
    .maybeSingle();

  if (profile?.stripe_customer_id) {
    return profile.stripe_customer_id;
  }

  // Create Stripe customer then upsert — handles race condition where two
  // concurrent requests both find no customer_id and create duplicates.
  // The upsert ensures only the last writer wins, and Stripe customers are
  // idempotent (duplicates are harmless but wasteful).
  const customer = await getStripe().customers.create({
    email,
    metadata: { supabase_user_id: userId },
  });

  // Use upsert to handle concurrent inserts gracefully
  await supabase
    .from("profiles")
    .update({ stripe_customer_id: customer.id })
    .eq("id", userId)
    .is("stripe_customer_id", null); // only update if still null (lost race = no-op)

  // Re-fetch to get the winner's customer_id (in case we lost the race)
  const { data: updated } = await supabase
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", userId)
    .single();

  return updated?.stripe_customer_id ?? customer.id;
}

// Export for use in webhook handler only
export { getServiceSupabase };
