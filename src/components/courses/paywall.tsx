"use client";

import { Lock, CheckCircle2 } from "lucide-react";
import { BuyButton } from "@/components/courses/buy-button";
import Link from "next/link";
import { useTranslation } from "@/lib/i18n/context";

export function Paywall({ courseSlug }: { courseSlug: string }) {
  const { t } = useTranslation();
  return (
    <div className="my-12 rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/10 via-purple-500/5 to-transparent p-8 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10">
        <Lock className="h-8 w-8 text-purple-400" />
      </div>

      <h3 className="mb-2 text-2xl font-bold">{t.paywall.title}</h3>
      <p className="mb-6 text-muted-foreground">
        {t.paywall.subtitle}
      </p>

      <div className="mx-auto mb-8 max-w-sm space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          {t.paywall.feature1}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          {t.paywall.feature2}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          {t.paywall.feature3}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          {t.paywall.feature4}
        </div>
      </div>

      <div className="mb-6">
        <p className="mb-1 text-3xl font-bold gradient-text-animated">9,99 € TTC</p>
        <p className="text-sm text-muted-foreground">{t.paywall.priceSubtitle}</p>
      </div>

      <div className="mx-auto max-w-xs">
        <BuyButton courseSlug={courseSlug} priceFormatted="9,99 € TTC" />
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        {t.paywall.orFree}{" "}
        <Link href="/cours/ia-de-a-a-z" className="text-purple-400 hover:text-purple-300">
          {t.paywall.freeLink}
        </Link>
      </p>
    </div>
  );
}
