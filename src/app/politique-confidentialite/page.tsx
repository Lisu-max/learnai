"use client";

import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/lib/i18n/context";

export default function PolitiqueConfidentialitePage() {
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
          {isFr ? "Politique de Confidentialité" : "Privacy Policy"}
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          {isFr ? "Dernière mise à jour : 16 avril 2026" : "Last updated: April 16, 2026"}
        </p>

        {isFr ? (
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">1. Responsable du traitement</h2>
              <p>
                Le responsable du traitement des données personnelles est :<br />
                <strong>{siteConfig.company.name}</strong><br />
                {siteConfig.company.address}<br />
                Délégué à la protection des données (DPO) :{" "}
                <a href={`mailto:${siteConfig.emails.legal}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.legal}
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">2. Données collectées</h2>
              <p>Nous collectons uniquement les données nécessaires au service :</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Nom et prénom (lors de l&apos;inscription)</li>
                <li>Adresse email</li>
                <li>Date de naissance</li>
                <li>Historique des achats</li>
                <li>Données de progression (chapitres complétés, résultats des quiz)</li>
              </ul>
              <p className="mt-2">
                Les données de paiement sont traitées directement par <strong>Stripe</strong> et ne transitent
                jamais par nos serveurs.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">3. Finalités du traitement</h2>
              <p>Vos données sont utilisées pour :</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Créer et gérer votre compte utilisateur</li>
                <li>Traiter vos commandes et vous donner accès aux formations</li>
                <li>Suivre votre progression dans les formations</li>
                <li>Vous informer des mises à jour de vos formations</li>
              </ul>
              <p className="mt-2">
                Nous n&apos;envoyons <strong>aucun email marketing</strong> non sollicité et ne revendons
                jamais vos données à des tiers.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">4. Base légale du traitement</h2>
              <p>
                Le traitement de vos données repose sur :<br />
                — L&apos;exécution du contrat (accès aux formations achetées)<br />
                — Votre consentement (création de compte)<br />
                — L&apos;intérêt légitime de {siteConfig.company.name} (amélioration du service)
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">5. Sous-traitants</h2>
              <p>Nous faisons appel aux services suivants :</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li><strong>Supabase</strong> (UE) — Base de données et authentification</li>
                <li><strong>Stripe</strong> (certifié PCI DSS) — Traitement sécurisé des paiements</li>
                <li><strong>Vercel</strong> (États-Unis) — Hébergement du site web</li>
              </ul>
              <p className="mt-2">
                Les transferts de données vers les États-Unis sont encadrés par les clauses contractuelles types
                approuvées par la Commission européenne.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">6. Cookies</h2>
              <p>
                Le site utilise <strong>uniquement des cookies techniques</strong> essentiels
                (authentification, session, préférence de langue). Aucun cookie publicitaire, analytique ou de suivi
                n&apos;est déposé. Aucun consentement n&apos;est requis pour ces cookies techniques
                (exemption CNIL).
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">Nom</th>
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">Domaine</th>
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">Finalité</th>
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">Type</th>
                      <th className="py-2 text-left font-semibold text-foreground">Durée</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    <tr>
                      <td className="py-2 pr-4 font-mono text-xs">sb-*</td>
                      <td className="py-2 pr-4">Supabase</td>
                      <td className="py-2 pr-4">Authentification JWT (session utilisateur)</td>
                      <td className="py-2 pr-4">Essentiel</td>
                      <td className="py-2">1 an</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-mono text-xs">cookie-consent</td>
                      <td className="py-2 pr-4">learn-ai.fr</td>
                      <td className="py-2 pr-4">Mémorisation des préférences cookies</td>
                      <td className="py-2 pr-4">Essentiel</td>
                      <td className="py-2">1 an</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-mono text-xs">_lang</td>
                      <td className="py-2 pr-4">learn-ai.fr</td>
                      <td className="py-2 pr-4">Préférence de langue (FR/EN)</td>
                      <td className="py-2 pr-4">Essentiel</td>
                      <td className="py-2">1 an</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">7. Durée de conservation</h2>
              <p>
                Vos données sont conservées pendant toute la durée de votre compte.
                En cas de suppression, vos données sont effacées sous 30 jours,
                sauf obligation légale de conservation comptable (10 ans pour les données de transaction).
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">8. Vos droits (RGPD)</h2>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD),
                vous disposez des droits suivants :
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Droit d&apos;accès à vos données personnelles</li>
                <li>Droit de rectification des données inexactes</li>
                <li>Droit à l&apos;effacement (droit à l&apos;oubli)</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d&apos;opposition au traitement</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit de retrait du consentement à tout moment</li>
              </ul>
              <p className="mt-2">
                Pour exercer ces droits, contactez-nous à :{" "}
                <a href={`mailto:${siteConfig.emails.legal}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.legal}
                </a>
              </p>
              <p className="mt-2">
                Nous nous engageons à répondre à toute demande dans un délai de 30 jours.
              </p>
              <p className="mt-2">
                En cas de litige, vous pouvez contacter la{" "}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                  CNIL
                </a>{" "}
                (Commission Nationale de l&apos;Informatique et des Libertés) ou l&apos;autorité de protection
                des données de votre pays de résidence.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">9. Sécurité</h2>
              <p>
                {siteConfig.company.name} met en oeuvre des mesures techniques et organisationnelles appropriées
                pour protéger vos données personnelles contre tout accès non autorisé, modification,
                divulgation ou destruction. Les communications sont chiffrées via TLS/SSL.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">10. Contact</h2>
              <p>
                Pour toute question relative à cette politique de confidentialité :{" "}
                <a href={`mailto:${siteConfig.emails.legal}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.legal}
                </a>
              </p>
            </section>
          </div>
        ) : (
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">1. Data Controller</h2>
              <p>
                The data controller for personal data is:<br />
                <strong>{siteConfig.company.name}</strong><br />
                {siteConfig.company.address}<br />
                Data Protection Officer (DPO):{" "}
                <a href={`mailto:${siteConfig.emails.legal}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.legal}
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">2. Data Collected</h2>
              <p>We collect only the data necessary for the service:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>First and last name (upon registration)</li>
                <li>Email address</li>
                <li>Date of birth</li>
                <li>Purchase history</li>
                <li>Progress data (completed chapters, quiz results)</li>
              </ul>
              <p className="mt-2">
                Payment data is processed directly by <strong>Stripe</strong> and never
                passes through our servers.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">3. Purpose of Processing</h2>
              <p>Your data is used to:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Create and manage your user account</li>
                <li>Process your orders and provide access to courses</li>
                <li>Track your progress through courses</li>
                <li>Notify you of updates to your courses</li>
              </ul>
              <p className="mt-2">
                We send <strong>no unsolicited marketing emails</strong> and never
                sell your data to third parties.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">4. Legal Basis for Processing</h2>
              <p>
                The processing of your data is based on:<br />
                — Performance of the contract (access to purchased courses)<br />
                — Your consent (account creation)<br />
                — Legitimate interest of {siteConfig.company.name} (service improvement)
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">5. Sub-processors</h2>
              <p>We use the following services:</p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li><strong>Supabase</strong> (EU) — Database and authentication</li>
                <li><strong>Stripe</strong> (PCI DSS certified) — Secure payment processing</li>
                <li><strong>Vercel</strong> (USA) — Website hosting</li>
              </ul>
              <p className="mt-2">
                Data transfers to the United States are governed by standard contractual clauses
                approved by the European Commission.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">6. Cookies</h2>
              <p>
                The site uses <strong>only essential technical cookies</strong>{" "}
                (authentication, session, language preference). No advertising, analytics, or tracking cookies
                are used. No consent is required for these technical cookies.
              </p>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border/50">
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">Name</th>
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">Domain</th>
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">Purpose</th>
                      <th className="py-2 pr-4 text-left font-semibold text-foreground">Type</th>
                      <th className="py-2 text-left font-semibold text-foreground">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/30">
                    <tr>
                      <td className="py-2 pr-4 font-mono text-xs">sb-*</td>
                      <td className="py-2 pr-4">Supabase</td>
                      <td className="py-2 pr-4">Auth JWT (user session)</td>
                      <td className="py-2 pr-4">Essential</td>
                      <td className="py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-mono text-xs">cookie-consent</td>
                      <td className="py-2 pr-4">learn-ai.fr</td>
                      <td className="py-2 pr-4">Cookie consent preferences</td>
                      <td className="py-2 pr-4">Essential</td>
                      <td className="py-2">1 year</td>
                    </tr>
                    <tr>
                      <td className="py-2 pr-4 font-mono text-xs">_lang</td>
                      <td className="py-2 pr-4">learn-ai.fr</td>
                      <td className="py-2 pr-4">Language preference (FR/EN)</td>
                      <td className="py-2 pr-4">Essential</td>
                      <td className="py-2">1 year</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">7. Data Retention</h2>
              <p>
                Your data is retained for the duration of your account.
                Upon deletion, your data is erased within 30 days,
                except where legal obligations require retention (10 years for transaction data).
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">8. Your Rights (GDPR)</h2>
              <p>
                In accordance with the General Data Protection Regulation (GDPR),
                you have the following rights:
              </p>
              <ul className="mt-2 list-disc space-y-1 pl-6">
                <li>Right of access to your personal data</li>
                <li>Right to rectification of inaccurate data</li>
                <li>Right to erasure (right to be forgotten)</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to restriction of processing</li>
                <li>Right to withdraw consent at any time</li>
              </ul>
              <p className="mt-2">
                To exercise these rights, contact us at:{" "}
                <a href={`mailto:${siteConfig.emails.legal}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.legal}
                </a>
              </p>
              <p className="mt-2">
                We are committed to responding to any request within 30 days.
              </p>
              <p className="mt-2">
                In case of a dispute, you may contact the{" "}
                <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                  CNIL
                </a>{" "}
                (French Data Protection Authority) or the data protection authority
                in your country of residence.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">9. Security</h2>
              <p>
                {siteConfig.company.name} implements appropriate technical and organizational measures
                to protect your personal data against unauthorized access, modification,
                disclosure, or destruction. Communications are encrypted via TLS/SSL.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">10. Contact</h2>
              <p>
                For any questions regarding this privacy policy:{" "}
                <a href={`mailto:${siteConfig.emails.legal}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.legal}
                </a>
              </p>
            </section>
          </div>
        )}
      </section>
    </div>
  );
}
