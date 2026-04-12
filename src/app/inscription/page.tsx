"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Brain, Loader2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PasswordInput } from "@/components/ui/password-input";
import { BirthDateInput } from "@/components/ui/birth-date-input";
import { useTranslation } from "@/lib/i18n/context";

export default function InscriptionPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  function translateError(message: string): string {
    return t.auth.errors[message] || message;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const firstName = (formData.get("firstName") as string).trim();
    const lastName = (formData.get("lastName") as string).trim();
    const birthDate = formData.get("birthDate") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;

    if (!firstName) {
      setError(t.auth.firstNameRequired);
      setLoading(false);
      return;
    }

    if (!lastName) {
      setError(t.auth.lastNameRequired);
      setLoading(false);
      return;
    }

    if (!birthDate) {
      setError(t.auth.birthDateRequired);
      setLoading(false);
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();
    let computedAge = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      computedAge--;
    }

    if (computedAge < 13) {
      setError(t.auth.birthDateTooYoung);
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError(t.auth.passwordMismatch);
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError(t.auth.passwordTooShort);
      setLoading(false);
      return;
    }

    const supabase = createClient();

    const { data, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        data: {
          first_name: firstName,
          last_name: lastName,
          birth_date: birthDate,
        },
      },
    });

    if (signUpError) {
      setError(translateError(signUpError.message));
      setLoading(false);
      return;
    }

    // If Supabase returns a session immediately (email confirmation disabled),
    // the user is already logged in — redirect to account page directly.
    if (data.session) {
      router.push("/compte");
    } else if (data.user && data.user.identities && data.user.identities.length === 0) {
      // Supabase silently returns success for already-registered emails
      // but with empty identities array — show a specific error
      setError(t.auth.errors["User already registered"]);
      setLoading(false);
    } else {
      router.push("/connexion?verified=check");
    }
  }

  async function handleGoogle() {
    const supabase = createClient();

    const { data, error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (oauthError) {
      setError(translateError(oauthError.message));
      return;
    }

    if (data.url) {
      window.location.href = data.url;
    }
  }

  const inputClass =
    "w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-purple-500 focus:ring-1 focus:ring-purple-500";

  return (
    <div className="bg-grid">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col justify-center px-4 py-16">
        <div className="animate-fade-in">
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
              <Brain className="h-7 w-7 text-white" />
            </div>
            <h1 className="text-2xl font-bold">{t.auth.createAccount}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.auth.createAccountSubtitle}
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
            <button
              onClick={handleGoogle}
              className="flex w-full items-center justify-center gap-3 rounded-lg border border-border/50 bg-background px-4 py-3 text-sm font-medium transition-colors hover:bg-accent"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              {t.auth.continueWithGoogle}
            </button>

            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-border/50" />
              <span className="text-xs text-muted-foreground">{t.auth.or}</span>
              <div className="h-px flex-1 bg-border/50" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* First name & Last name */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium">
                    {t.auth.firstName}
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    placeholder={t.auth.firstNamePlaceholder}
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium">
                    {t.auth.lastName}
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    placeholder={t.auth.lastNamePlaceholder}
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Birth date */}
              <div>
                <label className="mb-1.5 block text-sm font-medium">
                  {t.auth.birthDate}
                </label>
                <BirthDateInput name="birthDate" />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                  {t.auth.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.auth.emailPlaceholder}
                  className={inputClass}
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="mb-1.5 block text-sm font-medium">
                  {t.auth.password}
                </label>
                <PasswordInput
                  id="password"
                  name="password"
                  placeholder={t.auth.passwordPlaceholder}
                />
              </div>

              {/* Confirm password */}
              <div>
                <label htmlFor="confirmPassword" className="mb-1.5 block text-sm font-medium">
                  {t.auth.confirmPassword}
                </label>
                <PasswordInput
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder={t.auth.confirmPasswordPlaceholder}
                />
              </div>

              {error && (
                <p className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400">{error}</p>
              )}

              <Button type="submit" disabled={loading} className="btn-gradient w-full border-0 py-6 text-sm font-semibold text-white">
                {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mail className="mr-2 h-4 w-4" />}
                {loading ? t.auth.signingUp : t.auth.signupButton}
              </Button>
            </form>
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {t.auth.alreadyHaveAccount}{" "}
            <Link href="/connexion" className="font-medium text-purple-400 hover:text-purple-300">{t.nav.login}</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
