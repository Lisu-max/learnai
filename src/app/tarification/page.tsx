import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Sparkles, PlayCircle, Package, ShieldCheck, Award, Zap } from "lucide-react";
import { courses } from "@/lib/courses";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Tarification — Formations IA | LearnAI",
  description:
    "Découvrez nos tarifs : 3 formations gratuites pour débuter et 14 formations premium à 9,99 € TTC chacune. Pack Complet IA 2026 à 89,99 € TTC — économisez 49,87 €.",
  alternates: {
    canonical: `${siteConfig.url}/tarification`,
  },
  openGraph: {
    title: "Tarification — Formations IA | LearnAI",
    description:
      "3 formations gratuites + 14 formations premium à 9,99 € TTC. Pack Complet à 89,99 € TTC.",
    url: `${siteConfig.url}/tarification`,
  },
};

const freeCourses = courses.filter((c) => c.tier === "free");
const premiumCourses = courses.filter((c) => c.tier === "premium");

const PRICE_UNIT = 9.99;
const PRICE_BUNDLE = 89.99;
const TOTAL_INDIVIDUAL = PRICE_UNIT * premiumCourses.length; // 139.86
const SAVINGS = +(TOTAL_INDIVIDUAL - PRICE_BUNDLE).toFixed(2); // 49.87

function formatPrice(price: number, decimals = 2) {
  return price.toFixed(decimals).replace(".", ",") + " € TTC";
}

export default function TarificationPage() {
  return (
    <div className="bg-grid min-h-screen">
      <section className="mx-auto max-w-5xl px-4 py-16">
        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm font-medium text-purple-400">
            <Sparkles className="h-3.5 w-3.5" />
            Tarifs clairs et sans surprise
          </span>
          <h1 className="mb-4 mt-4 text-4xl font-bold md:text-5xl">
            Des prix{" "}
            <span className="gradient-text-animated">transparents</span>
          </h1>
          <p className="mx-auto max-w-xl text-muted-foreground">
            3 formations gratuites pour démarrer, 14 formations premium pour aller plus loin.
            Paiement unique, accès à vie. Tous les prix sont indiqués TTC.
          </p>
        </div>

        {/* Comparison table */}
        <div className="mb-12 overflow-hidden rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm">
          {/* Table header */}
          <div className="grid grid-cols-3 border-b border-border/50 bg-muted/30 px-6 py-4 text-sm font-semibold text-muted-foreground">
            <span>Formation</span>
            <span className="text-center">Niveau</span>
            <span className="text-right">Prix TTC</span>
          </div>

          {/* Free courses section */}
          <div className="border-b border-border/50 bg-emerald-500/5 px-6 py-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <PlayCircle className="h-3.5 w-3.5" />
              Formations gratuites — {freeCourses.length} cours
            </div>
          </div>
          {freeCourses.map((course, i) => (
            <div
              key={course.slug}
              className={`grid grid-cols-3 items-center px-6 py-4 text-sm transition-colors hover:bg-muted/20 ${
                i < freeCourses.length - 1 ? "border-b border-border/30" : ""
              }`}
            >
              <Link
                href={`/cours/${course.slug}`}
                className="font-medium hover:text-purple-400 transition-colors"
              >
                {course.title}
              </Link>
              <span className="text-center text-xs text-muted-foreground">{course.level}</span>
              <span className="text-right font-semibold text-emerald-400">Gratuit</span>
            </div>
          ))}

          {/* Premium courses section */}
          <div className="border-y border-border/50 bg-purple-500/5 px-6 py-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-purple-400">
              <Sparkles className="h-3.5 w-3.5" />
              Formations premium — {premiumCourses.length} cours à {formatPrice(PRICE_UNIT)} chacune
            </div>
          </div>
          {premiumCourses.map((course, i) => (
            <div
              key={course.slug}
              className={`grid grid-cols-3 items-center px-6 py-4 text-sm transition-colors hover:bg-muted/20 ${
                i < premiumCourses.length - 1 ? "border-b border-border/30" : ""
              }`}
            >
              <Link
                href={`/cours/${course.slug}`}
                className="font-medium hover:text-purple-400 transition-colors"
              >
                {course.title}
              </Link>
              <span className="text-center text-xs text-muted-foreground">{course.level}</span>
              <span className="gradient-text-animated text-right font-semibold">
                {formatPrice(PRICE_UNIT)}
              </span>
            </div>
          ))}

          {/* Individual total row */}
          <div className="grid grid-cols-3 items-center border-t border-border/50 bg-muted/20 px-6 py-4 text-sm">
            <span className="font-semibold text-muted-foreground">
              Total formations premium individuelles
            </span>
            <span />
            <span className="text-right font-bold text-muted-foreground line-through">
              {formatPrice(TOTAL_INDIVIDUAL)}
            </span>
          </div>
        </div>

        {/* Pack Complet highlight card */}
        <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 via-purple-500/5 to-transparent p-8">
          {/* Best offer badge */}
          <div className="absolute right-6 top-6">
            <span className="rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
              Meilleure offre
            </span>
          </div>

          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
              <Package className="h-6 w-6 text-purple-400" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Pack Complet IA 2026</h2>
              <p className="text-sm text-muted-foreground">Toutes les {courses.length} formations incluses</p>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap items-end gap-4">
            <div>
              <p className="text-5xl font-bold gradient-text-animated">{formatPrice(PRICE_BUNDLE)}</p>
              <p className="mt-1 text-sm text-muted-foreground">paiement unique · accès à vie</p>
            </div>
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-center">
              <p className="text-xs text-emerald-400 font-medium uppercase tracking-wide">Vous économisez</p>
              <p className="text-2xl font-bold text-emerald-400">{formatPrice(SAVINGS)}</p>
            </div>
          </div>

          <ul className="mb-8 grid gap-3 sm:grid-cols-2">
            {[
              `${courses.length} formations complètes (${freeCourses.length} gratuites + ${premiumCourses.length} premium)`,
              "Accès à vie — mises à jour gratuites incluses",
              "Certificats de complétion pour chaque formation",
              "Vidéos, textes explicatifs et quiz interactifs",
              "Accès prioritaire aux nouvelles formations",
              "Paiement sécurisé Stripe — SSL",
            ].map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                {feat}
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/cours"
              className="btn-gradient-glow inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-semibold text-white"
            >
              <Zap className="h-5 w-5" />
              Accéder aux formations
            </Link>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              Paiement sécurisé Stripe — chiffrement SSL
            </div>
          </div>
        </div>

        {/* Trust row */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: <ShieldCheck className="h-5 w-5 text-emerald-400" />,
              title: "Paiement sécurisé",
              desc: "Stripe + SSL — vos données bancaires ne nous parviennent jamais.",
            },
            {
              icon: <Award className="h-5 w-5 text-amber-400" />,
              title: "Certificats inclus",
              desc: "Un certificat de complétion nominatif à partager sur LinkedIn.",
            },
            {
              icon: <Zap className="h-5 w-5 text-purple-400" />,
              title: "Accès immédiat",
              desc: "Votre formation est débloquée instantanément après le paiement.",
            },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="card-glass flex items-start gap-4 rounded-xl p-5"
            >
              <div className="mt-0.5 shrink-0">{icon}</div>
              <div>
                <p className="font-semibold text-sm">{title}</p>
                <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ teaser */}
        <p className="mt-10 text-center text-sm text-muted-foreground">
          Une question sur les tarifs ?{" "}
          <Link href="/#faq" className="text-purple-400 hover:text-purple-300 transition-colors">
            Consultez notre FAQ
          </Link>{" "}
          ou{" "}
          <a
            href={`mailto:${siteConfig.emails.contact}`}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            contactez-nous
          </a>
          .
        </p>
      </section>
    </div>
  );
}
