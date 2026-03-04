"use client";

import { Suspense, useState } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Brain, Loader2, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

function ConnexionForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const justRegistered = searchParams.get("verified") === "check";
  const authError = searchParams.get("error") === "auth";

  const [error, setError] = useState<string | null>(
    authError ? "Erreur d'authentification. Veuillez réessayer." : null
  );
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = createClient();
    if (!supabase) {
      setError("Service indisponible. Réessayez plus tard.");
      setLoading(false);
      return;
    }

    const { error: loginError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (loginError) {
      setError(loginError.message);
      setLoading(false);
      return;
    }

    router.push("/");
  }

  async function handleGoogle() {
    const supabase = createClient();
    if (!supabase) return;

    const { data, error: oauthError } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });

    if (oauthError) {
      setError(oauthError.message);
      return;
    }

    if (data.url) {
      window.location.href = data.url;
    }
  }

  return (
    <div className="animate-fade-in">
      <div className="mb-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
          <Brain className="h-7 w-7 text-white" />
        </div>
        <h1 className="text-2xl font-bold">Se connecter</h1>
        <p className="mt-2 text-sm text-muted-foreground">Accédez à votre espace LearnAI</p>
      </div>

      {justRegistered && (
        <div className="mb-6 rounded-lg bg-emerald-500/10 px-4 py-3 text-center text-sm text-emerald-400">
          Compte créé avec succès ! Connectez-vous maintenant.
        </div>
      )}

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
          Continuer avec Google
        </button>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-border/50" />
          <span className="text-xs text-muted-foreground">ou</span>
          <div className="h-px flex-1 bg-border/50" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
            <input id="email" name="email" type="email" required placeholder="vous@exemple.com" className="w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-purple-500 focus:ring-1 focus:ring-purple-500" />
          </div>
          <div>
            <label htmlFor="password" className="mb-1.5 block text-sm font-medium">Mot de passe</label>
            <input id="password" name="password" type="password" required placeholder="Votre mot de passe" className="w-full rounded-lg border border-border/50 bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-purple-500 focus:ring-1 focus:ring-purple-500" />
          </div>

          {error && (
            <p className="rounded-lg bg-red-500/10 px-4 py-2 text-sm text-red-400">{error}</p>
          )}

          <Button type="submit" disabled={loading} className="btn-gradient w-full border-0 py-6 text-sm font-semibold text-white">
            {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <LogIn className="mr-2 h-4 w-4" />}
            {loading ? "Connexion..." : "Se connecter"}
          </Button>
        </form>
      </div>

      <p className="mt-6 text-center text-sm text-muted-foreground">
        Pas encore de compte ?{" "}
        <Link href="/inscription" className="font-medium text-purple-400 hover:text-purple-300">S&apos;inscrire</Link>
      </p>
    </div>
  );
}

export default function ConnexionPage() {
  return (
    <div className="bg-grid">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col justify-center px-4 py-16">
        <Suspense>
          <ConnexionForm />
        </Suspense>
      </section>
    </div>
  );
}
