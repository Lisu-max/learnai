import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function CTABanner() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-600/10 via-blue-600/5 to-purple-600/10" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/15 blur-[100px]" />

      <Reveal>
        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
            <Sparkles className="h-4 w-4" />
            Offre Pack Complet
          </div>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Prêt à maîtriser{" "}
            <span className="gradient-text-animated">l&apos;IA</span> ?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Accédez à toutes nos formations avec le Pack Complet et économisez plus de 50€.
          </p>
          <Link
            href="/cours/pack-complet-ia-2026"
            className="btn-gradient-glow inline-flex items-center gap-2 rounded-lg px-10 py-4 text-lg font-semibold text-white"
          >
            Découvrir le Pack Complet
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
