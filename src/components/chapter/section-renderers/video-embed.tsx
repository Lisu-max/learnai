"use client";

import { Play, Languages } from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import type { LocalizedVideoId } from "@/content/types";

function resolveVideoId(
  videoId: LocalizedVideoId | undefined,
  locale: "fr" | "en",
): { id: string; lang: "fr" | "en" | null; isFallback: boolean } {
  if (!videoId) return { id: "", lang: null, isFallback: false };
  if (typeof videoId === "string") {
    return { id: videoId, lang: null, isFallback: false };
  }
  const preferred = videoId[locale];
  if (preferred) return { id: preferred, lang: locale, isFallback: false };
  const other = locale === "fr" ? videoId.en : videoId.fr;
  if (other) {
    return { id: other, lang: locale === "fr" ? "en" : "fr", isFallback: true };
  }
  return { id: "", lang: null, isFallback: false };
}

export function VideoEmbed({
  videoId,
  label,
  labelEn,
}: {
  videoId?: LocalizedVideoId;
  label?: string;
  labelEn?: string;
}) {
  const { locale } = useTranslation();
  const { id, lang, isFallback } = resolveVideoId(videoId, locale);
  const displayLabel = locale === "en" && labelEn ? labelEn : label;

  if (!id) return null;

  const fallbackText =
    locale === "fr"
      ? `Version ${lang === "en" ? "anglaise" : "française"} (traduction FR en cours)`
      : `${lang === "fr" ? "French" : "English"} version (EN translation coming soon)`;

  const hlParam = lang ?? locale;

  return (
    <div className="my-8">
      {displayLabel && (
        <p className="mb-2 flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <Play className="h-4 w-4 text-purple-400" />
          {displayLabel}
        </p>
      )}
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-border/50 bg-black/50">
        <iframe
          src={`https://www.youtube.com/embed/${id}?rel=0&modestbranding=1&cc_load_policy=1&cc_lang_pref=${locale}&hl=${hlParam}`}
          title={displayLabel || "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
          loading="lazy"
        />
      </div>
      {isFallback && (
        <p className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
          <Languages className="h-3.5 w-3.5 text-amber-400" />
          {fallbackText}
        </p>
      )}
    </div>
  );
}
