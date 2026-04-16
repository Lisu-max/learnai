"use client";

import Link from "next/link";
import { ArrowLeft, Globe } from "lucide-react";
import { siteConfig } from "@/config/site";
import { useTranslation } from "@/lib/i18n/context";

export default function CGVPage() {
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
          {isFr ? "Conditions Générales de Vente" : "Terms of Sale"}
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          {isFr ? "Dernière mise à jour : 16 avril 2026" : "Last updated: April 16, 2026"}
        </p>

        {isFr ? (
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">1. Vendeur</h2>
              <p>
                Les formations numériques proposées sur le site <strong>{siteConfig.name}</strong> sont vendues par :<br />
                <strong>{siteConfig.company.name}</strong><br />
                {siteConfig.company.address}<br />
                Société constituée dans l&apos;État du Delaware, États-Unis.<br />
                Contact :{" "}
                <a href={`mailto:${siteConfig.emails.contact}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.contact}
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">2. Objet</h2>
              <p>
                Les présentes Conditions Générales de Vente (CGV) régissent les ventes de formations numériques
                en ligne proposées sur le site {siteConfig.name} par {siteConfig.company.name}.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">3. Produits</h2>
              <p>
                {siteConfig.company.name} propose des formations interactives en ligne sur l&apos;intelligence artificielle.
                Chaque formation est décrite sur sa page dédiée avec le nombre de chapitres,
                le niveau et le prix. Le contenu est mis à jour régulièrement pour refléter les dernières
                évolutions de l&apos;IA.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">4. Prix</h2>
              <p>
                Les prix sont indiqués en euros (EUR) TTC. {siteConfig.company.name} se réserve le droit de modifier ses prix
                à tout moment. Les formations sont facturées au prix en vigueur au moment de la commande.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">5. Commande et Paiement</h2>
              <p>
                Le paiement est effectué en ligne via la plateforme sécurisée <strong>Stripe</strong>.
                Les moyens de paiement acceptés incluent les cartes bancaires (Visa, Mastercard, etc.).
                Le paiement est unique et donne un accès à vie à la formation achetée.
                Vos données bancaires ne transitent jamais par nos serveurs.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">6. Livraison</h2>
              <p>
                Les formations étant des produits numériques, l&apos;accès est <strong>immédiat</strong> après
                confirmation du paiement. Vous pouvez accéder à votre formation depuis votre
                espace compte et sur la page de confirmation.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">7. Propriété intellectuelle</h2>
              <p>
                L&apos;achat d&apos;une formation confère un droit d&apos;utilisation personnel et non transférable.
                Toute reproduction, diffusion ou revente est strictement interdite.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">8. Droit de rétractation</h2>
              <p>
                Conformément à l&apos;article L. 221-18 du Code de la consommation, vous disposez d&apos;un délai de
                quatorze (14) jours calendaires à compter de la date d&apos;achat pour exercer votre droit de rétractation,
                sans avoir à justifier de motifs. Pour l&apos;exercer : envoyez votre demande à{" "}
                <a href="mailto:contact@learn-ai.fr" className="text-purple-400 hover:text-purple-300">
                  contact@learn-ai.fr
                </a>{" "}
                en indiquant votre numéro de commande.
              </p>
              <p className="mt-2">
                <strong>Exception :</strong> Le droit de rétractation ne peut être exercé une fois que vous avez commencé
                à accéder au contenu de la formation (conformément à l&apos;article L. 221-28, 13°).
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">9. Mises à jour gratuites</h2>
              <p>
                Les formations achetées bénéficient de mises à jour gratuites. Lorsque le contenu est mis à jour
                (nouvelles versions des outils IA, nouveaux modèles), le nouveau contenu est mis à disposition
                dans votre espace compte.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">10. Droit applicable et juridiction</h2>
              <p>
                Les présentes CGV sont régies par les lois de l&apos;État du Delaware, États-Unis.
                Tout litige sera soumis à la compétence exclusive des tribunaux du Delaware, États-Unis.
              </p>
              <p className="mt-2">
                <strong>Utilisateurs de l&apos;Union européenne :</strong> conformément au Règlement Général sur la
                Protection des Données (RGPD) et aux directives européennes de protection du consommateur,
                vos droits en matière de protection des données et de consommation restent pleinement applicables.
                Vous pouvez exercer vos droits en contactant{" "}
                <a href={`mailto:${siteConfig.emails.legal}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.legal}
                </a>.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">11. Contact</h2>
              <p>
                Pour toute question :{" "}
                <a href={`mailto:${siteConfig.emails.contact}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.contact}
                </a>
              </p>
              <p className="mt-2">
                Pour le support :{" "}
                <a href={`mailto:${siteConfig.emails.support}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.support}
                </a>
              </p>
            </section>
          </div>
        ) : (
          <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">1. Seller</h2>
              <p>
                The digital courses offered on the <strong>{siteConfig.name}</strong> website are sold by:<br />
                <strong>{siteConfig.company.name}</strong><br />
                {siteConfig.company.address}<br />
                A corporation incorporated in the State of Delaware, USA.<br />
                Contact:{" "}
                <a href={`mailto:${siteConfig.emails.contact}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.contact}
                </a>
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">2. Purpose</h2>
              <p>
                These Terms of Sale govern the sale of digital online courses
                offered on the {siteConfig.name} website by {siteConfig.company.name}.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">3. Products</h2>
              <p>
                {siteConfig.company.name} offers interactive online courses on artificial intelligence.
                Each course is described on its dedicated page with the number of chapters,
                level, and price. Content is regularly updated to reflect the latest
                developments in AI.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">4. Pricing</h2>
              <p>
                Prices are displayed in euros (EUR), inclusive of all applicable taxes. {siteConfig.company.name} reserves the right to modify prices
                at any time. Courses are billed at the price in effect at the time of order.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">5. Ordering and Payment</h2>
              <p>
                Payment is processed online via the secure <strong>Stripe</strong> platform.
                Accepted payment methods include credit cards (Visa, Mastercard, etc.).
                Payment is a one-time charge granting lifetime access to the purchased course.
                Your banking details never pass through our servers.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">6. Delivery</h2>
              <p>
                As courses are digital products, access is <strong>immediate</strong> upon
                payment confirmation. You can access your course from your
                account dashboard and on the confirmation page.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">7. Intellectual Property</h2>
              <p>
                Purchasing a course grants a personal, non-transferable right of use.
                Any reproduction, distribution, or resale is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">8. Right of Withdrawal</h2>
              <p>
                In accordance with Article L. 221-18 of the French Consumer Code, you have a period of
                fourteen (14) calendar days from the date of purchase to exercise your right of withdrawal,
                without having to justify your reasons. To exercise it: send your request to{" "}
                <a href="mailto:contact@learn-ai.fr" className="text-purple-400 hover:text-purple-300">
                  contact@learn-ai.fr
                </a>{" "}
                with your order number.
              </p>
              <p className="mt-2">
                <strong>Exception:</strong> The right of withdrawal cannot be exercised once you have started
                accessing the course content (in accordance with Article L. 221-28, 13°).
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">9. Free Updates</h2>
              <p>
                Purchased courses include free updates. When content is updated
                (new AI tool versions, new models), the updated content is made available
                in your account dashboard.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">10. Governing Law and Jurisdiction</h2>
              <p>
                These Terms of Sale are governed by the laws of the State of Delaware, USA.
                Any dispute shall be subject to the exclusive jurisdiction of the courts of Delaware, USA.
              </p>
              <p className="mt-2">
                <strong>European Union users:</strong> in accordance with the General Data Protection
                Regulation (GDPR) and EU consumer protection directives,
                your data protection and consumer rights remain fully applicable.
                You may exercise your rights by contacting{" "}
                <a href={`mailto:${siteConfig.emails.legal}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.legal}
                </a>.
              </p>
            </section>

            <section>
              <h2 className="mb-3 text-lg font-semibold text-foreground">11. Contact</h2>
              <p>
                For any questions:{" "}
                <a href={`mailto:${siteConfig.emails.contact}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.contact}
                </a>
              </p>
              <p className="mt-2">
                For support:{" "}
                <a href={`mailto:${siteConfig.emails.support}`} className="text-purple-400 hover:text-purple-300">
                  {siteConfig.emails.support}
                </a>
              </p>
            </section>
          </div>
        )}
      </section>
    </div>
  );
}
