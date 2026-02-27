import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sophie L.",
    role: "Entrepreneure",
    content:
      "Le Pack Complet m'a permis d'intégrer l'IA dans mon business en quelques semaines. Le contenu est clair, pratique et directement applicable. Je recommande à 100% !",
    rating: 5,
  },
  {
    name: "Thomas M.",
    role: "Développeur",
    content:
      "La formation Prompt Engineering Pro est une pépite. J'ai complètement changé ma façon d'interagir avec les IA. Les résultats sont bluffants.",
    rating: 5,
  },
  {
    name: "Marie D.",
    role: "Directrice Marketing",
    content:
      "Maîtriser les Outils IA m'a fait gagner un temps considérable au quotidien. Les templates de prompts sont un vrai plus pour mon équipe.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Ce que disent nos <span className="gradient-text">étudiants</span>
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          Plus de 2 000 personnes ont déjà accéléré leur maîtrise de l&apos;IA
          avec nos formations.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.name} className="card-gradient p-6">
            <div className="mb-3 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="mb-4 text-sm text-muted-foreground">
              &ldquo;{testimonial.content}&rdquo;
            </p>
            <div>
              <p className="text-sm font-semibold">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">
                {testimonial.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
