"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingCart, Globe, AlertCircle } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import { createClient } from "@/lib/supabase/client";

export function BuyButton({
  courseSlug,
  priceFormatted,
}: {
  courseSlug: string;
  priceFormatted: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [courseLang, setCourseLang] = useState<"fr" | "en">("fr");
  const router = useRouter();
  const { t } = useTranslation();

  async function handleCheckout() {
    setLoading(true);
    setError(null);

    // Check auth client-side first to avoid 401 console error
    const supabase = createClient();
    const { data: { user } } = await supabase.auth.getUser();
    const backToCourse = `/cours/${courseSlug}`;
    if (!user) {
      router.push(`/connexion?next=${encodeURIComponent(backToCourse)}`);
      return;
    }

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseSlug, courseLang }),
      });

      const data = await res.json();

      if (res.status === 401) {
        router.push(`/connexion?next=${encodeURIComponent(backToCourse)}`);
        return;
      }

      if (data.url) {
        window.location.href = data.url;
      } else {
        const base = data.error || t.buy.error;
        const extra = data.detail ? ` — ${data.detail}` : "";
        setError(`${base}${extra}`);
        setLoading(false);
      }
    } catch (err) {
      setError(`${t.buy.error} (${err instanceof Error ? err.message : "réseau"})`);
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div>
        <label className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Globe className="h-4 w-4" />
          {t.buy.courseLanguage}
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setCourseLang("fr")}
            className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
              courseLang === "fr"
                ? "border-purple-500 bg-purple-500/10 text-purple-400"
                : "border-border/50 bg-background text-muted-foreground hover:bg-accent"
            }`}
          >
            🇫🇷 {t.buy.french}
          </button>
          <button
            type="button"
            onClick={() => setCourseLang("en")}
            className={`flex items-center justify-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${
              courseLang === "en"
                ? "border-purple-500 bg-purple-500/10 text-purple-400"
                : "border-border/50 bg-background text-muted-foreground hover:bg-accent"
            }`}
          >
            🇬🇧 {t.buy.english}
          </button>
        </div>
      </div>

      <Button
        onClick={handleCheckout}
        disabled={loading}
        size="lg"
        className="btn-gradient-glow w-full border-0 py-6 text-base font-semibold text-white"
      >
        {loading ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            {t.buy.redirecting}
          </>
        ) : (
          <>
            <ShoppingCart className="mr-2 h-5 w-5" />
            {t.buy.buyFor} {priceFormatted}
          </>
        )}
      </Button>

      {error && (
        <div className="flex items-start gap-2 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
