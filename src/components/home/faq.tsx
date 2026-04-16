"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { useTranslation } from "@/lib/i18n/context";

// FAQ items hardcoded here so the text is present in the initial HTML for Googlebot
const faqItemsFr = [
  {
    question: "Comment accéder aux formations ?",
    answer:
      "Toutes nos formations sont accessibles directement sur le site, sans téléchargement. Après inscription (gratuite), vous accédez aux formations gratuites immédiatement. Pour les formations premium, un simple paiement unique suffit. Vous pouvez suivre les chapitres, regarder les vidéos et faire les quiz sur votre ordinateur, tablette ou smartphone — à votre rythme, sans limite de temps.",
  },
  {
    question: "Les formations sont-elles mises à jour ?",
    answer:
      "Oui, absolument. L'IA évolue très vite et nous mettons nos formations à jour régulièrement pour refléter les dernières avancées (nouveaux modèles, nouveaux outils, nouvelles techniques). Toutes les mises à jour sont incluses gratuitement et à vie pour tous les acheteurs. Vous ne payez qu'une seule fois et bénéficiez de toutes les améliorations futures.",
  },
  {
    question: "Quel niveau faut-il pour commencer ?",
    answer:
      "Aucun prérequis n'est nécessaire pour démarrer. Nous proposons des formations pour tous les niveaux : « L'IA de A à Z » et « L'IA au Quotidien » sont parfaites pour les débutants complets. Les formations Intermédiaires (Prompt Engineering, Maîtriser les Outils IA, Créer avec l'IA…) supposent une légère familiarité avec les outils numériques. Les formations Avancées (Data Science, IA Générative Avancée, Leadership IA…) s'adressent aux professionnels qui souhaitent aller plus loin.",
  },
  {
    question: "Comment fonctionne le paiement ?",
    answer:
      "Le paiement est entièrement sécurisé via Stripe, le leader mondial du paiement en ligne (utilisé par Amazon, Google, etc.). Vous payez une seule fois — pas d'abonnement, pas de frais cachés. Nous acceptons toutes les cartes bancaires (Visa, Mastercard, American Express), ainsi qu'Apple Pay et Google Pay. Le prix affiché est TTC (toutes taxes comprises). Vous recevez un reçu par email immédiatement après l'achat.",
  },
  {
    question: "Comment accéder à ma formation après l'achat ?",
    answer:
      "Votre accès est activé instantanément après la confirmation du paiement. Connectez-vous à votre espace personnel (section « Mon compte ») et retrouvez toutes vos formations débloquées. L'accès est à vie — vous pouvez reprendre votre formation n'importe quand, même des mois plus tard. Votre progression est sauvegardée automatiquement à chaque chapitre terminé.",
  },
  {
    question: "Qu'est-ce que le Pack Complet ?",
    answer:
      "Le Pack Complet IA 2026 regroupe la totalité de nos 17 formations dans un seul package à prix réduit. Au lieu de payer 9,99 € TTC par formation (soit 139,86 € pour 14 formations premium), vous accédez à tout pour 89,99 € TTC — une économie de près de 50 €. Vous bénéficiez également d'un accès prioritaire aux futures formations et mises à jour dès leur sortie.",
  },
  {
    question: "Existe-t-il un certificat de complétion ?",
    answer:
      "Oui ! À la fin de chaque formation, lorsque vous avez complété tous les chapitres et validé les quiz associés, vous recevez un certificat de complétion numérique nominatif. Ce certificat atteste de vos acquis et peut être partagé sur LinkedIn ou ajouté à votre portfolio professionnel.",
  },
  {
    question: "Y a-t-il une politique de remboursement ?",
    answer:
      "Nous offrons une garantie satisfait ou remboursé de 7 jours pour toutes les formations premium. Si vous n'êtes pas satisfait pour quelque raison que ce soit dans les 7 jours suivant votre achat, contactez-nous à support@learn-ai.fr et nous procédons au remboursement complet, sans questions posées.",
  },
];

const faqItemsEn = [
  {
    question: "How do I access the courses?",
    answer:
      "All our courses are accessible directly on the site — no download needed. After signing up (free), you can access free courses immediately. For premium courses, a single one-time payment unlocks lifetime access. You can follow chapters, watch videos and take quizzes on your computer, tablet or smartphone — at your own pace, with no time limit.",
  },
  {
    question: "Are the courses updated?",
    answer:
      "Yes, absolutely. AI evolves extremely fast and we regularly update our courses to reflect the latest advances (new models, new tools, new techniques). All updates are included free of charge and for life for all buyers. You pay once and benefit from all future improvements.",
  },
  {
    question: "What level do I need to get started?",
    answer:
      "No prerequisites are needed to start. We offer courses for all levels: 'AI from A to Z' and 'AI in Daily Life' are perfect for complete beginners. Intermediate courses (Prompt Engineering, Mastering AI Tools, Create with AI…) assume slight familiarity with digital tools. Advanced courses (Data Science, Advanced Generative AI, AI Leadership…) are aimed at professionals who want to go further.",
  },
  {
    question: "How does payment work?",
    answer:
      "Payment is fully secured via Stripe, the global leader in online payments (used by Amazon, Google, etc.). You pay once — no subscription, no hidden fees. We accept all major credit cards (Visa, Mastercard, American Express), as well as Apple Pay and Google Pay. Prices are inclusive of all taxes. You receive a receipt by email immediately after purchase.",
  },
  {
    question: "How do I access my course after purchase?",
    answer:
      "Your access is activated instantly after payment confirmation. Log in to your personal dashboard (in the 'My Account' section) and find all your unlocked courses. Access is for life — you can resume your course at any time, even months later. Your progress is saved automatically after each completed chapter.",
  },
  {
    question: "What is the Complete Pack?",
    answer:
      "The Complete AI Pack 2026 bundles all 17 courses into one reduced-price package. Instead of paying 9.99 € per course (139.86 € for 14 premium courses), you get everything for 89.99 € — saving nearly 50 €. You also get priority access to future courses and updates as soon as they are released.",
  },
  {
    question: "Is there a completion certificate?",
    answer:
      "Yes! At the end of each course, once you have completed all chapters and passed the associated quizzes, you receive a personalized digital completion certificate. This certificate validates your skills and can be shared on LinkedIn or added to your professional portfolio.",
  },
  {
    question: "Is there a refund policy?",
    answer:
      "We offer a 7-day money-back guarantee on all premium courses. If you are not satisfied for any reason within 7 days of your purchase, contact us at support@learn-ai.fr and we will issue a full refund — no questions asked.",
  },
];

export function FAQ() {
  const { locale } = useTranslation();
  const faqItems = locale === "en" ? faqItemsEn : faqItemsFr;
  const title = locale === "en" ? "Frequently Asked" : "Questions";
  const titleHighlight = locale === "en" ? "Questions" : "fréquentes";
  const subtitle =
    locale === "en"
      ? "Everything you need to know before getting started."
      : "Tout ce que vous devez savoir avant de commencer.";

  return (
    <section className="bg-secondary/30 py-20" aria-label={locale === "en" ? "Frequently asked questions" : "Questions fréquentes"}>
      <div className="section-divider mb-20" />

      <div className="mx-auto max-w-3xl px-4">
        <Reveal>
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              {title}{" "}
              <span className="gradient-text-animated">{titleHighlight}</span>
            </h2>
            <p className="text-muted-foreground">{subtitle}</p>
          </div>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqItems.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                id={`faq-item-${i}`}
                className="card-glass border-none px-6"
              >
                <AccordionTrigger
                  className="text-left text-sm font-medium hover:no-underline"
                  aria-controls={`faq-content-${i}`}
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-mono text-purple-400/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent
                  id={`faq-content-${i}`}
                  className="pl-8 text-sm text-muted-foreground"
                >
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
