"use client";

import { Lock, CheckCircle2, Sparkles } from "lucide-react";
import { UpgradeButton } from "@/components/UpgradeButton";
import Link from "next/link";

export function Paywall() {
  return (
    <div className="my-12 rounded-2xl border border-purple-500/20 bg-gradient-to-b from-purple-500/10 via-purple-500/5 to-transparent p-8 text-center">
      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-500/10">
        <Lock className="h-8 w-8 text-purple-400" />
      </div>

      <h3 className="mb-2 text-2xl font-bold">Formation Premium</h3>
      <p className="mb-6 text-muted-foreground">
        Débloquez cette formation et toutes les formations premium
      </p>

      <div className="mx-auto mb-8 max-w-sm space-y-3">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          3 formations premium (67 chapitres)
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          Quiz interactifs et suivi de progression
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          Mises à jour incluses
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <CheckCircle2 className="h-4 w-4 text-emerald-400" />
          Annulable à tout moment
        </div>
      </div>

      <div className="mb-4">
        <p className="mb-1 text-3xl font-bold gradient-text-animated">9,99€<span className="text-lg font-normal text-muted-foreground">/mois</span></p>
      </div>

      <UpgradeButton label="S'abonner — 9,99€/mois" className="px-10 py-4 text-base" />

      <p className="mt-6 text-sm text-muted-foreground">
        Ou découvrez nos{" "}
        <Link href="/cours" className="text-purple-400 hover:text-purple-300">
          2 formations gratuites
        </Link>
      </p>
    </div>
  );
}
