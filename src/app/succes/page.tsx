import type { Metadata } from "next";
import { getStripe } from "@/lib/stripe";
import { getCourseBySlug } from "@/lib/courses";
import { createClient } from "@/lib/supabase/server";
import { CheckCircle2, ArrowRight, ArrowLeft, User, PlayCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bienvenue !",
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string; success?: string }>;
}) {
  const { session_id, success } = await searchParams;

  // Subscription success (from /api/stripe/checkout)
  if (success === "true") {
    return (
      <div className="bg-grid">
        <section className="mx-auto max-w-2xl px-4 py-24 text-center">
          <div className="animate-fade-in">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
              <CheckCircle2 className="h-10 w-10 text-emerald-400" />
            </div>
            <h1 className="mb-4 text-3xl font-bold">Bienvenue dans LearnAI Pro !</h1>
            <p className="mb-8 text-lg text-muted-foreground">
              Vous avez maintenant accès à toutes les formations premium.
              Commencez à apprendre dès maintenant.
            </p>
            <div className="flex flex-col items-center gap-3">
              <Link
                href="/cours"
                className="btn-gradient-glow inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold text-white"
              >
                <PlayCircle className="h-5 w-5" />
                Découvrir les formations
              </Link>
              <Link href="/compte" className="text-sm text-purple-400 hover:text-purple-300">
                Voir mon compte
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  }

  // One-time purchase success (legacy)
  if (!session_id) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <p className="text-muted-foreground">Session introuvable.</p>
        <Link href="/cours" className="mt-4 inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300">
          <ArrowLeft className="h-4 w-4" /> Retour aux formations
        </Link>
      </div>
    );
  }

  let courseName = "votre formation";
  let courseSlug = "";
  let paid = false;

  try {
    const session = await getStripe().checkout.sessions.retrieve(session_id);
    paid = session.payment_status === "paid";
    courseSlug = (session.metadata?.courseSlug as string) || "";
    const course = getCourseBySlug(courseSlug);
    if (course) courseName = course.title;

    if (paid && session.metadata?.userId) {
      const supabase = await createClient();
      await supabase.from("purchases").upsert(
        { user_id: session.metadata.userId, course_slug: courseSlug, stripe_session_id: session_id, amount_paid: session.amount_total || 0 },
        { onConflict: "user_id,course_slug" }
      );
    }
  } catch { /* ignore */ }

  if (!paid) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <p className="text-muted-foreground">Le paiement n&apos;a pas pu être vérifié.</p>
        <Link href="/cours" className="mt-4 inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300">
          <ArrowLeft className="h-4 w-4" /> Retour aux formations
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-grid">
      <section className="mx-auto max-w-2xl px-4 py-24 text-center">
        <div className="animate-fade-in">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10">
            <CheckCircle2 className="h-10 w-10 text-emerald-400" />
          </div>
          <h1 className="mb-4 text-3xl font-bold">Merci pour votre achat !</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Votre accès à <strong>{courseName}</strong> est confirmé.
          </p>
          <Link
            href={`/cours/${courseSlug}/chapitres`}
            className="btn-gradient inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold text-white"
          >
            <PlayCircle className="h-5 w-5" />
            Commencer la formation
          </Link>
          <div className="mt-6">
            <Link href="/compte" className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300">
              <User className="h-4 w-4" /> Mon compte
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
