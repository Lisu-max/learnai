import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { courses, getCourseBySlug } from "@/lib/courses";
import { CourseCard } from "@/components/courses/course-card";
import { BuyButton } from "@/components/courses/buy-button";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/ui/reveal";
import {
  BookOpen,
  Clock,
  FileText,
  CheckCircle2,
  ArrowLeft,
  Shield,
  Download,
  RefreshCw,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return {};
  return {
    title: course.title,
    description: course.description,
  };
}

const levelColors: Record<string, string> = {
  Débutant: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Intermédiaire: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Avancé: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Bundle: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) notFound();

  const otherCourses = courses
    .filter((c) => c.slug !== course.slug)
    .slice(0, 3);

  return (
    <div className="relative">
      {/* Hero banner with gradient background */}
      <section className="relative overflow-hidden border-b border-border/50">
        {/* Animated orbs */}
        <div className="hero-orb-1 pointer-events-none absolute -top-40 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="hero-orb-2 pointer-events-none absolute -top-20 right-1/4 h-[250px] w-[250px] rounded-full bg-blue-600/10 blur-[100px]" />

        <div className="relative mx-auto max-w-5xl px-4 pb-12 pt-8">
          <Link
            href="/cours"
            className="group mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Retour aux formations
          </Link>

          <div className="grid gap-10 lg:grid-cols-5">
            {/* Course info */}
            <div className="lg:col-span-3 animate-fade-in">
              <div className="mb-4 flex items-center gap-3">
                <div
                  className={`h-2 w-20 rounded-full bg-gradient-to-r ${course.color}`}
                />
                <Badge variant="outline" className={levelColors[course.level]}>
                  {course.level}
                </Badge>
              </div>

              <h1 className="mb-4 text-3xl font-bold md:text-5xl">
                {course.title}
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
                {course.longDescription}
              </p>

              {/* Stats pills */}
              <div className="flex flex-wrap gap-3">
                <div className="card-glass inline-flex items-center gap-2 px-4 py-2.5">
                  <Clock className="h-4 w-4 text-purple-400" />
                  <span className="text-sm font-medium">{course.duration}</span>
                </div>
                <div className="card-glass inline-flex items-center gap-2 px-4 py-2.5">
                  <FileText className="h-4 w-4 text-blue-400" />
                  <span className="text-sm font-medium">{course.chapters} chapitres</span>
                </div>
                <div className="card-glass inline-flex items-center gap-2 px-4 py-2.5">
                  <BookOpen className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm font-medium">{course.pages} pages</span>
                </div>
              </div>
            </div>

            {/* Purchase card */}
            <div className="lg:col-span-2 animate-fade-in-delay-1">
              <div className="card-glass sticky top-24 overflow-hidden">
                {/* Gradient top accent */}
                <div className={`h-1 w-full bg-gradient-to-r ${course.color}`} />

                <div className="p-6">
                  <div className="mb-6 text-center">
                    <span className="text-5xl font-bold gradient-text-animated">
                      {course.priceFormatted}
                    </span>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Paiement unique — Accès à vie
                    </p>
                  </div>

                  <BuyButton
                    courseSlug={course.slug}
                    priceFormatted={course.priceFormatted}
                  />

                  <div className="section-divider my-5" />

                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2.5">
                      <Download className="h-4 w-4 text-emerald-400" />
                      Téléchargement immédiat (PDF)
                    </li>
                    <li className="flex items-center gap-2.5">
                      <RefreshCw className="h-4 w-4 text-emerald-400" />
                      Mises à jour gratuites à vie
                    </li>
                    <li className="flex items-center gap-2.5">
                      <Shield className="h-4 w-4 text-emerald-400" />
                      Paiement sécurisé via Stripe
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      Garantie 30 jours satisfait ou remboursé
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="bg-secondary/30">
        <div className="mx-auto max-w-5xl px-4 py-16">
          <Reveal>
            <h2 className="mb-2 text-2xl font-bold">
              Ce que vous allez <span className="gradient-text-animated">apprendre</span>
            </h2>
            <p className="mb-8 text-muted-foreground">
              Tout le contenu inclus dans cette formation.
            </p>
          </Reveal>

          <Reveal className="reveal-stagger grid gap-4 sm:grid-cols-2">
            {course.features.map((feature, i) => (
              <div
                key={feature}
                className="card-glass flex items-start gap-4 p-5"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20">
                  <span className="text-xs font-bold text-purple-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-sm leading-relaxed text-muted-foreground">
                  {feature}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-y border-border/50">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <Reveal className="reveal-stagger grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-bold gradient-text-animated">{course.pages}+</p>
              <p className="mt-1 text-sm text-muted-foreground">Pages de contenu</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text-animated">{course.chapters}</p>
              <p className="mt-1 text-sm text-muted-foreground">Chapitres complets</p>
            </div>
            <div>
              <p className="text-3xl font-bold gradient-text-animated">PDF</p>
              <p className="mt-1 text-sm text-muted-foreground">Format universel</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Bundle CTA for non-bundle courses */}
      {course.level !== "Bundle" && (
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-600/5 via-blue-600/5 to-purple-600/5" />
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[200px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[80px]" />

          <div className="relative mx-auto max-w-5xl px-4 py-14">
            <Reveal>
              <div className="text-center">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1 text-sm text-purple-300">
                  <Sparkles className="h-3.5 w-3.5" />
                  Économisez plus de 50€
                </div>
                <h2 className="mb-3 text-2xl font-bold">
                  Envie d&apos;aller plus loin ?
                </h2>
                <p className="mb-6 text-muted-foreground">
                  Obtenez toutes nos formations avec le Pack Complet IA 2026.
                </p>
                <Link
                  href="/cours/pack-complet-ia-2026"
                  className="btn-gradient-glow inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-semibold text-white"
                >
                  Découvrir le Pack Complet — 89,99€
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* Related courses */}
      <section className="bg-secondary/30">
        <div className="section-divider" />
        <div className="mx-auto max-w-5xl px-4 py-16">
          <Reveal>
            <h2 className="mb-2 text-2xl font-bold">
              Autres <span className="gradient-text-animated">formations</span>
            </h2>
            <p className="mb-8 text-muted-foreground">
              Découvrez nos autres guides pour compléter votre parcours.
            </p>
          </Reveal>

          <Reveal className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {otherCourses.map((c) => (
              <CourseCard key={c.slug} course={c} />
            ))}
          </Reveal>
        </div>
      </section>
    </div>
  );
}
