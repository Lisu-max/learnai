import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="bg-grid">
      <section className="mx-auto max-w-3xl px-4 py-16">
        <Link
          href="/"
          className="group mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Retour à l&apos;accueil
        </Link>

        <h1 className="mb-8 text-3xl font-bold">Politique de Confidentialité</h1>
        <p className="mb-6 text-sm text-muted-foreground">Dernière mise à jour : 22 mars 2026</p>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est LearnAI,
              joignable à l&apos;adresse : contact@learnai.fr
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">2. Données collectées</h2>
            <p>Nous collectons les données suivantes :</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Nom et prénom (lors de l&apos;inscription)</li>
              <li>Adresse email</li>
              <li>Date de naissance</li>
              <li>Données de paiement (traitées directement par Stripe, non stockées sur nos serveurs)</li>
              <li>Historique des achats</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">3. Finalités du traitement</h2>
            <p>Vos données sont utilisées pour :</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>La création et la gestion de votre compte utilisateur</li>
              <li>Le traitement de vos commandes et la livraison des formations</li>
              <li>La communication relative à vos achats (confirmations, mises à jour)</li>
              <li>Le respect de nos obligations légales et comptables</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">4. Base légale</h2>
            <p>
              Le traitement de vos données repose sur l&apos;exécution du contrat (achat de formations),
              votre consentement (inscription) et nos obligations légales.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">5. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pendant toute la durée de votre compte.
              En cas de suppression de compte, vos données sont effacées dans un délai de 30 jours,
              sauf obligation légale de conservation (données comptables : 10 ans).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">6. Sous-traitants</h2>
            <p>Nous faisons appel aux sous-traitants suivants :</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li><strong>Supabase</strong> — Hébergement de la base de données et authentification</li>
              <li><strong>Stripe</strong> — Traitement des paiements</li>
              <li><strong>Vercel</strong> — Hébergement du site web</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">7. Cookies</h2>
            <p>
              Le site utilise des cookies techniques essentiels au fonctionnement du service
              (authentification, session). Aucun cookie publicitaire ou de suivi n&apos;est utilisé.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">8. Vos droits (RGPD)</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Droit d&apos;accès à vos données personnelles</li>
              <li>Droit de rectification</li>
              <li>Droit à l&apos;effacement (&quot;droit à l&apos;oubli&quot;)</li>
              <li>Droit à la portabilité des données</li>
              <li>Droit d&apos;opposition au traitement</li>
              <li>Droit de retirer votre consentement à tout moment</li>
            </ul>
            <p className="mt-2">
              Pour exercer ces droits, contactez-nous à : contact@learnai.fr
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">9. Réclamation</h2>
            <p>
              Si vous estimez que le traitement de vos données ne respecte pas la réglementation,
              vous pouvez introduire une réclamation auprès de la CNIL (www.cnil.fr).
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
