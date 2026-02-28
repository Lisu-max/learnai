import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Clock } from "lucide-react";
import type { Course } from "@/lib/courses";

const levelColors: Record<string, string> = {
  Débutant: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  Intermédiaire: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Avancé: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  Bundle: "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

export function CourseCard({ course }: { course: Course }) {
  return (
    <Link href={`/cours/${course.slug}`} className="group block">
      <div className="card-glass flex h-full flex-col p-6">
        {/* Expanding color accent bar */}
        <div
          className={`mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r transition-all duration-500 group-hover:w-full ${course.color}`}
        />

        <div className="mb-3 flex items-center gap-2">
          <Badge
            variant="outline"
            className={levelColors[course.level]}
          >
            {course.level}
          </Badge>
        </div>

        <h3 className="mb-2 text-lg font-bold">{course.title}</h3>
        <p className="mb-4 flex-1 text-sm text-muted-foreground">
          {course.description}
        </p>

        <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" />
            {course.pages} pages
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold gradient-text-animated">
            {course.priceFormatted}
          </span>
          <span className="flex items-center gap-1 text-sm text-muted-foreground transition-all group-hover:text-foreground">
            Voir le détail
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
