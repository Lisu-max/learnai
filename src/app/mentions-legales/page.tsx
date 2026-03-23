import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales",
};

export default function MentionsLegalesPage() {
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

        <h1 className="mb-8 text-3xl font-bold">Mentions Légales</h1>
        <p className="mb-6 text-sm text-muted-foreground">Dernière mise à jour : 23 mars 2026</p>

        <div className="prose prose-invert max-w-none space-y-6 text-muted-foreground">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">1. Éditeur du site</h2>
            <p>
              Le site <strong>LearnAI</strong> est un projet personnel de formation en intelligence artificielle.<br />
              Contact :{" "}
              <a href="mailto:milanechoux@gmail.com" className="text-purple-400 hover:text-purple-300">
                <Mail className="mr-1 inline h-3.5 w-3.5" />
                milanechoux@gmail.com
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
              L&apos;ensemble du contenu du site LearnAI (textes, images, logos, graphiques, formations PDF)
              est protégé par le droit d&apos;auteur et le droit de la propriété intellectuelle.
              Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
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
              du service (session, authentification). Aucun cookie publicitaire ou de suivi n&apos;est déposé.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">6. Limitation de responsabilité</h2>
            <p>
              LearnAI s&apos;efforce de fournir des informations exactes et à jour sur l&apos;intelligence artificielle.
              Le domaine de l&apos;IA évoluant très rapidement, certaines informations peuvent devenir obsolètes
              entre les mises à jour. LearnAI ne saurait être tenu responsable des résultats obtenus
              suite à l&apos;utilisation des informations contenues dans les formations.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-foreground">7. Contact</h2>
            <p>
              Pour toute question, suggestion ou demande de remboursement :{" "}
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
