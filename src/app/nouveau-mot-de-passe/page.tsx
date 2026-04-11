"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Brain, Loader2, Lock, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/context";

export default function NewPasswordPage() {
  const router = useRouter();
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const password = formData.get("password") as string;
    const confirm = formData.get("confirm") as string;

    if (password !== confirm) {
      setError(t.auth.passwordMismatch);
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError(t.auth.passwordTooShort8);
      setLoading(false);
      return;
    }

    const supabase = createClient();
    const { error: updateError } = await supabase.auth.updateUser({ password });

    if (updateError) {
      setError(updateError.message);
      setLoading(false);
      return;
    }

    setDone(true);
    setLoading(false);
    setTimeout(() => router.push("/connexion"), 3000);
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
            <h1 className="text-2xl font-bold">{t.auth.newPasswordTitle}</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {t.auth.newPasswordSubtitle}
            </p>
          </div>

          <div className="rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
            {done ? (
              <div className="text-center">
                <CheckCircle2 className="mx-auto mb-4 h-10 w-10 text-emerald-400" />
                <p className="mb-2 font-medium">{t.auth.passwordUpdated}</p>
                <p className="text-sm text-muted-foreground">
                  {t.auth.passwordUpdatedRedirect}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="password" className="mb-1.5 block text-sm font-medium">
                    {t.auth.newPasswordLabel}
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    minLength={8}
                    placeholder={t.auth.newPasswordPlaceholder}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="confirm" className="mb-1.5 block text-sm font-medium">
                    {t.auth.confirmPassword}
                  </label>
                  <input
                    id="confirm"
                    name="confirm"
                    type="password"
                    required
                    minLength={8}
                    placeholder={t.auth.confirmPasswordRepeatPlaceholder}
                    className={inputClass}
                  />
                </div>

                {error && (
                  <p className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400">{error}</p>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="btn-gradient w-full border-0 py-6 text-sm font-semibold text-white"
                >
                  {loading ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Lock className="mr-2 h-4 w-4" />
                  )}
                  {loading ? t.auth.updatingPassword : t.auth.savePassword}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
