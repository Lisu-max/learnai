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
        <p className="mb-6 text-sm text-muted-foreground">Dernière mise à jour : 23 mars 2026</p>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">1. Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les ventes de formations numériques
              au format PDF proposées sur le site LearnAI.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">2. Produits</h2>
            <p>
              LearnAI propose des guides pratiques au format PDF sur l&apos;intelligence artificielle.
              Chaque formation est décrite sur sa page dédiée avec le nombre exact de pages, de chapitres,
              le niveau et le prix. Le contenu est mis à jour régulièrement pour refléter les dernières
              évolutions de l&apos;IA.
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
              Le paiement est effectué en ligne via la plateforme sécurisée <strong>Stripe</strong>.
              Les moyens de paiement acceptés incluent les cartes bancaires (Visa, Mastercard, etc.).
              Le paiement est unique et donne un accès à vie à la formation achetée.
              Vos données bancaires ne transitent jamais par nos serveurs.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">5. Livraison</h2>
            <p>
              Les formations étant des produits numériques, la livraison est <strong>immédiate</strong> après
              confirmation du paiement. Le fichier PDF est disponible en téléchargement depuis votre
              espace compte et sur la page de confirmation.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">6. Garantie satisfait ou remboursé</h2>
            <p>
              Vous bénéficiez d&apos;une garantie <strong>satisfait ou remboursé de 30 jours</strong> à
              compter de la date d&apos;achat. Si la formation ne correspond pas à vos attentes,
              envoyez un simple email à{" "}
              <a href="mailto:milanechoux@gmail.com" className="text-purple-400 hover:text-purple-300">
                milanechoux@gmail.com
              </a>{" "}
              avec votre motif et vous serez remboursé intégralement, sans conditions.
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
            <h2 className="mb-3 text-lg font-semibold text-foreground">8. Mises à jour gratuites</h2>
            <p>
              Les formations achetées bénéficient de mises à jour gratuites. Lorsque le contenu est mis à jour
              (nouvelles versions des outils IA, nouveaux modèles), la nouvelle version du PDF est mise à disposition
              dans votre espace compte.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">9. Contact</h2>
            <p>
              Pour toute question :{" "}
              <a href="mailto:milanechoux@gmail.com" className="text-purple-400 hover:text-purple-300">
                milanechoux@gmail.com
              </a>
            </p>
          </section>
        </div>
      </section>
    </div>
  );
}
