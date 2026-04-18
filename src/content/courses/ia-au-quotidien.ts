import type { CourseContent } from "../types";

const content: CourseContent = {
  slug: "ia-au-quotidien",
  chapters: [
    {
      number: 1,
      title: "Bienvenue dans l'Ère de l'IA",
      description: "Comprendre pourquoi l'IA change notre quotidien et comment en tirer parti des aujourd'hui.",
      estimatedMinutes: 6,
      sections: [
        { type: "heading", content: "Bienvenue dans l'Ère de l'IA" },
        { type: "paragraph", content: "En 2026, l'intelligence artificielle n'est plus réservée aux experts ou aux grandes entreprises. Elle est dans votre poche, sur votre ordinateur, dans vos applications préférées. Chaque jour, des millions de personnes utilisent l'IA pour gagner du temps, mieux communiquer et être plus productifs." },
        { type: "paragraph", content: "Ce cours va vous montrer comment utiliser concrètement l'IA dans votre vie de tous les jours. Pas de théorie abstraite — des cas pratiques, des outils réels et des méthodes éprouvées pour devenir efficace avec l'IA." },
        { type: "callout", content: "Selon une étude McKinsey de 2025, les professionnels qui utilisent l'IA au quotidien gagnent en moyenne 3 heures par semaine — soit plus de 150 heures par an." },
        { type: "video", videoId: "oeli5xkFZJo",
      videoDurationMinutes: 14, label: "L'IA au quotidien : introduction" },
        { type: "heading", content: "Pourquoi l'IA Change Tout" },
        { type: "paragraph", content: "L'IA générative a démocratise l'accès a des capacités qui étaient auparavant réservées a des spécialistes : rédiger un texte professionnel, analyser un document, traduire instantanément, créer des visuels, organiser des informations complexes. Aujourd'hui, un outil comme ChatGPT ou Claude peut vous aider dans presque toutes ces tâches." },
        { type: "paragraph", content: "La clé n'est pas de tout automatiser, mais de savoir quand et comment utiliser l'IA pour amplifier vos compétences existantes. L'IA est un multiplicateur de force — elle rend les bons encore meilleurs." },
        { type: "key-point", content: "L'IA ne remplace pas votre expertise — elle l'amplifie. Votre valeur ajoutée reste dans votre jugement, votre créativité et votre connaissance du contexte." },
        { type: "diagram", label: "Les 3 Piliers de l'IA au Quotidien", flow: "horizontal", nodes: [
          { label: "Productivité", sub: "Gagner du temps sur les tâches répétitives", color: "amber" },
          { label: "Communication", sub: "Mieux rédiger, traduire, synthétiser", color: "blue" },
          { label: "Créativité", sub: "Générer des idées et du contenu", color: "emerald" },
        ]},
        { type: "tip", content: "Vous n'avez besoin d'aucune compétence technique. Si vous savez écrire un message, vous savez utiliser l'IA." },
        { type: "summary", items: [
          "L'IA est accessible à tous en 2026 — pas besoin d'être expert",
          "Les utilisateurs d'IA gagnent en moyenne 3 heures par semaine",
          "L'IA amplifie vos compétences, elle ne les remplace pas",
          "Ce cours se concentre sur des cas pratiques du quotidien",
          "Aucune compétence technique requise pour commencer"
        ]},
      ],
      quiz: [
        {
          question: "Combien d'heures par semaine gagnent en moyenne les professionnels utilisant l'IA ?",
          options: ["1 heure", "3 heures", "5 heures", "10 heures"],
          correctIndex: 1,
          explanation: "Selon les études récentes, les professionnels qui integrent l'IA dans leur quotidien gagnent en moyenne 3 heures par semaine, soit plus de 150 heures par an."
        },
        {
          question: "Quel est le meilleur rôle de l'IA dans votre quotidien ?",
          options: ["Remplacer complètement votre travail", "Amplifier vos compétences existantes", "Prendre des décisions à votre place", "Eliminer le besoin de réflexion"],
          correctIndex: 1,
          explanation: "L'IA est un multiplicateur de force qui amplifie vos compétences existantes. Votre jugement et votre expertise restent essentiels."
        },
        {
          question: "Faut-il être un expert technique pour utiliser l'IA au quotidien ?",
          options: ["Oui, il faut savoir programmer", "Oui, il faut un diplôme en informatique", "Non, il suffit de savoir écrire un message", "Oui, il faut comprendre le machine learning"],
          correctIndex: 2,
          explanation: "Les outils IA modernes sont conçus pour être utilisés en langage naturel. Si vous savez écrire un message, vous savez utiliser l'IA."
        },
        {
          question: "Qu'est-ce qui a démocratise l'IA auprès du grand public ?",
          options: ["Les robots industriels", "L'IA générative et les chatbots comme ChatGPT", "Les voitures autonomes", "Les algorithmes de trading"],
          correctIndex: 1,
          explanation: "L'IA générative, avec des outils comme ChatGPT et Claude, a rendu l'IA accessible à tous en permettant d'interagir en langage naturel."
        },
      ],
    },
    {
      number: 2,
      title: "Rédiger des Emails et Messages avec l'IA",
      description: "Apprendre à utiliser l'IA pour rédiger des emails professionnels, messages et courriers impeccables.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA, Votre Assistant de Rédaction" },
        { type: "paragraph", content: "La rédaction d'emails et de messages représente en moyenne 28% du temps de travail d'un professionnel. L'IA peut réduire ce temps de 60 à 80% tout en ameliorant la qualité de vos écrits. Que ce soit un email formel a un client, un message rapide a un collègue ou une lettre de motivation, l'IA vous aide à trouver les bons mots." },
        { type: "paragraph", content: "Les outils comme ChatGPT et Claude excellent dans la rédaction assistée. Ils peuvent adapter le ton (formel, amical, diplomatique), corriger la grammaire, restructurer vos idées et même suggérer des formulations plus percutantes." },
        { type: "heading", content: "Rédiger un Email Professionnel" },
        { type: "prompt-example", content: "Redige un email professionnel à mon client M. Dupont pour lui annoncer un retard de 2 semaines sur le projet de refonte du site web. Ton : diplomatique et rassurant. Propose une solution concrète (appel cette semaine pour replanifier). Signe : Marie, Chef de projet." },
        { type: "paragraph", content: "Remarquez la structure du prompt : contexte (qui, quoi), ton souhaite, éléments a inclure, et signature. Plus votre prompt est précis, meilleur sera le résultat." },
        { type: "heading", content: "Adapter le Ton et le Style" },
        { type: "paragraph", content: "L'IA peut adapter le même message a différents contextes. Un email de relance peut être formule de manière douce, ferme ou urgente selon la situation. Vous pouvez aussi demander à l'IA de reformuler un message que vous trouvez trop agressif ou trop passif." },
        { type: "tip", content: "Astuce : copiez-collez un email que vous avez reçu et demandez à l'IA de vous aider a y répondre. C'est souvent plus rapide que de partir de zéro." },
        { type: "key-point", content: "Relisez toujours le texte généré par l'IA avant de l'envoyer. Verifiez les faits, les noms, les dates et ajustez le ton à votre style personnel." },
        { type: "diagram", label: "Workflow de Rédaction avec l'IA", flow: "horizontal", nodes: [
          { label: "Briefer l'IA", sub: "Contexte, ton, éléments clés", color: "blue" },
          { label: "Générer le brouillon", sub: "L'IA produit une première version", color: "purple" },
          { label: "Relire et ajuster", sub: "Personnaliser et vérifier", color: "emerald" },
          { label: "Envoyer", sub: "Message professionnel et efficace", color: "amber" },
        ]},
        { type: "summary", items: [
          "La rédaction représente 28% du temps de travail — l'IA la réduit de 60-80%",
          "Structurez vos prompts : contexte, ton, éléments clés, signature",
          "L'IA peut adapter le ton : formel, amical, diplomatique, urgent",
          "Relisez toujours avant d'envoyer — verifiez faits, noms et dates",
          "Astuce : collez un email reçu et demandez de l'aide pour répondre"
        ]},
      ],
      quiz: [
        {
          question: "Quel pourcentage du temps de travail est consacre a la rédaction d'emails ?",
          options: ["10%", "28%", "50%", "75%"],
          correctIndex: 1,
          explanation: "En moyenne, 28% du temps de travail est consacre a la rédaction d'emails et de messages. L'IA peut considérablement réduire ce temps."
        },
        {
          question: "Que faut-il toujours faire après que l'IA a génère un email ?",
          options: ["L'envoyer immédiatement", "Le supprimer et recommencer", "Le relire et vérifier les faits, noms et dates", "Demander une deuxieme version"],
          correctIndex: 2,
          explanation: "Il faut toujours relire le texte génère, vérifier les faits, les noms, les dates et ajuster le ton avant d'envoyer."
        },
        {
          question: "Pour obtenir un bon email de l'IA, votre prompt doit inclure :",
          options: ["Juste le sujet de l'email", "Le contexte, le ton souhaite et les éléments clés", "Uniquement le nom du destinataire", "Le texte complet que vous voulez"],
          correctIndex: 1,
          explanation: "Un bon prompt de rédaction inclut le contexte (qui, quoi), le ton souhaite, les éléments clés a inclure et éventuellement la signature."
        },
        {
          question: "L'IA peut-elle adapter le ton d'un même message ?",
          options: ["Non, elle produit toujours le même ton", "Oui, elle peut passer de formel a amical, diplomatique ou urgent", "Seulement en anglais", "Uniquement pour les emails courts"],
          correctIndex: 1,
          explanation: "L'IA peut adapter le même message a différents tons : formel, amical, diplomatique, urgent, etc. selon vos instructions."
        },
      ],
    },
    {
      number: 3,
      title: "Rechercher Efficacement avec l'IA",
      description: "Transformer vos recherches d'information grâce à l'IA conversationnelle et les moteurs augmentes.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "La Recherche Reinventee par l'IA" },
        { type: "paragraph", content: "Google vous donne des liens. L'IA vous donne des réponses. C'est la différence fondamentale. Au lieu de parcourir 10 pages de résultats pour trouver l'information, vous posez une question et obtenez une réponse synthetisee, contextualisee et sourcee." },
        { type: "paragraph", content: "Des outils comme Perplexity AI, ChatGPT avec navigation web et Claude combinent la puissance des LLM avec l'accès en temps réel a Internet. Ils analysent des dizaines de sources et vous fournissent une synthèse structuree." },
        { type: "heading", content: "Les Outils de Recherche IA" },
        { type: "subheading", content: "Perplexity AI" },
        { type: "paragraph", content: "Perplexity est le moteur de recherche IA par excellence. Il cité ses sources, fournit des réponses détaillées et permet de poser des questions de suivi. Idéal pour la recherche factuelle, la veille et l'exploration de sujets complexes." },
        { type: "subheading", content: "ChatGPT et Claude avec Navigation Web" },
        { type: "paragraph", content: "ChatGPT et Claude peuvent naviguer sur le web en temps réel. Ils sont particulièrement utiles quand vous avez besoin d'une analyse plus approfondie ou d'une synthèse de plusieurs sources contradictoires." },
        { type: "prompt-example", content: "Je cherche les meilleures pratiques pour le teletravail en 2026. Compare les recommandations de 3 sources différentes (études, articles d'experts, retours d'entreprises). Presente les points communs et les divergences dans un tableau." },
        { type: "key-point", content: "Verifiez toujours les informations critiques. L'IA peut halluciner des faits ou des sources. Croisez les informations pour les décisions importantes." },
        { type: "diagram", label: "Recherche Classique vs Recherche IA", flow: "horizontal", nodes: [
          { label: "Google classique", sub: "10 liens bleus a trier manuellement", color: "blue" },
          { label: "Perplexity / IA", sub: "Réponse synthetisee avec sources", color: "emerald" },
          { label: "ChatGPT / Claude", sub: "Analyse approfondie et contextuelle", color: "purple" },
        ]},
        { type: "summary", items: [
          "L'IA donne des réponses synthetisees, pas juste des liens",
          "Perplexity AI excelle dans la recherche factuelle sourcee",
          "ChatGPT et Claude offrent des analyses plus approfondies",
          "Toujours vérifier les informations critiques — l'IA peut halluciner",
          "Les questions de suivi permettent d'approfondir un sujet"
        ]},
      ],
      quiz: [
        {
          question: "Quelle est la différence principale entre Google et une recherche IA ?",
          options: ["Google est plus rapide", "L'IA donne des réponses synthetisees au lieu de liens", "Google est plus précis", "Il n'y a aucune différence"],
          correctIndex: 1,
          explanation: "Google fournit des liens a explorer. L'IA synthetise l'information de multiples sources et fournit directement une réponse structuree."
        },
        {
          question: "Quel outil est spécialisé dans la recherche IA avec citations de sources ?",
          options: ["Midjourney", "Suno", "Perplexity AI", "ElevenLabs"],
          correctIndex: 2,
          explanation: "Perplexity AI est un moteur de recherche IA qui cité systematiquement ses sources et fournit des réponses détaillées et sourcees."
        },
        {
          question: "Pourquoi faut-il vérifier les informations fournies par l'IA ?",
          options: ["Parce que l'IA est toujours fausse", "Parce que l'IA peut halluciner des faits ou des sources", "Parce que l'IA est lente", "Parce que Google est plus fiable"],
          correctIndex: 1,
          explanation: "L'IA peut parfois générer des informations fausses (hallucinations). Il est essentiel de croiser les sources pour les informations critiques."
        },
        {
          question: "Quand utiliser ChatGPT/Claude plutôt que Perplexity pour une recherche ?",
          options: ["Pour une recherche rapide", "Pour une analyse approfondie de sources contradictoires", "Pour trouver un site web", "Jamais, Perplexity est toujours meilleur"],
          correctIndex: 1,
          explanation: "ChatGPT et Claude sont plus adaptes quand vous avez besoin d'une analyse approfondie, d'une synthèse de sources contradictoires ou d'un raisonnement complexe."
        },
      ],
    },
    {
      number: 4,
      title: "Résumer des Documents en Quelques Secondes",
      description: "Apprendre a résumer des articles, rapports, livres et vidéos grâce à l'IA.",
      estimatedMinutes: 6,
      sections: [
        { type: "heading", content: "L'Art du Résumé avec l'IA" },
        { type: "paragraph", content: "Nous sommes submerges d'informations. Articles, rapports, emails, notes de reunion, vidéos — le volume d'information a traiter ne cessé d'augmenter. L'IA peut résumer un document de 50 pages en 5 points clés en quelques secondes." },
        { type: "paragraph", content: "Les modèles comme Claude 4.6 avec son contexte d'1 million de tokens peuvent analyser des documents entiers — livres, rapports annuels, contrats juridiques — et en extraire l'essentiel selon vos besoins spécifiques." },
        { type: "heading", content: "Techniques de Résumé" },
        { type: "prompt-example", content: "Résumé ce rapport en 5 points clés. Pour chaque point, donne : le fait principal, pourquoi c'est important, et l'action recommandée. Format : bullet points. Public : directeur commercial qui a 2 minutes." },
        { type: "paragraph", content: "La clé d'un bon résumé IA est de préciser : le format souhaite (bullet points, paragraphe, tableau), le public ciblé (expert, débutant, decideur), la longueur et les aspects a privilégier." },
        { type: "subheading", content: "Résumer des Vidéos" },
        { type: "paragraph", content: "Des outils comme YouTube Summary avec ChatGPT, Eightify ou NotebookLM de Google peuvent résumer des heures de video en quelques minutes. Collez simplement le lien de la video et obtenez un résumé structure avec les moments clés." },
        { type: "tip", content: "Pour les longs documents, demandez d'abord un résumé executif, puis approfondissez les sections qui vous intéressent avec des questions de suivi." },
        { type: "key-point", content: "Adaptez le niveau de détail à votre besoin : un résumé pour un decideur est différent d'un résumé pour un expert technique." },
        { type: "diagram", label: "Types de Resumes IA", flow: "horizontal", nodes: [
          { label: "Résumé executif", sub: "5 points clés pour decideurs", color: "amber" },
          { label: "Résumé détaillé", sub: "Section par section avec nuances", color: "blue" },
          { label: "Résumé actionnable", sub: "Faits + actions recommandées", color: "emerald" },
        ]},
        { type: "summary", items: [
          "L'IA peut résumer un document de 50 pages en quelques secondes",
          "Precisez le format, le public ciblé et les aspects a privilégier",
          "Les vidéos peuvent aussi être resumees (NotebookLM, Eightify)",
          "Commencez par un résumé executif, puis approfondissez si nécessaire",
          "Adaptez le niveau de détail au public : decideur vs expert"
        ]},
      ],
      quiz: [
        {
          question: "Quelle est la capacité de contexte de Claude 4.6 ?",
          options: ["32 000 tokens", "128 000 tokens", "500 000 tokens", "1 million de tokens"],
          correctIndex: 3,
          explanation: "Claude 4.6 dispose d'un contexte d'1 million de tokens, ce qui lui permet d'analyser des documents très longs — livres entiers, rapports annuels, etc."
        },
        {
          question: "Pour obtenir un bon résumé, que faut-il préciser à l'IA ?",
          options: ["Juste le document", "Le format, le public ciblé et les aspects a privilégier", "Uniquement la longueur souhaitee", "Le nom de l'auteur du document"],
          correctIndex: 1,
          explanation: "Un bon résumé nécessite de préciser le format souhaite, le public ciblé et les aspects a privilégier pour obtenir un résultat adapté à vos besoins."
        },
        {
          question: "Quel outil Google permet de résumer des vidéos et documents ?",
          options: ["Google Drive", "Google Docs", "NotebookLM", "Google Sheets"],
          correctIndex: 2,
          explanation: "NotebookLM de Google permet de résumer des vidéos YouTube, des documents PDF et d'autres sources en quelques clics."
        },
        {
          question: "Quelle stratégie est recommandée pour les longs documents ?",
          options: ["Tout lire soi-même d'abord", "Demander un résumé executif puis approfondir avec des questions de suivi", "Demander un résumé en un seul mot", "Ignorer les longs documents"],
          correctIndex: 1,
          explanation: "Pour les longs documents, commencez par un résumé executif pour avoir la vue d'ensemble, puis approfondissez les sections qui vous intéressent."
        },
      ],
    },
    {
      number: 5,
      title: "Traduction et Communication Multilingue",
      description: "Utiliser l'IA pour traduire, communiquer et travailler dans plusieurs langues.",
      estimatedMinutes: 6,
      sections: [
        { type: "heading", content: "L'IA Abolit les Barrieres Linguistiques" },
        { type: "paragraph", content: "En 2026, la traduction IA a atteint un niveau de qualité remarquable. Les LLM comme GPT-5.4 et Claude 4.6 ne se contentent pas de traduire mot a mot — ils comprennent le contexte, les nuances culturelles et l'intention derrière le message." },
        { type: "paragraph", content: "Que vous ayez besoin de traduire un email professionnel, de communiquer avec un partenaire étranger ou de comprendre un document technique en anglais, l'IA fait le travail en quelques secondes avec une qualité souvent supérieure aux traducteurs automatiques classiques." },
        { type: "heading", content: "Au-dela de la Traduction Simple" },
        { type: "prompt-example", content: "Traduis cet email en anglais professionnel (American English). Adapte les formules de politesse au style business américain. Garde un ton chaleureux mais professionnel. Si certaines expressions françaises n'ont pas d'équivalent direct, propose une adaptation culturelle." },
        { type: "paragraph", content: "L'IA peut aussi localiser du contenu — adapter un texte aux specificites culturelles d'un marche. Un slogan qui fonctionne en France peut nécessiter une adaptation complète pour le marche américain ou japonais." },
        { type: "subheading", content: "Communication en Temps Réel" },
        { type: "paragraph", content: "Des outils comme Google Translate avec la camera, les sous-titres en temps réel dans Google Meet et les fonctions de traduction intégrées dans ChatGPT permettent de communiquer en temps réel avec des personnes parlant d'autres langues." },
        { type: "callout", content: "Les LLM modernes gèrent plus de 100 langues et comprennent les nuances culturelles, les expressions idiomatiques et les registres de langue (formel, familier, technique)." },
        { type: "key-point", content: "Pour les documents critiques (contrats, textes juridiques), faites toujours relire la traduction par un locuteur natif. L'IA est excellente mais pas infaillible." },
        { type: "diagram", label: "Niveaux de Traduction IA", flow: "vertical", nodes: [
          { label: "Traduction basique", sub: "Mot a mot, sens général", color: "blue" },
          { label: "Traduction contextuelle", sub: "Nuances, ton, registre", color: "purple" },
          { label: "Localisation", sub: "Adaptation culturelle complète", color: "emerald" },
        ]},
        { type: "summary", items: [
          "Les LLM traduisent avec contexte, nuances et adaptation culturelle",
          "Precisez le registre et le public ciblé pour une meilleure traduction",
          "La localisation va au-dela de la traduction : adaptation culturelle",
          "Des outils permettent la communication multilingue en temps réel",
          "Faites relire les documents critiques par un locuteur natif"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce qui différencié la traduction IA des traducteurs classiques ?",
          options: ["Elle est plus lente", "Elle comprend le contexte et les nuances culturelles", "Elle ne fonctionne qu'en anglais", "Elle traduit mot a mot"],
          correctIndex: 1,
          explanation: "Les LLM comprennent le contexte, les nuances culturelles et l'intention derrière le message, ce qui produit des traductions plus naturelles."
        },
        {
          question: "Qu'est-ce que la localisation ?",
          options: ["Trouver la position GPS d'un texte", "Adapter un contenu aux specificites culturelles d'un marche", "Traduire en langue locale uniquement", "Stocker des données localement"],
          correctIndex: 1,
          explanation: "La localisation va au-dela de la traduction : elle adapte le contenu aux specificites culturelles, aux expressions et aux habitudes d'un marche ciblé."
        },
        {
          question: "Pour quels documents faut-il faire relire la traduction IA ?",
          options: ["Les emails amicaux", "Les posts sur les réseaux sociaux", "Les contrats et textes juridiques", "Les listes de courses"],
          correctIndex: 2,
          explanation: "Pour les documents critiques comme les contrats et textes juridiques, il est essentiel de faire relire la traduction par un locuteur natif."
        },
        {
          question: "Combien de langues les LLM modernes gèrent-ils environ ?",
          options: ["10 langues", "30 langues", "Plus de 100 langues", "Seulement l'anglais et le français"],
          correctIndex: 2,
          explanation: "Les LLM modernes comme GPT-5.4 et Claude 4.6 gèrent plus de 100 langues avec une compréhension des nuances et expressions idiomatiques."
        },
      ],
    },
    {
      number: 6,
      title: "Organiser sa Journee avec l'IA",
      description: "Planifier, prioriser et gérer son temps efficacement grâce à l'assistance IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA comme Assistant de Planification" },
        { type: "paragraph", content: "La gestion du temps est l'un des plus grands défis du quotidien professionnel. L'IA peut vous aider a planifier votre journée, prioriser vos tâches, gérer votre agenda et même vous rappeler les echeances importantes." },
        { type: "paragraph", content: "Des outils comme ChatGPT, Claude, Notion AI et Motion utilisent l'IA pour optimiser votre emploi du temps. Ils peuvent analyser vos habitudes, identifier les périodes les plus productives et suggérer des améliorations." },
        { type: "heading", content: "Planifier sa Journee avec un Prompt" },
        { type: "prompt-example", content: "Voici mes tâches pour demain : présentation client a 14h (haute priorité), 15 emails a traiter, rapport mensuel a finir, reunion équipe a 10h, appel fournisseur. Je suis plus productif le matin. Cree un planning optimisé de 8h a 18h avec des pauses. Identifie ce qui peut être délègue ou reporte." },
        { type: "paragraph", content: "L'IA peut aussi vous aider a decomposer un gros projet en tâches plus petites et a estimer le temps nécessaire pour chaque étape. C'est particulièrement utile pour éviter la procrastination face à des tâches complexes." },
        { type: "subheading", content: "Priorisation Intelligente" },
        { type: "paragraph", content: "Demandez à l'IA de classer vos tâches selon la matrice Eisenhower (urgent/important) ou la méthode MoSCoW (Must, Should, Could, Won't). L'IA peut vous aider à identifier ce qui est vraiment prioritaire et ce qui peut attendre." },
        { type: "tip", content: "Chaque matin, envoyez votre liste de tâches à l'IA avec votre contexte (reunions, deadlines, énergie). En 30 secondes, vous avez un planning optimisé." },
        { type: "diagram", label: "Matrice de Priorisation IA", flow: "horizontal", nodes: [
          { label: "Urgent + Important", sub: "Faire immédiatement", color: "pink" },
          { label: "Important, pas urgent", sub: "Planifier cette semaine", color: "blue" },
          { label: "Urgent, pas important", sub: "Déléguer si possible", color: "amber" },
          { label: "Ni urgent ni important", sub: "Eliminer ou reporter", color: "emerald" },
        ]},
        { type: "key-point", content: "L'IA ne connaît pas votre contexte émotionnel ou politique. Utilisez ses suggestions comme point de depart, puis ajustez selon votre réalité." },
        { type: "summary", items: [
          "L'IA peut planifier votre journée en analysant vos tâches et contraintes",
          "Decomposez les gros projets en tâches plus petites avec l'IA",
          "Utilisez la matrice Eisenhower ou MoSCoW pour prioriser",
          "Envoyez votre liste de tâches chaque matin pour un planning rapide",
          "Ajustez toujours les suggestions IA à votre contexte réel"
        ]},
      ],
      quiz: [
        {
          question: "Quelle méthode de priorisation l'IA peut-elle appliquer à vos tâches ?",
          options: ["La méthode FIFO", "La matrice Eisenhower (urgent/important)", "L'algorithme de Dijkstra", "La méthode Agile uniquement"],
          correctIndex: 1,
          explanation: "L'IA peut classer vos tâches selon la matrice Eisenhower (urgent vs important) pour vous aider à identifier les vraies priorités."
        },
        {
          question: "Pourquoi faut-il donner son contexte à l'IA pour la planification ?",
          options: ["Pour qu'elle soit plus lente", "Pour qu'elle adapte le planning à vos contraintes réelles", "Ce n'est pas nécessaire", "Pour impressionner ses collègues"],
          correctIndex: 1,
          explanation: "Donner son contexte (reunions, deadlines, périodes productives) permet à l'IA de créer un planning réaliste et adapté à vos contraintes."
        },
        {
          question: "Comment l'IA aide-t-elle face à la procrastination ?",
          options: ["En supprimant les tâches difficiles", "En decomposant les gros projets en tâches plus petites", "En remettant les tâches a plus tard", "En ignorant les tâches complexes"],
          correctIndex: 1,
          explanation: "L'IA peut decomposer un gros projet intimidant en tâches plus petites et gérables, ce qui réduit la procrastination."
        },
        {
          question: "Que signifie MoSCoW en gestion de priorités ?",
          options: ["Une ville en Russie", "Must, Should, Could, Won't", "Monday, Saturday, Cost, Outcome, Weekly", "Manage, Optimize, Schedule, Control, Overview, Win"],
          correctIndex: 1,
          explanation: "MoSCoW est une méthode de priorisation : Must (doit être fait), Should (devrait), Could (pourrait), Won't (ne sera pas fait cette fois)."
        },
      ],
    },
    {
      number: 7,
      title: "Automatiser les Tâches Repetitives",
      description: "Découvrir les outils d'automatisation IA pour éliminer les tâches chronophages.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'Automatisation IA : Travaillez Plus Smart" },
        { type: "paragraph", content: "Chaque professionnel passe en moyenne 4,5 heures par semaine sur des tâches répétitives qui pourraient être automatisees : copier-coller des données, reformater des documents, envoyer des emails de suivi, mettre à jour des tableaux. L'IA combinée aux outils d'automatisation peut éliminer la majorité de ces tâches." },
        { type: "heading", content: "Les Outils d'Automatisation" },
        { type: "subheading", content: "Make (ex-Integromat) et Zapier" },
        { type: "paragraph", content: "Make et Zapier connectent vos applications entre elles sans code. Par exemple : quand un email arrive avec une piece jointe, l'IA l'analyse, extrait les informations clés, et met à jour votre CRM automatiquement. Ces plateformes integrent désormais des étapes IA (GPT, Claude) dans leurs workflows." },
        { type: "subheading", content: "N8N (Self-Hosted)" },
        { type: "paragraph", content: "N8N est une alternative open source que vous pouvez héberger vous-même. Elle offre plus de contrôle et de personnalisation, et intégré nativement des noeuds IA pour le traitement de texte, la classification et l'extraction de données." },
        { type: "subheading", content: "Les GPTs Personnalises et Claude Projects" },
        { type: "paragraph", content: "Vous pouvez créer des assistants IA sur mesure pour des tâches spécifiques. Un GPT personnalisé pour répondre aux questions clients, un Claude Project pour analyser vos rapports mensuels — ces assistants deviennent vos employés virtuels spécialisés." },
        { type: "prompt-example", content: "Je recois 50 candidatures par email chaque semaine. Cree-moi un workflow d'automatisation : 1) extraire les infos clés du CV (nom, expérience, compétences), 2) classifier en 3 catégories (prioritaire, a revoir, non qualifie), 3) envoyer un email de confirmation personnalisé, 4) mettre à jour un Google Sheet." },
        { type: "video", videoId: "JtdUgJGI_Oo",
      videoDurationMinutes: 20, label: "Automatiser avec l'IA : tutoriel pratique" },
        { type: "diagram", label: "Écosystème d'Automatisation IA", flow: "horizontal", nodes: [
          { label: "Make / Zapier", sub: "Connecter les apps sans code", color: "purple" },
          { label: "N8N", sub: "Open source, self-hosted", color: "blue" },
          { label: "GPTs / Claude Projects", sub: "Assistants IA sur mesure", color: "emerald" },
        ]},
        { type: "key-point", content: "Commencez par automatiser UNE tâche répétitive. Mesurez le temps gagne. Puis automatisez la suivante. L'automatisation progressive est plus efficace que tout automatiser d'un coup." },
        { type: "summary", items: [
          "4,5 heures/semaine perdues en tâches répétitives automatisables",
          "Make et Zapier connectent vos apps et integrent des étapes IA",
          "N8N est une alternative open source pour plus de contrôle",
          "Les GPTs personnalisés et Claude Projects créent des assistants sur mesure",
          "Automatisez progressivement : une tâche à la fois"
        ]},
      ],
      quiz: [
        {
          question: "Combien d'heures par semaine sont perdues en tâches répétitives en moyenne ?",
          options: ["1 heure", "2,5 heures", "4,5 heures", "8 heures"],
          correctIndex: 2,
          explanation: "En moyenne, les professionnels passent 4,5 heures par semaine sur des tâches répétitives qui pourraient être automatisees."
        },
        {
          question: "Quelle plateforme d'automatisation est open source et self-hosted ?",
          options: ["Zapier", "Make", "N8N", "IFTTT"],
          correctIndex: 2,
          explanation: "N8N est une plateforme d'automatisation open source que vous pouvez héberger vous-même, offrant plus de contrôle et de personnalisation."
        },
        {
          question: "Qu'est-ce qu'un GPT personnalisé ?",
          options: ["Un processeur spécialisé", "Un assistant IA sur mesure pour des tâches spécifiques", "Un langage de programmation", "Un type de base de données"],
          correctIndex: 1,
          explanation: "Un GPT personnalisé est un assistant IA configurable pour des tâches spécifiques — comme répondre aux questions clients ou analyser des rapports."
        },
        {
          question: "Quelle est la meilleure approche pour commencer l'automatisation ?",
          options: ["Tout automatiser d'un coup", "Automatiser progressivement, une tâche à la fois", "Attendre que la technologie soit parfaite", "Demander a un développeur de tout coder"],
          correctIndex: 1,
          explanation: "L'automatisation progressive est plus efficace : commencez par UNE tâche, mesurez le temps gagne, puis automatisez la suivante."
        },
      ],
    },
    {
      number: 8,
      title: "Booster sa Créativité avec l'IA",
      description: "Utiliser l'IA comme partenaire créatif pour générer des idées et du contenu original.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA, Votre Partenaire Créatif" },
        { type: "paragraph", content: "L'IA n'est pas la pour remplacer votre créativité — elle est la pour la stimuler. Que vous soyez en panne d'inspiration pour un article, un pitch, un nom de produit ou une campagne marketing, l'IA peut générer des dizaines d'idées en quelques secondes pour vous aider a démarrer." },
        { type: "paragraph", content: "Le brainstorming avec l'IA est comme avoir un collègue infatigable qui ne juge jamais vos idées et propose toujours des alternatives. Vous pouvez explorer des directions créatives que vous n'auriez jamais envisagees seul." },
        { type: "heading", content: "Techniques de Brainstorming IA" },
        { type: "prompt-example", content: "Je lance une marque de the bio premium pour les 25-35 ans. Genere 15 noms de marque créatifs en explorant 3 directions : 1) noms evoquant la nature et la zen attitude, 2) noms modernes et urbains, 3) noms poétiques et littéraires. Pour chaque nom, expliqué le concept en une phrase." },
        { type: "paragraph", content: "L'IA excelle aussi dans la création de contenu : articles de blog, posts pour les réseaux sociaux, scripts video, newsletters. Donnez-lui votre angle, votre ton et votre public — elle génère un premier brouillon que vous n'avez plus qu'a affiner." },
        { type: "subheading", content: "L'IA Visuelle pour la Créativité" },
        { type: "paragraph", content: "Midjourney, DALL-E et Stable Diffusion transforment vos idées en images. Besoin d'un logo, d'un mockup, d'une illustration pour une présentation ? Decrivez ce que vous voulez et l'IA le génère. C'est un game-changer pour les non-designers." },
        { type: "tip", content: "Utilisez la technique du \"Et si...\" avec l'IA. \"Et si mon produit était un super-heros, quel serait son pouvoir ?\" Les questions absurdes produisent souvent les idées les plus originales." },
        { type: "callout", content: "Étude Harvard Business Review (2025) : les équipes utilisant l'IA pour le brainstorming generent 40% d'idées en plus et explorent 3x plus de directions créatives." },
        { type: "diagram", label: "Le Cycle Créatif avec l'IA", flow: "horizontal", nodes: [
          { label: "Inspiration", sub: "Brainstorming avec l'IA", color: "purple" },
          { label: "Génération", sub: "Texte, images, concepts", color: "blue" },
          { label: "Sélection", sub: "Vous choisissez les meilleures idées", color: "amber" },
          { label: "Raffinement", sub: "Iteration et personnalisation", color: "emerald" },
        ]},
        { type: "summary", items: [
          "L'IA stimule la créativité au lieu de la remplacer",
          "Le brainstorming IA génère 40% d'idées en plus",
          "Donnez un angle, un ton et un public pour du contenu ciblé",
          "Midjourney et DALL-E transforment vos idées en images",
          "La technique du \"Et si...\" produit des idées originales"
        ]},
      ],
      quiz: [
        {
          question: "Comment l'IA aide-t-elle la créativité ?",
          options: ["Elle remplace complètement la créativité humaine", "Elle stimule et amplifie la créativité existante", "Elle copie des idées existantes", "Elle n'aide pas du tout"],
          correctIndex: 1,
          explanation: "L'IA stimule et amplifie votre créativité en proposant des dizaines d'idées et de directions que vous pouvez explorer et affiner."
        },
        {
          question: "Quel gain en idées les équipes utilisant l'IA pour le brainstorming observent-elles ?",
          options: ["10% de plus", "25% de plus", "40% de plus", "100% de plus"],
          correctIndex: 2,
          explanation: "Les études montrent que les équipes utilisant l'IA pour le brainstorming generent 40% d'idées en plus et explorent 3x plus de directions créatives."
        },
        {
          question: "Quel outil permet de transformer une description en image ?",
          options: ["Google Docs", "Perplexity", "Midjourney", "N8N"],
          correctIndex: 2,
          explanation: "Midjourney, DALL-E et Stable Diffusion transforment des descriptions textuelles en images, ce qui est idéal pour le prototypage visuel."
        },
        {
          question: "Quelle technique créative est recommandée avec l'IA ?",
          options: ["Copier-coller des idées existantes", "La technique du \"Et si...\" avec des questions absurdes", "Ne jamais modifier les réponses de l'IA", "Utiliser uniquement des prompts courts"],
          correctIndex: 1,
          explanation: "La technique du \"Et si...\" avec des questions decalees ou absurdes pousse l'IA a proposer des idées originales et inattendues."
        },
      ],
    },
    {
      number: 9,
      title: "Construire son Workflow IA Personnel",
      description: "Assembler les outils et techniques pour créer votre écosystème IA sur mesure.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Votre Écosystème IA Personnel" },
        { type: "paragraph", content: "Maintenant que vous connaissez les différents usages de l'IA, il est temps de construire votre workflow personnel. Un workflow IA efficace combiné 3 à 5 outils complémentaires qui couvrent vos besoins principaux : rédaction, recherche, organisation, création et automatisation." },
        { type: "paragraph", content: "L'objectif n'est pas d'utiliser tous les outils existants, mais de choisir ceux qui s'integrent naturellement dans votre journée de travail. Un workflow trop complexe sera abandonne en quelques jours." },
        { type: "heading", content: "Étape 1 : Identifier Vos Besoins" },
        { type: "paragraph", content: "Listez vos 5 tâches les plus chronophages. Pour chacune, evaluez : combien de temps y consacrez-vous par semaine ? Un outil IA pourrait-il la simplifier ? Commencez par les tâches a fort impact." },
        { type: "heading", content: "Étape 2 : Choisir Vos Outils" },
        { type: "diagram", label: "Workflow IA Type pour un Professionnel", flow: "vertical", nodes: [
          { label: "Claude ou ChatGPT", sub: "Rédaction, analyse, brainstorming", color: "purple" },
          { label: "Perplexity", sub: "Recherche et veille", color: "blue" },
          { label: "Notion AI ou Motion", sub: "Organisation et planification", color: "emerald" },
          { label: "Make ou Zapier", sub: "Automatisation des workflows", color: "amber" },
          { label: "Midjourney ou Canva AI", sub: "Création visuelle", color: "pink" },
        ]},
        { type: "heading", content: "Étape 3 : Créer des Templates" },
        { type: "paragraph", content: "Creez des prompts templates pour vos tâches recurrentes. Un template pour vos emails clients, un pour vos comptes rendus de reunion, un pour vos posts LinkedIn. Stockez-les dans un document ou utilisez les Claude Projects / GPTs personnalisés." },
        { type: "prompt-example", content: "Cree-moi 5 templates de prompts pour mes tâches hebdomadaires : 1) Compte rendu de reunion (participants, décisions, actions), 2) Email de suivi client, 3) Résumé du rapport de vente, 4) Post LinkedIn professionnel, 5) Planification de la semaine." },
        { type: "tip", content: "Revoyez votre workflow chaque mois. Supprimez les outils que vous n'utilisez pas, ajoutez ceux qui pourraient vous aider et affinez vos templates." },
        { type: "key-point", content: "Le meilleur workflow est celui que vous utilisez vraiment. Commencez simple avec 2-3 outils et evoluez progressivement." },
        { type: "summary", items: [
          "Un bon workflow combiné 3 à 5 outils complémentaires",
          "Identifiez vos 5 tâches les plus chronophages en premier",
          "Creez des templates de prompts pour les tâches recurrentes",
          "Revoyez votre workflow chaque mois et ajustez",
          "Commencez simple : 2-3 outils suffisent pour démarrer"
        ]},
      ],
      quiz: [
        {
          question: "Combien d'outils IA un workflow efficace combiné-t-il idéalement ?",
          options: ["1 seul", "3 à 5 complémentaires", "10 ou plus", "Tous les outils disponibles"],
          correctIndex: 1,
          explanation: "Un workflow IA efficace combiné 3 à 5 outils complémentaires qui couvrent vos besoins principaux sans être trop complexe."
        },
        {
          question: "Par quoi faut-il commencer pour construire son workflow ?",
          options: ["Acheter tous les outils premium", "Identifier ses 5 tâches les plus chronophages", "Copier le workflow de quelqu'un d'autre", "Apprendre a programmer"],
          correctIndex: 1,
          explanation: "Commencez par identifier vos 5 tâches les plus chronophages et evaluez comment l'IA peut les simplifier. Priorisez celles a fort impact."
        },
        {
          question: "Qu'est-ce qu'un template de prompt ?",
          options: ["Un fichier Word", "Un prompt preformate pour une tâche recurrente", "Un plugin payant", "Un type de base de données"],
          correctIndex: 1,
          explanation: "Un template de prompt est un prompt preformate que vous reutilisez pour des tâches recurrentes (emails clients, comptes rendus, posts LinkedIn)."
        },
        {
          question: "A quelle fréquence faut-il revoir son workflow IA ?",
          options: ["Jamais, une fois suffit", "Chaque jour", "Chaque mois", "Chaque année"],
          correctIndex: 2,
          explanation: "Revoyez votre workflow chaque mois : supprimez les outils inutilises, ajoutez ceux qui pourraient aider et affinez vos templates."
        },
      ],
    },
    {
      number: 10,
      title: "Les Bonnes Pratiques au Quotidien",
      description: "Adopter les reflexes essentiels pour une utilisation efficace et responsable de l'IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Les Règles d'Or de l'IA au Quotidien" },
        { type: "paragraph", content: "Utiliser l'IA efficacement ne se résumé pas à savoir écrire des prompts. C'est un ensemble de bonnes pratiques qui garantissent des résultats de qualité, protegent vos données et evitent les pieges courants." },
        { type: "heading", content: "Les 7 Bonnes Pratiques" },
        { type: "subheading", content: "1. Verifiez Toujours les Informations Critiques" },
        { type: "paragraph", content: "L'IA peut halluciner — générer des informations fausses mais convaincantes. Pour les chiffres, dates, citations et faits importants, verifiez toujours avec une source fiable." },
        { type: "subheading", content: "2. Ne Partagez Jamais de Données Sensibles" },
        { type: "paragraph", content: "Evitez de copier-coller des données confidentielles (mots de passe, numeros de carte, informations personnelles de clients) dans les chatbots IA. Utilisez des versions entreprise avec garanties de confidentialité si nécessaire." },
        { type: "subheading", content: "3. Soyez Précis dans Vos Prompts" },
        { type: "paragraph", content: "Plus votre prompt est précis (contexte, format, ton, longueur, public), meilleur sera le résultat. Un prompt vague produit une réponse vague." },
        { type: "subheading", content: "4. Iterez et Affinez" },
        { type: "paragraph", content: "Le premier résultat est rarement parfait. Demandez des modifications, précisions ou alternatives. L'IA s'améliore avec le feedback." },
        { type: "callout", content: "Règle d'or : l'IA est un outil puissant, pas un oracle infaillible. Votre jugement reste la dernière ligne de défense." },
        { type: "heading", content: "Rester a Jour" },
        { type: "paragraph", content: "L'écosystème IA évolue très rapidement. De nouveaux outils, fonctionnalités et modèles sortent chaque mois. Suivez quelques sources de veille fiables pour rester à jour sans être submerge." },
        { type: "tip", content: "Abonnez-vous a 2-3 newsletters IA en français (comme Flint AI ou Ben's Bites traduit) pour rester informe sans y passer des heures." },
        { type: "diagram", label: "Les Reflexes Essentiels", flow: "horizontal", nodes: [
          { label: "Vérifier", sub: "Croiser les informations critiques", color: "pink" },
          { label: "Protéger", sub: "Ne jamais partager de données sensibles", color: "blue" },
          { label: "Preciser", sub: "Des prompts détaillés = meilleurs résultats", color: "emerald" },
          { label: "Iterer", sub: "Affiner les réponses progressivement", color: "amber" },
        ]},
        { type: "key-point", content: "L'IA au quotidien, c'est 20% de technologie et 80% de bonnes habitudes. Les reflexes que vous construisez aujourd'hui definiront votre productivité de demain." },
        { type: "summary", items: [
          "Verifiez toujours les informations critiques — l'IA peut halluciner",
          "Ne partagez jamais de données sensibles dans les chatbots publics",
          "Des prompts précis produisent des résultats de qualité",
          "Iterez et affinez — le premier résultat est rarement parfait",
          "Restez à jour avec 2-3 newsletters IA fiables",
          "L'IA est un outil puissant, pas un oracle infaillible"
        ]},
      ],
      quiz: [
        {
          question: "Que signifie \"halluciner\" pour une IA ?",
          options: ["L'IA plante et redémarre", "L'IA génère des informations fausses mais convaincantes", "L'IA refuse de répondre", "L'IA devient plus lente"],
          correctIndex: 1,
          explanation: "Une hallucination IA est une information fausse générée de manière convaincante par le modèle. C'est pourquoi il faut toujours vérifier les informations critiques."
        },
        {
          question: "Que ne faut-il JAMAIS partager avec un chatbot IA public ?",
          options: ["Vos idées de projets", "Des données sensibles (mots de passe, infos clients)", "Des questions de culture générale", "Vos préférences alimentaires"],
          correctIndex: 1,
          explanation: "Les données sensibles (mots de passe, numeros de carte, informations personnelles) ne doivent jamais être partagees avec des chatbots IA publics."
        },
        {
          question: "Quel est l'impact d'un prompt vague ?",
          options: ["Un résultat excellent", "Un résultat vague et peu utile", "Une erreur système", "Aucun impact"],
          correctIndex: 1,
          explanation: "Un prompt vague produit une réponse vague. Plus vous precisez le contexte, le format, le ton et le public, meilleur sera le résultat."
        },
        {
          question: "Quelle est la règle d'or de l'utilisation de l'IA au quotidien ?",
          options: ["Faire confiance aveuglément à l'IA", "L'IA est un outil puissant, pas un oracle infaillible", "Utiliser uniquement des outils payants", "Ne jamais vérifier les réponses"],
          correctIndex: 1,
          explanation: "L'IA est un outil puissant mais pas infaillible. Votre jugement reste la dernière ligne de défense pour valider les résultats."
        },
      ],
    },
  ],
};

export default content;
