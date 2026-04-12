import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

// Block direct access to /pdfs/ — serve only via /api/pdf/[slug]
function isPdfDirectAccess(pathname: string) {
  return pathname.startsWith("/pdfs/") && pathname.endsWith(".pdf");
}

// Simple in-memory rate limiter (per IP, resets on cold start)
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 10; // max 10 checkout requests per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  entry.count += 1;
  return entry.count > RATE_LIMIT_MAX;
}

const RATE_LIMITED_PATHS = ["/api/checkout", "/api/stripe/checkout", "/api/stripe/portal"];

export const runtime = "nodejs";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Block direct PDF access
  if (isPdfDirectAccess(pathname)) {
    return NextResponse.json(
      { error: "Accès direct non autorisé. Utilisez /api/pdf/[slug]." },
      { status: 403 }
    );
  }

  // Rate limit checkout endpoints
  if (RATE_LIMITED_PATHS.some((p) => pathname.startsWith(p))) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Trop de requêtes. Réessayez dans une minute." },
        { status: 429 }
      );
    }
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
