"use client";

import { courses } from "@/lib/courses";
import { CourseCard } from "@/components/courses/course-card";
import { Reveal } from "@/components/ui/reveal";
import {
  GraduationCap,
  Sparkles,
  CheckCircle2,
  BookOpen,
  ShoppingCart,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";
import Link from "next/link";

export default function CoursPage() {
  const { t } = useTranslation();
  const freeCourses = courses.filter((c) => c.tier === "free");
  const premiumCourses = courses.filter((c) => c.tier === "premium");
  const totalChapters = courses.reduce((sum, c) => sum + c.chapters, 0);

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="hero-orb-1 pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
          <div className="animate-fade-in mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
            <GraduationCap className="h-4 w-4" />
            {t.coursesPage.badge}
          </div>

          <h1 className="animate-fade-in-delay-1 mb-4 text-4xl font-bold md:text-5xl">
            Maîtrisez l&apos;IA{" "}
            <span className="gradient-text-animated">à votre rythme</span>
          </h1>

          <p className="animate-fade-in-delay-2 mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            1 formation gratuite pour débuter, 4 formations premium pour aller plus loin.
            Vidéos explicatives, textes et quiz interactifs.
          </p>

          <div className="animate-fade-in-delay-3 mx-auto grid max-w-lg grid-cols-3 gap-6">
            <div className="card-glass px-4 py-3 text-center">
              <p className="text-xl font-bold text-emerald-400">1</p>
              <p className="text-xs text-muted-foreground">Cours gratuit</p>
            </div>
            <div className="card-glass px-4 py-3 text-center">
              <p className="text-xl font-bold gradient-text-animated">{totalChapters}</p>
              <p className="text-xs text-muted-foreground">Chapitres</p>
            </div>
            <div className="card-glass px-4 py-3 text-center">
              <p className="text-xl font-bold gradient-text-animated">5</p>
              <p className="text-xs text-muted-foreground">Formations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free course */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="mb-8">
            <h2 className="mb-2 flex items-center gap-2 text-2xl font-bold">
              <BookOpen className="h-6 w-6 text-emerald-400" />
              Formation d&apos;introduction gratuite
            </h2>
            <p className="text-muted-foreground">
              Commencez immédiatement, sans inscription ni paiement.
            </p>
          </div>
        </Reveal>

        <Reveal className="reveal-stagger grid gap-6 sm:grid-cols-2">
          {freeCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </Reveal>
      </section>

      <div className="section-divider" />

      {/* Premium courses */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="mb-8">
            <h2 className="mb-2 flex items-center gap-2 text-2xl font-bold">
              <Sparkles className="h-6 w-6 text-purple-400" />
              Formations Premium
            </h2>
            <p className="text-muted-foreground">
              <span className="font-semibold text-purple-400">999€ par formation</span> — paiement unique, accès à vie.
            </p>
          </div>
        </Reveal>

        <Reveal className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {premiumCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </Reveal>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <Reveal>
            <div className="card-glass overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-purple-600 to-blue-600" />
              <div className="flex flex-col items-center gap-6 p-8 text-center md:p-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-500/10">
                  <ShoppingCart className="h-7 w-7 text-purple-400" />
                </div>
                <div>
                  <h2 className="mb-2 text-2xl font-bold">
                    Chaque formation à{" "}
                    <span className="gradient-text-animated">999€</span>
                  </h2>
                  <p className="mx-auto max-w-xl text-muted-foreground">
                    Achetez la ou les formations qui vous intéressent. Accès à vie, vidéos et textes
                    inclus ({premiumCourses.reduce((s, c) => s + c.chapters, 0)} chapitres au total).
                  </p>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <Link
                    href="#formations-premium"
                    className="btn-gradient inline-flex items-center gap-2 rounded-lg px-10 py-4 text-base font-semibold text-white"
                  >
                    <Sparkles className="h-5 w-5" />
                    Voir les formations
                  </Link>
                  <div className="flex flex-wrap justify-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      Paiement unique
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      Accès à vie
                    </span>
                    <span className="flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      Paiement sécurisé Stripe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
