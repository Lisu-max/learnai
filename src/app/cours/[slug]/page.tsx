import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { courses, getCourseBySlug } from "@/lib/courses";
import { BuyButton } from "@/components/courses/buy-button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  BookOpen,
  Clock,
  FileText,
  CheckCircle2,
  ArrowLeft,
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

  return (
    <div className="bg-grid">
      <section className="mx-auto max-w-4xl px-4 py-16">
        <Link
          href="/cours"
          className="mb-8 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux formations
        </Link>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Course details */}
          <div className="lg:col-span-3 animate-fade-in">
            <div className="mb-4 flex items-center gap-3">
              <div
                className={`h-2 w-16 rounded-full bg-gradient-to-r ${course.color}`}
              />
              <Badge variant="outline" className={levelColors[course.level]}>
                {course.level}
              </Badge>
            </div>

            <h1 className="mb-4 text-3xl font-bold md:text-4xl">
              {course.title}
            </h1>

            <p className="mb-6 text-lg text-muted-foreground">
              {course.longDescription}
            </p>

            <div className="mb-8 flex flex-wrap gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-purple-400" />
                {course.duration}
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="h-4 w-4 text-blue-400" />
                {course.chapters} chapitres
              </span>
              <span className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-cyan-400" />
                {course.pages} pages
              </span>
            </div>

            <Separator className="mb-8 bg-border/50" />

            <h2 className="mb-4 text-xl font-semibold">
              Ce que vous allez apprendre
            </h2>
            <ul className="space-y-3">
              {course.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-purple-400" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Purchase card */}
          <div className="lg:col-span-2 animate-fade-in-delay-1">
            <div className="card-gradient sticky top-24 p-6">
              <div className="mb-6 text-center">
                <span className="text-4xl font-bold gradient-text">
                  {course.priceFormatted}
                </span>
                <p className="mt-1 text-sm text-muted-foreground">
                  Paiement unique — Accès à vie
                </p>
              </div>

              <BuyButton
                courseSlug={course.slug}
                priceFormatted={course.priceFormatted}
              />

              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Téléchargement immédiat (PDF)
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Mises à jour gratuites
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                  Paiement sécurisé via Stripe
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
