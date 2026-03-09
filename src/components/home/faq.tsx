"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { useTranslation } from "@/lib/i18n/context";

export function FAQ() {
  const { t } = useTranslation();

  return (
    <section className="bg-secondary/30 py-20">
      <div className="section-divider mb-20" />

      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              {t.faq.title}{" "}
              <span className="gradient-text-animated">{t.faq.titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground">
              {t.faq.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {t.faq.items.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="card-glass border-none px-6"
              >
                <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-purple-400/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pl-8 text-sm text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
