"use client";

import Link from "next/link";
import { courses, getCourseBySlug } from "@/lib/courses";
import { CourseCard } from "@/components/courses/course-card";
import { BuyButton } from "@/components/courses/buy-button";
import { Badge } from "@/components/ui/badge";
import { usePurchase } from "@/hooks/usePurchase";
import { Reveal } from "@/components/ui/reveal";
import {
  BookOpen,
  Clock,
  CheckCircle2,
  ArrowLeft,
  Lock,
  Sparkles,
  PlayCircle,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n/context";

const levelColors: Record<string, string> = {
  Débutant: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Intermédiaire: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Avancé: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export function CourseDetail({ slug }: { slug: string }) {
  const course = getCourseBySlug(slug);
  const { t } = useTranslation();
  const { hasPurchased, loading: purchaseLoading } = usePurchase(slug);

  if (!course) return null;

  const isFree = course.tier === "free";
  const canAccess = isFree || hasPurchased;
  const otherCourses = courses.filter((c) => c.slug !== slug).slice(0, 3);

  return (
    <div className="bg-grid">
      <section className="mx-auto max-w-5xl px-4 py-12">
        <Link
          href="/cours"
          className="group mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Toutes les formations
        </Link>

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
                    GRATUIT
                  </Badge>
                ) : (
                  <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                    <Sparkles className="mr-1 h-3 w-3" />
                    PREMIUM
                  </Badge>
                )}
              </div>

              <h1 className="mb-4 text-3xl font-bold md:text-4xl">{course.title}</h1>
              <p className="mb-6 text-lg text-muted-foreground">{course.longDescription}</p>

              <div className="mb-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="h-4 w-4 text-purple-400" />
                  {course.chapters} chapitres
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-purple-400" />
                  {course.duration}
                </span>
              </div>
            </Reveal>

            {/* Features */}
            <Reveal>
              <div className="mb-8 rounded-xl border border-border/50 bg-card/50 p-6">
                <h2 className="mb-4 text-lg font-semibold">Ce que vous apprendrez</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Sidebar — Access card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              {/* Color bar */}
              <div className={`-mx-6 -mt-6 mb-6 h-2 rounded-t-xl bg-gradient-to-r ${course.color}`} />

              {isFree ? (
                <>
                  <div className="mb-4 text-center">
                    <p className="text-3xl font-bold text-emerald-400">Gratuit</p>
                    <p className="mt-1 text-sm text-muted-foreground">Accès immédiat, sans inscription</p>
                  </div>
                  <Link
                    href={`/cours/${slug}/chapitres`}
                    className="btn-gradient-glow flex w-full items-center justify-center gap-2 rounded-lg py-4 font-semibold text-white"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Commencer la formation
                  </Link>
                </>
              ) : !purchaseLoading && canAccess ? (
                <>
                  <div className="mb-4 text-center">
                    <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                      <Sparkles className="h-3 w-3" />
                      Formation débloquée
                    </div>
                    <p className="text-sm text-muted-foreground">Vous avez accès à cette formation</p>
                  </div>
                  <Link
                    href={`/cours/${slug}/chapitres`}
                    className="btn-gradient-glow flex w-full items-center justify-center gap-2 rounded-lg py-4 font-semibold text-white"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Commencer la formation
                  </Link>
                </>
              ) : (
                <>
                  <div className="mb-4 text-center">
                    <div className="mb-2 inline-flex items-center gap-1 rounded-full bg-purple-500/10 px-3 py-1 text-xs font-medium text-purple-400">
                      <Lock className="h-3 w-3" />
                      Formation Premium
                    </div>
                    <p className="mt-2 text-3xl font-bold gradient-text-animated">9,99€</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">par formation · paiement unique</p>
                  </div>
                  <BuyButton courseSlug={slug} priceFormatted="9,99€" />
                </>
              )}

              {/* Trust signals */}
              <div className="mt-6 space-y-2 border-t border-border/50 pt-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  {course.chapters} chapitres interactifs
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Vidéos et textes explicatifs
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                  Accès à vie — mises à jour incluses
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other courses */}
        <div className="mt-16">
          <h2 className="mb-6 text-xl font-bold">Découvrez aussi</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherCourses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
