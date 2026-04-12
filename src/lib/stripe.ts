import Stripe from "stripe";

let _stripe: Stripe | null = null;

export function getStripe(): Stripe {
  if (!_stripe) {
    _stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);
  }
  return _stripe;
}

/**
 * Mapping course slug → env var contenant le Stripe Price ID (live)
 */
const PRICE_ENV_MAP: Record<string, string> = {
  "maitriser-outils-ia": "STRIPE_PRICE_MAITRISER_OUTILS_IA",
  "prompt-engineering-pro": "STRIPE_PRICE_PROMPT_ENGINEERING_PRO",
  "ia-pour-votre-business": "STRIPE_PRICE_IA_POUR_VOTRE_BUSINESS",
  "creer-avec-ia": "STRIPE_PRICE_CREER_AVEC_IA",
};

export function getStripePriceId(courseSlug: string): string | null {
  const envVar = PRICE_ENV_MAP[courseSlug];
  if (!envVar) return null;
  return process.env[envVar] || null;
}
