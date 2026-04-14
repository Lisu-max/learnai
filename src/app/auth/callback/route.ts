import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

function safeRedirectPath(next: string | null): string {
  if (!next) return "/";
  // Only allow relative paths — reject absolute URLs and protocol-relative paths (//)
  if (next.startsWith("/") && !next.startsWith("//")) return next;
  return "/";
}

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type");
  const next = safeRedirectPath(searchParams.get("next"));

  const supabase = await createClient();

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      if (type === "recovery") {
        return NextResponse.redirect(`${origin}/nouveau-mot-de-passe`);
      }
      return NextResponse.redirect(`${origin}${next}`);
    }
    // Code exchange failed — redirect to error
    return NextResponse.redirect(`${origin}/connexion?error=auth`);
  }

  if (token_hash && type) {
    const { error } = await supabase.auth.verifyOtp({
      token_hash,
      type: type as "signup" | "email" | "recovery",
    });
    if (!error) {
      if (type === "recovery") {
        return NextResponse.redirect(`${origin}/nouveau-mot-de-passe`);
      }
      return NextResponse.redirect(`${origin}${next}`);
    }
    // OTP verification failed — redirect to error
    return NextResponse.redirect(`${origin}/connexion?error=auth`);
  }

  // No code or token_hash — redirect to client page that handles hash fragments
  return NextResponse.redirect(`${origin}/auth/confirm`);
}
