"use client";

import { Zap, Shield, BookOpen, RefreshCw } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useTranslation } from "@/lib/i18n/context";

export function ValueProposition() {
  const { t } = useTranslation();

  const values = [
    {
      icon: BookOpen,
      title: t.values.expertContent,
      description: t.values.expertDesc,
    },
    {
      icon: Zap,
      title: t.values.instantAccess,
      description: t.values.instantDesc,
    },
    {
      icon: RefreshCw,
      title: t.values.freeUpdates,
      description: t.values.updatesDesc,
    },
    {
      icon: Shield,
      title: t.values.securePayment,
      description: t.values.paymentDesc,
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="section-divider mb-20" />

      <Reveal>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            {t.values.title} <span className="gradient-text-animated">LearnAI</span> ?
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t.values.subtitle}
          </p>
        </div>
      </Reveal>

      <Reveal className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => (
          <div key={value.title} className="card-glass p-6 text-center">
            <div className="relative mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-500/30 to-blue-500/30 blur-xl" />
              <value.icon className="relative h-6 w-6 text-purple-400" />
            </div>
            <h3 className="mb-2 font-semibold">{value.title}</h3>
            <p className="text-sm text-muted-foreground">
              {value.description}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
