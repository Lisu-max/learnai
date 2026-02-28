import Link from "next/link";
import { courses } from "@/lib/courses";
import { CourseCard } from "@/components/courses/course-card";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function CoursePreview() {
  const featured = courses.slice(0, 3);

  return (
    <section id="formations" className="bg-secondary/30 py-20">
      <div className="section-divider mb-20" />

      <div className="mx-auto max-w-6xl px-4">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              Nos <span className="gradient-text-animated">Formations</span> Populaires
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Découvrez nos formations les plus demandées pour débuter ou approfondir
              vos compétences en IA.
            </p>
          </div>
        </Reveal>

        <Reveal className="reveal-stagger grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </Reveal>

        <Reveal>
          <div className="mt-10 text-center">
            <Link
              href="/cours"
              className="group inline-flex items-center gap-2 text-sm font-medium text-purple-400 transition-colors hover:text-purple-300"
            >
              Voir toutes les formations
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
