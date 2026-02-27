export interface Course {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  price: number; // in cents
  priceFormatted: string;
  level: "Débutant" | "Intermédiaire" | "Avancé" | "Bundle";
  duration: string;
  chapters: number;
  pages: number;
  features: string[];
  image: string;
  color: string; // gradient accent
}

export const courses: Course[] = [
  {
    slug: "ia-de-a-a-z",
    title: "L'IA de A à Z",
    description:
      "Découvrez les fondamentaux de l'intelligence artificielle. Le guide parfait pour débuter et comprendre les concepts clés.",
    longDescription:
      "Ce guide complet vous accompagne dans la découverte de l'intelligence artificielle, des bases théoriques aux applications pratiques. Apprenez les concepts fondamentaux du machine learning, du deep learning et des réseaux de neurones de manière accessible et progressive.",
    price: 999,
    priceFormatted: "9,99€",
    level: "Débutant",
    duration: "3h de lecture",
    chapters: 12,
    pages: 85,
    features: [
      "Les bases de l'IA expliquées simplement",
      "Machine Learning vs Deep Learning",
      "Les réseaux de neurones démystifiés",
      "Cas d'usage concrets dans chaque industrie",
      "Quiz et exercices pratiques",
    ],
    image: "/images/courses/ia-de-a-a-z.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "maitriser-outils-ia",
    title: "Maîtriser les Outils IA",
    description:
      "Apprenez à utiliser ChatGPT, Midjourney, Claude et les meilleurs outils IA pour booster votre productivité au quotidien.",
    longDescription:
      "Devenez un expert des outils d'IA les plus puissants du marché. Ce guide pratique vous enseigne comment tirer le meilleur parti de ChatGPT, Midjourney, Claude, Stable Diffusion et bien d'autres outils pour transformer votre façon de travailler.",
    price: 1999,
    priceFormatted: "19,99€",
    level: "Intermédiaire",
    duration: "5h de lecture",
    chapters: 18,
    pages: 120,
    features: [
      "Guide complet ChatGPT (GPT-4)",
      "Maîtriser Midjourney & DALL-E",
      "Claude, Gemini et les alternatives",
      "Automatisation avec Zapier + IA",
      "Templates et prompts prêts à l'emploi",
    ],
    image: "/images/courses/maitriser-outils-ia.jpg",
    color: "from-purple-500 to-pink-500",
  },
  {
    slug: "prompt-engineering-pro",
    title: "Prompt Engineering Pro",
    description:
      "Maîtrisez l'art du prompt engineering. Apprenez les techniques avancées pour obtenir des résultats exceptionnels avec l'IA.",
    longDescription:
      "Le prompt engineering est LA compétence clé pour exploiter pleinement le potentiel de l'IA. Apprenez les frameworks, techniques et stratégies utilisés par les experts pour créer des prompts qui génèrent des résultats précis et de haute qualité.",
    price: 2999,
    priceFormatted: "29,99€",
    level: "Intermédiaire",
    duration: "6h de lecture",
    chapters: 20,
    pages: 150,
    features: [
      "Frameworks de prompting avancés",
      "Chain-of-thought & Tree-of-thought",
      "Prompts pour le code, le texte et l'image",
      "Bibliothèque de 100+ prompts optimisés",
      "Études de cas réels",
    ],
    image: "/images/courses/prompt-engineering-pro.jpg",
    color: "from-violet-500 to-purple-500",
  },
  {
    slug: "ia-pour-votre-business",
    title: "L'IA pour votre Business",
    description:
      "Transformez votre entreprise grâce à l'IA. Stratégies concrètes pour automatiser, optimiser et innover dans votre business.",
    longDescription:
      "Ce guide stratégique est conçu pour les entrepreneurs et dirigeants qui veulent intégrer l'IA dans leur business. Découvrez comment automatiser vos processus, optimiser votre marketing, améliorer votre service client et prendre de meilleures décisions grâce à l'intelligence artificielle.",
    price: 4999,
    priceFormatted: "49,99€",
    level: "Avancé",
    duration: "8h de lecture",
    chapters: 25,
    pages: 200,
    features: [
      "Audit IA de votre entreprise",
      "Automatisation des processus métier",
      "IA pour le marketing & les ventes",
      "Chatbots et service client IA",
      "ROI et mesure de performance",
    ],
    image: "/images/courses/ia-pour-votre-business.jpg",
    color: "from-amber-500 to-orange-500",
  },
  {
    slug: "creer-avec-ia",
    title: "Créer avec l'IA",
    description:
      "Libérez votre créativité avec l'IA. Design, vidéo, musique, écriture : créez du contenu professionnel avec les outils IA.",
    longDescription:
      "Explorez le potentiel créatif de l'intelligence artificielle. Ce guide vous apprend à utiliser les meilleurs outils IA pour la création graphique, la génération vidéo, la composition musicale et la rédaction de contenu professionnel.",
    price: 2999,
    priceFormatted: "29,99€",
    level: "Intermédiaire",
    duration: "6h de lecture",
    chapters: 22,
    pages: 160,
    features: [
      "Création graphique avec Midjourney & DALL-E",
      "Génération vidéo avec Sora & Runway",
      "Musique IA avec Suno & Udio",
      "Rédaction assistée par IA",
      "Workflow créatif complet",
    ],
    image: "/images/courses/creer-avec-ia.jpg",
    color: "from-emerald-500 to-teal-500",
  },
  {
    slug: "pack-complet-ia-2026",
    title: "Pack Complet IA 2026",
    description:
      "Toutes nos formations réunies dans un pack exclusif à prix réduit. Le parcours complet pour devenir un expert de l'IA.",
    longDescription:
      "Le Pack Complet IA 2026 regroupe l'ensemble de nos 5 formations dans un seul package à prix avantageux. Économisez plus de 50€ et accédez à l'intégralité de notre contenu pour une maîtrise complète de l'intelligence artificielle.",
    price: 8999,
    priceFormatted: "89,99€",
    level: "Bundle",
    duration: "28h de lecture",
    chapters: 97,
    pages: 715,
    features: [
      "Les 5 formations incluses",
      "Économisez plus de 50€",
      "Mises à jour gratuites à vie",
      "Accès prioritaire aux nouveautés",
      "Support email dédié",
    ],
    image: "/images/courses/pack-complet-ia-2026.jpg",
    color: "from-purple-600 to-blue-600",
  },
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(priceInCents / 100);
}
