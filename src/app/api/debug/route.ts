import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET() {
  const debug: Record<string, string> = {};

  // Check env vars
  debug.STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY ? "SET" : "MISSING";
  debug.NEXT_PUBLIC_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "MISSING";
  debug.NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL || "MISSING";
  debug.NEXT_PUBLIC_SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ? "SET" : "MISSING";
  debug.SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY ? "SET" : "MISSING";

  // Check auth
  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();
    debug.auth = error ? `ERROR: ${error.message}` : data.user ? `OK: ${data.user.email}` : "NO_USER";
  } catch (e) {
    debug.auth = `CRASH: ${e instanceof Error ? e.message : String(e)}`;
  }

  return NextResponse.json(debug);
}

export async function POST() {
  const debug: Record<string, string> = {};

  try {
    const supabase = await createClient();
    const { data, error } = await supabase.auth.getUser();
    debug.auth = error ? `ERROR: ${error.message}` : data.user ? `OK: ${data.user.email}` : "NO_USER";
  } catch (e) {
    debug.auth = `CRASH: ${e instanceof Error ? e.message : String(e)}`;
  }

  // Test Stripe
  try {
    const { getStripe } = await import("@/lib/stripe");
    const stripe = getStripe();
    const prices = await stripe.prices.list({ limit: 1 });
    debug.stripe = `OK: ${prices.data.length} prices`;
  } catch (e) {
    debug.stripe = `CRASH: ${e instanceof Error ? e.message : String(e)}`;
  }

  return NextResponse.json(debug);
}
