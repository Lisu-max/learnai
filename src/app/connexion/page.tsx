"use client";

import { Suspense, useState } from "react";
import { Loader2 as ConnexionLoader } from "lucide-react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Brain, Loader2, LogIn, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import { useTranslation } from "@/lib/i18n/context";

function ConnexionForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useTranslation();
  const justRegistered = searchParams.get("verified") === "check";
  const authError = searchParams.get("error") === "auth";
  const rawNext = searchParams.get("next");
  // Only accept relative paths to prevent open redirects
  const next = rawNext && rawNext.startsWith("/") && !rawNext.startsWith("//") ? rawNext : "/";

  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(
    authError ? t.auth.authError : null
  );
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [magicLoading, setMagicLoading] = useState(false);
  const [magicSent, setMagicSent] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  function translateError(message: string): string {
    return t.auth.errors[message] || message;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!showPassword) {
      await handleMagicLink();
      return;
    }

    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;

    const supabase = createClient();

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(translateError(loginError.message));
      setLoading(false);
      return;
    }

    router.push(next);
  }

  async function handleGoogle() {
    setError(null);
    setGoogleLoading(true);
    const supabase = createClient();

    const { data, error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });

    if (oauthError) {
      setError(translateError(oauthError.message));
      setGoogleLoading(false);
      return;
    }

    if (data.url) {
      window.location.href = data.url;
    }
  }

  async function handleMagicLink() {
    setError(null);
    setMagicSent(false);

    if (!email || !email.includes("@")) {
      setError(t.auth.magicLinkEmailRequired);
      return;
    }

    setMagicLoading(true);
    const supabase = createClient();

    const { error: otpError } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });

    setMagicLoading(false);

    if (otpError) {
      setError(translateError(otpError.message));
      return;
    }

    setMagicSent(true);
  }

  const anyLoading = loading || googleLoading || magicLoading;

  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
          <Brain className="h-7 w-7 text-white" />
        </div>
        <h1 className="text-2xl font-bold">{t.auth.loginTitle}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t.auth.loginSubtitle}</p>
      </div>

      {justRegistered && (
        <div className="mb-6 rounded-lg bg-emerald-500/10 px-4 py-3 text-center text-sm text-emerald-400">
          {t.auth.accountCreated}
        </div>
      )}

      {next !== "/" && !justRegistered && (
        <div className="mb-6 rounded-lg bg-purple-500/10 px-4 py-3 text-center text-sm text-purple-300">
          Connectez-vous pour continuer votre achat.
        </div>
      )}

      <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="on">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">{t.auth.email}</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              inputMode="email"
              placeholder={t.auth.emailPlaceholder}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={anyLoading}
              className="w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-purple-500 focus:ring-1 focus:ring-purple-500 disabled:opacity-60"
            />
          </div>

          <button
            type="button"
            onClick={handleMagicLink}
            disabled={anyLoading}
            className="btn-gradient flex w-full items-center justify-center gap-2 rounded-lg border-0 px-4 py-3.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {magicLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Mail className="h-4 w-4" />}
            {magicLoading ? t.auth.magicLinkSending : t.auth.magicLinkButton}
          </button>
          <p className="text-center text-xs text-muted-foreground">{t.auth.magicLinkHint}</p>

          {magicSent && (
            <p className="rounded-lg bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
              {t.auth.magicLinkSent}
            </p>
          )}

          {error && !magicSent && (
            <p className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400">{error}</p>
          )}

          {!showPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(true)}
              className="mx-auto block text-xs text-muted-foreground underline underline-offset-2 transition-colors hover:text-purple-400"
            >
              {t.auth.usePasswordInstead}
            </button>
          )}

          {showPassword && (
            <div className="space-y-3 border-t border-border/30 pt-4">
              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm font-medium">{t.auth.password}</label>
                <PasswordInput
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder={t.auth.passwordLoginPlaceholder}
                  disabled={anyLoading}
                />
              </div>

              <Button type="submit" disabled={anyLoading} className="w-full border border-border/50 bg-transparent py-5 text-sm font-medium text-foreground hover:bg-accent">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogIn className="mr-2 h-4 w-4" />}
                {loading ? t.auth.loggingIn : t.auth.loginButton}
              </Button>

              <div className="text-center">
                <Link href="/reinitialisation-mot-de-passe" className="text-xs text-muted-foreground transition-colors hover:text-purple-400">
                  {t.auth.forgotPassword}
                </Link>
              </div>
            </div>
          )}
        </form>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border/50" />
          <span className="text-xs text-muted-foreground">{t.auth.or}</span>
          <div className="h-px flex-1 bg-border/50" />
        </div>

        <button
          onClick={handleGoogle}
          disabled={anyLoading}
          className="flex w-full items-center justify-center gap-3 rounded-lg border border-border/50 bg-background px-4 py-3 text-sm font-medium transition-colors hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {googleLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
            </svg>
          )}
          {googleLoading ? t.auth.googleRedirecting : t.auth.continueWithGoogle}
        </button>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        {t.auth.noAccount}{" "}
        <Link href="/inscription" className="font-medium text-purple-400 hover:text-purple-300">{t.nav.signup}</Link>
      </p>
    </div>
  );
}

export default function ConnexionPage() {
  return (
    <div className="bg-grid">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col justify-center px-4 py-16">
        <Suspense fallback={<div className="flex justify-center py-12"><ConnexionLoader className="h-6 w-6 animate-spin text-purple-500" /></div>}>
          <ConnexionForm />
        </Suspense>
      </section>
    </div>
  );
}
