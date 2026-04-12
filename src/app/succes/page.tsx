import type { Metadata } from "next";
import { getStripe } from "@/lib/stripe";
import { getCourseBySlug } from "@/lib/courses";
import { createClient } from "@/lib/supabase/server";
import { getServerTranslation } from "@/lib/i18n/server";
import { CheckCircle2, ArrowLeft, User, PlayCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Merci !",
};

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ session_id?: string }>;
}) {
  const { session_id } = await searchParams;
  const t = await getServerTranslation();

  if (!session_id) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <p className="text-muted-foreground">{t.success.sessionNotFound}</p>
        <Link href="/cours" className="mt-4 inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300">
          <ArrowLeft className="h-4 w-4" /> {t.success.backToCourses}
        </Link>
      </div>
    );
  }

  let courseName = t.success.yourTraining;
  let courseSlug = "";
  let paid = false;

  try {
    const session = await getStripe().checkout.sessions.retrieve(session_id);
    paid = session.payment_status === "paid";
    courseSlug = (session.metadata?.courseSlug as string) || "";
    const course = getCourseBySlug(courseSlug);
    if (course) courseName = course.title;

    // Verify the session belongs to the connected user
    if (paid && session.metadata?.userId) {
      const supabase = await createClient();
      const { data: { user } } = await supabase.auth.getUser();
      if (!user || user.id !== session.metadata.userId) {
        paid = false; // Block replay by another user
      }
    }
    // Note: purchase insertion is handled by the Stripe webhook only
  } catch {
    console.error("Success page: failed to verify session", session_id);
  }

  if (!paid) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center">
        <p className="text-muted-foreground">{t.success.paymentNotVerified}</p>
        <Link href="/cours" className="mt-4 inline-flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300">
          <ArrowLeft className="h-4 w-4" /> {t.success.backToCourses}
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
          <h1 className="mb-4 text-3xl font-bold">{t.success.thankYou}</h1>
          <p className="mb-8 text-lg text-muted-foreground">
            {t.success.paymentConfirmed} <strong>{courseName}</strong> {t.success.paymentConfirmedSuffix}
          </p>
          <Link
            href={`/cours/${courseSlug}/chapitres`}
            className="btn-gradient inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-semibold text-white"
          >
            <PlayCircle className="h-5 w-5" />
            {t.success.downloadPdf}
          </Link>
          <div className="mt-6">
            <Link href="/compte" className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300">
              <User className="h-4 w-4" /> {t.account.title}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
