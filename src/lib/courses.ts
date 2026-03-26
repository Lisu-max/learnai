export interface Course {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  tier: "free" | "premium";
  duration: string;
  chapters: number;
  features: string[];
  image: string;
  color: string;
}

export const courses: Course[] = [
  {
    slug: "ia-de-a-a-z",
    title: "L'IA de A à Z",
    description:
      "Découvrez les fondamentaux de l'intelligence artificielle. Le guide parfait pour débuter et comprendre les concepts clés de l'IA en 2026.",
    longDescription:
      "Apprenez les concepts fondamentaux du machine learning, du deep learning, du NLP, de la vision par ordinateur, des modèles de langage (GPT-5.4, Claude 4.6, Gemini 3.1), de l'IA générative, des agents IA autonomes, et de l'éthique. Chaque chapitre inclut des vidéos, des points clés et un quiz interactif.",
    level: "Débutant",
    tier: "free",
    duration: "2h",
    chapters: 12,
    features: [
      "12 chapitres interactifs avec vidéos",
      "Quiz à chaque chapitre pour valider vos acquis",
      "Machine Learning, Deep Learning, réseaux de neurones",
      "GPT-5.4, Claude 4.6, Gemini 3.1 décryptés",
      "Agents IA, éthique et avenir de l'IA",
    ],
    image: "/images/courses/ia-de-a-a-z.jpg",
    color: "from-blue-500 to-cyan-500",
  },
  {
    slug: "maitriser-outils-ia",
    title: "Maîtriser les Outils IA",
    description:
      "Guide pratique de tous les outils IA majeurs : ChatGPT, Claude, Gemini, Midjourney, Sora, Cursor et bien plus.",
    longDescription:
      "Tutoriels complets pour chaque outil : ChatGPT (GPT-5.4), Claude 4.6, Gemini 3.1, Midjourney V7/V8, DALL-E 3, Stable Diffusion, Sora 2, ElevenLabs, Suno, GitHub Copilot, Cursor, NotebookLM, Perplexity, Make/Zapier et les API d'IA. Construisez votre workflow IA personnalisé.",
    level: "Intermédiaire",
    tier: "premium",
    duration: "3h",
    chapters: 18,
    features: [
      "18 outils IA décortiqués en détail",
      "ChatGPT GPT-5.4, Claude 4.6, Gemini 3.1",
      "Midjourney V7/V8, Sora 2, ElevenLabs, Suno",
      "Cursor, Copilot, Claude Code pour le code",
      "Workflow IA personnalisé étape par étape",
    ],
    image: "/images/courses/maitriser-outils-ia.jpg",
    color: "from-purple-500 to-pink-500",
  },
  {
    slug: "prompt-engineering-pro",
    title: "Prompt Engineering Pro",
    description:
      "Maîtrisez l'art du prompt engineering avec 20 techniques avancées. La compétence la plus recherchée de 2026.",
    longDescription:
      "Tokenisation, zero-shot, few-shot, Chain-of-Thought, Tree of Thought, framework CRISPE, personas, system prompts, meta-prompting, prompt chaining. Chapitres dédiés au code, à l'écriture créative, aux images, à la vidéo et à la musique. 3 études de cas réels avec ROI mesuré.",
    level: "Intermédiaire",
    tier: "premium",
    duration: "3h",
    chapters: 20,
    features: [
      "20 techniques avancées de prompting",
      "Prompts pour code, images, vidéo, musique",
      "System prompts et agents IA",
      "3 études de cas réels avec ROI",
      "Réduire les hallucinations",
    ],
    image: "/images/courses/prompt-engineering-pro.jpg",
    color: "from-violet-500 to-purple-500",
  },
  {
    slug: "ia-pour-votre-business",
    title: "L'IA pour votre Business",
    description:
      "Stratégies concrètes pour intégrer l'IA dans votre entreprise. ROI, automatisation, marketing, ventes — avec un plan d'action 90 jours.",
    longDescription:
      "Audit IA, calcul du ROI, service client (chatbots 70-85%), marketing digital, personnalisation, ventes/CRM, opérations, RH, finance, supply chain, e-commerce. 3 études de cas avec métriques réelles, plan d'action 90 jours, conformité RGPD/AI Act.",
    level: "Avancé",
    tier: "premium",
    duration: "4h",
    chapters: 25,
    features: [
      "Audit IA et calcul de ROI",
      "Marketing, ventes, RH, finance avec l'IA",
      "3 études de cas (CA +35%, coûts -60%)",
      "Plan d'action 90 jours",
      "RGPD, AI Act — conformité juridique",
    ],
    image: "/images/courses/ia-pour-votre-business.jpg",
    color: "from-amber-500 to-orange-500",
  },
  {
    slug: "creer-avec-ia",
    title: "Créer avec l'IA",
    description:
      "Images, vidéo, musique, écriture, design, logos, jeux vidéo — le guide complet du créateur digital avec l'IA.",
    longDescription:
      "Midjourney V7/V8, DALL-E 3, Stable Diffusion, retouche photo IA, logos, UI/UX (Galileo AI, v0, Bolt), Sora 2, Runway Gen-3, Suno, Udio, ElevenLabs, écriture créative, réseaux sociaux, podcasting, jeux vidéo, mode, architecture. Monétisation et droits d'auteur.",
    level: "Intermédiaire",
    tier: "premium",
    duration: "3h30",
    chapters: 22,
    features: [
      "Midjourney V7/V8, DALL-E 3, Stable Diffusion",
      "Sora 2, Runway Gen-3 pour la vidéo",
      "Suno, Udio, ElevenLabs pour l'audio",
      "Design UI/UX, logos, mode, architecture",
      "Monétisation et droits d'auteur",
    ],
    image: "/images/courses/creer-avec-ia.jpg",
    color: "from-emerald-500 to-teal-500",
  },
];

export const FREE_SLUGS = ["ia-de-a-a-z"];
export const PREMIUM_SLUGS = ["maitriser-outils-ia", "prompt-engineering-pro", "ia-pour-votre-business", "creer-avec-ia"];

export function getCourseBySlug(slug: string): Course | undefined {
  return courses.find((course) => course.slug === slug);
}

export function isFreeCourse(slug: string): boolean {
  return FREE_SLUGS.includes(slug);
}
