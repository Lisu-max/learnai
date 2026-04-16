"use client";

import { useTranslation } from "@/lib/i18n/context";
import { Globe } from "lucide-react";
import type { Locale } from "@/lib/i18n/translations";

export function LanguageSwitcher() {
  const { locale, setLocale } = useTranslation();

  function toggle() {
    const next: Locale = locale === "fr" ? "en" : "fr";
    setLocale(next);
  }

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 rounded-lg border border-border/50 px-2.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
      title={locale === "fr" ? "Switch to English" : "Passer en français"}
      aria-label="Changer la langue (Switch language)"
    >
      <Globe className="h-3.5 w-3.5" />
      {locale === "fr" ? "EN" : "FR"}
    </button>
  );
}
