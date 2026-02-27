import type { Metadata } from "next";
import { CourseGrid } from "@/components/courses/course-grid";

export const metadata: Metadata = {
  title: "Nos Formations IA",
  description:
    "Découvrez toutes nos formations en intelligence artificielle. Du débutant à l'expert, trouvez le parcours qui vous correspond.",
};

export default function CoursPage() {
  return (
    <div className="bg-grid">
      <section className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-12 text-center animate-fade-in">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Nos <span className="gradient-text">Formations</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Des guides PDF complets pour maîtriser l&apos;intelligence artificielle,
            quel que soit votre niveau.
          </p>
        </div>

        <div className="animate-fade-in-delay-1">
          <CourseGrid />
        </div>
      </section>
    </div>
  );
}
