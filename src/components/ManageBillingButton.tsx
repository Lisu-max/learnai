"use client";

import { useState } from "react";
import { Loader2, CreditCard, AlertCircle } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

interface ManageBillingButtonProps {
  className?: string;
}

export function ManageBillingButton({
  className = "",
}: ManageBillingButtonProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { t } = useTranslation();

  async function handlePortal() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/stripe/portal", { method: "POST" });
      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || t.common.billingError);
        setLoading(false);
      }
    } catch {
      setError(t.common.error);
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <button
        onClick={handlePortal}
        disabled={loading}
        className={`inline-flex items-center justify-center gap-2 rounded-lg border border-border/50 px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:border-purple-500/30 hover:text-purple-400 disabled:opacity-50 ${className}`}
      >
        {loading ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            {t.common.loading}
          </>
        ) : (
          <>
            <CreditCard className="h-4 w-4" />
            {t.common.manageBilling}
          </>
        )}
      </button>
      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2 text-xs text-red-400">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
