"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingCart } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

export function BuyButton({
  courseSlug,
  priceFormatted,
}: {
  courseSlug: string;
  priceFormatted: string;
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { t } = useTranslation();

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseSlug }),
      });

      if (res.status === 401) {
        router.push("/connexion");
        return;
      }

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert(t.buy.error);
        setLoading(false);
      }
    } catch {
      alert(t.buy.error);
      setLoading(false);
    }
  }

  return (
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
  );
}
