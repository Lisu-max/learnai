"use client";

import { useState } from "react";
import { Loader2, Sparkles } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

interface UpgradeButtonProps {
  className?: string;
}

export function UpgradeButton({
  className = "",
}: UpgradeButtonProps) {
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation();

  async function handleUpgrade() {
    setLoading(true);
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(data.error || t.common.stripeRedirectError);
        setLoading(false);
      }
    } catch {
      alert(t.common.error);
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleUpgrade}
      disabled={loading}
      className={`inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:from-purple-500 hover:to-blue-500 disabled:opacity-50 ${className}`}
    >
      {loading ? (
        <>
          <Loader2 className="h-4 w-4 animate-spin" />
          {t.common.redirecting}
        </>
      ) : (
        <>
          <Sparkles className="h-4 w-4" />
          {t.common.upgradePro}
        </>
      )}
    </button>
  );
}
