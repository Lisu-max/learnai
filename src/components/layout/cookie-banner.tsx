"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // localStorage is client-only; visible must be derived after hydration
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  }

  function handleRefuse() {
    localStorage.setItem(STORAGE_KEY, "refused");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-border/50 bg-[#0a0a0f]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Ce site utilise des cookies techniques essentiels pour son fonctionnement.{" "}
          <Link
            href="/politique-confidentialite"
            className="text-purple-400 underline underline-offset-2 hover:text-purple-300"
          >
            En savoir plus
          </Link>
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            onClick={handleRefuse}
            className="rounded-md border border-border/60 px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-border hover:text-foreground"
          >
            Refuser
          </button>
          <button
            onClick={handleAccept}
            className="rounded-md bg-purple-600 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-purple-500"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
