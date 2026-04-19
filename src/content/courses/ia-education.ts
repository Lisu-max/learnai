import type { CourseContent } from "../types";

const content: CourseContent = {
  slug: "ia-education",
  chapters: [
    {
      number: 1,
      title: "Introduction : L'IA dans l'Éducation",
      description: "Comprendre comment l'IA transforme l'enseignement et l'apprentissage.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA Révolutionne l'Éducation" },
        { type: "paragraph", content: "L'éducation vit une transformation sans précédent. L'IA permet de personnaliser l'apprentissage pour chaque élève, d'automatiser les tâches administratives des enseignants, et de rendre l'éducation accessible à tous. En 2026, ignorer l'IA en éducation, c'est enseigner avec une main attachée dans le dos." },
        { type: "paragraph", content: "Cette révolution ne remplace pas les enseignants — elle les augmente. Un professeur assisté par l'IA peut mieux différencier sa pédagogie, détecter plus tôt les difficultés, et se concentrer sur ce qui compte : la relation avec ses élèves." },
        { type: "callout", content: "UNESCO 2026 : 60% des systèmes éducatifs dans le monde expérimentent des outils IA. La France a intégré l'IA dans les programmés officiels du secondaire. La question n'est plus \"faut-il utiliser l'IA ?\" mais \"comment bien l'utiliser ?\"." },
        { type: "video", videoId: { fr: "XKqhmtg6EVg", en: "t9gmyvf7JYo" },
      videoDurationMinutes: 10, label: "L'IA dans l'éducation — vue d'ensemble" },
        { type: "heading", content: "Les Grands Axes de l'IA Éducative" },
        { type: "paragraph", content: "L'IA en éducation se déploie sur 5 axes : la personnalisation de l'apprentissage (parcours adaptatifs), l'assistance aux enseignants (correction, création de contenus), l'accessibilité (traduction, transcription, adaptation), l'évaluation (formative et sommative), et l'administration (gestion automatisée)." },
        { type: "key-point", content: "L'IA est un outil, pas une finalité. L'objectif n'est pas de mettre de l'IA partout, mais d'utiliser l'IA là où elle apporte une réelle valeur pédagogique pour les enseignants et les apprenants." },
        { type: "diagram", label: "Les 5 Axes de l'IA en Éducation", flow: "horizontal", nodes: [
          { label: "Personnalisation", sub: "Parcours adaptatifs", color: "purple" },
          { label: "Assistance", sub: "Outils pour enseignants", color: "blue" },
          { label: "Accessibilité", sub: "Inclusion et adaptation", color: "emerald" },
          { label: "Évaluation", sub: "Correction automatisée", color: "amber" },
          { label: "Administration", sub: "Gestion automatisée", color: "pink" },
        ]},
        { type: "tip", content: "Commencez par observer comment vos élèves ou collègues utilisent déjà l'IA (ChatGPT, etc.). Comprendre les usages existants est la première étape pour une intégration pédagogique réussie." },
        { type: "summary", items: [
          "L'IA transforme l'éducation sans remplacer les enseignants",
          "60% des systèmes éducatifs expérimentent des outils IA",
          "5 axes : personnalisation, assistance, accessibilité, évaluation, administration",
          "L'IA est un outil, pas une finalité pédagogique",
          "La question est \"comment bien l'utiliser\", pas \"faut-il l'utiliser\""
        ]},
      ],
      quiz: [
        {
          question: "Quel est le principal avantage de l'IA pour les enseignants ?",
          options: ["Remplacer les enseignants", "Les augmenter pour mieux différencier et se concentrer sur la relation élève", "Supprimer les devoirs", "Automatiser tous les cours"],
          correctIndex: 1,
          explanation: "L'IA augmente les enseignants : meilleure différenciation pédagogique, détection précoce des difficultés, et plus de temps pour la relation avec les élèves."
        },
        {
          question: "Combien de systèmes éducatifs expérimentent l'IA en 2026 ?",
          options: ["20%", "40%", "60%", "90%"],
          correctIndex: 2,
          explanation: "Selon l'UNESCO, 60% des systèmes éducatifs dans le monde expérimentent des outils IA en 2026."
        },
        {
          question: "Quels sont les 5 axes de l'IA en éducation ?",
          options: ["Code, design, marketing, vente, finance", "Personnalisation, assistance, accessibilité, évaluation, administration", "Lecture, écriture, calcul, sciences, langues", "Primaire, collège, lycée, université, formation"],
          correctIndex: 1,
          explanation: "Les 5 axes sont : personnalisation de l'apprentissage, assistance aux enseignants, accessibilité, évaluation automatisée, et administration."
        },
        {
          question: "Quelle est la bonne approche pour intégrer l'IA en éducation ?",
          options: ["Mettre de l'IA partout", "L'utiliser là où elle apporte une réelle valeur pédagogique", "Interdire l'IA dans les écoles", "Attendre que la technologie soit parfaite"],
          correctIndex: 1,
          explanation: "L'IA est un outil, pas une finalité. Il faut l'utiliser de manière ciblée, là où elle apporte une réelle valeur pour les enseignants et les apprenants."
        },
      ],
    },
    {
      number: 2,
      title: "Outils IA pour les Enseignants",
      description: "Découvrir les meilleurs outils IA pour gagner du temps et enrichir ses cours.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "La Boîte a Outils IA de l'Enseignant" },
        { type: "paragraph", content: "Les enseignants disposent aujourd'hui d'un arsenal d'outils IA pour gagner du temps et enrichir leur pédagogie. De la préparation de cours a la correction, en passant par la création de supports visuels, l'IA est le meilleur assistant que vous n'ayez jamais eu." },
        { type: "subheading", content: "ChatGPT et Claude pour la Préparation" },
        { type: "paragraph", content: "Les LLM sont idéaux pour générer des plans de cours, des exercices différenciés, des sujets d'examen, des grilles d'évaluation, et des fiches de révision. En quelques prompts, vous obtenez un support que vous auriez mis des heures a créer." },
        { type: "subheading", content: "Outils de Création de Contenu" },
        { type: "paragraph", content: "Canva (design), Gamma (présentations), Midjourney (illustrations), ElevenLabs (narration audio), et Synthesia (vidéos avec avatar) permettent de créer des supports pédagogiques professionnels sans compétence technique." },
        { type: "subheading", content: "Outils de Correction et Feedback" },
        { type: "paragraph", content: "Grammarly et LanguageTool pour la correction linguistique, Turnitin pour le plagiat, et les LLM pour le feedback personnalisé sur les copies. L'IA peut générer un feedback constructif et détaillé en quelques secondes." },
        { type: "prompt-example", prompt: "Cree 5 exercices différenciés (3 niveaux) sur les fractions pour une classe de CM2. Niveau 1 : découverte, Niveau 2 : application, Niveau 3 : approfondissement. Inclus les corrections.", result: "Exercices Fractions CM2 — 3 Niveaux\n\nNiveau 1 (Découverte) :\n1. Colorie 1/4 du rectangle\n2. Ecris la fraction représentée par le dessin\n\nNiveau 2 (Application) :\n3. Compare 2/3 et 3/4 (utilise les fractions équivalentes)\n4. Additionne 1/4 + 2/4\n\nNiveau 3 (Approfondissement) :\n5. Paul mange 2/5 de sa pizza. Marie mange 1/3 de la même pizza. Qui a mange le plus ?\n\nCorrections détaillées jointes pour chaque exercice." },
        { type: "video", videoId: "EEbGYRW7feM",
      videoDurationMinutes: 9, label: "Les meilleurs outils IA pour enseignants" },
        { type: "diagram", label: "La Boîte a Outils IA de l'Enseignant", flow: "horizontal", nodes: [
          { label: "Préparation", sub: "ChatGPT, Claude, Perplexity", color: "purple" },
          { label: "Création", sub: "Canva, Gamma, Midjourney", color: "blue" },
          { label: "Correction", sub: "Grammarly, LLM feedback", color: "emerald" },
          { label: "Engagement", sub: "Kahoot, Quizizz, Mentimeter", color: "amber" },
        ]},
        { type: "tip", content: "Creez-vous une bibliotheque de prompts pour vos tâches recurrentes : génération d'exercices, differentiation, sujets d'examen, feedback de copies. Vous gagnerez encore plus de temps." },
        { type: "summary", items: [
          "Les LLM generent plans de cours, exercices et sujets en minutes",
          "Canva, Gamma, Midjourney pour les supports visuels professionnels",
          "L'IA génère du feedback personnalisé sur les copies",
          "Une bibliotheque de prompts optimisé le gain de temps",
          "L'IA est un assistant, l'enseignant garde le contrôle pédagogique"
        ]},
      ],
      quiz: [
        {
          question: "Quel est le meilleur usage des LLM pour un enseignant ?",
          options: ["Remplacer les cours", "Générer des exercices, plans de cours et sujets d'examen", "Surveiller les élèves", "Remplacer les manuels scolaires"],
          correctIndex: 1,
          explanation: "Les LLM excellent dans la génération de contenu pédagogique : exercices différenciés, plans de cours, sujets d'examen, fiches de révision."
        },
        {
          question: "Quel outil IA est idéal pour créer des présentations pédagogiques ?",
          options: ["Excel", "Gamma", "Grammarly", "Turnitin"],
          correctIndex: 1,
          explanation: "Gamma génère des présentations professionnelles à partir d'un simple texte, idéales pour les cours et conférences pédagogiques."
        },
        {
          question: "Comment l'IA peut-elle aider a la correction ?",
          options: ["En remplacant complètement l'enseignant", "En generant du feedback personnalisé et détaillé rapidement", "En donnant des notes aléatoires", "En supprimant les examens"],
          correctIndex: 1,
          explanation: "L'IA peut générer un feedback constructif et détaillé sur les copies en quelques secondes, que l'enseignant validé et personalise ensuite."
        },
        {
          question: "Que recommandé-t-on de créer pour optimiser l'usage de l'IA ?",
          options: ["Un site web", "Une bibliotheque de prompts pour les tâches recurrentes", "Un compte sur chaque plateforme", "Un blog pédagogique"],
          correctIndex: 1,
          explanation: "Une bibliotheque de prompts pour les tâches recurrentes (exercices, differentiation, feedback) optimisé le gain de temps de l'enseignant."
        },
      ],
    },
    {
      number: 3,
      title: "Créer des Cours avec l'IA",
      description: "Concevoir des séquences pédagogiques complètes assistées par l'IA.",
      estimatedMinutes: 9,
      sections: [
        { type: "heading", content: "L'IA comme Co-Concepteur Pédagogique" },
        { type: "paragraph", content: "Créer une séquence pédagogique est un travail complexe : objectifs d'apprentissage, progression, activités, supports, évaluation. L'IA peut assister chaque étape tout en laissant l'enseignant maître de la vision pédagogique et de l'adaptation au contexte local." },
        { type: "subheading", content: "Définir les Objectifs avec Bloom" },
        { type: "paragraph", content: "La taxonomie de Bloom structure les objectifs d'apprentissage en 6 niveaux : mémoriser, comprendre, appliquer, analyser, évaluer, créer. L'IA peut générer des objectifs formules selon Bloom pour n'importe quel sujet et niveau." },
        { type: "subheading", content: "Générer une Séquence Complète" },
        { type: "paragraph", content: "Donnez a Claude ou ChatGPT : le sujet, le niveau des élèves, la duree, et les objectifs. L'IA génère une séquence complète : accroche, activités, supports, différenciation, évaluation formative et sommative." },
        { type: "subheading", content: "Differentiation Automatique" },
        { type: "paragraph", content: "L'IA excelle dans la différenciation pédagogique. À partir d'un exercice standard, elle génère 3 niveaux de difficulté, des aides methodologiques, et des extensions pour les élèves avances — en quelques secondes." },
        { type: "prompt-example", prompt: "Cree une séquence pédagogique complète de 3 seances (1h chacune) sur la Révolution française pour une classe de 4eme. Inclus les objectifs Bloom, les activités, la différenciation (3 niveaux), et l'évaluation formative.", result: "Séquence : La Révolution Française (3 seances)\n\nSeance 1 — Les Causes (1h)\nObjectifs Bloom : mémoriser les causes, comprendre le contexte\nAccroche : image du Serment du Jeu de Paume (5 min)\nActivite : carte mentale collaborative (25 min)\nDifferenciation :\n- N1 : carte mentale pre-remplie a compléter\n- N2 : carte mentale à construire avec mots-clés\n- N3 : carte mentale libre + sources primaires\nEvaluation formative : quiz Kahoot 5 questions (10 min)\n\nSeance 2 — Les Événements Clés (1h)\n[...suite détaillée]\n\nSeance 3 — Les Consequences (1h)\n[...suite détaillée + évaluation sommative]" },
        { type: "video", videoId: { fr: "oeli5xkFZJo", en: "JhM7PWCv2EY" },
      videoDurationMinutes: 14, label: "Créer des cours avec l'IA" },
        { type: "callout", content: "L'IA génère un excellent point de depart, mais l'enseignant doit toujours adapter au contexte : niveau réel des élèves, matériel disponible, programmé officiel, et sa propre vision pédagogique." },
        { type: "diagram", label: "Le Processus de Création de Cours IA", flow: "horizontal", nodes: [
          { label: "Objectifs Bloom", sub: "6 niveaux de compétences", color: "purple" },
          { label: "Génération IA", sub: "Séquence, activités, supports", color: "blue" },
          { label: "Différenciation", sub: "3 niveaux automatiques", color: "emerald" },
          { label: "Adaptation", sub: "Contexte local par l'enseignant", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'IA est un co-concepteur, l'enseignant reste maître de la pédagogie",
          "La taxonomie de Bloom structure les objectifs d'apprentissage",
          "L'IA génère des séquences complètes avec différenciation",
          "3 niveaux de différenciation en quelques secondes",
          "L'adaptation au contexte local reste essentielle"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que la taxonomie de Bloom ?",
          options: ["Un logiciel éducatif", "Une classification en 6 niveaux des objectifs d'apprentissage", "Un type de fleur utilisée en biologie", "Une méthode de notation"],
          correctIndex: 1,
          explanation: "La taxonomie de Bloom structure les objectifs d'apprentissage en 6 niveaux : mémoriser, comprendre, appliquer, analyser, évaluer, créer."
        },
        {
          question: "Comment l'IA aide-t-elle a la différenciation ?",
          options: ["Elle séparé les élèves par niveau", "Elle génère automatiquement 3 niveaux de difficulté pour chaque exercice", "Elle remplace la différenciation", "Elle note les élèves"],
          correctIndex: 1,
          explanation: "L'IA génère 3 niveaux de difficulté, des aides methodologiques et des extensions pour les élèves avances à partir d'un seul exercice."
        },
        {
          question: "Que doit-on donner à l'IA pour générer une séquence pédagogique ?",
          options: ["Uniquement le titre du cours", "Le sujet, le niveau, la duree et les objectifs", "Les noms des élèves", "Le budget de l'école"],
          correctIndex: 1,
          explanation: "Pour une séquence de qualité, precisez le sujet, le niveau des élèves, la duree disponible, et les objectifs d'apprentissage vises."
        },
        {
          question: "Quel rôle l'enseignant garde-t-il dans la création de cours avec l'IA ?",
          options: ["Aucun, l'IA fait tout", "L'adaptation au contexte local et la vision pédagogique", "Uniquement la notation", "Uniquement la discipline"],
          correctIndex: 1,
          explanation: "L'enseignant adapte au contexte (niveau réel des élèves, matériel, programmé) et apporte sa vision pédagogique — l'IA est un point de depart."
        },
      ],
    },
    {
      number: 4,
      title: "Évaluation et Correction Automatisees",
      description: "Automatiser l'évaluation formative et sommative avec l'IA.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'IA Transforme l'Évaluation" },
        { type: "paragraph", content: "La correction et l'évaluation consomment 30 à 40% du temps des enseignants. L'IA peut automatiser la création de sujets, la correction des QCM et réponses courtes, et générer du feedback personnalisé. L'enseignant est libere pour se concentrer sur l'évaluation des compétences complexes." },
        { type: "subheading", content: "Génération Automatique de Sujets" },
        { type: "paragraph", content: "Les LLM generent des sujets d'examen alignes sur les objectifs Bloom, avec bareme, corrige et grille d'évaluation. Ils peuvent produire plusieurs versions d'un même sujet pour éviter la triche, en maintenant le même niveau de difficulté." },
        { type: "subheading", content: "Correction IA : Ce Qui Marche" },
        { type: "paragraph", content: "L'IA est excellente pour corriger les QCM, les questions a réponse courte, et les exercices de langue. Elle est bonne pour le feedback sur les dissertations (structure, argumentation, orthographe). Elle est moins fiable pour l'évaluation de la créativité et de l'originalite." },
        { type: "subheading", content: "Feedback Personnalisé à l'Échelle" },
        { type: "paragraph", content: "Le plus grand apport de l'IA est le feedback personnalisé. Au lieu d'un simple \"bien\" ou \"a revoir\", l'IA génère un commentaire détaillé pour chaque élève : points forts, points a améliorer, conseils spécifiques, et ressources recommandées." },
        { type: "tip", content: "Utilisez l'IA pour la première passe de correction (détection d'erreurs, feedback brut), puis revisez et personnalisez. Ce workflow hybride divise par 3 le temps de correction tout en maintenant la qualité." },
        { type: "video", videoId: { fr: "XKqhmtg6EVg", en: "t9gmyvf7JYo" },
      videoDurationMinutes: 10, label: "Évaluation et correction avec l'IA" },
        { type: "key-point", content: "L'IA excelle dans l'évaluation formative (feedback continu pour l'apprentissage) plus que dans l'évaluation sommative (notation finale). Utilisez-la pour donner plus de feedback, plus souvent." },
        { type: "diagram", label: "Ce Que l'IA Corrige Bien (ou Pas)", flow: "horizontal", nodes: [
          { label: "Excellent", sub: "QCM, réponses courtes, langue", color: "emerald" },
          { label: "Bon", sub: "Dissertations (structure, ortho)", color: "blue" },
          { label: "Limite", sub: "Créativité, originalite, pensee critique", color: "amber" },
        ]},
        { type: "prompt-example", prompt: "Corrige cette dissertation de 3eme sur les inégalités mondiales. Donne un feedback constructif avec points forts, axes d'amélioration, et une note sur 20 avec justification.", result: "Feedback Dissertation — Inegalites Mondiales\n\nPoints forts :\n- Introduction structuree avec problematique claire\n- Bon usage de chiffres (IDH, PIB)\n- Conclusion qui ouvre le débat\n\nAxes d'amélioration :\n- Paragraphes trop longs — decoupez en sous-arguments\n- Manque de transitions entre les parties\n- Orthographe : 4 fautes d'accord a corriger (surlignees)\n\nNote : 13/20 — Bonne compréhension du sujet, ameliorez la structure argumentative pour progresser." },
        { type: "summary", items: [
          "La correction consomme 30-40% du temps des enseignants",
          "L'IA excelle pour QCM, réponses courtes, et feedback linguistique",
          "Le feedback personnalisé à l'échelle est le plus grand apport",
          "Workflow hybride : IA en première passe, enseignant en validation",
          "L'IA est meilleure en évaluation formative qu'en sommative"
        ]},
      ],
      quiz: [
        {
          question: "Quel pourcentage du temps des enseignants est consacre a la correction ?",
          options: ["10-15%", "20-25%", "30-40%", "50-60%"],
          correctIndex: 2,
          explanation: "La correction et l'évaluation consomment 30 à 40% du temps des enseignants — c'est un domaine ou l'IA a un impact majeur."
        },
        {
          question: "Dans quel type d'évaluation l'IA excelle-t-elle ?",
          options: ["L'évaluation de la créativité", "La correction de QCM et réponses courtes", "L'évaluation de l'originalite", "La notation de projets artistiques"],
          correctIndex: 1,
          explanation: "L'IA est excellente pour les QCM, réponses courtes et exercices de langue. Elle est moins fiable pour la créativité et l'originalite."
        },
        {
          question: "Quel est le plus grand apport de l'IA en évaluation ?",
          options: ["La notation automatique", "Le feedback personnalisé à l'échelle", "La surveillance des examens", "La génération de diplômes"],
          correctIndex: 1,
          explanation: "Le feedback personnalisé est le plus grand apport : chaque élève reçoit un commentaire détaillé au lieu d'un simple 'bien' ou 'a revoir'."
        },
        {
          question: "Quel workflow de correction est recommandé avec l'IA ?",
          options: ["L'IA corrige seule", "IA en première passe, enseignant en validation", "L'enseignant corrige seul", "Les élèves se corrigent entre eux"],
          correctIndex: 1,
          explanation: "Le workflow hybride (IA en première passe, enseignant en validation) divise par 3 le temps de correction tout en maintenant la qualité."
        },
      ],
    },
    {
      number: 5,
      title: "Personnalisation de l'Apprentissage",
      description: "Adapter le parcours à chaque apprenant grâce à l'IA.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'Apprentissage Personnalisé par l'IA" },
        { type: "paragraph", content: "Le reve de chaque enseignant : adapter son cours à chaque élève. Avec 30 élèves par classe, c'est impossible manuellement. L'IA rend enfin ce reve accessible en adaptant le contenu, le rythme et les exercices au profil de chaque apprenant." },
        { type: "subheading", content: "Diagnostic des Lacunes" },
        { type: "paragraph", content: "Les plateformes adaptatives (Khan Academy, DreamBox, Duolingo) evaluent le niveau de l'apprenant en continu et identifient précisément ses lacunes. Au lieu de répéter un chapitre entier, l'élève travaille uniquement sur les notions qu'il ne maîtrise pas." },
        { type: "subheading", content: "Parcours Adaptatifs" },
        { type: "paragraph", content: "L'IA ajuste en temps réel : si l'élève réussit facilement, elle augmente la difficulté. S'il bloque, elle propose des exercices supplémentaires, des explications alternatives, ou des ressources complémentaires. Chaque parcours est unique." },
        { type: "subheading", content: "Tuteurs IA Personnels" },
        { type: "paragraph", content: "Les chatbots éducatifs comme Khanmigo (Khan Academy) ou les LLM configures en mode tuteur offrent un accompagnement 1-a-1 permanent. L'élève peut poser des questions à tout moment, sans craindre le jugement, et recevoir des explications adaptées à son niveau." },
        { type: "callout", content: "Étude Stanford 2025 : les élèves utilisant un tuteur IA personnalise progressent 2x plus vite que le groupe temoin, avec une amélioration de 30% de la retention des connaissances à long terme." },
        { type: "video", videoId: "EEbGYRW7feM",
      videoDurationMinutes: 9, label: "Personnalisation de l'apprentissage avec l'IA" },
        { type: "diagram", label: "L'Apprentissage Adaptatif en Action", flow: "cycle", nodes: [
          { label: "Diagnostic", sub: "Évaluer le niveau et les lacunes", color: "blue" },
          { label: "Adaptation", sub: "Contenu ajuste en temps réel", color: "purple" },
          { label: "Feedback", sub: "Retour immédiat et personnalisé", color: "emerald" },
        ]},
        { type: "key-point", content: "La personnalisation ne signifie pas isoler l'élève derrière un écran. Les meilleurs résultats combinent le travail adaptatif individuel avec l'IA et les interactions sociales en classe." },
        { type: "summary", items: [
          "L'IA personnalise contenu, rythme et exercices pour chaque élève",
          "Les plateformes adaptatives identifient les lacunes en continu",
          "Les tuteurs IA offrent un accompagnement 1-a-1 permanent",
          "Les élèves progressent 2x plus vite avec un tuteur IA",
          "Combiner IA individuelle et interactions sociales en classe"
        ]},
      ],
      quiz: [
        {
          question: "Que fait une plateforme d'apprentissage adaptative ?",
          options: ["Elle donne le même contenu à tous", "Elle ajuste contenu et difficulté selon le niveau de chaque élève", "Elle remplace l'enseignant", "Elle n'est utile que pour les langues"],
          correctIndex: 1,
          explanation: "Les plateformes adaptatives evaluent le niveau de chaque apprenant en continu et ajustent le contenu, la difficulté et le rythme en temps réel."
        },
        {
          question: "De combien les élèves avec tuteur IA progressent-ils plus vite ?",
          options: ["10% plus vite", "50% plus vite", "2x plus vite", "5x plus vite"],
          correctIndex: 2,
          explanation: "Selon une étude Stanford 2025, les élèves utilisant un tuteur IA personnalise progressent 2x plus vite que le groupe temoin."
        },
        {
          question: "Quel est l'avantage d'un tuteur IA pour un élève ?",
          options: ["Il remplace le professeur", "Il offre un accompagnement 1-a-1 sans jugement, disponible 24/7", "Il donne les réponses aux examens", "Il est gratuit"],
          correctIndex: 1,
          explanation: "Le tuteur IA offre un accompagnement personnalisé, permanent, sans crainte du jugement, avec des explications adaptees au niveau de l'élève."
        },
        {
          question: "La personnalisation signifie-t-elle isoler l'élève derrière un écran ?",
          options: ["Oui, c'est le principe", "Non, il faut combiner IA individuelle et interactions sociales", "Oui, pour éviter les distractions", "L'écran est obligatoire"],
          correctIndex: 1,
          explanation: "Les meilleurs résultats combinent le travail adaptatif individuel avec l'IA et les interactions sociales en classe — la socialisation reste essentielle."
        },
      ],
    },
    {
      number: 6,
      title: "L'IA pour les Étudiants",
      description: "Comment les étudiants peuvent utiliser l'IA pour mieux apprendre.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA comme Outil d'Apprentissage" },
        { type: "paragraph", content: "Les étudiants qui utilisent l'IA intelligemment apprennent mieux et plus vite. Mais il y a une différence fondamentale entre utiliser l'IA pour comprendre et l'utiliser pour tricher. Ce chapitre enseigné l'usage productif et ethique de l'IA par les étudiants." },
        { type: "subheading", content: "Techniques d'Étude avec l'IA" },
        { type: "paragraph", content: "Demander à l'IA d'expliquer un concept de 3 façons différentes. Générer des flashcards avec Anki + ChatGPT. Créer des quiz de révision. Résumer des chapitres. Se faire interroger par un chatbot. Transformer ses notes en fiches structurees." },
        { type: "subheading", content: "Recherche et Rédaction" },
        { type: "paragraph", content: "Perplexity pour la recherche sourcer. Claude pour structurer un plan de dissertation. ChatGPT pour reformuler et améliorer un texte. L'IA aide à structurer la pensee, pas a la remplacer. L'étudiant doit toujours apporter ses propres idées et analyses." },
        { type: "subheading", content: "La Méthode Feynman + IA" },
        { type: "paragraph", content: "Expliquez un concept à l'IA comme si elle était un enfant de 10 ans. Si l'IA détecte des erreurs ou des lacunes dans votre explication, c'est que vous ne maitrisez pas encore le sujet. C'est la méthode Feynman augmentée — et c'est extrêmement efficace." },
        { type: "tip", content: "Règle d'or : si vous ne pouvez pas expliquer un concept sans l'IA, c'est que vous ne l'avez pas compris. L'IA est un outil pour approfondir votre compréhension, pas pour la remplacer." },
        { type: "video", videoId: { fr: "oeli5xkFZJo", en: "JhM7PWCv2EY" },
      videoDurationMinutes: 14, label: "L'IA pour les étudiants — guide pratique" },
        { type: "diagram", label: "Usages Productifs vs Contre-Productifs", flow: "horizontal", nodes: [
          { label: "Productif", sub: "Expliquer, quizzer, structurer", color: "emerald" },
          { label: "Limite OK", sub: "Reformuler, corriger, résumer", color: "blue" },
          { label: "Contre-productif", sub: "Copier-coller sans comprendre", color: "pink" },
        ]},
        { type: "summary", items: [
          "L'IA est un outil d'apprentissage puissant utilise intelligemment",
          "Techniques : flashcards, quiz, explications multiples, méthode Feynman",
          "Perplexity pour la recherche, Claude pour la structure, ChatGPT pour la rédaction",
          "La règle d'or : si vous ne pouvez pas expliquer sans l'IA, vous n'avez pas compris",
          "L'IA aide à structurer la pensee, pas a la remplacer"
        ]},
      ],
      quiz: [
        {
          question: "Quelle est la méthode Feynman augmentée par l'IA ?",
          options: ["Demander à l'IA de faire ses devoirs", "Expliquer un concept à l'IA comme a un enfant et identifier ses lacunes", "Memoriser les réponses de l'IA", "Copier les explications de l'IA"],
          correctIndex: 1,
          explanation: "La méthode Feynman augmentée consiste à expliquer un concept à l'IA comme a un enfant de 10 ans. Si l'IA détecte des erreurs, c'est que vous n'avez pas compris."
        },
        {
          question: "Quel outil est recommandé pour la recherche sourcee ?",
          options: ["ChatGPT", "Midjourney", "Perplexity", "Canva"],
          correctIndex: 2,
          explanation: "Perplexity est un moteur de recherche IA qui fournit des réponses sourcees, idéal pour la recherche académique."
        },
        {
          question: "Quelle est la règle d'or de l'utilisation de l'IA par les étudiants ?",
          options: ["Toujours utiliser l'IA pour les devoirs", "Si vous ne pouvez pas expliquer sans l'IA, vous n'avez pas compris", "L'IA a toujours raison", "Ne jamais utiliser l'IA"],
          correctIndex: 1,
          explanation: "La règle d'or : l'IA est un outil pour approfondir la compréhension. Si vous ne pouvez pas expliquer un concept sans elle, c'est que vous ne le maitrisez pas."
        },
        {
          question: "Quel usage de l'IA est contre-productif pour l'apprentissage ?",
          options: ["Se faire quizzer par un chatbot", "Générer des flashcards", "Copier-coller les réponses sans comprendre", "Demander 3 explications différentes"],
          correctIndex: 2,
          explanation: "Copier-coller les réponses de l'IA sans comprendre est contre-productif : l'étudiant n'apprend rien et risque de ne pas maîtriser le sujet."
        },
      ],
    },
    {
      number: 7,
      title: "Recherche Académique avec l'IA",
      description: "Accelerer la recherche, l'analyse bibliographique et la rédaction scientifique.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'IA Accélère la Recherche Académique" },
        { type: "paragraph", content: "La recherche académique est transformée par l'IA : découverte d'articles, analyse bibliographique, extraction de données, rédaction scientifique, et même génération d'hypotheses. Les chercheurs qui maitrisent ces outils publient plus et mieux." },
        { type: "subheading", content: "Découverte et Analyse d'Articles" },
        { type: "paragraph", content: "Semantic Scholar, Elicit et Consensus utilisent l'IA pour trouver des articles pertinents, extraire les findings, et synthétiser les résultats de dizaines d'études en quelques minutes. Plus besoin de lire 50 articles pour une revue de litterature." },
        { type: "subheading", content: "Rédaction Scientifique Assistee" },
        { type: "paragraph", content: "Les LLM aident à structurer les articles, reformuler pour la clarte, et vérifier la cohérence. Writefull et Paperpal sont spécialisés dans la rédaction académique. Attention : la transparence sur l'utilisation de l'IA est de plus en plus exigee par les revues." },
        { type: "subheading", content: "Analyse de Données et Statistiques" },
        { type: "paragraph", content: "Claude et ChatGPT peuvent expliquer des méthodes statistiques, générer du code R ou Python pour l'analyse, interpréter des résultats, et même suggérer les tests statistiques adaptés à vos données et hypotheses." },
        { type: "callout", content: "Éthique académique : de plus en plus de revues scientifiques exigent la déclaration de l'utilisation de l'IA dans le processus de recherche et de rédaction. Soyez toujours transparent sur votre utilisation des outils IA." },
        { type: "video", videoId: { fr: "XKqhmtg6EVg", en: "t9gmyvf7JYo" },
      videoDurationMinutes: 10, label: "L'IA pour la recherche académique" },
        { type: "prompt-example", prompt: "Synthetise les 5 principales conclusions de la litterature sur l'impact de l'IA sur les résultats scolaires des élèves du secondaire, avec les références les plus citées.", result: "Synthèse — Impact de l'IA sur les Résultats Scolaires (Secondaire)\n\n1. Les tuteurs IA ameliorent les résultats de 20-30% en mathématiques (Chen et al., 2024; Li & Wang, 2025)\n2. L'apprentissage adaptatif réduit les ecarts entre élèves forts et faibles (UNESCO, 2025)\n3. Le feedback IA immédiat augmente la motivation et l'engagement (Ryan & Deci, 2024)\n4. Les effets sont plus marques chez les élèves en difficulté (OECD, 2025)\n5. Les risques de dépendance et de réduction de l'effort cognitif persistent (Selwyn, 2025)\n\nNote : toujours vérifier les références car l'IA peut générer des citations fictives." },
        { type: "diagram", label: "Le Workflow de Recherche Augmente", flow: "horizontal", nodes: [
          { label: "Découverte", sub: "Semantic Scholar, Elicit", color: "purple" },
          { label: "Analyse", sub: "Synthèse IA des findings", color: "blue" },
          { label: "Rédaction", sub: "LLM + Writefull", color: "emerald" },
          { label: "Vérification", sub: "Relecture humaine + sources", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'IA accélère la découverte d'articles et l'analyse bibliographique",
          "Semantic Scholar, Elicit et Consensus pour la revue de litterature",
          "Les LLM aident à structurer et reformuler les articles scientifiques",
          "Toujours vérifier les références générées par l'IA",
          "La transparence sur l'utilisation de l'IA est exigee par les revues"
        ]},
      ],
      quiz: [
        {
          question: "Quel outil IA est spécialisé dans la découverte d'articles scientifiques ?",
          options: ["ChatGPT", "Semantic Scholar", "Canva", "Grammarly"],
          correctIndex: 1,
          explanation: "Semantic Scholar utilise l'IA pour trouver des articles scientifiques pertinents, extraire les findings et synthétiser les résultats."
        },
        {
          question: "Pourquoi faut-il vérifier les références générées par l'IA ?",
          options: ["Elles sont toujours fausses", "L'IA peut générer des citations fictives", "Les revues ne les acceptent pas", "Elles sont trop anciennes"],
          correctIndex: 1,
          explanation: "Les LLM peuvent générer des références fictives (hallucinations). Il est essentiel de vérifier chaque citation dans les bases de données réelles."
        },
        {
          question: "Que demandent de plus en plus les revues scientifiques ?",
          options: ["D'utiliser uniquement l'IA", "La transparence sur l'utilisation de l'IA", "De ne jamais utiliser l'IA", "D'utiliser un format spécifique"],
          correctIndex: 1,
          explanation: "De plus en plus de revues exigent la déclaration de l'utilisation de l'IA dans le processus de recherche et de rédaction."
        },
        {
          question: "Comment l'IA aide-t-elle pour les statistiques ?",
          options: ["Elle inventé des résultats", "Elle expliqué les méthodes, génère le code et interprète les résultats", "Elle remplace les statisticiens", "Elle ne peut pas faire de statistiques"],
          correctIndex: 1,
          explanation: "L'IA peut expliquer des méthodes statistiques, générer du code R/Python, interpréter des résultats et suggérer les tests adaptes."
        },
      ],
    },
    {
      number: 8,
      title: "Créer du Contenu Pédagogique",
      description: "Produire des supports visuels, vidéos et ressources interactives avec l'IA.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'IA Comme Studio de Création" },
        { type: "paragraph", content: "Les enseignants n'ont plus besoin d'être graphistes, videeastes ou développeurs web pour créer du contenu pédagogique de qualité. L'IA démocratise la création : présentations, infographies, vidéos explicatives, podcasts, quiz interactifs — tout est accessible." },
        { type: "subheading", content: "Presentations et Infographies" },
        { type: "paragraph", content: "Gamma génère des présentations complètes à partir d'un texte. Canva propose des templates éducatifs avec des éléments IA. Beautiful.ai créé des diapositives professionnelles automatiquement. Ces outils transforment 10 minutes de préparation en un support visuel impactant." },
        { type: "subheading", content: "Vidéos Éducatives" },
        { type: "paragraph", content: "Synthesia créé des vidéos avec un avatar IA qui presente votre cours. Loom ajouté l'IA pour editer et sous-titrer vos enregistrements. Descript permet de modifier une video en editant son texte. HeyGen traduit vos vidéos dans 30 langues avec lip sync." },
        { type: "subheading", content: "Quiz et Contenus Interactifs" },
        { type: "paragraph", content: "Les LLM generent des quiz Kahoot, des flashcards Anki, des mots croises, des jeux de rôle, et des scénarios interactifs en quelques secondes. H5P permet de créer du contenu interactif (drag & drop, timeline, hotspot) integrable dans n'importe quel LMS." },
        { type: "tip", content: "Pensez multimedia : un même concept expliqué en texte, en image, en video et en quiz interactif touche 4 styles d'apprentissage différents. L'IA vous permet de créer ces 4 formats en une fraction du temps." },
        { type: "video", videoId: "EEbGYRW7feM",
      videoDurationMinutes: 9, label: "Créer du contenu pédagogique avec l'IA" },
        { type: "diagram", label: "Les Formats de Contenu Pédagogique IA", flow: "horizontal", nodes: [
          { label: "Presentations", sub: "Gamma, Canva, Beautiful.ai", color: "purple" },
          { label: "Vidéos", sub: "Synthesia, Loom, HeyGen", color: "blue" },
          { label: "Quiz interactifs", sub: "Kahoot, Quizizz, H5P", color: "emerald" },
          { label: "Audio / Podcast", sub: "ElevenLabs, NotebookLM", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'IA démocratise la création de contenu pédagogique",
          "Gamma et Canva pour les présentations en minutes",
          "Synthesia et HeyGen pour les vidéos avec avatars IA",
          "Les LLM generent quiz, flashcards et jeux en secondes",
          "Le multimedia touche différents styles d'apprentissage"
        ]},
      ],
      quiz: [
        {
          question: "Quel outil génère des présentations à partir d'un simple texte ?",
          options: ["PowerPoint", "Gamma", "Excel", "Word"],
          correctIndex: 1,
          explanation: "Gamma génère des présentations complètes et visuellement attractives à partir d'un simple texte ou d'un plan."
        },
        {
          question: "Quel outil créé des vidéos avec un avatar IA ?",
          options: ["Canva", "Kahoot", "Synthesia", "Anki"],
          correctIndex: 2,
          explanation: "Synthesia permet de créer des vidéos éducatives avec un avatar IA qui presente votre contenu, sans avoir besoin de filmer."
        },
        {
          question: "Pourquoi le multimedia est-il important en pédagogie ?",
          options: ["C'est a la mode", "Il touche différents styles d'apprentissage", "Les élèves preferent les vidéos", "C'est obligatoire"],
          correctIndex: 1,
          explanation: "Le multimedia (texte, image, video, quiz) touche différents styles d'apprentissage, ameliorant la compréhension et la retention."
        },
        {
          question: "Quel outil permet de créer du contenu interactif pour un LMS ?",
          options: ["Word", "Excel", "H5P", "Zoom"],
          correctIndex: 2,
          explanation: "H5P permet de créer du contenu interactif (drag & drop, timeline, hotspot, quiz) integrable dans n'importe quel LMS."
        },
      ],
    },
    {
      number: 9,
      title: "Gamification et IA",
      description: "Rendre l'apprentissage ludique avec la gamification augmentée par l'IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "La Gamification Augmentee par l'IA" },
        { type: "paragraph", content: "La gamification appliqué les mécaniques du jeu à l'apprentissage : points, badges, classements, quetes, niveaux. L'IA pousse la gamification plus loin en personnalisant les défis, en adaptant la difficulté en temps réel, et en créant des scénarios uniques pour chaque apprenant." },
        { type: "subheading", content: "Les Mecaniques de Jeu en Éducation" },
        { type: "paragraph", content: "Points d'expérience (XP) pour chaque activité complétée. Badges pour les accomplissements spécifiques. Classements pour la motivation sociale. Quetes et missions pour donner un sens narratif. Niveaux progressifs pour visualiser la progression." },
        { type: "subheading", content: "L'IA Personnalisé le Jeu" },
        { type: "paragraph", content: "L'IA ajuste la difficulté pour que chaque élève soit dans sa zone de flow (ni trop facile, ni trop difficile). Elle génère des quetes personnalisées basées sur les lacunes identifiées. Elle crée des scénarios narratifs uniques qui integrent les sujets à travailler." },
        { type: "subheading", content: "Outils de Gamification" },
        { type: "paragraph", content: "Kahoot et Quizizz pour les quiz gamifies en classe. Classcraft pour transformer la classe en RPG. Duolingo comme modèle de gamification réussie. Les LLM pour générer des scénarios et des quetes personnalisées." },
        { type: "callout", content: "Attention : la gamification mal implementee peut être contre-productive. Si les élèves se concentrent sur les points plutôt que sur l'apprentissage, l'effet est négatif. Le jeu doit être au service de la pédagogie, pas l'inverse." },
        { type: "video", videoId: { fr: "oeli5xkFZJo", en: "JhM7PWCv2EY" },
      videoDurationMinutes: 14, label: "Gamification et IA en éducation" },
        { type: "diagram", label: "Les Mecaniques de Gamification", flow: "horizontal", nodes: [
          { label: "XP et Points", sub: "Récompense pour chaque activité", color: "purple" },
          { label: "Badges", sub: "Accomplissements spécifiques", color: "blue" },
          { label: "Quetes", sub: "Missions narratives personnalisées", color: "emerald" },
          { label: "Classements", sub: "Motivation sociale et competition", color: "amber" },
        ]},
        { type: "summary", items: [
          "La gamification appliqué les mécaniques du jeu à l'apprentissage",
          "L'IA personnalise difficulté, quetes et scénarios pour chaque élève",
          "Zone de flow : ni trop facile, ni trop difficile — engagement optimal",
          "Outils : Kahoot, Quizizz, Classcraft, Duolingo",
          "Le jeu doit servir la pédagogie, pas l'inverse"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que la zone de flow en gamification ?",
          options: ["Le moment ou l'élève s'ennuie", "Le niveau optimal de difficulté (ni trop facile, ni trop dur)", "Le classement des meilleurs élèves", "Le temps passe sur l'écran"],
          correctIndex: 1,
          explanation: "La zone de flow est l'état d'engagement optimal ou la difficulté est adaptee au niveau de l'apprenant — ni trop facile (ennui), ni trop difficile (frustration)."
        },
        {
          question: "Comment l'IA améliore-t-elle la gamification ?",
          options: ["Elle crée des jeux video", "Elle personnalise la difficulté et les quetes pour chaque élève", "Elle remplace les enseignants", "Elle supprime les examens"],
          correctIndex: 1,
          explanation: "L'IA ajuste la difficulté en temps réel, génère des quetes personnalisées basées sur les lacunes, et créé des scénarios narratifs uniques."
        },
        {
          question: "Quel est le risque d'une gamification mal implementee ?",
          options: ["Les élèves apprennent trop vite", "Les élèves se concentrent sur les points plutôt que l'apprentissage", "Les jeux sont trop complexes", "Les parents s'inquietent"],
          correctIndex: 1,
          explanation: "Si les élèves se focalisent sur les points et le classement plutôt que sur la compréhension, la gamification devient contre-productive."
        },
        {
          question: "Quel outil est un modèle de gamification réussie en éducation ?",
          options: ["Excel", "Duolingo", "PowerPoint", "Zoom"],
          correctIndex: 1,
          explanation: "Duolingo est un modèle de gamification éducative réussie : XP, séries, ligues, coeurs — tout est conçu pour maintenir l'engagement et l'apprentissage."
        },
      ],
    },
    {
      number: 10,
      title: "Accessibilité et Inclusion",
      description: "Utiliser l'IA pour rendre l'éducation accessible à tous les apprenants.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA au Service de l'Inclusion" },
        { type: "paragraph", content: "L'IA est peut-être l'outil le plus puissant que nous ayons jamais eu pour l'inclusion éducative. Transcription en temps réel pour les sourds, synthèse vocale pour les malvoyants, simplification de texte pour la dyslexie, traduction instantanée pour les allophones — les barrieres tombent." },
        { type: "subheading", content: "Handicap Auditif" },
        { type: "paragraph", content: "La transcription en temps réel (Whisper, Otter.ai) permet aux élèves sourds de suivre un cours oral. Les sous-titres IA sur les vidéos éducatives sont désormais quasi parfaits. La langue des signes peut être traduite par vision par ordinateur." },
        { type: "subheading", content: "Handicap Visuel" },
        { type: "paragraph", content: "La synthèse vocale IA lit les documents avec une voix naturelle. La description d'images par IA (alt text automatique) rend le contenu visuel accessible. Les LLM peuvent reformater tout document en version accessible." },
        { type: "subheading", content: "Troubles de l'Apprentissage" },
        { type: "paragraph", content: "Pour la dyslexie : police adaptee, espacement augmente, texte simplifie par l'IA. Pour le TDAH : micro-learning, rappels, structuration. Pour les DYS : outils de dictee, reformulation, et exercices adaptes générés par l'IA." },
        { type: "subheading", content: "Barriere Linguistique" },
        { type: "paragraph", content: "Les élèves allophones bénéficient de la traduction instantanée des cours, du matériel pédagogique traduit par l'IA, et de tuteurs multilingues. L'IA nivele le terrain pour tous, quelle que soit la langue maternelle." },
        { type: "video", videoId: { fr: "XKqhmtg6EVg", en: "t9gmyvf7JYo" },
      videoDurationMinutes: 10, label: "IA et accessibilité en éducation" },
        { type: "key-point", content: "L'accessibilité n'est pas un \"bonus\" — c'est un droit. L'IA rend enfin l'éducation réellement accessible à tous, eliminant des barrieres qui existaient depuis des siecles." },
        { type: "diagram", label: "L'IA pour l'Accessibilité", flow: "horizontal", nodes: [
          { label: "Auditif", sub: "Transcription, sous-titres, LSF", color: "purple" },
          { label: "Visuel", sub: "Synthèse vocale, alt text IA", color: "blue" },
          { label: "DYS / TDAH", sub: "Police adaptee, micro-learning", color: "emerald" },
          { label: "Langue", sub: "Traduction instantanée", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'IA élimine des barrieres éducatives qui existaient depuis des siecles",
          "Transcription et sous-titres en temps réel pour les sourds",
          "Synthèse vocale et description d'images pour les malvoyants",
          "Texte simplifie et micro-learning pour les troubles DYS et TDAH",
          "Traduction instantanée pour les élèves allophones"
        ]},
      ],
      quiz: [
        {
          question: "Quelle technologie IA aide les élèves sourds à suivre un cours oral ?",
          options: ["La génération d'images", "La transcription en temps réel", "La traduction automatique", "La synthèse vocale"],
          correctIndex: 1,
          explanation: "La transcription en temps réel (Whisper, Otter.ai) convertit la parole en texte instantanément, permettant aux élèves sourds de suivre un cours oral."
        },
        {
          question: "Comment l'IA aide-t-elle les élèves dyslexiques ?",
          options: ["En leur donnant les réponses", "En proposant police adaptee, espacement augmente et texte simplifie", "En supprimant la lecture", "En remplacant l'écrit par l'oral"],
          correctIndex: 1,
          explanation: "L'IA aide les dyslexiques avec des polices adaptees, un espacement augmente, et la simplification automatique de textes complexes."
        },
        {
          question: "L'accessibilité en éducation est :",
          options: ["Un bonus optionnel", "Un droit fondamental", "Reservee aux handicapes", "Trop couteuse à mettre en place"],
          correctIndex: 1,
          explanation: "L'accessibilité est un droit fondamental, pas un bonus. L'IA rend enfin possible une éducation réellement accessible à tous les apprenants."
        },
        {
          question: "Comment l'IA aide-t-elle les élèves allophones ?",
          options: ["En leur parlant plus fort", "Par la traduction instantanée des cours et du matériel pédagogique", "En les separant des autres élèves", "En simplifiant les examens"],
          correctIndex: 1,
          explanation: "La traduction instantanée des cours, du matériel et les tuteurs multilingues permettent aux élèves allophones de suivre l'enseignement dans leur langue."
        },
      ],
    },
    {
      number: 11,
      title: "Détecter l'Usage de l'IA par les Étudiants",
      description: "Identifier et gérer l'utilisation de l'IA dans les travaux des étudiants.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Le Défi de la Détection" },
        { type: "paragraph", content: "Depuis ChatGPT, la question de la triche à l'IA hante le monde éducatif. Les étudiants utilisent les LLM pour générer des dissertations, résoudre des problèmes, et traduire des textes. La détection est un défi complexe, et la course technologique entre générateurs et detecteurs n'a pas de gagnant clair." },
        { type: "subheading", content: "Les Outils de Détection" },
        { type: "paragraph", content: "Turnitin, GPTZero et Compilatio integrent des detecteurs d'IA. Ils analysent la perplexite (previsibilite du texte), la burstiness (variation de la complexité), et les patterns statistiques. Fiabilité estimee : 70-85% — ni parfait ni inutile." },
        { type: "subheading", content: "Les Limites de la Détection" },
        { type: "paragraph", content: "Les detecteurs produisent des faux positifs (textes humains marques comme IA) et des faux négatifs (textes IA non détectés). Un étudiant qui reformule ou melange IA et texte personnel est quasi indetectable. Les textes non anglophones sont encore moins bien détectés." },
        { type: "heading", content: "Au-Dela de la Détection : Repenser l'Évaluation" },
        { type: "paragraph", content: "Plutôt que de jouer au chat et a la souris, de nombreux pedagogues recommandent de repenser l'évaluation : examens oraux, portfolios reflexifs, travaux en classe, présentations, processus documente (brouillons), et évaluations qui integrent l'IA de manière encadree." },
        { type: "tip", content: "La meilleure défense contre la triche IA n'est pas un détecteur — c'est une évaluation qui valorise la réflexion personnelle, le processus, et l'oral. Un étudiant qui ne peut pas expliquer son propre travail sera toujours détecte." },
        { type: "video", videoId: "EEbGYRW7feM",
      videoDurationMinutes: 9, label: "Détecter et gérer l'usage de l'IA" },
        { type: "callout", content: "Accuser faussement un étudiant de triche à l'IA est un risque réel. Aucun détecteur n'est fiable a 100%. Utilisez les detecteurs comme un signal, jamais comme une preuve." },
        { type: "diagram", label: "Strategies Face à l'IA Etudiante", flow: "horizontal", nodes: [
          { label: "Détecter", sub: "Turnitin, GPTZero (70-85%)", color: "blue" },
          { label: "Prévenir", sub: "Evaluations en classe, oral", color: "purple" },
          { label: "Integrer", sub: "Usage encadre et transparent", color: "emerald" },
          { label: "Évaluer autrement", sub: "Portfolio, processus, réflexion", color: "amber" },
        ]},
        { type: "summary", items: [
          "Les detecteurs d'IA sont fiables a 70-85% — signal, pas preuve",
          "Faux positifs et faux négatifs sont fréquents",
          "Repenser l'évaluation est plus efficace que la détection",
          "Examens oraux, portfolios et processus documente sont robustes",
          "L'intégration encadree de l'IA est une alternative à l'interdiction"
        ]},
      ],
      quiz: [
        {
          question: "Quelle est la fiabilité estimee des detecteurs d'IA actuels ?",
          options: ["30-40%", "50-60%", "70-85%", "95-100%"],
          correctIndex: 2,
          explanation: "Les detecteurs d'IA comme Turnitin et GPTZero ont une fiabilité estimee entre 70 et 85% — suffisant pour un signal, insuffisant pour une preuve."
        },
        {
          question: "Quel est le risque principal des detecteurs d'IA ?",
          options: ["Ils sont trop lents", "Les faux positifs (accuser a tort un étudiant)", "Ils sont trop chers", "Ils ne fonctionnent qu'en anglais"],
          correctIndex: 1,
          explanation: "Les faux positifs — marquer un texte humain comme généré par l'IA — sont un risque réel et grave qui peut nuire a un étudiant innocent."
        },
        {
          question: "Quelle est la meilleure stratégie face à l'usage de l'IA par les étudiants ?",
          options: ["Interdire complètement l'IA", "Repenser l'évaluation avec de l'oral, du processus et de la réflexion", "Utiliser uniquement des detecteurs", "Ignorer le problème"],
          correctIndex: 1,
          explanation: "Repenser l'évaluation (oral, portfolio, processus documente) est plus efficace que la détection pure. Un étudiant qui ne peut pas expliquer son travail sera toujours identifié."
        },
        {
          question: "Les detecteurs d'IA doivent être utilisés comme :",
          options: ["Une preuve definitive de triche", "Un signal a investiguer, jamais une preuve", "Un remplacement de la correction", "Un outil de notation"],
          correctIndex: 1,
          explanation: "Aucun détecteur n'est fiable a 100%. Ils doivent être utilisés comme un signal qui déclenche une investigation, jamais comme une preuve suffisante."
        },
      ],
    },
    {
      number: 12,
      title: "L'École du Futur",
      description: "Imaginer l'éducation de 2030 : tendances, défis et opportunités.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Vers l'École de 2030" },
        { type: "paragraph", content: "L'école du futur ne ressemblera plus a celle d'aujourd'hui. L'IA, la réalité augmentée, les espaces d'apprentissage flexibles, et les parcours personnalisés transformeront radicalement l'expérience éducative. Mais certaines choses ne changeront pas : le besoin de connexion humaine, de socialisation, et de guidance." },
        { type: "subheading", content: "Tendance 1 : L'Hyper-Personnalisation" },
        { type: "paragraph", content: "Chaque élève aura un parcours unique, adapte en temps réel par l'IA. Les cours magistraux cederont la place a des sessions de projet, de débat, et de collaboration. L'enseignant deviendra un coach et un facilitateur plutôt qu'un transmetteur de connaissances." },
        { type: "subheading", content: "Tendance 2 : L'Apprentissage Immersif" },
        { type: "paragraph", content: "La réalité virtuelle et augmentée permettront de visiter la Rome antique en histoire, de manipuler des molecules en chimie, et de dissequer une grenouille virtuelle en biologie. L'apprentissage experiential deviendra la norme, pas l'exception." },
        { type: "subheading", content: "Tendance 3 : Les Compétences du 21e Siecle" },
        { type: "paragraph", content: "Pensee critique, créativité, collaboration, communication, litteratie numérique, et intelligence émotionnelle remplaceront la memorisation. Savoir utiliser l'IA sera aussi fondamental que savoir lire et écrire." },
        { type: "subheading", content: "Tendance 4 : L'Apprentissage Continu" },
        { type: "paragraph", content: "La formation ne s'arretera plus au diplôme. L'apprentissage continu, les micro-certifications, et les parcours modulaires deviendront la norme. L'IA accompagnera chaque individu tout au long de sa vie, adaptant les recommandations à l'évolution de sa carrière." },
        { type: "video", videoId: { fr: "oeli5xkFZJo", en: "JhM7PWCv2EY" },
      videoDurationMinutes: 14, label: "L'école du futur avec l'IA" },
        { type: "key-point", content: "La technologie evoluera, mais le coeur de l'éducation restera humain. L'école du futur ne sera pas une salle pleine d'écrans — ce sera un lieu ou la technologie libere du temps pour la relation, la créativité, et l'epanouissement." },
        { type: "diagram", label: "L'École du Futur : 4 Piliers", flow: "horizontal", nodes: [
          { label: "Personnalisation", sub: "Parcours unique par élève", color: "purple" },
          { label: "Immersion", sub: "VR/AR pour l'experiential", color: "blue" },
          { label: "Compétences", sub: "Pensee critique, créativité, IA", color: "emerald" },
          { label: "Continu", sub: "Apprentissage tout au long de la vie", color: "amber" },
        ]},
        { type: "diagram", label: "Le Rôle de l'Enseignant en 2030", flow: "vertical", nodes: [
          { label: "Coach", sub: "Accompagnement individualise", color: "purple" },
          { label: "Facilitateur", sub: "Orchestrer projets et collaborations", color: "blue" },
          { label: "Mentor", sub: "Développement personnel et orientation", color: "emerald" },
          { label: "Expert", sub: "Expertise pédagogique et disciplinaire", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'école du futur sera hyper-personnalisée grâce à l'IA",
          "VR/AR pour l'apprentissage immersif et experiential",
          "Compétences du 21e siecle : pensee critique, créativité, litteratie IA",
          "Apprentissage continu tout au long de la vie",
          "L'enseignant évolue vers un rôle de coach et facilitateur"
        ]},
      ],
      quiz: [
        {
          question: "Comment evoluera le rôle de l'enseignant dans l'école du futur ?",
          options: ["Il disparaitra", "Il deviendra coach, facilitateur et mentor", "Il se limitera a la discipline", "Il sera remplace par des robots"],
          correctIndex: 1,
          explanation: "L'enseignant evoluera d'un transmetteur de connaissances vers un coach, facilitateur et mentor, guide par la technologie mais centre sur l'humain."
        },
        {
          question: "Quelle compétence sera aussi fondamentale que savoir lire et écrire ?",
          options: ["Savoir coder", "Savoir utiliser l'IA", "Savoir jouer d'un instrument", "Savoir dessiner"],
          correctIndex: 1,
          explanation: "Savoir utiliser l'IA sera aussi fondamental que la lecture et l'écriture — une litteratie essentielle pour le 21e siecle."
        },
        {
          question: "Que permettra la réalité virtuelle en éducation ?",
          options: ["Remplacer les enseignants", "Des expériences d'apprentissage immersives (visiter la Rome antique, manipuler des molecules)", "Supprimer les devoirs", "Réduire le coût de l'éducation"],
          correctIndex: 1,
          explanation: "La VR/AR permettra des expériences immersives : visiter des lieux historiques, manipuler des molecules, dissequer virtuellement — l'apprentissage experiential."
        },
        {
          question: "Qu'est-ce qui ne changera PAS dans l'école du futur ?",
          options: ["Les méthodes d'enseignement", "Le besoin de connexion humaine et de socialisation", "Les manuels scolaires", "Les examens écrits"],
          correctIndex: 1,
          explanation: "Malgré les avancées technologiques, le besoin fondamental de connexion humaine, de socialisation et de guidance par un adulte bienveillant ne changera pas."
        },
      ],
    },
  ],
};

export default content;
