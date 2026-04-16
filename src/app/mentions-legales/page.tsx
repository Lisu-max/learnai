"use client";

import Link from "next/link";
import { ArrowLeft, Mail, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/lib/i18n/context";

export default function MentionsLegalesPage() {
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
          {isFr ? "Mentions Légales" : "Legal Notice"}
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          {isFr ? "Dernière mise à jour : 16 avril 2026" : "Last updated: April 16, 2026"}
        </p>

        {isFr ? (
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">1. Éditeur du site</h2>
              <p>
                Le site <strong>{siteConfig.name}</strong> est édité par :<br />
                <strong>{siteConfig.company.name}</strong>, société constituée dans l&apos;État du Delaware, États-Unis.<br />
                Siège social : {siteConfig.company.address}<br />
                Directeur de la publication : {siteConfig.company.name}<br />
                Contact :{" "}
                <a href={`mailto:${siteConfig.emails.contact}`} className="text-purple-400 hover:text-purple-300">
                  <Mail className="mr-1 inline h-3.5 w-3.5" />
                  {siteConfig.emails.contact}
                </a><br />
                Questions juridiques :{" "}
                <a href={`mailto:${siteConfig.emails.legal}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.legal}
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">2. Hébergement</h2>
              <p>
                Le site est hébergé par :<br />
                <strong>Vercel Inc.</strong><br />
                440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
                Site web : vercel.com
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">3. Propriété intellectuelle</h2>
              <p>
                L&apos;ensemble du contenu du site {siteConfig.name} (textes, images, logos, graphiques, formations)
                est la propriété exclusive de {siteConfig.company.name} et est protégé par le droit d&apos;auteur
                et le droit de la propriété intellectuelle.
                Toute reproduction, même partielle, est interdite sans autorisation écrite préalable de {siteConfig.company.name}.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">4. Données personnelles</h2>
              <p>
                Les informations concernant la collecte et le traitement des données personnelles sont
                détaillées dans notre{" "}
                <Link href="/politique-confidentialite" className="text-purple-400 hover:text-purple-300">
                  Politique de Confidentialité
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">5. Cookies</h2>
              <p>
                Le site utilise uniquement des cookies techniques essentiels au bon fonctionnement
                du service (session, authentification, préférence de langue). Aucun cookie publicitaire ou de suivi n&apos;est déposé.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">6. Limitation de responsabilité</h2>
              <p>
                {siteConfig.company.name} s&apos;efforce de fournir des informations exactes et à jour sur l&apos;intelligence artificielle.
                Le domaine de l&apos;IA évoluant très rapidement, certaines informations peuvent devenir obsolètes
                entre les mises à jour. {siteConfig.company.name} ne saurait être tenu responsable des résultats obtenus
                suite à l&apos;utilisation des informations contenues dans les formations.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">7. Droit applicable</h2>
              <p>
                Les présentes mentions légales sont régies par les lois de l&apos;État du Delaware, États-Unis.
                Pour les utilisateurs résidant dans l&apos;Union européenne, les dispositions impératives
                du droit de la consommation de leur pays de résidence restent applicables.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">8. Contact</h2>
              <p>
                Pour toute question, suggestion ou demande :{" "}
                <a href={`mailto:${siteConfig.emails.contact}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.contact}
                </a>
              </p>
            </section>
          </div>
        ) : (
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">1. Site Publisher</h2>
              <p>
                The website <strong>{siteConfig.name}</strong> is published by:<br />
                <strong>{siteConfig.company.name}</strong>, a corporation incorporated in the State of Delaware, USA.<br />
                Registered address: {siteConfig.company.address}<br />
                Director of publication: {siteConfig.company.name}<br />
                Contact:{" "}
                <a href={`mailto:${siteConfig.emails.contact}`} className="text-purple-400 hover:text-purple-300">
                  <Mail className="mr-1 inline h-3.5 w-3.5" />
                  {siteConfig.emails.contact}
                </a><br />
                Legal inquiries:{" "}
                <a href={`mailto:${siteConfig.emails.legal}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.legal}
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">2. Hosting</h2>
              <p>
                The site is hosted by:<br />
                <strong>Vercel Inc.</strong><br />
                440 N Barranca Ave #4133, Covina, CA 91723, USA<br />
                Website: vercel.com
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">3. Intellectual Property</h2>
              <p>
                All content on the {siteConfig.name} website (texts, images, logos, graphics, courses)
                is the exclusive property of {siteConfig.company.name} and is protected by copyright
                and intellectual property laws.
                Any reproduction, even partial, is prohibited without prior written authorization from {siteConfig.company.name}.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">4. Personal Data</h2>
              <p>
                Information regarding the collection and processing of personal data is detailed in our{" "}
                <Link href="/politique-confidentialite" className="text-purple-400 hover:text-purple-300">
                  Privacy Policy
                </Link>.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">5. Cookies</h2>
              <p>
                The site uses only essential technical cookies required for the proper functioning
                of the service (session, authentication, language preference). No advertising or tracking cookies are used.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">6. Limitation of Liability</h2>
              <p>
                {siteConfig.company.name} strives to provide accurate and up-to-date information on artificial intelligence.
                As the field of AI evolves rapidly, some information may become outdated
                between updates. {siteConfig.company.name} shall not be held liable for any outcomes resulting
                from the use of information contained in the courses.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">7. Governing Law</h2>
              <p>
                These legal notices are governed by the laws of the State of Delaware, USA.
                For users residing in the European Union, the mandatory provisions
                of consumer protection law in their country of residence remain applicable.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">8. Contact</h2>
              <p>
                For any questions, suggestions or requests:{" "}
                <a href={`mailto:${siteConfig.emails.contact}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.contact}
                </a>
              </p>
            </section>
          </div>
        )}
      </section>
    </div>
  );
}
