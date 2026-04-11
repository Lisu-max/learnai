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

      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        router.replace("/");
        return;
      }

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
