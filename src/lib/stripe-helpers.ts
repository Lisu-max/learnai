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
    // Verify the customer still exists in Stripe (not deleted, not from a
    // different Stripe account after a key rotation). If stale, we fall
    // through and create a fresh one.
    try {
      const existing = await getStripe().customers.retrieve(profile.stripe_customer_id);
      if (!existing.deleted) {
        return profile.stripe_customer_id;
      }
    } catch (err: unknown) {
      const isMissing =
        typeof err === "object" &&
        err !== null &&
        "code" in err &&
        (err as { code?: string }).code === "resource_missing";
      if (!isMissing) throw err;
      // else: stale customer_id, recreate below
    }
  }

  // Create Stripe customer then upsert — handles race condition where two
  // concurrent requests both find no customer_id and create duplicates.
  const customer = await getStripe().customers.create({
    email,
    metadata: { supabase_user_id: userId },
  });

  // Force-update (overwrites stale/invalid customer_id from rotated keys)
  await supabase
    .from("profiles")
    .update({ stripe_customer_id: customer.id })
    .eq("id", userId);

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
