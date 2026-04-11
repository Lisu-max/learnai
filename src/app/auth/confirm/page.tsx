"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Loader2 } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

function ConfirmContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  useEffect(() => {
    const handleAuth = async () => {
      const supabase = createClient();

      // Handle token_hash from query params (email OTP flow)
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

      // Handle hash fragment (implicit flow: #access_token=...&type=signup)
      const hash = window.location.hash;
      if (hash && hash.includes("access_token")) {
        // The browser Supabase client processes hash fragments automatically
        // via onAuthStateChange — just wait for the session to be set
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          router.replace("/");
          return;
        }
      }

      // Check if session already exists (set by middleware or prior auth)
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.replace("/");
        return;
      }

      // Wait and retry once for async auth state propagation
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
            <p className="mb-2 text-lg text-red-400">
              {t.auth.confirmError}
            </p>
          </div>
        ) : (
          <div>
            <Loader2 className="mx-auto mb-4 h-8 w-8 animate-spin text-purple-500" />
            <p className="text-muted-foreground">
              {t.auth.confirmingAccount}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function AuthConfirmPage() {
  return (
    <Suspense fallback={
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-purple-500" />
      </div>
    }>
      <ConfirmContent />
    </Suspense>
  );
}
