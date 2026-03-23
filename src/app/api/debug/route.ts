import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function GET() {
  const key = process.env.STRIPE_SECRET_KEY || "";
  const debug: Record<string, string> = {
    key_length: String(key.length),
    key_start: key.substring(0, 12) + "...",
    key_has_newline: String(key.includes("\n")),
    key_has_space: String(key !== key.trim()),
  };

  try {
    const stripe = new Stripe(key.trim());
    const prices = await stripe.prices.list({ limit: 1 });
    debug.stripe_connection = `OK — ${prices.data.length} price(s)`;
  } catch (e) {
    debug.stripe_connection = `FAIL: ${e instanceof Error ? e.message : String(e)}`;
  }

  return NextResponse.json(debug);
}
