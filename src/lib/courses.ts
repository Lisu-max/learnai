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
      "Découvrez les fondamentaux de l'intelligence artificielle. Le guide parfait pour débuter et comprendre les concepts clés de l'IA en 2026.",
    longDescription:
      "Ce guide complet de 32 pages vous accompagne dans la découverte de l'intelligence artificielle. Vous apprendrez les concepts fondamentaux du machine learning, du deep learning, du NLP, de la vision par ordinateur, des modèles de langage (GPT-5.4, Claude 4.6, Gemini 3.1), de l'IA générative, des agents IA autonomes, et de l'éthique. Chaque chapitre inclut des points clés à retenir et des exemples concrets. Idéal pour les débutants complets.",
    price: 499,
    priceFormatted: "4,99€",
    level: "Débutant",
    duration: "1h30 de lecture",
    chapters: 12,
    pages: 32,
    features: [
      "Les bases de l'IA expliquées simplement",
      "Machine Learning, Deep Learning et réseaux de neurones",
      "GPT-5.4, Claude 4.6, Gemini 3.1 décryptés",
      "Les agents IA autonomes et le Computer Use",
      "Éthique, applications pratiques et avenir de l'IA",
    ],
    image: "/images/courses/ia-de-a-a-z.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "maitriser-outils-ia",
    title: "Maîtriser les Outils IA",
    description:
      "Guide pratique complet de tous les outils IA majeurs : ChatGPT, Claude, Gemini, Midjourney, Sora, Cursor et bien plus. Apprenez à choisir et utiliser le bon outil pour chaque tâche.",
    longDescription:
      "Ce guide professionnel de 27 pages couvre en détail les 18 outils IA incontournables de 2026. Chaque chapitre est un tutoriel complet : ChatGPT (GPT-5.4 Standard/Thinking/Pro), Claude 4.6 (Opus, Sonnet, Haiku + Claude Code), Gemini 3.1, Midjourney V7/V8, DALL-E 3, Stable Diffusion, Sora 2, ElevenLabs, Suno, GitHub Copilot, Cursor et ses modes Agent, NotebookLM, Perplexity AI, Make/Zapier, et les API d'IA. Vous apprendrez à construire votre propre workflow IA personnalisé.",
    price: 799,
    priceFormatted: "7,99€",
    level: "Intermédiaire",
    duration: "1h30 de lecture",
    chapters: 18,
    pages: 27,
    features: [
      "Guide complet ChatGPT GPT-5.4 et Claude 4.6",
      "Midjourney V7/V8 Alpha, DALL-E 3, Stable Diffusion",
      "Sora 2 (vidéo), ElevenLabs (voix), Suno (musique)",
      "Cursor, Copilot, Claude Code pour les développeurs",
      "Comparatifs détaillés et workflow IA personnalisé",
    ],
    image: "/images/courses/maitriser-outils-ia.jpg",
    color: "from-purple-500 to-pink-500",
  },
  {
    slug: "prompt-engineering-pro",
    title: "Prompt Engineering Pro",
    description:
      "Maîtrisez l'art du prompt engineering avec 20 techniques avancées. Du zero-shot au Chain-of-Thought, en passant par les system prompts et les agents IA.",
    longDescription:
      "Ce guide avancé de 25 pages vous enseigne les techniques professionnelles de prompt engineering. Vous maîtriserez la tokenisation, le zero-shot, le few-shot, le Chain-of-Thought, le Tree of Thought, le Step-Back Prompting, le framework CRISPE, les personas, les system prompts, le meta-prompting et le prompt chaining. Des chapitres dédiés au prompting pour le code, l'écriture créative, l'analyse de données, les images (Midjourney), la vidéo et la musique. Inclut 3 études de cas réels avec résultats mesurés.",
    price: 999,
    priceFormatted: "9,99€",
    level: "Intermédiaire",
    duration: "1h30 de lecture",
    chapters: 20,
    pages: 25,
    features: [
      "20 techniques : zero-shot, few-shot, CoT, ToT, CRISPE",
      "Prompts spécialisés : code, images, vidéo, musique",
      "System prompts et ingénierie d'agents IA",
      "Réduire les hallucinations et optimiser la précision",
      "3 études de cas réels avec ROI mesuré",
    ],
    image: "/images/courses/prompt-engineering-pro.jpg",
    color: "from-violet-500 to-purple-500",
  },
  {
    slug: "ia-pour-votre-business",
    title: "L'IA pour votre Business",
    description:
      "Stratégies concrètes pour intégrer l'IA dans votre entreprise. ROI, automatisation, marketing, ventes, RH, finance — avec un plan d'action en 90 jours.",
    longDescription:
      "Ce guide stratégique de 29 pages est conçu pour les entrepreneurs et dirigeants. Il couvre l'état du marché IA en 2026 (250B$+), l'audit IA de votre entreprise, le calcul du ROI, et des chapitres détaillés pour chaque département : service client (chatbots 70-85% de résolution), marketing digital, personnalisation, ventes/CRM, opérations, RH, finance, supply chain, e-commerce et business intelligence. Inclut 3 études de cas (agence immobilière, cabinet comptable, e-commerce cosmétiques) avec métriques réelles, un plan d'action 90 jours, et les aspects juridiques RGPD/AI Act.",
    price: 1299,
    priceFormatted: "12,99€",
    level: "Avancé",
    duration: "1h30 de lecture",
    chapters: 25,
    pages: 29,
    features: [
      "Audit IA et calcul de ROI pour votre entreprise",
      "Marketing, ventes, RH, finance, supply chain avec l'IA",
      "3 études de cas réels avec métriques (CA +35%, coûts -60%)",
      "Plan d'action 90 jours : de l'audit au déploiement",
      "RGPD, AI Act et sécurité — conformité juridique",
    ],
    image: "/images/courses/ia-pour-votre-business.jpg",
    color: "from-amber-500 to-orange-500",
  },
  {
    slug: "creer-avec-ia",
    title: "Créer avec l'IA",
    description:
      "Le guide complet du créateur digital. Images, vidéo, musique, écriture, design UI/UX, logos, jeux vidéo, mode, architecture — et comment monétiser vos créations.",
    longDescription:
      "Ce guide créatif de 27 pages vous apprend à utiliser l'IA comme partenaire de création. Maîtrisez Midjourney V7/V8 (prompts, paramètres, techniques avancées), DALL-E 3, Stable Diffusion, la retouche photo IA (Photoshop Generative Fill), la création de logos, le design UI/UX (Galileo AI, v0, Bolt), Sora 2 et Runway Gen-3 pour la vidéo, Suno et Udio pour la musique, ElevenLabs pour la voix, l'écriture créative avec les LLM, le contenu réseaux sociaux, le podcasting, les jeux vidéo, la mode et l'architecture. Chapitres sur la monétisation (1 000-10 000€/mois) et les droits d'auteur.",
    price: 999,
    priceFormatted: "9,99€",
    level: "Intermédiaire",
    duration: "1h30 de lecture",
    chapters: 22,
    pages: 27,
    features: [
      "Midjourney V7/V8, DALL-E 3, Stable Diffusion en détail",
      "Sora 2, Runway Gen-3 pour la vidéo IA",
      "Suno, Udio, ElevenLabs pour audio et musique",
      "Design UI/UX, logos, mode, architecture avec l'IA",
      "Monétisation (1K-10K€/mois) et droits d'auteur",
    ],
    image: "/images/courses/creer-avec-ia.jpg",
    color: "from-emerald-500 to-teal-500",
  },
  {
    slug: "pack-complet-ia-2026",
    title: "Pack Complet IA 2026",
    description:
      "Les 5 formations réunies à prix réduit. 140 pages, 97 chapitres : de débutant à expert en IA. Économisez plus de 11€.",
    longDescription:
      "Le Pack Complet IA 2026 regroupe nos 5 formations dans un seul package à prix avantageux. Vous recevez les 5 PDF complets : L'IA de A à Z (32p), Maîtriser les Outils IA (27p), Prompt Engineering Pro (25p), L'IA pour votre Business (29p), et Créer avec l'IA (27p). Au total 140 pages et 97 chapitres couvrant tous les aspects de l'intelligence artificielle en 2026. Économisez plus de 11€ par rapport à l'achat individuel.",
    price: 2499,
    priceFormatted: "24,99€",
    level: "Bundle",
    duration: "7h de lecture",
    chapters: 97,
    pages: 140,
    features: [
      "Les 5 formations complètes (140 pages, 97 chapitres)",
      "Économisez plus de 11€ vs achat individuel",
      "Mises à jour gratuites à vie",
      "Accès prioritaire aux nouveautés",
      "Support email dédié",
    ],
    image: "/images/courses/pack-complet-ia-2026.jpg",
    color: "from-purple-600 to-blue-600",
  },
];

export const PACK_SLUG = "pack-complet-ia-2026";

export const INDIVIDUAL_COURSE_SLUGS = [
  "ia-de-a-a-z",
  "maitriser-outils-ia",
  "prompt-engineering-pro",
  "ia-pour-votre-business",
  "creer-avec-ia",
];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function isPackSlug(slug: string): boolean {
  return slug === PACK_SLUG;
}

export function formatPrice(priceInCents: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(priceInCents / 100);
}
