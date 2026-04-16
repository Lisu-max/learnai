"use client";

import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/lib/i18n/context";

export default function AccessibilitePage() {
  const { locale, setLocale } = useTranslation();
  const isFr = locale === "fr";

  return (
    <div className="bg-grid">
      <section className="mx-auto max-w-3xl px-4 py-16">
        <div className="mb-8 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {isFr ? "Retour à l\u2019accueil" : "Back to home"}
          </Link>
          <button
            onClick={() => setLocale(isFr ? "en" : "fr")}
            className="inline-flex items-center gap-1.5 rounded-md border border-border/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            <Globe className="h-3.5 w-3.5" />
            {isFr ? "English" : "Français"}
          </button>
        </div>

        <h1 className="mb-8 text-3xl font-bold">
          {isFr
            ? "Déclaration d\u2019accessibilité"
            : "Accessibility Statement"}
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          {isFr
            ? "Dernière mise à jour : 16 avril 2026"
            : "Last updated: April 16, 2026"}
        </p>

        {isFr ? (
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                1. État de conformité
              </h2>
              <p>
                Le site <strong>{siteConfig.name}</strong> (
                <a
                  href={siteConfig.url}
                  className="text-purple-400 hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.url}
                </a>
                ) est <strong>partiellement conforme</strong> au référentiel général
                d&apos;amélioration de l&apos;accessibilité (RGAA) version 4.1, en raison
                des non-conformités et des dérogations énumérées ci-dessous.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                2. Résultats des tests
              </h2>
              <p>
                L&apos;audit de conformité RGAA réalisé en interne révèle que :
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  <strong>Taux de conformité global :</strong> environ 60 %
                </li>
                <li>
                  Les principaux éléments accessibles incluent : structure sémantique des
                  pages, navigation clavier, contrastes des textes principaux, libellés
                  des formulaires.
                </li>
                <li>
                  Les principaux points à améliorer : certaines alternatives textuelles
                  aux images, composants interactifs avancés (lecteur vidéo, quiz).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                3. Non-conformités
              </h2>
              <p>
                Les contenus et fonctionnalités suivants ne sont pas encore accessibles :
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Certaines images décoratives ne disposent pas encore d&apos;attribut{" "}
                  <code className="text-purple-300">alt</code> vide explicite.
                </li>
                <li>
                  Certains composants interactifs (quiz, progression) peuvent ne pas être
                  pleinement utilisables via un lecteur d&apos;écran.
                </li>
                <li>
                  Les vidéos intégrées ne disposent pas encore de sous-titres.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                4. Technologies utilisées
              </h2>
              <p>
                L&apos;accessibilité du site repose sur les technologies suivantes :
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>HTML5</li>
                <li>CSS (Tailwind CSS)</li>
                <li>JavaScript (React / Next.js)</li>
                <li>WAI-ARIA</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                5. Environnements de test
              </h2>
              <p>
                Les vérifications d&apos;accessibilité ont été effectuées avec les
                outils et navigateurs suivants :
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Navigateur : Chrome (dernière version), Firefox (dernière version)</li>
                <li>
                  Lecteur d&apos;écran : NVDA (Windows), VoiceOver (macOS / iOS)
                </li>
                <li>Outil d&apos;analyse : axe DevTools, Lighthouse</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                6. Amélioration et contact
              </h2>
              <p>
                Si vous rencontrez une difficulté d&apos;accès à un contenu ou une
                fonctionnalité du site, vous pouvez nous contacter :
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Par email :{" "}
                  <a
                    href={`mailto:${siteConfig.emails.contact}`}
                    className="text-purple-400 hover:text-purple-300"
                  >
                    {siteConfig.emails.contact}
                  </a>
                </li>
              </ul>
              <p className="mt-2">
                Nous nous engageons à répondre dans un délai de 5 jours ouvrés et à
                proposer une alternative d&apos;accès au contenu concerné si nécessaire.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                7. Voie de recours
              </h2>
              <p>
                Si vous n&apos;obtenez pas de réponse satisfaisante, vous pouvez
                contacter le{" "}
                <a
                  href="https://www.defenseurdesdroits.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  Défenseur des droits
                </a>{" "}
                (pour les utilisateurs en France) ou l&apos;autorité nationale compétente
                de votre pays de résidence.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                8. Établissement de la présente déclaration
              </h2>
              <p>
                Cette déclaration a été établie le <strong>16 avril 2026</strong> par{" "}
                <strong>{siteConfig.company.name}</strong> sur la base d&apos;une
                auto-évaluation.
              </p>
            </section>
          </div>
        ) : (
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                1. Compliance Status
              </h2>
              <p>
                The website <strong>{siteConfig.name}</strong> (
                <a
                  href={siteConfig.url}
                  className="text-purple-400 hover:text-purple-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.url}
                </a>
                ) is <strong>partially compliant</strong> with the French RGAA (General
                Reference Framework for Improving Accessibility) version 4.1, due to the
                non-conformities and exemptions listed below.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                2. Test Results
              </h2>
              <p>The internal RGAA compliance audit reveals that:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  <strong>Overall compliance rate:</strong> approximately 60%
                </li>
                <li>
                  Main accessible elements include: semantic page structure, keyboard
                  navigation, text contrast, form labels.
                </li>
                <li>
                  Main areas for improvement: some image text alternatives, advanced
                  interactive components (video player, quizzes).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                3. Non-conformities
              </h2>
              <p>
                The following content and features are not yet fully accessible:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  Some decorative images do not yet have an explicit empty{" "}
                  <code className="text-purple-300">alt</code> attribute.
                </li>
                <li>
                  Some interactive components (quiz, progress) may not be fully usable
                  via a screen reader.
                </li>
                <li>Embedded videos do not yet have subtitles.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                4. Technologies Used
              </h2>
              <p>
                The site&apos;s accessibility relies on the following technologies:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>HTML5</li>
                <li>CSS (Tailwind CSS)</li>
                <li>JavaScript (React / Next.js)</li>
                <li>WAI-ARIA</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                5. Test Environments
              </h2>
              <p>
                Accessibility checks were performed with the following tools and browsers:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Browser: Chrome (latest), Firefox (latest)</li>
                <li>Screen reader: NVDA (Windows), VoiceOver (macOS / iOS)</li>
                <li>Analysis tools: axe DevTools, Lighthouse</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                6. Improvement and Contact
              </h2>
              <p>
                If you encounter any difficulty accessing content or a feature of this
                site, please contact us:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>
                  By email:{" "}
                  <a
                    href={`mailto:${siteConfig.emails.contact}`}
                    className="text-purple-400 hover:text-purple-300"
                  >
                    {siteConfig.emails.contact}
                  </a>
                </li>
              </ul>
              <p className="mt-2">
                We commit to responding within 5 business days and to providing an
                alternative means of accessing the relevant content if necessary.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                7. Recourse
              </h2>
              <p>
                If you do not receive a satisfactory response, you may contact the{" "}
                <a
                  href="https://www.defenseurdesdroits.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300"
                >
                  Défenseur des droits
                </a>{" "}
                (for users in France) or the relevant national authority in your country
                of residence.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">
                8. Establishment of this Declaration
              </h2>
              <p>
                This statement was established on <strong>April 16, 2026</strong> by{" "}
                <strong>{siteConfig.company.name}</strong> based on a self-assessment.
              </p>
            </section>
          </div>
        )}
      </section>
    </div>
  );
}
