"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useTranslation } from "@/lib/i18n/context";
import dynamic from "next/dynamic";

const NeuralGlobe = dynamic(() => import("./neural-globe").then(m => ({ default: m.NeuralGlobe })), { ssr: false });

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[85vh] overflow-hidden bg-[#05050f]">
      {/* Neural Globe — full background */}
      <NeuralGlobe />

      {/* Deep radial vignette so text stays readable */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(5,5,15,0.55) 65%, rgba(5,5,15,0.92) 100%)",
        }}
      />

      {/* Subtle purple glow at center */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 45%, rgba(100,60,200,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-20 mx-auto max-w-6xl px-4 py-28 md:py-40">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            {t.hero.badge}
          </div>

          <h1 className="animate-fade-in-delay-1 mb-6 text-5xl font-bold leading-tight md:text-7xl">
            {t.hero.title}{" "}
            <span className="gradient-text-animated">{t.hero.titleHighlight}</span>
          </h1>

          <p className="animate-fade-in-delay-2 mb-10 text-lg text-muted-foreground md:text-xl">
            {t.hero.description}
          </p>

          <div className="animate-fade-in-delay-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/cours"
              className="btn-gradient-glow inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-semibold text-white"
            >
              {t.hero.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#formations"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-8 py-3.5 font-medium text-muted-foreground backdrop-blur-sm transition-colors hover:border-white/20 hover:text-foreground"
            >
              {t.hero.learnMore}
            </Link>
          </div>

          {/* Stats */}
          <Reveal className="reveal-stagger mt-20 grid grid-cols-3 gap-4 md:gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="animated-underline text-4xl font-bold text-emerald-400 md:text-5xl">1</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.hero.statFreeCourse}</p>
            </div>
            <div>
              <p className="animated-underline text-4xl font-bold gradient-text-animated md:text-5xl">97</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.hero.statInteractiveChapters}</p>
            </div>
            <div>
              <p className="animated-underline text-4xl font-bold gradient-text-animated md:text-5xl">5</p>
              <p className="mt-2 text-sm text-muted-foreground">{t.hero.statCourses}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
