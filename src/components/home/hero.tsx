import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-grid">
      {/* Animated gradient orbs */}
      <div className="hero-orb-1 pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="hero-orb-2 pointer-events-none absolute -top-20 left-1/4 h-[300px] w-[300px] rounded-full bg-blue-600/15 blur-[100px]" />
      <div className="hero-orb-3 pointer-events-none absolute top-40 right-1/4 h-[250px] w-[250px] rounded-full bg-cyan-500/10 blur-[100px]" />

      {/* Floating dots */}
      <span className="floating-dot top-[20%] left-[10%]" style={{ animationDelay: "0s" }} />
      <span className="floating-dot top-[60%] right-[15%]" style={{ animationDelay: "1.5s" }} />
      <span className="floating-dot top-[40%] left-[80%]" style={{ animationDelay: "3s" }} />
      <span className="floating-dot top-[80%] left-[25%]" style={{ animationDelay: "2s" }} />
      <span className="floating-dot top-[30%] right-[30%]" style={{ animationDelay: "0.8s" }} />

      <div className="relative mx-auto max-w-6xl px-4 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-1.5 text-sm text-purple-300">
            <Sparkles className="h-4 w-4" />
            Formations PDF Premium
          </div>

          <h1 className="animate-fade-in-delay-1 mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Maîtrisez{" "}
            <span className="gradient-text-animated">l&apos;Intelligence Artificielle</span>
          </h1>

          <p className="animate-fade-in-delay-2 mb-8 text-lg text-muted-foreground md:text-xl">
            Des guides complets et pratiques pour comprendre, utiliser et
            maîtriser l&apos;IA. Apprenez à votre rythme avec nos formations PDF
            conçues par des experts.
          </p>

          <div className="animate-fade-in-delay-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/cours"
              className="btn-gradient-glow inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-semibold text-white"
            >
              Découvrir les formations
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#formations"
              className="inline-flex items-center gap-2 rounded-lg border border-border/50 px-8 py-3.5 font-medium text-muted-foreground transition-colors hover:border-border hover:text-foreground"
            >
              En savoir plus
            </Link>
          </div>

          {/* Stats */}
          <Reveal className="reveal-stagger mt-16 grid grid-cols-3 gap-8 border-t border-border/50 pt-8">
            <div>
              <p className="animated-underline text-4xl font-bold gradient-text-animated md:text-5xl">6</p>
              <p className="mt-2 text-sm text-muted-foreground">Formations</p>
            </div>
            <div>
              <p className="animated-underline text-4xl font-bold gradient-text-animated md:text-5xl">715+</p>
              <p className="mt-2 text-sm text-muted-foreground">Pages de contenu</p>
            </div>
            <div>
              <p className="animated-underline text-4xl font-bold gradient-text-animated md:text-5xl">2k+</p>
              <p className="mt-2 text-sm text-muted-foreground">Étudiants</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
