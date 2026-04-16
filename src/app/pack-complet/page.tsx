"use client";

import Link from "next/link";
import { courses } from "@/lib/courses";
import { CourseCard } from "@/components/courses/course-card";
import { Reveal } from "@/components/ui/reveal";
import {
  Sparkles,
  CheckCircle2,
  ShoppingCart,
  Tag,
  BookOpen,
  Clock,
  Zap,
  Shield,
  RefreshCw,
} from "lucide-react";

const PACK_PRICE = 89.99;
const INDIVIDUAL_PRICE = 9.99;

export default function PackCompletPage() {
  const premiumCourses = courses.filter((c) => c.tier === "premium");
  const freeCourses = courses.filter((c) => c.tier === "free");
  const allCourses = [...freeCourses, ...premiumCourses];

  const totalIndividual = premiumCourses.length * INDIVIDUAL_PRICE;
  const savings = totalIndividual - PACK_PRICE;
  const totalChapters = courses.reduce((sum, c) => sum + c.chapters, 0);
  const totalDuration = courses.reduce((sum, c) => {
    const match = c.duration.match(/(\d+(?:[.,]\d+)?)/);
    return sum + (match ? parseFloat(match[1].replace(",", ".")) : 0);
  }, 0);

  return (
    <div className="relative overflow-x-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <Reveal>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
              <Sparkles className="h-4 w-4" />
              Offre exclusive — Pack Complet IA 2026
            </div>
          </Reveal>

          <Reveal>
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-6xl">
              Toutes les{" "}
              <span className="gradient-text-animated">17 formations</span>
              <br />
              dans un seul pack
            </h1>
          </Reveal>

          <Reveal>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
              Du débutant à l&apos;expert — maîtrisez l&apos;IA dans tous ses aspects : outils, créativité, code, business, automatisation et bien plus.
            </p>
          </Reveal>

          {/* Pricing highlight */}
          <Reveal>
            <div className="mx-auto mb-10 max-w-sm rounded-2xl border border-purple-500/30 bg-card/60 p-8 backdrop-blur-sm">
              <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 px-3 py-1 text-xs font-semibold text-amber-400">
                <Tag className="h-3.5 w-3.5" />
                Économisez {savings.toFixed(0)}€
              </div>
              <div className="mt-3 flex items-end justify-center gap-3">
                <span className="text-lg text-muted-foreground line-through">
                  {totalIndividual.toFixed(2).replace(".", ",")}€
                </span>
                <span className="text-5xl font-extrabold gradient-text-animated">
                  {PACK_PRICE.toFixed(2).replace(".", ",")}€
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Paiement unique — Accès à vie
              </p>

              <Link
                href="/connexion?redirect=/pack-complet"
                className="btn-gradient-glow mt-6 flex w-full items-center justify-center gap-2 rounded-xl py-4 text-base font-bold text-white"
              >
                <ShoppingCart className="h-5 w-5" />
                Obtenir le Pack Complet
              </Link>

              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3.5 w-3.5 text-emerald-400" />
                  Paiement sécurisé via Stripe
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <RefreshCw className="h-3.5 w-3.5 text-purple-400" />
                  Mises à jour gratuites à vie
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Zap className="h-3.5 w-3.5 text-amber-400" />
                  Accès immédiat après paiement
                </div>
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal>
            <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="card-glass px-4 py-3 text-center">
                <p className="text-2xl font-bold gradient-text-animated">{allCourses.length}</p>
                <p className="text-xs text-muted-foreground">Formations</p>
              </div>
              <div className="card-glass px-4 py-3 text-center">
                <p className="text-2xl font-bold gradient-text-animated">{totalChapters}</p>
                <p className="text-xs text-muted-foreground">Chapitres</p>
              </div>
              <div className="card-glass px-4 py-3 text-center">
                <p className="text-2xl font-bold gradient-text-animated">{Math.round(totalDuration)}h</p>
                <p className="text-xs text-muted-foreground">De contenu</p>
              </div>
              <div className="card-glass px-4 py-3 text-center">
                <p className="text-2xl font-bold text-emerald-400">{freeCourses.length}</p>
                <p className="text-xs text-muted-foreground">Cours gratuits inclus</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* What's included */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="mb-4 text-center">
            <h2 className="text-3xl font-bold">
              Ce qui est{" "}
              <span className="gradient-text-animated">inclus</span>
            </h2>
            <p className="mt-2 text-muted-foreground">
              Les {freeCourses.length} formations gratuites + les {premiumCourses.length} formations premium, tout compris.
            </p>
          </div>
        </Reveal>

        {/* Free courses */}
        <Reveal>
          <div className="mt-10 mb-4 flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-emerald-400" />
            <h3 className="text-lg font-semibold">Formations gratuites incluses</h3>
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs font-medium text-emerald-400">
              {freeCourses.length} cours
            </span>
          </div>
        </Reveal>

        <Reveal className="reveal-stagger mb-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {freeCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </Reveal>

        {/* Premium courses */}
        <Reveal>
          <div className="mb-4 flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-purple-400" />
            <h3 className="text-lg font-semibold">Formations Premium</h3>
            <span className="rounded-full bg-purple-500/10 px-2 py-0.5 text-xs font-medium text-purple-400">
              {premiumCourses.length} cours
            </span>
          </div>
        </Reveal>

        <Reveal className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {premiumCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </Reveal>
      </section>

      <div className="section-divider" />

      {/* Value breakdown */}
      <section className="mx-auto max-w-4xl px-4 py-16">
        <Reveal>
          <h2 className="mb-8 text-center text-3xl font-bold">
            Pourquoi choisir le{" "}
            <span className="gradient-text-animated">Pack Complet ?</span>
          </h2>
        </Reveal>

        <Reveal>
          <div className="rounded-2xl border border-border/50 bg-card/40 p-6 md:p-8">
            <div className="space-y-3">
              {premiumCourses.map((course) => (
                <div key={course.slug} className="flex items-center justify-between py-2 border-b border-border/30 last:border-0">
                  <div className="flex items-center gap-3">
                    <div className={`h-2 w-2 shrink-0 rounded-full bg-gradient-to-r ${course.color}`} />
                    <span className="text-sm">{course.title}</span>
                    <span className="hidden sm:inline text-xs text-muted-foreground">
                      <Clock className="inline h-3 w-3 mr-0.5" />{course.duration} · {course.chapters} chapitres
                    </span>
                  </div>
                  <span className="shrink-0 text-sm font-semibold text-muted-foreground">
                    {INDIVIDUAL_PRICE.toFixed(2).replace(".", ",")}€
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-border/50 pt-4 space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Valeur totale ({premiumCourses.length} formations)</span>
                <span className="font-medium line-through text-muted-foreground">
                  {totalIndividual.toFixed(2).replace(".", ",")}€
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold">Pack Complet IA 2026</span>
                <span className="text-2xl font-extrabold gradient-text-animated">
                  {PACK_PRICE.toFixed(2).replace(".", ",")}€
                </span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-emerald-400 font-medium">Votre économie</span>
                <span className="font-bold text-emerald-400">− {savings.toFixed(2).replace(".", ",")}€</span>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Benefits */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: <Zap className="h-6 w-6 text-amber-400" />,
              title: "Accès immédiat",
              desc: "Commencez à apprendre dans la minute suivant votre paiement.",
            },
            {
              icon: <RefreshCw className="h-6 w-6 text-purple-400" />,
              title: "Mises à jour gratuites",
              desc: "L'IA évolue vite. Toutes les mises à jour incluses, à vie.",
            },
            {
              icon: <Shield className="h-6 w-6 text-emerald-400" />,
              title: "Paiement sécurisé",
              desc: "Transaction protégée par Stripe, le standard mondial.",
            },
            {
              icon: <BookOpen className="h-6 w-6 text-blue-400" />,
              title: "Tous formats",
              desc: "Vidéos, textes, quiz interactifs — apprenez comme vous voulez.",
            },
          ].map((item) => (
            <div key={item.title} className="card-glass p-5">
              <div className="mb-3">{item.icon}</div>
              <h3 className="mb-1 font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {/* Final CTA */}
      <section className="border-t border-border/50 bg-gradient-to-b from-background to-purple-950/10">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center">
          <Reveal>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-sm text-amber-300">
              <Tag className="h-4 w-4" />
              Économisez {savings.toFixed(0)}€ par rapport à l&apos;achat individuel
            </div>
            <h2 className="mt-4 mb-3 text-3xl font-bold md:text-4xl">
              Prêt à maîtriser{" "}
              <span className="gradient-text-animated">l&apos;IA</span> ?
            </h2>
            <p className="mb-8 text-muted-foreground">
              Rejoignez des milliers d&apos;apprenants qui ont transformé leur carrière avec nos formations.
            </p>

            <div className="mb-4 text-4xl font-extrabold gradient-text-animated">
              {PACK_PRICE.toFixed(2).replace(".", ",")}€
            </div>
            <p className="mb-6 text-sm text-muted-foreground">
              Au lieu de {totalIndividual.toFixed(2).replace(".", ",")}€ — paiement unique, accès à vie
            </p>

            <Link
              href="/connexion?redirect=/pack-complet"
              className="btn-gradient-glow inline-flex items-center gap-2 rounded-xl px-10 py-4 text-lg font-bold text-white"
            >
              <ShoppingCart className="h-5 w-5" />
              Obtenir le Pack Complet
            </Link>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
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
                Stripe sécurisé
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                Mises à jour gratuites
              </span>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Ou{" "}
              <Link href="/cours" className="text-purple-400 underline-offset-2 hover:underline">
                achetez les formations individuellement à 9,99€ chacune
              </Link>
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
