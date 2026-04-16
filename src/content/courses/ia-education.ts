import type { CourseContent } from "../types";

const content: CourseContent = {
  slug: "ia-education",
  chapters: [
    {
      number: 1,
      title: "Introduction : L'IA dans l'Education",
      description: "Comprendre comment l'IA transforme l'enseignement et l'apprentissage.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA Revolutionne l'Education" },
        { type: "paragraph", content: "L'education vit une transformation sans precedent. L'IA permet de personnaliser l'apprentissage pour chaque eleve, d'automatiser les taches administratives des enseignants, et de rendre l'education accessible a tous. En 2026, ignorer l'IA en education, c'est enseigner avec une main attachee dans le dos." },
        { type: "paragraph", content: "Cette revolution ne remplace pas les enseignants — elle les augmente. Un professeur assiste par l'IA peut mieux differencier sa pedagogie, detecter plus tot les difficultes, et se concentrer sur ce qui compte : la relation avec ses eleves." },
        { type: "callout", content: "UNESCO 2026 : 60% des systemes educatifs dans le monde experimentent des outils IA. La France a integre l'IA dans les programmes officiels du secondaire. La question n'est plus \"faut-il utiliser l'IA ?\" mais \"comment bien l'utiliser ?\"." },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "L'IA dans l'education — vue d'ensemble" },
        { type: "heading", content: "Les Grands Axes de l'IA Educative" },
        { type: "paragraph", content: "L'IA en education se deploie sur 5 axes : la personnalisation de l'apprentissage (parcours adaptatifs), l'assistance aux enseignants (correction, creation de contenus), l'accessibilite (traduction, transcription, adaptation), l'evaluation (formative et sommative), et l'administration (gestion automatisee)." },
        { type: "key-point", content: "L'IA est un outil, pas une finalite. L'objectif n'est pas de mettre de l'IA partout, mais d'utiliser l'IA la ou elle apporte une reelle valeur pedagogique pour les enseignants et les apprenants." },
        { type: "diagram", label: "Les 5 Axes de l'IA en Education", flow: "horizontal", nodes: [
          { label: "Personnalisation", sub: "Parcours adaptatifs", color: "purple" },
          { label: "Assistance", sub: "Outils pour enseignants", color: "blue" },
          { label: "Accessibilite", sub: "Inclusion et adaptation", color: "emerald" },
          { label: "Evaluation", sub: "Correction automatisee", color: "amber" },
          { label: "Administration", sub: "Gestion automatisee", color: "pink" },
        ]},
        { type: "tip", content: "Commencez par observer comment vos eleves ou collegues utilisent deja l'IA (ChatGPT, etc.). Comprendre les usages existants est la premiere etape pour une integration pedagogique reussie." },
        { type: "summary", items: [
          "L'IA transforme l'education sans remplacer les enseignants",
          "60% des systemes educatifs experimentent des outils IA",
          "5 axes : personnalisation, assistance, accessibilite, evaluation, administration",
          "L'IA est un outil, pas une finalite pedagogique",
          "La question est \"comment bien l'utiliser\", pas \"faut-il l'utiliser\""
        ]},
      ],
      quiz: [
        {
          question: "Quel est le principal avantage de l'IA pour les enseignants ?",
          options: ["Remplacer les enseignants", "Les augmenter pour mieux differencier et se concentrer sur la relation eleve", "Supprimer les devoirs", "Automatiser tous les cours"],
          correctIndex: 1,
          explanation: "L'IA augmente les enseignants : meilleure differenciation pedagogique, detection precoce des difficultes, et plus de temps pour la relation avec les eleves."
        },
        {
          question: "Combien de systemes educatifs experimentent l'IA en 2026 ?",
          options: ["20%", "40%", "60%", "90%"],
          correctIndex: 2,
          explanation: "Selon l'UNESCO, 60% des systemes educatifs dans le monde experimentent des outils IA en 2026."
        },
        {
          question: "Quels sont les 5 axes de l'IA en education ?",
          options: ["Code, design, marketing, vente, finance", "Personnalisation, assistance, accessibilite, evaluation, administration", "Lecture, ecriture, calcul, sciences, langues", "Primaire, college, lycee, universite, formation"],
          correctIndex: 1,
          explanation: "Les 5 axes sont : personnalisation de l'apprentissage, assistance aux enseignants, accessibilite, evaluation automatisee, et administration."
        },
        {
          question: "Quelle est la bonne approche pour integrer l'IA en education ?",
          options: ["Mettre de l'IA partout", "L'utiliser la ou elle apporte une reelle valeur pedagogique", "Interdire l'IA dans les ecoles", "Attendre que la technologie soit parfaite"],
          correctIndex: 1,
          explanation: "L'IA est un outil, pas une finalite. Il faut l'utiliser de maniere ciblee, la ou elle apporte une reelle valeur pour les enseignants et les apprenants."
        },
      ],
    },
    {
      number: 2,
      title: "Outils IA pour les Enseignants",
      description: "Decouvrir les meilleurs outils IA pour gagner du temps et enrichir ses cours.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "La Boite a Outils IA de l'Enseignant" },
        { type: "paragraph", content: "Les enseignants disposent aujourd'hui d'un arsenal d'outils IA pour gagner du temps et enrichir leur pedagogie. De la preparation de cours a la correction, en passant par la creation de supports visuels, l'IA est le meilleur assistant que vous n'ayez jamais eu." },
        { type: "subheading", content: "ChatGPT et Claude pour la Preparation" },
        { type: "paragraph", content: "Les LLM sont ideaux pour generer des plans de cours, des exercices differencies, des sujets d'examen, des grilles d'evaluation, et des fiches de revision. En quelques prompts, vous obtenez un support que vous auriez mis des heures a creer." },
        { type: "subheading", content: "Outils de Creation de Contenu" },
        { type: "paragraph", content: "Canva (design), Gamma (presentations), Midjourney (illustrations), ElevenLabs (narration audio), et Synthesia (videos avec avatar) permettent de creer des supports pedagogiques professionnels sans competence technique." },
        { type: "subheading", content: "Outils de Correction et Feedback" },
        { type: "paragraph", content: "Grammarly et LanguageTool pour la correction linguistique, Turnitin pour le plagiat, et les LLM pour le feedback personnalise sur les copies. L'IA peut generer un feedback constructif et detaille en quelques secondes." },
        { type: "prompt-example", prompt: "Cree 5 exercices differencies (3 niveaux) sur les fractions pour une classe de CM2. Niveau 1 : decouverte, Niveau 2 : application, Niveau 3 : approfondissement. Inclus les corrections.", result: "Exercices Fractions CM2 — 3 Niveaux\n\nNiveau 1 (Decouverte) :\n1. Colorie 1/4 du rectangle\n2. Ecris la fraction representee par le dessin\n\nNiveau 2 (Application) :\n3. Compare 2/3 et 3/4 (utilise les fractions equivalentes)\n4. Additionne 1/4 + 2/4\n\nNiveau 3 (Approfondissement) :\n5. Paul mange 2/5 de sa pizza. Marie mange 1/3 de la meme pizza. Qui a mange le plus ?\n\nCorrections detaillees jointes pour chaque exercice." },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "Les meilleurs outils IA pour enseignants" },
        { type: "diagram", label: "La Boite a Outils IA de l'Enseignant", flow: "horizontal", nodes: [
          { label: "Preparation", sub: "ChatGPT, Claude, Perplexity", color: "purple" },
          { label: "Creation", sub: "Canva, Gamma, Midjourney", color: "blue" },
          { label: "Correction", sub: "Grammarly, LLM feedback", color: "emerald" },
          { label: "Engagement", sub: "Kahoot, Quizizz, Mentimeter", color: "amber" },
        ]},
        { type: "tip", content: "Creez-vous une bibliotheque de prompts pour vos taches recurrentes : generation d'exercices, differentiation, sujets d'examen, feedback de copies. Vous gagnerez encore plus de temps." },
        { type: "summary", items: [
          "Les LLM generent plans de cours, exercices et sujets en minutes",
          "Canva, Gamma, Midjourney pour les supports visuels professionnels",
          "L'IA genere du feedback personnalise sur les copies",
          "Une bibliotheque de prompts optimise le gain de temps",
          "L'IA est un assistant, l'enseignant garde le controle pedagogique"
        ]},
      ],
      quiz: [
        {
          question: "Quel est le meilleur usage des LLM pour un enseignant ?",
          options: ["Remplacer les cours", "Generer des exercices, plans de cours et sujets d'examen", "Surveiller les eleves", "Remplacer les manuels scolaires"],
          correctIndex: 1,
          explanation: "Les LLM excellent dans la generation de contenu pedagogique : exercices differencies, plans de cours, sujets d'examen, fiches de revision."
        },
        {
          question: "Quel outil IA est ideal pour creer des presentations pedagogiques ?",
          options: ["Excel", "Gamma", "Grammarly", "Turnitin"],
          correctIndex: 1,
          explanation: "Gamma genere des presentations professionnelles a partir d'un simple texte, ideales pour les cours et conferences pedagogiques."
        },
        {
          question: "Comment l'IA peut-elle aider a la correction ?",
          options: ["En remplacant completement l'enseignant", "En generant du feedback personnalise et detaille rapidement", "En donnant des notes aleatoires", "En supprimant les examens"],
          correctIndex: 1,
          explanation: "L'IA peut generer un feedback constructif et detaille sur les copies en quelques secondes, que l'enseignant valide et personalise ensuite."
        },
        {
          question: "Que recommande-t-on de creer pour optimiser l'usage de l'IA ?",
          options: ["Un site web", "Une bibliotheque de prompts pour les taches recurrentes", "Un compte sur chaque plateforme", "Un blog pedagogique"],
          correctIndex: 1,
          explanation: "Une bibliotheque de prompts pour les taches recurrentes (exercices, differentiation, feedback) optimise le gain de temps de l'enseignant."
        },
      ],
    },
    {
      number: 3,
      title: "Creer des Cours avec l'IA",
      description: "Concevoir des sequences pedagogiques completes assistees par l'IA.",
      estimatedMinutes: 9,
      sections: [
        { type: "heading", content: "L'IA comme Co-Concepteur Pedagogique" },
        { type: "paragraph", content: "Creer une sequence pedagogique est un travail complexe : objectifs d'apprentissage, progression, activites, supports, evaluation. L'IA peut assister chaque etape tout en laissant l'enseignant maitre de la vision pedagogique et de l'adaptation au contexte local." },
        { type: "subheading", content: "Definir les Objectifs avec Bloom" },
        { type: "paragraph", content: "La taxonomie de Bloom structure les objectifs d'apprentissage en 6 niveaux : memoriser, comprendre, appliquer, analyser, evaluer, creer. L'IA peut generer des objectifs formules selon Bloom pour n'importe quel sujet et niveau." },
        { type: "subheading", content: "Generer une Sequence Complete" },
        { type: "paragraph", content: "Donnez a Claude ou ChatGPT : le sujet, le niveau des eleves, la duree, et les objectifs. L'IA genere une sequence complete : accroche, activites, supports, differenciation, evaluation formative et sommative." },
        { type: "subheading", content: "Differentiation Automatique" },
        { type: "paragraph", content: "L'IA excelle dans la differenciation pedagogique. A partir d'un exercice standard, elle genere 3 niveaux de difficulte, des aides methodologiques, et des extensions pour les eleves avances — en quelques secondes." },
        { type: "prompt-example", prompt: "Cree une sequence pedagogique complete de 3 seances (1h chacune) sur la Revolution francaise pour une classe de 4eme. Inclus les objectifs Bloom, les activites, la differenciation (3 niveaux), et l'evaluation formative.", result: "Sequence : La Revolution Francaise (3 seances)\n\nSeance 1 — Les Causes (1h)\nObjectifs Bloom : memoriser les causes, comprendre le contexte\nAccroche : image du Serment du Jeu de Paume (5 min)\nActivite : carte mentale collaborative (25 min)\nDifferenciation :\n- N1 : carte mentale pre-remplie a completer\n- N2 : carte mentale a construire avec mots-cles\n- N3 : carte mentale libre + sources primaires\nEvaluation formative : quiz Kahoot 5 questions (10 min)\n\nSeance 2 — Les Evenements Cles (1h)\n[...suite detaillee]\n\nSeance 3 — Les Consequences (1h)\n[...suite detaillee + evaluation sommative]" },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "Creer des cours avec l'IA" },
        { type: "callout", content: "L'IA genere un excellent point de depart, mais l'enseignant doit toujours adapter au contexte : niveau reel des eleves, materiel disponible, programme officiel, et sa propre vision pedagogique." },
        { type: "diagram", label: "Le Processus de Creation de Cours IA", flow: "horizontal", nodes: [
          { label: "Objectifs Bloom", sub: "6 niveaux de competences", color: "purple" },
          { label: "Generation IA", sub: "Sequence, activites, supports", color: "blue" },
          { label: "Differenciation", sub: "3 niveaux automatiques", color: "emerald" },
          { label: "Adaptation", sub: "Contexte local par l'enseignant", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'IA est un co-concepteur, l'enseignant reste maitre de la pedagogie",
          "La taxonomie de Bloom structure les objectifs d'apprentissage",
          "L'IA genere des sequences completes avec differenciation",
          "3 niveaux de differenciation en quelques secondes",
          "L'adaptation au contexte local reste essentielle"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que la taxonomie de Bloom ?",
          options: ["Un logiciel educatif", "Une classification en 6 niveaux des objectifs d'apprentissage", "Un type de fleur utilisee en biologie", "Une methode de notation"],
          correctIndex: 1,
          explanation: "La taxonomie de Bloom structure les objectifs d'apprentissage en 6 niveaux : memoriser, comprendre, appliquer, analyser, evaluer, creer."
        },
        {
          question: "Comment l'IA aide-t-elle a la differenciation ?",
          options: ["Elle separe les eleves par niveau", "Elle genere automatiquement 3 niveaux de difficulte pour chaque exercice", "Elle remplace la differenciation", "Elle note les eleves"],
          correctIndex: 1,
          explanation: "L'IA genere 3 niveaux de difficulte, des aides methodologiques et des extensions pour les eleves avances a partir d'un seul exercice."
        },
        {
          question: "Que doit-on donner a l'IA pour generer une sequence pedagogique ?",
          options: ["Uniquement le titre du cours", "Le sujet, le niveau, la duree et les objectifs", "Les noms des eleves", "Le budget de l'ecole"],
          correctIndex: 1,
          explanation: "Pour une sequence de qualite, precisez le sujet, le niveau des eleves, la duree disponible, et les objectifs d'apprentissage vises."
        },
        {
          question: "Quel role l'enseignant garde-t-il dans la creation de cours avec l'IA ?",
          options: ["Aucun, l'IA fait tout", "L'adaptation au contexte local et la vision pedagogique", "Uniquement la notation", "Uniquement la discipline"],
          correctIndex: 1,
          explanation: "L'enseignant adapte au contexte (niveau reel des eleves, materiel, programme) et apporte sa vision pedagogique — l'IA est un point de depart."
        },
      ],
    },
    {
      number: 4,
      title: "Evaluation et Correction Automatisees",
      description: "Automatiser l'evaluation formative et sommative avec l'IA.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'IA Transforme l'Evaluation" },
        { type: "paragraph", content: "La correction et l'evaluation consomment 30 a 40% du temps des enseignants. L'IA peut automatiser la creation de sujets, la correction des QCM et reponses courtes, et generer du feedback personnalise. L'enseignant est libere pour se concentrer sur l'evaluation des competences complexes." },
        { type: "subheading", content: "Generation Automatique de Sujets" },
        { type: "paragraph", content: "Les LLM generent des sujets d'examen alignes sur les objectifs Bloom, avec bareme, corrige et grille d'evaluation. Ils peuvent produire plusieurs versions d'un meme sujet pour eviter la triche, en maintenant le meme niveau de difficulte." },
        { type: "subheading", content: "Correction IA : Ce Qui Marche" },
        { type: "paragraph", content: "L'IA est excellente pour corriger les QCM, les questions a reponse courte, et les exercices de langue. Elle est bonne pour le feedback sur les dissertations (structure, argumentation, orthographe). Elle est moins fiable pour l'evaluation de la creativite et de l'originalite." },
        { type: "subheading", content: "Feedback Personnalise a l'Echelle" },
        { type: "paragraph", content: "Le plus grand apport de l'IA est le feedback personnalise. Au lieu d'un simple \"bien\" ou \"a revoir\", l'IA genere un commentaire detaille pour chaque eleve : points forts, points a ameliorer, conseils specifiques, et ressources recommandees." },
        { type: "tip", content: "Utilisez l'IA pour la premiere passe de correction (detection d'erreurs, feedback brut), puis revisez et personnalisez. Ce workflow hybride divise par 3 le temps de correction tout en maintenant la qualite." },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "Evaluation et correction avec l'IA" },
        { type: "key-point", content: "L'IA excelle dans l'evaluation formative (feedback continu pour l'apprentissage) plus que dans l'evaluation sommative (notation finale). Utilisez-la pour donner plus de feedback, plus souvent." },
        { type: "diagram", label: "Ce Que l'IA Corrige Bien (ou Pas)", flow: "horizontal", nodes: [
          { label: "Excellent", sub: "QCM, reponses courtes, langue", color: "emerald" },
          { label: "Bon", sub: "Dissertations (structure, ortho)", color: "blue" },
          { label: "Limite", sub: "Creativite, originalite, pensee critique", color: "amber" },
        ]},
        { type: "prompt-example", prompt: "Corrige cette dissertation de 3eme sur les inegalites mondiales. Donne un feedback constructif avec points forts, axes d'amelioration, et une note sur 20 avec justification.", result: "Feedback Dissertation — Inegalites Mondiales\n\nPoints forts :\n- Introduction structuree avec problematique claire\n- Bon usage de chiffres (IDH, PIB)\n- Conclusion qui ouvre le debat\n\nAxes d'amelioration :\n- Paragraphes trop longs — decoupez en sous-arguments\n- Manque de transitions entre les parties\n- Orthographe : 4 fautes d'accord a corriger (surlignees)\n\nNote : 13/20 — Bonne comprehension du sujet, ameliorez la structure argumentative pour progresser." },
        { type: "summary", items: [
          "La correction consomme 30-40% du temps des enseignants",
          "L'IA excelle pour QCM, reponses courtes, et feedback linguistique",
          "Le feedback personnalise a l'echelle est le plus grand apport",
          "Workflow hybride : IA en premiere passe, enseignant en validation",
          "L'IA est meilleure en evaluation formative qu'en sommative"
        ]},
      ],
      quiz: [
        {
          question: "Quel pourcentage du temps des enseignants est consacre a la correction ?",
          options: ["10-15%", "20-25%", "30-40%", "50-60%"],
          correctIndex: 2,
          explanation: "La correction et l'evaluation consomment 30 a 40% du temps des enseignants — c'est un domaine ou l'IA a un impact majeur."
        },
        {
          question: "Dans quel type d'evaluation l'IA excelle-t-elle ?",
          options: ["L'evaluation de la creativite", "La correction de QCM et reponses courtes", "L'evaluation de l'originalite", "La notation de projets artistiques"],
          correctIndex: 1,
          explanation: "L'IA est excellente pour les QCM, reponses courtes et exercices de langue. Elle est moins fiable pour la creativite et l'originalite."
        },
        {
          question: "Quel est le plus grand apport de l'IA en evaluation ?",
          options: ["La notation automatique", "Le feedback personnalise a l'echelle", "La surveillance des examens", "La generation de diplomes"],
          correctIndex: 1,
          explanation: "Le feedback personnalise est le plus grand apport : chaque eleve recoit un commentaire detaille au lieu d'un simple 'bien' ou 'a revoir'."
        },
        {
          question: "Quel workflow de correction est recommande avec l'IA ?",
          options: ["L'IA corrige seule", "IA en premiere passe, enseignant en validation", "L'enseignant corrige seul", "Les eleves se corrigent entre eux"],
          correctIndex: 1,
          explanation: "Le workflow hybride (IA en premiere passe, enseignant en validation) divise par 3 le temps de correction tout en maintenant la qualite."
        },
      ],
    },
    {
      number: 5,
      title: "Personnalisation de l'Apprentissage",
      description: "Adapter le parcours a chaque apprenant grace a l'IA.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'Apprentissage Personnalise par l'IA" },
        { type: "paragraph", content: "Le reve de chaque enseignant : adapter son cours a chaque eleve. Avec 30 eleves par classe, c'est impossible manuellement. L'IA rend enfin ce reve accessible en adaptant le contenu, le rythme et les exercices au profil de chaque apprenant." },
        { type: "subheading", content: "Diagnostic des Lacunes" },
        { type: "paragraph", content: "Les plateformes adaptatives (Khan Academy, DreamBox, Duolingo) evaluent le niveau de l'apprenant en continu et identifient precisement ses lacunes. Au lieu de repeter un chapitre entier, l'eleve travaille uniquement sur les notions qu'il ne maitrise pas." },
        { type: "subheading", content: "Parcours Adaptatifs" },
        { type: "paragraph", content: "L'IA ajuste en temps reel : si l'eleve reussit facilement, elle augmente la difficulte. S'il bloque, elle propose des exercices supplementaires, des explications alternatives, ou des ressources complementaires. Chaque parcours est unique." },
        { type: "subheading", content: "Tuteurs IA Personnels" },
        { type: "paragraph", content: "Les chatbots educatifs comme Khanmigo (Khan Academy) ou les LLM configures en mode tuteur offrent un accompagnement 1-a-1 permanent. L'eleve peut poser des questions a tout moment, sans craindre le jugement, et recevoir des explications adaptees a son niveau." },
        { type: "callout", content: "Etude Stanford 2025 : les eleves utilisant un tuteur IA personnalise progressent 2x plus vite que le groupe temoin, avec une amelioration de 30% de la retention des connaissances a long terme." },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "Personnalisation de l'apprentissage avec l'IA" },
        { type: "diagram", label: "L'Apprentissage Adaptatif en Action", flow: "cycle", nodes: [
          { label: "Diagnostic", sub: "Evaluer le niveau et les lacunes", color: "blue" },
          { label: "Adaptation", sub: "Contenu ajuste en temps reel", color: "purple" },
          { label: "Feedback", sub: "Retour immediat et personnalise", color: "emerald" },
        ]},
        { type: "key-point", content: "La personnalisation ne signifie pas isoler l'eleve derriere un ecran. Les meilleurs resultats combinent le travail adaptatif individuel avec l'IA et les interactions sociales en classe." },
        { type: "summary", items: [
          "L'IA personnalise contenu, rythme et exercices pour chaque eleve",
          "Les plateformes adaptatives identifient les lacunes en continu",
          "Les tuteurs IA offrent un accompagnement 1-a-1 permanent",
          "Les eleves progressent 2x plus vite avec un tuteur IA",
          "Combiner IA individuelle et interactions sociales en classe"
        ]},
      ],
      quiz: [
        {
          question: "Que fait une plateforme d'apprentissage adaptative ?",
          options: ["Elle donne le meme contenu a tous", "Elle ajuste contenu et difficulte selon le niveau de chaque eleve", "Elle remplace l'enseignant", "Elle n'est utile que pour les langues"],
          correctIndex: 1,
          explanation: "Les plateformes adaptatives evaluent le niveau de chaque apprenant en continu et ajustent le contenu, la difficulte et le rythme en temps reel."
        },
        {
          question: "De combien les eleves avec tuteur IA progressent-ils plus vite ?",
          options: ["10% plus vite", "50% plus vite", "2x plus vite", "5x plus vite"],
          correctIndex: 2,
          explanation: "Selon une etude Stanford 2025, les eleves utilisant un tuteur IA personnalise progressent 2x plus vite que le groupe temoin."
        },
        {
          question: "Quel est l'avantage d'un tuteur IA pour un eleve ?",
          options: ["Il remplace le professeur", "Il offre un accompagnement 1-a-1 sans jugement, disponible 24/7", "Il donne les reponses aux examens", "Il est gratuit"],
          correctIndex: 1,
          explanation: "Le tuteur IA offre un accompagnement personnalise, permanent, sans crainte du jugement, avec des explications adaptees au niveau de l'eleve."
        },
        {
          question: "La personnalisation signifie-t-elle isoler l'eleve derriere un ecran ?",
          options: ["Oui, c'est le principe", "Non, il faut combiner IA individuelle et interactions sociales", "Oui, pour eviter les distractions", "L'ecran est obligatoire"],
          correctIndex: 1,
          explanation: "Les meilleurs resultats combinent le travail adaptatif individuel avec l'IA et les interactions sociales en classe — la socialisation reste essentielle."
        },
      ],
    },
    {
      number: 6,
      title: "L'IA pour les Etudiants",
      description: "Comment les etudiants peuvent utiliser l'IA pour mieux apprendre.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA comme Outil d'Apprentissage" },
        { type: "paragraph", content: "Les etudiants qui utilisent l'IA intelligemment apprennent mieux et plus vite. Mais il y a une difference fondamentale entre utiliser l'IA pour comprendre et l'utiliser pour tricher. Ce chapitre enseigne l'usage productif et ethique de l'IA par les etudiants." },
        { type: "subheading", content: "Techniques d'Etude avec l'IA" },
        { type: "paragraph", content: "Demander a l'IA d'expliquer un concept de 3 facons differentes. Generer des flashcards avec Anki + ChatGPT. Creer des quiz de revision. Resumer des chapitres. Se faire interroger par un chatbot. Transformer ses notes en fiches structurees." },
        { type: "subheading", content: "Recherche et Redaction" },
        { type: "paragraph", content: "Perplexity pour la recherche sourcer. Claude pour structurer un plan de dissertation. ChatGPT pour reformuler et ameliorer un texte. L'IA aide a structurer la pensee, pas a la remplacer. L'etudiant doit toujours apporter ses propres idees et analyses." },
        { type: "subheading", content: "La Methode Feynman + IA" },
        { type: "paragraph", content: "Expliquez un concept a l'IA comme si elle etait un enfant de 10 ans. Si l'IA detecte des erreurs ou des lacunes dans votre explication, c'est que vous ne maitrisez pas encore le sujet. C'est la methode Feynman augmentee — et c'est extremement efficace." },
        { type: "tip", content: "Regle d'or : si vous ne pouvez pas expliquer un concept sans l'IA, c'est que vous ne l'avez pas compris. L'IA est un outil pour approfondir votre comprehension, pas pour la remplacer." },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "L'IA pour les etudiants — guide pratique" },
        { type: "diagram", label: "Usages Productifs vs Contre-Productifs", flow: "horizontal", nodes: [
          { label: "Productif", sub: "Expliquer, quizzer, structurer", color: "emerald" },
          { label: "Limite OK", sub: "Reformuler, corriger, resumer", color: "blue" },
          { label: "Contre-productif", sub: "Copier-coller sans comprendre", color: "pink" },
        ]},
        { type: "summary", items: [
          "L'IA est un outil d'apprentissage puissant utilise intelligemment",
          "Techniques : flashcards, quiz, explications multiples, methode Feynman",
          "Perplexity pour la recherche, Claude pour la structure, ChatGPT pour la redaction",
          "La regle d'or : si vous ne pouvez pas expliquer sans l'IA, vous n'avez pas compris",
          "L'IA aide a structurer la pensee, pas a la remplacer"
        ]},
      ],
      quiz: [
        {
          question: "Quelle est la methode Feynman augmentee par l'IA ?",
          options: ["Demander a l'IA de faire ses devoirs", "Expliquer un concept a l'IA comme a un enfant et identifier ses lacunes", "Memoriser les reponses de l'IA", "Copier les explications de l'IA"],
          correctIndex: 1,
          explanation: "La methode Feynman augmentee consiste a expliquer un concept a l'IA comme a un enfant de 10 ans. Si l'IA detecte des erreurs, c'est que vous n'avez pas compris."
        },
        {
          question: "Quel outil est recommande pour la recherche sourcee ?",
          options: ["ChatGPT", "Midjourney", "Perplexity", "Canva"],
          correctIndex: 2,
          explanation: "Perplexity est un moteur de recherche IA qui fournit des reponses sourcees, ideal pour la recherche academique."
        },
        {
          question: "Quelle est la regle d'or de l'utilisation de l'IA par les etudiants ?",
          options: ["Toujours utiliser l'IA pour les devoirs", "Si vous ne pouvez pas expliquer sans l'IA, vous n'avez pas compris", "L'IA a toujours raison", "Ne jamais utiliser l'IA"],
          correctIndex: 1,
          explanation: "La regle d'or : l'IA est un outil pour approfondir la comprehension. Si vous ne pouvez pas expliquer un concept sans elle, c'est que vous ne le maitrisez pas."
        },
        {
          question: "Quel usage de l'IA est contre-productif pour l'apprentissage ?",
          options: ["Se faire quizzer par un chatbot", "Generer des flashcards", "Copier-coller les reponses sans comprendre", "Demander 3 explications differentes"],
          correctIndex: 2,
          explanation: "Copier-coller les reponses de l'IA sans comprendre est contre-productif : l'etudiant n'apprend rien et risque de ne pas maitriser le sujet."
        },
      ],
    },
    {
      number: 7,
      title: "Recherche Academique avec l'IA",
      description: "Accelerer la recherche, l'analyse bibliographique et la redaction scientifique.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'IA Accelere la Recherche Academique" },
        { type: "paragraph", content: "La recherche academique est transformee par l'IA : decouverte d'articles, analyse bibliographique, extraction de donnees, redaction scientifique, et meme generation d'hypotheses. Les chercheurs qui maitrisent ces outils publient plus et mieux." },
        { type: "subheading", content: "Decouverte et Analyse d'Articles" },
        { type: "paragraph", content: "Semantic Scholar, Elicit et Consensus utilisent l'IA pour trouver des articles pertinents, extraire les findings, et synthetiser les resultats de dizaines d'etudes en quelques minutes. Plus besoin de lire 50 articles pour une revue de litterature." },
        { type: "subheading", content: "Redaction Scientifique Assistee" },
        { type: "paragraph", content: "Les LLM aident a structurer les articles, reformuler pour la clarte, et verifier la coherence. Writefull et Paperpal sont specialises dans la redaction academique. Attention : la transparence sur l'utilisation de l'IA est de plus en plus exigee par les revues." },
        { type: "subheading", content: "Analyse de Donnees et Statistiques" },
        { type: "paragraph", content: "Claude et ChatGPT peuvent expliquer des methodes statistiques, generer du code R ou Python pour l'analyse, interpreter des resultats, et meme suggerer les tests statistiques adaptes a vos donnees et hypotheses." },
        { type: "callout", content: "Ethique academique : de plus en plus de revues scientifiques exigent la declaration de l'utilisation de l'IA dans le processus de recherche et de redaction. Soyez toujours transparent sur votre utilisation des outils IA." },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "L'IA pour la recherche academique" },
        { type: "prompt-example", prompt: "Synthetise les 5 principales conclusions de la litterature sur l'impact de l'IA sur les resultats scolaires des eleves du secondaire, avec les references les plus citees.", result: "Synthese — Impact de l'IA sur les Resultats Scolaires (Secondaire)\n\n1. Les tuteurs IA ameliorent les resultats de 20-30% en mathematiques (Chen et al., 2024; Li & Wang, 2025)\n2. L'apprentissage adaptatif reduit les ecarts entre eleves forts et faibles (UNESCO, 2025)\n3. Le feedback IA immediat augmente la motivation et l'engagement (Ryan & Deci, 2024)\n4. Les effets sont plus marques chez les eleves en difficulte (OECD, 2025)\n5. Les risques de dependance et de reduction de l'effort cognitif persistent (Selwyn, 2025)\n\nNote : toujours verifier les references car l'IA peut generer des citations fictives." },
        { type: "diagram", label: "Le Workflow de Recherche Augmente", flow: "horizontal", nodes: [
          { label: "Decouverte", sub: "Semantic Scholar, Elicit", color: "purple" },
          { label: "Analyse", sub: "Synthese IA des findings", color: "blue" },
          { label: "Redaction", sub: "LLM + Writefull", color: "emerald" },
          { label: "Verification", sub: "Relecture humaine + sources", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'IA accelere la decouverte d'articles et l'analyse bibliographique",
          "Semantic Scholar, Elicit et Consensus pour la revue de litterature",
          "Les LLM aident a structurer et reformuler les articles scientifiques",
          "Toujours verifier les references generees par l'IA",
          "La transparence sur l'utilisation de l'IA est exigee par les revues"
        ]},
      ],
      quiz: [
        {
          question: "Quel outil IA est specialise dans la decouverte d'articles scientifiques ?",
          options: ["ChatGPT", "Semantic Scholar", "Canva", "Grammarly"],
          correctIndex: 1,
          explanation: "Semantic Scholar utilise l'IA pour trouver des articles scientifiques pertinents, extraire les findings et synthetiser les resultats."
        },
        {
          question: "Pourquoi faut-il verifier les references generees par l'IA ?",
          options: ["Elles sont toujours fausses", "L'IA peut generer des citations fictives", "Les revues ne les acceptent pas", "Elles sont trop anciennes"],
          correctIndex: 1,
          explanation: "Les LLM peuvent generer des references fictives (hallucinations). Il est essentiel de verifier chaque citation dans les bases de donnees reelles."
        },
        {
          question: "Que demandent de plus en plus les revues scientifiques ?",
          options: ["D'utiliser uniquement l'IA", "La transparence sur l'utilisation de l'IA", "De ne jamais utiliser l'IA", "D'utiliser un format specifique"],
          correctIndex: 1,
          explanation: "De plus en plus de revues exigent la declaration de l'utilisation de l'IA dans le processus de recherche et de redaction."
        },
        {
          question: "Comment l'IA aide-t-elle pour les statistiques ?",
          options: ["Elle invente des resultats", "Elle explique les methodes, genere le code et interprete les resultats", "Elle remplace les statisticiens", "Elle ne peut pas faire de statistiques"],
          correctIndex: 1,
          explanation: "L'IA peut expliquer des methodes statistiques, generer du code R/Python, interpreter des resultats et suggerer les tests adaptes."
        },
      ],
    },
    {
      number: 8,
      title: "Creer du Contenu Pedagogique",
      description: "Produire des supports visuels, videos et ressources interactives avec l'IA.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'IA Comme Studio de Creation" },
        { type: "paragraph", content: "Les enseignants n'ont plus besoin d'etre graphistes, videeastes ou developpeurs web pour creer du contenu pedagogique de qualite. L'IA democratise la creation : presentations, infographies, videos explicatives, podcasts, quiz interactifs — tout est accessible." },
        { type: "subheading", content: "Presentations et Infographies" },
        { type: "paragraph", content: "Gamma genere des presentations completes a partir d'un texte. Canva propose des templates educatifs avec des elements IA. Beautiful.ai cree des diapositives professionnelles automatiquement. Ces outils transforment 10 minutes de preparation en un support visuel impactant." },
        { type: "subheading", content: "Videos Educatives" },
        { type: "paragraph", content: "Synthesia cree des videos avec un avatar IA qui presente votre cours. Loom ajoute l'IA pour editer et sous-titrer vos enregistrements. Descript permet de modifier une video en editant son texte. HeyGen traduit vos videos dans 30 langues avec lip sync." },
        { type: "subheading", content: "Quiz et Contenus Interactifs" },
        { type: "paragraph", content: "Les LLM generent des quiz Kahoot, des flashcards Anki, des mots croises, des jeux de role, et des scenarios interactifs en quelques secondes. H5P permet de creer du contenu interactif (drag & drop, timeline, hotspot) integrable dans n'importe quel LMS." },
        { type: "tip", content: "Pensez multimedia : un meme concept explique en texte, en image, en video et en quiz interactif touche 4 styles d'apprentissage differents. L'IA vous permet de creer ces 4 formats en une fraction du temps." },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "Creer du contenu pedagogique avec l'IA" },
        { type: "diagram", label: "Les Formats de Contenu Pedagogique IA", flow: "horizontal", nodes: [
          { label: "Presentations", sub: "Gamma, Canva, Beautiful.ai", color: "purple" },
          { label: "Videos", sub: "Synthesia, Loom, HeyGen", color: "blue" },
          { label: "Quiz interactifs", sub: "Kahoot, Quizizz, H5P", color: "emerald" },
          { label: "Audio / Podcast", sub: "ElevenLabs, NotebookLM", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'IA democratise la creation de contenu pedagogique",
          "Gamma et Canva pour les presentations en minutes",
          "Synthesia et HeyGen pour les videos avec avatars IA",
          "Les LLM generent quiz, flashcards et jeux en secondes",
          "Le multimedia touche differents styles d'apprentissage"
        ]},
      ],
      quiz: [
        {
          question: "Quel outil genere des presentations a partir d'un simple texte ?",
          options: ["PowerPoint", "Gamma", "Excel", "Word"],
          correctIndex: 1,
          explanation: "Gamma genere des presentations completes et visuellement attractives a partir d'un simple texte ou d'un plan."
        },
        {
          question: "Quel outil cree des videos avec un avatar IA ?",
          options: ["Canva", "Kahoot", "Synthesia", "Anki"],
          correctIndex: 2,
          explanation: "Synthesia permet de creer des videos educatives avec un avatar IA qui presente votre contenu, sans avoir besoin de filmer."
        },
        {
          question: "Pourquoi le multimedia est-il important en pedagogie ?",
          options: ["C'est a la mode", "Il touche differents styles d'apprentissage", "Les eleves preferent les videos", "C'est obligatoire"],
          correctIndex: 1,
          explanation: "Le multimedia (texte, image, video, quiz) touche differents styles d'apprentissage, ameliorant la comprehension et la retention."
        },
        {
          question: "Quel outil permet de creer du contenu interactif pour un LMS ?",
          options: ["Word", "Excel", "H5P", "Zoom"],
          correctIndex: 2,
          explanation: "H5P permet de creer du contenu interactif (drag & drop, timeline, hotspot, quiz) integrable dans n'importe quel LMS."
        },
      ],
    },
    {
      number: 9,
      title: "Gamification et IA",
      description: "Rendre l'apprentissage ludique avec la gamification augmentee par l'IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "La Gamification Augmentee par l'IA" },
        { type: "paragraph", content: "La gamification applique les mecaniques du jeu a l'apprentissage : points, badges, classements, quetes, niveaux. L'IA pousse la gamification plus loin en personnalisant les defis, en adaptant la difficulte en temps reel, et en creant des scenarios uniques pour chaque apprenant." },
        { type: "subheading", content: "Les Mecaniques de Jeu en Education" },
        { type: "paragraph", content: "Points d'experience (XP) pour chaque activite completee. Badges pour les accomplissements specifiques. Classements pour la motivation sociale. Quetes et missions pour donner un sens narratif. Niveaux progressifs pour visualiser la progression." },
        { type: "subheading", content: "L'IA Personnalise le Jeu" },
        { type: "paragraph", content: "L'IA ajuste la difficulte pour que chaque eleve soit dans sa zone de flow (ni trop facile, ni trop difficile). Elle genere des quetes personnalisees basees sur les lacunes identifiees. Elle cree des scenarios narratifs uniques qui integrent les sujets a travailler." },
        { type: "subheading", content: "Outils de Gamification" },
        { type: "paragraph", content: "Kahoot et Quizizz pour les quiz gamifies en classe. Classcraft pour transformer la classe en RPG. Duolingo comme modele de gamification reussie. Les LLM pour generer des scenarios et des quetes personnalisees." },
        { type: "callout", content: "Attention : la gamification mal implementee peut etre contre-productive. Si les eleves se concentrent sur les points plutot que sur l'apprentissage, l'effet est negatif. Le jeu doit etre au service de la pedagogie, pas l'inverse." },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "Gamification et IA en education" },
        { type: "diagram", label: "Les Mecaniques de Gamification", flow: "horizontal", nodes: [
          { label: "XP et Points", sub: "Recompense pour chaque activite", color: "purple" },
          { label: "Badges", sub: "Accomplissements specifiques", color: "blue" },
          { label: "Quetes", sub: "Missions narratives personnalisees", color: "emerald" },
          { label: "Classements", sub: "Motivation sociale et competition", color: "amber" },
        ]},
        { type: "summary", items: [
          "La gamification applique les mecaniques du jeu a l'apprentissage",
          "L'IA personnalise difficulte, quetes et scenarios pour chaque eleve",
          "Zone de flow : ni trop facile, ni trop difficile — engagement optimal",
          "Outils : Kahoot, Quizizz, Classcraft, Duolingo",
          "Le jeu doit servir la pedagogie, pas l'inverse"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que la zone de flow en gamification ?",
          options: ["Le moment ou l'eleve s'ennuie", "Le niveau optimal de difficulte (ni trop facile, ni trop dur)", "Le classement des meilleurs eleves", "Le temps passe sur l'ecran"],
          correctIndex: 1,
          explanation: "La zone de flow est l'etat d'engagement optimal ou la difficulte est adaptee au niveau de l'apprenant — ni trop facile (ennui), ni trop difficile (frustration)."
        },
        {
          question: "Comment l'IA ameliore-t-elle la gamification ?",
          options: ["Elle cree des jeux video", "Elle personnalise la difficulte et les quetes pour chaque eleve", "Elle remplace les enseignants", "Elle supprime les examens"],
          correctIndex: 1,
          explanation: "L'IA ajuste la difficulte en temps reel, genere des quetes personnalisees basees sur les lacunes, et cree des scenarios narratifs uniques."
        },
        {
          question: "Quel est le risque d'une gamification mal implementee ?",
          options: ["Les eleves apprennent trop vite", "Les eleves se concentrent sur les points plutot que l'apprentissage", "Les jeux sont trop complexes", "Les parents s'inquietent"],
          correctIndex: 1,
          explanation: "Si les eleves se focalisent sur les points et le classement plutot que sur la comprehension, la gamification devient contre-productive."
        },
        {
          question: "Quel outil est un modele de gamification reussie en education ?",
          options: ["Excel", "Duolingo", "PowerPoint", "Zoom"],
          correctIndex: 1,
          explanation: "Duolingo est un modele de gamification educative reussie : XP, series, ligues, coeurs — tout est concu pour maintenir l'engagement et l'apprentissage."
        },
      ],
    },
    {
      number: 10,
      title: "Accessibilite et Inclusion",
      description: "Utiliser l'IA pour rendre l'education accessible a tous les apprenants.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA au Service de l'Inclusion" },
        { type: "paragraph", content: "L'IA est peut-etre l'outil le plus puissant que nous ayons jamais eu pour l'inclusion educative. Transcription en temps reel pour les sourds, synthese vocale pour les malvoyants, simplification de texte pour la dyslexie, traduction instantanee pour les allophones — les barrieres tombent." },
        { type: "subheading", content: "Handicap Auditif" },
        { type: "paragraph", content: "La transcription en temps reel (Whisper, Otter.ai) permet aux eleves sourds de suivre un cours oral. Les sous-titres IA sur les videos educatives sont desormais quasi parfaits. La langue des signes peut etre traduite par vision par ordinateur." },
        { type: "subheading", content: "Handicap Visuel" },
        { type: "paragraph", content: "La synthese vocale IA lit les documents avec une voix naturelle. La description d'images par IA (alt text automatique) rend le contenu visuel accessible. Les LLM peuvent reformater tout document en version accessible." },
        { type: "subheading", content: "Troubles de l'Apprentissage" },
        { type: "paragraph", content: "Pour la dyslexie : police adaptee, espacement augmente, texte simplifie par l'IA. Pour le TDAH : micro-learning, rappels, structuration. Pour les DYS : outils de dictee, reformulation, et exercices adaptes generes par l'IA." },
        { type: "subheading", content: "Barriere Linguistique" },
        { type: "paragraph", content: "Les eleves allophones beneficient de la traduction instantanee des cours, du materiel pedagogique traduit par l'IA, et de tuteurs multilingues. L'IA nivele le terrain pour tous, quelle que soit la langue maternelle." },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "IA et accessibilite en education" },
        { type: "key-point", content: "L'accessibilite n'est pas un \"bonus\" — c'est un droit. L'IA rend enfin l'education reellement accessible a tous, eliminant des barrieres qui existaient depuis des siecles." },
        { type: "diagram", label: "L'IA pour l'Accessibilite", flow: "horizontal", nodes: [
          { label: "Auditif", sub: "Transcription, sous-titres, LSF", color: "purple" },
          { label: "Visuel", sub: "Synthese vocale, alt text IA", color: "blue" },
          { label: "DYS / TDAH", sub: "Police adaptee, micro-learning", color: "emerald" },
          { label: "Langue", sub: "Traduction instantanee", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'IA elimine des barrieres educatives qui existaient depuis des siecles",
          "Transcription et sous-titres en temps reel pour les sourds",
          "Synthese vocale et description d'images pour les malvoyants",
          "Texte simplifie et micro-learning pour les troubles DYS et TDAH",
          "Traduction instantanee pour les eleves allophones"
        ]},
      ],
      quiz: [
        {
          question: "Quelle technologie IA aide les eleves sourds a suivre un cours oral ?",
          options: ["La generation d'images", "La transcription en temps reel", "La traduction automatique", "La synthese vocale"],
          correctIndex: 1,
          explanation: "La transcription en temps reel (Whisper, Otter.ai) convertit la parole en texte instantanement, permettant aux eleves sourds de suivre un cours oral."
        },
        {
          question: "Comment l'IA aide-t-elle les eleves dyslexiques ?",
          options: ["En leur donnant les reponses", "En proposant police adaptee, espacement augmente et texte simplifie", "En supprimant la lecture", "En remplacant l'ecrit par l'oral"],
          correctIndex: 1,
          explanation: "L'IA aide les dyslexiques avec des polices adaptees, un espacement augmente, et la simplification automatique de textes complexes."
        },
        {
          question: "L'accessibilite en education est :",
          options: ["Un bonus optionnel", "Un droit fondamental", "Reservee aux handicapes", "Trop couteuse a mettre en place"],
          correctIndex: 1,
          explanation: "L'accessibilite est un droit fondamental, pas un bonus. L'IA rend enfin possible une education reellement accessible a tous les apprenants."
        },
        {
          question: "Comment l'IA aide-t-elle les eleves allophones ?",
          options: ["En leur parlant plus fort", "Par la traduction instantanee des cours et du materiel pedagogique", "En les separant des autres eleves", "En simplifiant les examens"],
          correctIndex: 1,
          explanation: "La traduction instantanee des cours, du materiel et les tuteurs multilingues permettent aux eleves allophones de suivre l'enseignement dans leur langue."
        },
      ],
    },
    {
      number: 11,
      title: "Detecter l'Usage de l'IA par les Etudiants",
      description: "Identifier et gerer l'utilisation de l'IA dans les travaux des etudiants.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Le Defi de la Detection" },
        { type: "paragraph", content: "Depuis ChatGPT, la question de la triche a l'IA hante le monde educatif. Les etudiants utilisent les LLM pour generer des dissertations, resoudre des problemes, et traduire des textes. La detection est un defi complexe, et la course technologique entre generateurs et detecteurs n'a pas de gagnant clair." },
        { type: "subheading", content: "Les Outils de Detection" },
        { type: "paragraph", content: "Turnitin, GPTZero et Compilatio integrent des detecteurs d'IA. Ils analysent la perplexite (previsibilite du texte), la burstiness (variation de la complexite), et les patterns statistiques. Fiabilite estimee : 70-85% — ni parfait ni inutile." },
        { type: "subheading", content: "Les Limites de la Detection" },
        { type: "paragraph", content: "Les detecteurs produisent des faux positifs (textes humains marques comme IA) et des faux negatifs (textes IA non detectes). Un etudiant qui reformule ou melange IA et texte personnel est quasi indetectable. Les textes non anglophones sont encore moins bien detectes." },
        { type: "heading", content: "Au-Dela de la Detection : Repenser l'Evaluation" },
        { type: "paragraph", content: "Plutot que de jouer au chat et a la souris, de nombreux pedagogues recommandent de repenser l'evaluation : examens oraux, portfolios reflexifs, travaux en classe, presentations, processus documente (brouillons), et evaluations qui integrent l'IA de maniere encadree." },
        { type: "tip", content: "La meilleure defense contre la triche IA n'est pas un detecteur — c'est une evaluation qui valorise la reflexion personnelle, le processus, et l'oral. Un etudiant qui ne peut pas expliquer son propre travail sera toujours detecte." },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "Detecter et gerer l'usage de l'IA" },
        { type: "callout", content: "Accuser faussement un etudiant de triche a l'IA est un risque reel. Aucun detecteur n'est fiable a 100%. Utilisez les detecteurs comme un signal, jamais comme une preuve." },
        { type: "diagram", label: "Strategies Face a l'IA Etudiante", flow: "horizontal", nodes: [
          { label: "Detecter", sub: "Turnitin, GPTZero (70-85%)", color: "blue" },
          { label: "Prevenir", sub: "Evaluations en classe, oral", color: "purple" },
          { label: "Integrer", sub: "Usage encadre et transparent", color: "emerald" },
          { label: "Evaluer autrement", sub: "Portfolio, processus, reflexion", color: "amber" },
        ]},
        { type: "summary", items: [
          "Les detecteurs d'IA sont fiables a 70-85% — signal, pas preuve",
          "Faux positifs et faux negatifs sont frequents",
          "Repenser l'evaluation est plus efficace que la detection",
          "Examens oraux, portfolios et processus documente sont robustes",
          "L'integration encadree de l'IA est une alternative a l'interdiction"
        ]},
      ],
      quiz: [
        {
          question: "Quelle est la fiabilite estimee des detecteurs d'IA actuels ?",
          options: ["30-40%", "50-60%", "70-85%", "95-100%"],
          correctIndex: 2,
          explanation: "Les detecteurs d'IA comme Turnitin et GPTZero ont une fiabilite estimee entre 70 et 85% — suffisant pour un signal, insuffisant pour une preuve."
        },
        {
          question: "Quel est le risque principal des detecteurs d'IA ?",
          options: ["Ils sont trop lents", "Les faux positifs (accuser a tort un etudiant)", "Ils sont trop chers", "Ils ne fonctionnent qu'en anglais"],
          correctIndex: 1,
          explanation: "Les faux positifs — marquer un texte humain comme genere par l'IA — sont un risque reel et grave qui peut nuire a un etudiant innocent."
        },
        {
          question: "Quelle est la meilleure strategie face a l'usage de l'IA par les etudiants ?",
          options: ["Interdire completement l'IA", "Repenser l'evaluation avec de l'oral, du processus et de la reflexion", "Utiliser uniquement des detecteurs", "Ignorer le probleme"],
          correctIndex: 1,
          explanation: "Repenser l'evaluation (oral, portfolio, processus documente) est plus efficace que la detection pure. Un etudiant qui ne peut pas expliquer son travail sera toujours identifie."
        },
        {
          question: "Les detecteurs d'IA doivent etre utilises comme :",
          options: ["Une preuve definitive de triche", "Un signal a investiguer, jamais une preuve", "Un remplacement de la correction", "Un outil de notation"],
          correctIndex: 1,
          explanation: "Aucun detecteur n'est fiable a 100%. Ils doivent etre utilises comme un signal qui declenche une investigation, jamais comme une preuve suffisante."
        },
      ],
    },
    {
      number: 12,
      title: "L'Ecole du Futur",
      description: "Imaginer l'education de 2030 : tendances, defis et opportunites.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Vers l'Ecole de 2030" },
        { type: "paragraph", content: "L'ecole du futur ne ressemblera plus a celle d'aujourd'hui. L'IA, la realite augmentee, les espaces d'apprentissage flexibles, et les parcours personnalises transformeront radicalement l'experience educative. Mais certaines choses ne changeront pas : le besoin de connexion humaine, de socialisation, et de guidance." },
        { type: "subheading", content: "Tendance 1 : L'Hyper-Personnalisation" },
        { type: "paragraph", content: "Chaque eleve aura un parcours unique, adapte en temps reel par l'IA. Les cours magistraux cederont la place a des sessions de projet, de debat, et de collaboration. L'enseignant deviendra un coach et un facilitateur plutot qu'un transmetteur de connaissances." },
        { type: "subheading", content: "Tendance 2 : L'Apprentissage Immersif" },
        { type: "paragraph", content: "La realite virtuelle et augmentee permettront de visiter la Rome antique en histoire, de manipuler des molecules en chimie, et de dissequer une grenouille virtuelle en biologie. L'apprentissage experiential deviendra la norme, pas l'exception." },
        { type: "subheading", content: "Tendance 3 : Les Competences du 21e Siecle" },
        { type: "paragraph", content: "Pensee critique, creativite, collaboration, communication, litteratie numerique, et intelligence emotionnelle remplaceront la memorisation. Savoir utiliser l'IA sera aussi fondamental que savoir lire et ecrire." },
        { type: "subheading", content: "Tendance 4 : L'Apprentissage Continu" },
        { type: "paragraph", content: "La formation ne s'arretera plus au diplome. L'apprentissage continu, les micro-certifications, et les parcours modulaires deviendront la norme. L'IA accompagnera chaque individu tout au long de sa vie, adaptant les recommandations a l'evolution de sa carriere." },
        { type: "video", videoId: "dQw4w9WgXcQ", label: "L'ecole du futur avec l'IA" },
        { type: "key-point", content: "La technologie evoluera, mais le coeur de l'education restera humain. L'ecole du futur ne sera pas une salle pleine d'ecrans — ce sera un lieu ou la technologie libere du temps pour la relation, la creativite, et l'epanouissement." },
        { type: "diagram", label: "L'Ecole du Futur : 4 Piliers", flow: "horizontal", nodes: [
          { label: "Personnalisation", sub: "Parcours unique par eleve", color: "purple" },
          { label: "Immersion", sub: "VR/AR pour l'experiential", color: "blue" },
          { label: "Competences", sub: "Pensee critique, creativite, IA", color: "emerald" },
          { label: "Continu", sub: "Apprentissage tout au long de la vie", color: "amber" },
        ]},
        { type: "diagram", label: "Le Role de l'Enseignant en 2030", flow: "vertical", nodes: [
          { label: "Coach", sub: "Accompagnement individualise", color: "purple" },
          { label: "Facilitateur", sub: "Orchestrer projets et collaborations", color: "blue" },
          { label: "Mentor", sub: "Developpement personnel et orientation", color: "emerald" },
          { label: "Expert", sub: "Expertise pedagogique et disciplinaire", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'ecole du futur sera hyper-personnalisee grace a l'IA",
          "VR/AR pour l'apprentissage immersif et experiential",
          "Competences du 21e siecle : pensee critique, creativite, litteratie IA",
          "Apprentissage continu tout au long de la vie",
          "L'enseignant evolue vers un role de coach et facilitateur"
        ]},
      ],
      quiz: [
        {
          question: "Comment evoluera le role de l'enseignant dans l'ecole du futur ?",
          options: ["Il disparaitra", "Il deviendra coach, facilitateur et mentor", "Il se limitera a la discipline", "Il sera remplace par des robots"],
          correctIndex: 1,
          explanation: "L'enseignant evoluera d'un transmetteur de connaissances vers un coach, facilitateur et mentor, guide par la technologie mais centre sur l'humain."
        },
        {
          question: "Quelle competence sera aussi fondamentale que savoir lire et ecrire ?",
          options: ["Savoir coder", "Savoir utiliser l'IA", "Savoir jouer d'un instrument", "Savoir dessiner"],
          correctIndex: 1,
          explanation: "Savoir utiliser l'IA sera aussi fondamental que la lecture et l'ecriture — une litteratie essentielle pour le 21e siecle."
        },
        {
          question: "Que permettra la realite virtuelle en education ?",
          options: ["Remplacer les enseignants", "Des experiences d'apprentissage immersives (visiter la Rome antique, manipuler des molecules)", "Supprimer les devoirs", "Reduire le cout de l'education"],
          correctIndex: 1,
          explanation: "La VR/AR permettra des experiences immersives : visiter des lieux historiques, manipuler des molecules, dissequer virtuellement — l'apprentissage experiential."
        },
        {
          question: "Qu'est-ce qui ne changera PAS dans l'ecole du futur ?",
          options: ["Les methodes d'enseignement", "Le besoin de connexion humaine et de socialisation", "Les manuels scolaires", "Les examens ecrits"],
          correctIndex: 1,
          explanation: "Malgre les avancees technologiques, le besoin fondamental de connexion humaine, de socialisation et de guidance par un adulte bienveillant ne changera pas."
        },
      ],
    },
  ],
};

export default content;
