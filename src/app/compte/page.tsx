import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getCourseBySlug } from "@/lib/courses";
import { Download, BookOpen, User, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mon compte",
};

export default async function ComptePage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/connexion");
  }

  const { data: purchases } = await supabase
    .from("purchases")
    .select("*")
    .order("created_at", { ascending: false });

  const purchasedCourses = (purchases || []).map((p) => ({
    ...p,
    course: getCourseBySlug(p.course_slug),
  }));

  return (
    <div className="bg-grid">
      <section className="mx-auto max-w-4xl px-4 py-16">
        <div className="animate-fade-in">
          {/* Profile header */}
          <div className="mb-10 flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500">
              <User className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Mon compte</h1>
              <p className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-3.5 w-3.5" />
                {user.email}
              </p>
            </div>
          </div>

          {/* Purchased courses */}
          <div>
            <h2 className="mb-6 flex items-center gap-2 text-lg font-semibold">
              <BookOpen className="h-5 w-5 text-purple-400" />
              Mes formations
            </h2>

            {purchasedCourses.length === 0 ? (
              <div className="rounded-xl border border-border/50 bg-card/50 p-12 text-center backdrop-blur-sm">
                <BookOpen className="mx-auto mb-4 h-10 w-10 text-muted-foreground/50" />
                <p className="mb-2 text-muted-foreground">
                  Vous n&apos;avez pas encore de formation.
                </p>
                <Link
                  href="/cours"
                  className="btn-gradient mt-4 inline-block rounded-lg px-6 py-3 text-sm font-medium text-white"
                >
                  Découvrir nos formations
                </Link>
              </div>
            ) : (
              <div className="grid gap-4">
                {purchasedCourses.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl border border-border/50 bg-card/50 p-5 backdrop-blur-sm"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br ${item.course?.color || "from-purple-500 to-blue-500"}`}
                      >
                        <BookOpen className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">
                          {item.course?.title || item.course_slug}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Acheté le{" "}
                          {new Date(item.created_at).toLocaleDateString("fr-FR", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          })}
                        </p>
                      </div>
                    </div>
                    <a
                      href={`/pdfs/${item.course_slug}.pdf`}
                      download
                      className="flex items-center gap-2 rounded-lg bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-400 transition-colors hover:bg-purple-500/20"
                    >
                      <Download className="h-4 w-4" />
                      Télécharger
                    </a>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
