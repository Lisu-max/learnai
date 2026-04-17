"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, BookOpen } from "lucide-react";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function CourseError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("[CourseError]", error.message, error.digest);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10">
        <AlertTriangle className="h-8 w-8 text-red-400" />
      </div>
      <h1 className="mb-2 text-2xl font-bold">Erreur de chargement</h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        Impossible de charger cette formation. Réessayez ou parcourez les autres cours.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-accent"
        >
          <RefreshCw className="h-4 w-4" />
          Réessayer
        </button>
        <Link
          href="/cours"
          className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-purple-700"
        >
          <BookOpen className="h-4 w-4" />
          Toutes les formations
        </Link>
      </div>
      {error.digest && (
        <p className="mt-6 text-xs text-muted-foreground">Référence: {error.digest}</p>
      )}
    </div>
  );
}
