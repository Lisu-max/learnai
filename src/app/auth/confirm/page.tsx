"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

function ConfirmContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleAuth = async () => {
      const supabase = createClient();

      // Handle token_hash from email confirmation link
      const tokenHash = searchParams.get("token_hash");
      const type = searchParams.get("type");

      if (tokenHash && type) {
        const { error } = await supabase.auth.verifyOtp({
          token_hash: tokenHash,
          type: type as "signup" | "email",
        });
        if (!error) {
          router.replace("/");
          return;
        }
      }

      // Check if session exists already (set by hash fragment or middleware)
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.replace("/");
        return;
      }

      // Wait and retry once
      await new Promise((r) => setTimeout(r, 2000));
      const { data: { session: retrySession } } = await supabase.auth.getSession();
      if (retrySession) {
        router.replace("/");
        return;
      }

      setError(true);
      setTimeout(() => router.replace("/connexion?error=auth"), 3000);
    };

    handleAuth();
  }, [router, searchParams]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        {error ? (
          <div>
            <p className="text-red-400 text-lg mb-2">
              Erreur de confirmation. Redirection...
            </p>
          </div>
        ) : (
          <div>
            <Loader2 className="h-8 w-8 animate-spin text-purple-500 mx-auto mb-4" />
            <p className="text-muted-foreground">
              Confirmation en cours...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AuthConfirmPage() {
  return (
    <Suspense>
      <ConfirmContent />
    </Suspense>
  );
}
