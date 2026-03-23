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
        <p className="mb-6 text-sm text-muted-foreground">Dernière mise à jour : 23 mars 2026</p>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est LearnAI,
              joignable à l&apos;adresse :{" "}
              <a href="mailto:milanechoux@gmail.com" className="text-purple-400 hover:text-purple-300">
                milanechoux@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">2. Données collectées</h2>
            <p>Nous collectons uniquement les données nécessaires au service :</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Nom et prénom (lors de l&apos;inscription)</li>
              <li>Adresse email</li>
              <li>Historique des achats</li>
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
              <li>Vous informer des mises à jour de vos formations</li>
            </ul>
            <p className="mt-2">
              Nous n&apos;envoyons <strong>aucun email marketing</strong> non sollicité et ne revendons
              jamais vos données à des tiers.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">4. Sous-traitants</h2>
            <p>Nous faisons appel aux services suivants :</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li><strong>Supabase</strong> (UE) — Base de données et authentification</li>
              <li><strong>Stripe</strong> (certifié PCI DSS) — Traitement sécurisé des paiements</li>
              <li><strong>Vercel</strong> — Hébergement du site web</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">5. Cookies</h2>
            <p>
              Le site utilise <strong>uniquement des cookies techniques</strong> essentiels
              (authentification, session). Aucun cookie publicitaire, analytique ou de suivi
              n&apos;est déposé. Aucun consentement n&apos;est requis pour ces cookies techniques
              (exemption CNIL).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">6. Durée de conservation</h2>
            <p>
              Vos données sont conservées pendant toute la durée de votre compte.
              En cas de suppression, vos données sont effacées sous 30 jours,
              sauf obligation légale de conservation comptable (10 ans).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">7. Vos droits (RGPD)</h2>
            <p>Vous disposez des droits suivants :</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Accès, rectification et suppression de vos données</li>
              <li>Portabilité de vos données</li>
              <li>Opposition au traitement</li>
              <li>Retrait de votre consentement à tout moment</li>
            </ul>
            <p className="mt-2">
              Pour exercer ces droits :{" "}
              <a href="mailto:milanechoux@gmail.com" className="text-purple-400 hover:text-purple-300">
                milanechoux@gmail.com
              </a>
            </p>
            <p className="mt-2">
              En cas de litige, vous pouvez contacter la{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">
                CNIL
              </a>.
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
