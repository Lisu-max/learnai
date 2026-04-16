"use client";

import Link from "next/link";
import { courses, getCourseBySlug, getCourseLocalized } from "@/lib/courses";
import { CourseCard } from "@/components/courses/course-card";
import { BuyButton } from "@/components/courses/buy-button";
import { Badge } from "@/components/ui/badge";
import { usePurchase } from "@/hooks/usePurchase";
import { Reveal } from "@/components/ui/reveal";
import {
  BookOpen,
  Clock,
  CheckCircle2,
  ChevronRight,
  Lock,
  Sparkles,
  PlayCircle,
  Award,
  ShieldCheck,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

const TESTIMONIALS = [
  {
    name: "Marie D.",
    role: "Chef de projet",
    quote:
      "Grâce à cette formation, j'ai automatisé 3h de tâches répétitives par semaine. Le ROI a été immédiat dès la première utilisation en réunion.",
    stars: 5,
  },
  {
    name: "Thomas L.",
    role: "Développeur",
    quote:
      "Les exercices pratiques sont excellents — on passe directement à l'action. J'ai intégré les techniques dans mon workflow dès le deuxième chapitre.",
    stars: 5,
  },
  {
    name: "Sophie R.",
    role: "Entrepreneure",
    quote:
      "J'ai utilisé ce que j'ai appris pour rédiger mes offres commerciales. Mes conversions ont augmenté de 40% en un mois. Clairement l'un des meilleurs investissements.",
    stars: 5,
  },
];

const levelColors: Record<string, string> = {
  Débutant: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Intermédiaire: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Avancé: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export function CourseDetail({ slug }: { slug: string }) {
  const course = getCourseBySlug(slug);
  const { t, locale } = useTranslation();
  const { hasPurchased, loading: purchaseLoading } = usePurchase(slug);

  if (!course) return null;

  const lc = getCourseLocalized(course, locale);
  const isFree = course.tier === "free";
  const canAccess = isFree || hasPurchased;
  const otherCourses = courses.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <div className="bg-grid">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <nav aria-label="Fil d'Ariane" className="mb-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors hover:text-foreground">
                {t.nav.home}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li>
              <Link href="/cours" className="transition-colors hover:text-foreground">
                {t.nav.courses}
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="h-3.5 w-3.5" />
            </li>
            <li aria-current="page" className="font-medium text-foreground truncate max-w-[200px] sm:max-w-none">
              {lc.title}
            </li>
          </ol>
        </nav>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Main content */}
          <div className="lg:col-span-2">
            <Reveal>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge
                  variant="outline"
                  className={levelColors[course.level] || ""}
                >
                  {course.level}
                </Badge>
                {isFree ? (
                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                    {t.courseDetail.free}
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                    <Sparkles className="mr-1 h-3 w-3" />
                    {t.courseDetail.premium}
                  </Badge>
                )}
              </div>

              <h1 className="mb-4 text-3xl font-bold md:text-4xl">{lc.title}</h1>
              <p className="mb-6 text-lg text-muted-foreground">{lc.longDescription}</p>

              <div className="mb-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-purple-400" />
                  {course.chapters} {t.courseDetail.chapters}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-purple-400" />
                  {course.duration}
                </span>
                {course.updatedAt && (
                  <span className="inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                    Mis à jour : {course.updatedAt}
                  </span>
                )}
              </div>
            </Reveal>

            {/* Features */}
            <Reveal>
              <div className="mb-8 rounded-xl border border-border/50 bg-card/50 p-6">
                <h2 className="mb-4 text-lg font-semibold">{t.courseDetail.whatYouLearnSimple}</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {lc.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* NEW-05 — Testimonials (premium courses only) */}
            {!isFree && (
              <Reveal>
                <div className="mb-8">
                  <h2 className="mb-4 text-lg font-semibold">Ce que disent nos apprenants</h2>
                  <div className="grid gap-4 sm:grid-cols-1">
                    {TESTIMONIALS.map((testimonial) => (
                      <div
                        key={testimonial.name}
                        className="rounded-xl border border-border/50 bg-card/50 p-5"
                      >
                        <div className="mb-3 flex items-center gap-0.5">
                          {Array.from({ length: testimonial.stars }).map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <div>
                          <p className="text-sm font-semibold">{testimonial.name}</p>
                          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>

          {/* Sidebar — Access card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              {/* Color bar */}
              <div className={`-mx-6 -mt-6 mb-6 h-2 rounded-t-xl bg-gradient-to-r ${course.color}`} />

              {isFree ? (
                <>
                  <div className="mb-4 text-center">
                    <p className="text-3xl font-bold text-emerald-400">{t.courseDetail.freePrice}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{t.courseDetail.freeAccessSubtitle}</p>
                  </div>
                  <Link
                    href={`/cours/${slug}/chapitres`}
                    className="btn-gradient-glow flex w-full items-center justify-center gap-2 rounded-lg py-4 font-semibold text-white"
                  >
                    <PlayCircle className="h-5 w-5" />
                    {t.courseDetail.startCourse}
                  </Link>
                </>
              ) : !purchaseLoading && canAccess ? (
                <>
                  <div className="mb-4 text-center">
                    <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                      <Sparkles className="h-3 w-3" />
                      {t.courseDetail.courseUnlocked}
                    </div>
                    <p className="text-sm text-muted-foreground">{t.courseDetail.youHaveAccess}</p>
                  </div>
                  <Link
                    href={`/cours/${slug}/chapitres`}
                    className="btn-gradient-glow flex w-full items-center justify-center gap-2 rounded-lg py-4 font-semibold text-white"
                  >
                    <PlayCircle className="h-5 w-5" />
                    {t.courseDetail.startCourse}
                  </Link>
                </>
              ) : (
                <>
                  <div className="mb-4 text-center">
                    <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                      <Lock className="h-3 w-3" />
                      {t.courseDetail.premiumCourse}
                    </div>
                    <p className="mt-2 text-3xl font-bold gradient-text-animated">9,99 € TTC</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{t.courseDetail.perCourseOneTime}</p>
                  </div>
                  <BuyButton courseSlug={slug} priceFormatted="9,99 € TTC" />

                  {/* CRO-01 — Guarantee badge */}
                  <div className="mt-3 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2.5 text-sm font-medium text-emerald-400">
                    <Shield className="h-4 w-4 shrink-0" />
                    Garantie 30 jours — satisfait ou remboursé
                  </div>
                </>
              )}

              {/* Trust signals */}
              <div className="mt-6 space-y-2 border-t border-border/50 pt-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  {course.chapters} {t.courseDetail.interactiveChapters}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  {t.courseDetail.videosAndTexts}
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  {t.courseDetail.lifetimeAccess}
                </div>
                {/* CONTENT-08 — Completion certificate */}
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Award className="h-3.5 w-3.5 text-amber-400" />
                  {locale === "en" ? "Completion certificate included" : "Certificat de complétion inclus"}
                </div>
                {/* CONTENT-09 — Stripe / SSL badge */}
                <div className="mt-3 flex items-center gap-2 rounded-lg border border-border/40 bg-muted/30 px-3 py-2 text-xs text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-400" />
                  {locale === "en" ? "Secure payment via Stripe — SSL encrypted" : "Paiement sécurisé Stripe — chiffrement SSL"}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other courses */}
        <div className="mt-16">
          <h2 className="mb-6 text-xl font-bold">{t.courseDetail.discoverMore}</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherCourses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>

        {/* Upsell — Pack Complet (premium courses only) */}
        {!isFree && (
          <div className="mt-10">
            <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 px-6 py-8 text-center">
              <div className="absolute inset-0 bg-grid opacity-30" />
              <div className="relative">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-purple-500/20 px-3 py-1 text-xs font-semibold text-purple-400">
                  <Sparkles className="h-3 w-3" />
                  Meilleure valeur
                </div>
                <h3 className="mb-2 text-xl font-bold md:text-2xl">
                  Économisez avec le Pack Complet
                </h3>
                <p className="mb-1 text-muted-foreground">
                  Toutes les formations pour{" "}
                  <span className="font-bold text-white">89,99 € TTC</span>{" "}
                  au lieu de{" "}
                  <span className="line-through text-muted-foreground/70">139,86 €</span>
                </p>
                <p className="mb-6 text-sm text-muted-foreground">
                  Accès illimité à tout le catalogue — une seule fois
                </p>
                <Link
                  href="/pack-complet"
                  className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-3 font-semibold text-white transition-opacity hover:opacity-90"
                >
                  Découvrir le Pack Complet
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
