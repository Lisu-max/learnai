"use client";

import { Lock, CheckCircle2 } from "lucide-react";
import { BuyButton } from "@/components/courses/buy-button";
import Link from "next/link";

export function Paywall({ courseSlug }: { courseSlug: string }) {
  return (
    <div className="my-12 rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/10 via-purple-500/5 to-transparent p-8 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10">
        <Lock className="h-8 w-8 text-purple-400" />
      </div>

      <h3 className="mb-2 text-2xl font-bold">Formation Premium</h3>
      <p className="mb-6 text-muted-foreground">
        Débloquez cette formation et accédez à vie à son contenu
      </p>

      <div className="mx-auto mb-8 max-w-sm space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          Vidéos explicatives et textes
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          Quiz interactifs et suivi de progression
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          Accès à vie — mises à jour incluses
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          Paiement unique, sans abonnement
        </div>
      </div>

      <div className="mb-6">
        <p className="mb-1 text-3xl font-bold gradient-text-animated">9,99€</p>
        <p className="text-sm text-muted-foreground">par formation · paiement unique</p>
      </div>

      <div className="mx-auto max-w-xs">
        <BuyButton courseSlug={courseSlug} priceFormatted="9,99€" />
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        Ou commencez par notre{" "}
        <Link href="/cours/ia-de-a-a-z" className="text-purple-400 hover:text-purple-300">
          formation gratuite d&apos;introduction
        </Link>
      </p>
    </div>
  );
}
