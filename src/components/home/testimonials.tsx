"use client";

import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useTranslation } from "@/lib/i18n/context";

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="mx-auto max-w-6xl px-4 py-20" aria-label="Témoignages">
      <div className="section-divider mb-20" />

      <Reveal>
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            {t.testimonials.title}{" "}
            <span className="gradient-text-animated">{t.testimonials.titleHighlight}</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            {t.testimonials.subtitle}
          </p>
        </div>
      </Reveal>

      <Reveal className="reveal-stagger grid gap-6 md:grid-cols-3">
        {t.testimonials.items.map((testimonial) => (
          <div key={testimonial.name} className="card-glass relative overflow-hidden p-6">
            <span className="pointer-events-none absolute -top-2 right-4 select-none font-serif text-7xl text-purple-500/10">
              &ldquo;
            </span>

            <div className="mb-3 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="star-shimmer h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="relative mb-4 text-sm text-muted-foreground">
              &ldquo;{testimonial.content}&rdquo;
            </p>
            <div>
              <p className="text-sm font-semibold">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
