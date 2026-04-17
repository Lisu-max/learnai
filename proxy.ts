import { type NextRequest, NextResponse } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";
import { isRateLimited } from "@/lib/ratelimit";

function isPdfDirectAccess(pathname: string) {
  return pathname.startsWith("/pdfs/") && pathname.endsWith(".pdf");
}

const RATE_LIMITED_PATHS = ["/api/checkout", "/api/stripe/checkout", "/api/stripe/portal", "/api/contact"];

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (isPdfDirectAccess(pathname)) {
    return NextResponse.json(
      { error: "Accès direct non autorisé. Utilisez /api/pdf/[slug]." },
      { status: 403 }
    );
  }

  if (RATE_LIMITED_PATHS.some((p) => pathname.startsWith(p))) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
      request.headers.get("x-real-ip") ??
      "unknown";

    if (await isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Trop de requêtes. Réessayez dans une minute." },
        { status: 429, headers: { "Retry-After": "60" } }
      );
    }
  }

  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|pdf)$).*)",
  ],
};
