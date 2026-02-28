import type { Metadata } from "next";
import Link from "next/link";
import { courses } from "@/lib/courses";
import { CourseCard } from "@/components/courses/course-card";
import { Reveal } from "@/components/ui/reveal";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  GraduationCap,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nos Formations IA",
  description:
    "Découvrez toutes nos formations en intelligence artificielle. Du débutant à l'expert, trouvez le parcours qui vous correspond.",
};

export default function CoursPage() {
  const bundle = courses.find((c) => c.level === "Bundle")!;
  const individualCourses = courses.filter((c) => c.level !== "Bundle");

  return (
    <div className="relative">
      {/* Hero banner */}
      <section className="relative overflow-hidden border-b border-border/50">
        <div className="hero-orb-1 pointer-events-none absolute -top-32 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="hero-orb-3 pointer-events-none absolute top-20 right-1/4 h-[200px] w-[200px] rounded-full bg-blue-600/10 blur-[100px]" />

        <span className="floating-dot top-[25%] left-[8%]" style={{ animationDelay: "0s" }} />
        <span className="floating-dot top-[60%] right-[12%]" style={{ animationDelay: "2s" }} />
        <span className="floating-dot top-[35%] right-[35%]" style={{ animationDelay: "1s" }} />

        <div className="relative mx-auto max-w-6xl px-4 py-16 text-center md:py-20">
          <div className="animate-fade-in mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
            <GraduationCap className="h-4 w-4" />
            6 formations disponibles
          </div>

          <h1 className="animate-fade-in-delay-1 mb-4 text-4xl font-bold md:text-5xl">
            Nos <span className="gradient-text-animated">Formations</span>
          </h1>

          <p className="animate-fade-in-delay-2 mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
            Des guides PDF complets pour maîtriser l&apos;intelligence artificielle,
            du débutant à l&apos;expert. Choisissez votre parcours.
          </p>

          {/* Stats bar */}
          <div className="animate-fade-in-delay-3 mx-auto grid max-w-lg grid-cols-3 gap-6">
            <div className="card-glass px-4 py-3 text-center">
              <p className="text-xl font-bold gradient-text-animated">715+</p>
              <p className="text-xs text-muted-foreground">Pages</p>
            </div>
            <div className="card-glass px-4 py-3 text-center">
              <p className="text-xl font-bold gradient-text-animated">97</p>
              <p className="text-xs text-muted-foreground">Chapitres</p>
            </div>
            <div className="card-glass px-4 py-3 text-center">
              <p className="text-xl font-bold gradient-text-animated">4</p>
              <p className="text-xs text-muted-foreground">Niveaux</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bundle highlight */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-purple-600/5" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[200px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[80px]" />

        <div className="relative mx-auto max-w-6xl px-4 py-14">
          <Reveal>
            <div className="card-glass overflow-hidden">
              <div className="h-1 w-full bg-gradient-to-r from-purple-600 to-blue-600" />
              <div className="flex flex-col items-center gap-8 p-8 md:flex-row md:p-10">
                {/* Left content */}
                <div className="flex-1">
                  <div className="mb-3 flex items-center gap-2">
                    <Badge variant="outline" className="bg-purple-500/10 text-purple-400 border-purple-500/20">
                      <Sparkles className="mr-1 h-3 w-3" />
                      Meilleure offre
                    </Badge>
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                      -50€
                    </Badge>
                  </div>
                  <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                    {bundle.title}
                  </h2>
                  <p className="mb-4 text-muted-foreground">
                    {bundle.description}
                  </p>
                  <ul className="mb-6 grid gap-2 sm:grid-cols-2">
                    {bundle.features.slice(0, 4).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/cours/${bundle.slug}`}
                    className="btn-gradient-glow inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-semibold text-white"
                  >
                    Découvrir le Pack Complet
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {/* Right price */}
                <div className="flex shrink-0 flex-col items-center text-center">
                  <p className="mb-1 text-sm text-muted-foreground line-through">139,95€</p>
                  <p className="text-5xl font-bold gradient-text-animated md:text-6xl">
                    {bundle.priceFormatted}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">Paiement unique</p>
                  <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                    <BookOpen className="h-3.5 w-3.5" />
                    {bundle.pages} pages · {bundle.chapters} chapitres
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* Individual courses */}
      <section className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="mb-10">
            <h2 className="mb-2 text-2xl font-bold">
              Formations <span className="gradient-text-animated">individuelles</span>
            </h2>
            <p className="text-muted-foreground">
              Choisissez la formation qui correspond à votre niveau et vos objectifs.
            </p>
          </div>
        </Reveal>

        <Reveal className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {individualCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </Reveal>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-border/50">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <Reveal>
            <p className="mb-2 text-lg font-semibold">
              Vous ne savez pas par où commencer ?
            </p>
            <p className="mb-6 text-muted-foreground">
              Le Pack Complet inclut toutes les formations et vous guide de débutant à expert.
            </p>
            <Link
              href={`/cours/${bundle.slug}`}
              className="group inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              Voir le Pack Complet — {bundle.priceFormatted}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
