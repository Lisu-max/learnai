import Link from "next/link";
import { Brain, Home, BookOpen } from "lucide-react";

export default function NotFound() {
  return (
    <div className="bg-grid">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-md flex-col items-center justify-center px-4 py-16 text-center">
        <div className="animate-fade-in">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 to-blue-500">
            <Brain className="h-9 w-9 text-white" />
          </div>

          <h1 className="mb-2 text-6xl font-bold gradient-text-animated">404</h1>
          <p className="mb-2 text-xl font-semibold">Page introuvable</p>
          <p className="mb-8 text-muted-foreground">
            La page que vous cherchez n&apos;existe pas ou a été déplacée.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="btn-gradient inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white"
            >
              <Home className="h-4 w-4" />
              Retour à l&apos;accueil
            </Link>
            <Link
              href="/cours"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border/50 px-6 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              <BookOpen className="h-4 w-4" />
              Voir les formations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
