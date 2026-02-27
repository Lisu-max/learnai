"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, ShoppingCart } from "lucide-react";

export function BuyButton({
  courseSlug,
  priceFormatted,
}: {
  courseSlug: string;
  priceFormatted: string;
}) {
  const [loading, setLoading] = useState(false);

  async function handleCheckout() {
    setLoading(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ courseSlug }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
        setLoading(false);
      }
    } catch {
      alert("Une erreur est survenue. Veuillez réessayer.");
      setLoading(false);
    }
  }

  return (
    <Button
      onClick={handleCheckout}
      disabled={loading}
      size="lg"
      className="btn-gradient w-full border-0 py-6 text-base font-semibold text-white"
    >
      {loading ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Redirection...
        </>
      ) : (
        <>
          <ShoppingCart className="mr-2 h-5 w-5" />
          Acheter — {priceFormatted}
        </>
      )}
    </Button>
  );
}
