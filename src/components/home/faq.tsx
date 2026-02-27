import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Dans quel format sont les formations ?",
    answer:
      "Toutes nos formations sont au format PDF, téléchargeables immédiatement après le paiement. Vous pouvez les lire sur votre ordinateur, tablette ou smartphone.",
  },
  {
    question: "Les formations sont-elles mises à jour ?",
    answer:
      "Oui ! L'IA évolue rapidement et nous mettons régulièrement à jour nos formations. Toutes les mises à jour sont gratuites et à vie pour les acheteurs.",
  },
  {
    question: "Quel niveau faut-il pour commencer ?",
    answer:
      "Nous proposons des formations pour tous les niveaux. \"L'IA de A à Z\" est parfaite pour les débutants, tandis que les formations intermédiaires et avancées s'adressent à ceux qui ont déjà des bases.",
  },
  {
    question: "Comment fonctionne le paiement ?",
    answer:
      "Le paiement est sécurisé via Stripe. Vous payez une seule fois et accédez à votre formation immédiatement. Nous acceptons les cartes bancaires (Visa, Mastercard, etc.).",
  },
  {
    question: "Puis-je obtenir un remboursement ?",
    answer:
      "Oui, nous offrons une garantie satisfait ou remboursé de 30 jours. Si la formation ne vous convient pas, contactez-nous pour un remboursement intégral.",
  },
  {
    question: "Qu'est-ce que le Pack Complet ?",
    answer:
      "Le Pack Complet IA 2026 regroupe nos 5 formations dans un seul package à prix réduit. Vous économisez plus de 50€ par rapport à l'achat séparé, avec en plus un accès prioritaire aux futures formations.",
  },
];

export function FAQ() {
  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Questions <span className="gradient-text">fréquentes</span>
          </h2>
          <p className="text-muted-foreground">
            Tout ce que vous devez savoir avant de commencer.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="card-gradient border-none px-6"
            >
              <AccordionTrigger className="text-left text-sm font-medium hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
