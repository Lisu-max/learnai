import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
};

export default function CGVPage() {
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

        <h1 className="mb-8 text-3xl font-bold">Conditions Générales de Vente</h1>
        <p className="mb-6 text-sm text-muted-foreground">Dernière mise à jour : 22 mars 2026</p>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">1. Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les ventes de formations numériques
              au format PDF proposées sur le site LearnAI (ci-après &quot;le Site&quot;), édité par LearnAI.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">2. Produits</h2>
            <p>
              LearnAI propose des formations numériques au format PDF portant sur l&apos;intelligence artificielle.
              Les produits sont décrits sur chaque page de formation avec leurs caractéristiques principales
              (nombre de pages, chapitres, niveau, prix).
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">3. Prix</h2>
            <p>
              Les prix sont indiqués en euros (EUR) TTC. LearnAI se réserve le droit de modifier ses prix
              à tout moment. Les formations sont facturées au prix en vigueur au moment de la commande.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">4. Commande et Paiement</h2>
            <p>
              Le paiement est effectué en ligne via la plateforme sécurisée Stripe. Les moyens de paiement
              acceptés sont les cartes bancaires (Visa, Mastercard, etc.). Le paiement est unique et donne
              un accès à vie à la formation achetée.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">5. Livraison</h2>
            <p>
              Les formations étant des produits numériques, la livraison est immédiate après confirmation
              du paiement. Le fichier PDF est disponible en téléchargement depuis votre espace compte.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">6. Droit de rétractation</h2>
            <p>
              Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation
              ne s&apos;applique pas aux contenus numériques fournis immédiatement après l&apos;achat.
              Toutefois, LearnAI offre une garantie satisfait ou remboursé de 30 jours. Si la formation
              ne vous convient pas, contactez-nous pour obtenir un remboursement intégral.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">7. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble des contenus des formations (textes, images, graphiques) est protégé par
              le droit d&apos;auteur. L&apos;achat d&apos;une formation confère un droit d&apos;utilisation
              personnel et non transférable. Toute reproduction, diffusion ou revente est strictement interdite.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">8. Mises à jour</h2>
            <p>
              Les formations achetées bénéficient de mises à jour gratuites à vie. Les nouvelles versions
              sont mises à disposition dans votre espace compte.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">9. Contact</h2>
            <p>
              Pour toute question relative aux présentes CGV, vous pouvez nous contacter à l&apos;adresse :
              contact@learnai.fr
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
