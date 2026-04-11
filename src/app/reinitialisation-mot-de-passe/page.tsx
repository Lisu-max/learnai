"use client";

import { useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { Brain, Loader2, Mail, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/context";

export default function ResetPasswordPage() {
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;

    if (!email) {
      setError(t.auth.resetEmailRequired);
      setLoading(false);
      return;
    }

    const supabase = createClient();

    const { error: resetError } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/nouveau-mot-de-passe`,
    });

    if (resetError) {
      setError(resetError.message);
      setLoading(false);
      return;
    }

    setSent(true);
    setLoading(false);
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
            <h1 className="text-2xl font-bold">{t.auth.resetTitle}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.auth.resetSubtitle}
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
            {sent ? (
              <div className="text-center">
                <CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-emerald-400" />
                <p className="mb-2 font-medium">{t.auth.resetSent}</p>
                <p className="text-sm text-muted-foreground">{t.auth.resetSentSubtitle}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
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

                {error && (
                  <p className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400">{error}</p>
                )}

                <Button type="submit" disabled={loading} className="btn-gradient w-full border-0 py-6 text-sm font-semibold text-white">
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mail className="mr-2 h-4 w-4" />}
                  {loading ? t.auth.resetSending : t.auth.resetButton}
                </Button>
              </form>
            )}
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            <Link href="/connexion" className="inline-flex items-center gap-1 font-medium text-purple-400 hover:text-purple-300">
              <ArrowLeft className="h-3.5 w-3.5" />
              {t.auth.backToLogin}
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
