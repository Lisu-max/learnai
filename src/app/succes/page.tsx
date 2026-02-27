import type { Metadata } from "next";
import { stripe } from "@/lib/stripe";
import { getCourseBySlug } from "@/lib/courses";
import { CheckCircle2, Download, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paiement réussi",
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;

  if (!session_id) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <p className="text-muted-foreground">Session de paiement introuvable.</p>
        <Link
          href="/cours"
          className="mt-4 inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux formations
        </Link>
      </div>
    );
  }

  let courseName = "votre formation";
  let courseSlug = "";
  let paid = false;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    paid = session.payment_status === "paid";
    courseSlug = (session.metadata?.courseSlug as string) || "";
    const course = getCourseBySlug(courseSlug);
    if (course) {
      courseName = course.title;
    }
  } catch {
    // Session invalid or Stripe error
  }

  if (!paid) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <p className="text-muted-foreground">
          Le paiement n&apos;a pas pu être vérifié. Si vous pensez qu&apos;il
          s&apos;agit d&apos;une erreur, contactez-nous.
        </p>
        <Link
          href="/cours"
          className="mt-4 inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour aux formations
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
            Votre paiement pour <strong>{courseName}</strong> a bien été
            confirmé. Vous pouvez télécharger votre formation ci-dessous.
          </p>

          <a
            href={`/pdfs/${courseSlug}.pdf`}
            download
            className="btn-gradient inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold text-white"
          >
            <Download className="h-5 w-5" />
            Télécharger le PDF
          </a>

          <div className="mt-8">
            <Link
              href="/cours"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Découvrir nos autres formations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
