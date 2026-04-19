import type { CourseContent } from "../types";

const content: CourseContent = {
  slug: "ia-de-a-a-z",
  chapters: [
    {
      number: 1,
      title: "Qu'est-ce que l'Intelligence Artificielle ?",
      description: "Comprendre les bases de l'IA, son histoire et son fonctionnement.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Qu'est-ce que l'Intelligence Artificielle ?" },
        { type: "paragraph", content: "L'Intelligence Artificielle (IA) est un domaine de l'informatique qui vise à créer des systèmes capables d'effectuer des tâches qui nécessitent normalement l'intelligence humaine. Ces tâches incluent la reconnaissance vocale, la prise de décision, la traduction linguistique, la perception visuelle et bien d'autres encore." },
        { type: "paragraph", content: "L'IA ne se limite pas à un seul algorithme ou une seule technique : c'est un ensemble vaste de méthodes, d'approches et de technologies qui travaillent ensemble pour simuler certains aspects de la cognition humaine." },
        { type: "callout", content: "Le terme \"Intelligence Artificielle\" a été inventé en 1956 lors de la conférence de Dartmouth, organisée par John McCarthy, Marvin Minsky, Nathaniel Rochester et Claude Shannon." },
        { type: "video", videoId: { fr: "fENw2n2FmpQ", en: "ad79nYk2keg" },
      videoDurationMinutes: 5, label: "L'Intelligence Artificielle en 5 minutes" },
        { type: "heading", content: "Les Grandes Étapes de l'IA" },
        { type: "paragraph", content: "1943 : Warren McCulloch et Walter Pitts créent le premier modèle mathématique d'un neurone artificiel. 1950 : Alan Turing publie son article fondateur \"Computing Machinery and Intelligence\" et propose le fameux Test de Turing. 1956 : La conférence de Dartmouth marque la naissance officielle de l'IA." },
        { type: "paragraph", content: "2012 : AlexNet révolutionne la vision par ordinateur. 2016 : AlphaGo bat le champion du monde de Go. 2017 : Google publie \"Attention Is All You Need\", introduisant l'architecture Transformer." },
        { type: "paragraph", content: "2022-2023 : ChatGPT démocratise l'IA auprès du grand public. 2024-2025 : Les modèles multimodaux deviennent la norme. 2026 : GPT-5.4, Claude 4.6 et Gemini 3.1 atteignent le million de tokens de contexte. Les agents IA autonomes avec Computer Use transforment les workflows." },
        { type: "heading", content: "Comment Fonctionne l'IA ?" },
        { type: "paragraph", content: "À son niveau le plus fondamental, l'IA fonctionne en utilisant des algorithmes pour analyser des données, identifier des patterns, et prendre des décisions basées sur ces patterns." },
        { type: "paragraph", content: "La collecte de données est la première étape : l'IA a besoin de grandes quantités de données pour apprendre. Ensuite vient l'entraînement : l'algorithme ajuste ses paramètres pour minimiser ses erreurs. Enfin, l'inférence : le modèle entraîné peut faire des prédictions sur de nouvelles données." },
        { type: "key-point", content: "L'IA n'est pas \"intelligente\" au sens humain. Elle excelle dans les tâches spécifiques pour lesquelles elle a été entraînée, mais ne possède pas de conscience, d'émotions ou de compréhension véritable." },
        { type: "diagram", label: "Le Cycle de Fonctionnement de l'IA", flow: "horizontal", nodes: [
          { label: "Collecte de données", sub: "Grandes quantités de données brutes", color: "purple" },
          { label: "Entraînement", sub: "L'algorithme apprend les patterns", color: "blue" },
          { label: "Inférence", sub: "Prédictions sur nouvelles données", color: "emerald" },
        ]},
        { type: "diagram", label: "Grandes Étapes de l'IA", flow: "vertical", nodes: [
          { label: "1956 — Conférence de Dartmouth", sub: "Naissance officielle de l'IA", color: "amber" },
          { label: "2012 — AlexNet", sub: "Révolution de la vision par ordinateur", color: "purple" },
          { label: "2017 — Transformers", sub: "Architecture fondatrice des LLM modernes", color: "blue" },
          { label: "2022 — ChatGPT", sub: "Démocratisation de l'IA grand public", color: "emerald" },
          { label: "2026 — Agents autonomes", sub: "IA intégrée dans tous les workflows", color: "pink" },
        ]},
        { type: "summary", items: [
          "L'IA est un ensemble de techniques pour simuler l'intelligence humaine",
          "Le domaine a connu des phases d'enthousiasme et des \"hivers de l'IA\"",
          "En 2026, l'IA est intégrée dans pratiquement tous les secteurs",
          "L'IA fonctionne par collecte de données, entraînement et inférence",
          "Elle excelle dans les tâches spécifiques mais n'a pas de conscience"
        ]},
      ],
      quiz: [
        {
          question: "En quelle année le terme \"Intelligence Artificielle\" a-t-il été inventé ?",
          options: ["1943", "1950", "1956", "1969"],
          correctIndex: 2,
          explanation: "Le terme \"Intelligence Artificielle\" a été inventé en 1956 lors de la conférence de Dartmouth, considérée comme l'acte de naissance de l'IA comme discipline académique."
        },
        {
          question: "Quel événement a marqué la démocratisation de l'IA auprès du grand public ?",
          options: ["La victoire d'AlphaGo en 2016", "Le lancement de ChatGPT en 2022", "La publication de GPT-5.4 en 2026", "La conférence de Dartmouth en 1956"],
          correctIndex: 1,
          explanation: "ChatGPT, lancé par OpenAI fin 2022, a été le premier outil IA à atteindre des centaines de millions d'utilisateurs et a rendu l'IA accessible au grand public."
        },
        {
          question: "Quelle est la première étape du fonctionnement d'un système d'IA ?",
          options: ["L'inférence", "L'optimisation", "La collecte de données", "Le déploiement"],
          correctIndex: 2,
          explanation: "La collecte de données est la première étape. L'IA a besoin de grandes quantités de données pour apprendre les patterns qui lui permettront de faire des prédictions."
        },
        {
          question: "L'IA en 2026 est capable de :",
          options: ["Ressentir des émotions comme un humain", "Avoir une conscience de soi", "Exceller dans des tâches spécifiques pour lesquelles elle est entraînée", "Comprendre véritablement le sens des mots"],
          correctIndex: 2,
          explanation: "L'IA excelle dans les tâches spécifiques (génération de texte, reconnaissance d'images, etc.) mais ne possède pas de conscience, d'émotions ou de compréhension véritable."
        },
      ],
    },
    {
      number: 2,
      title: "Les Fondamentaux du Machine Learning",
      description: "Découvrir les 3 types d'apprentissage automatique et leurs applications.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Qu'est-ce que le Machine Learning ?" },
        { type: "paragraph", content: "Le Machine Learning (apprentissage automatique) est une branche de l'IA qui permet aux ordinateurs d'apprendre à partir de données sans être explicitement programmés pour chaque tâche. Au lieu d'écrire des règles spécifiques, on fournit des exemples au système et il découvre les patterns par lui-même." },
        { type: "paragraph", content: "C'est la technologie au coeur de la plupart des applications IA modernes : recommandations Netflix, détection de spam, reconnaissance faciale, traduction automatique, et bien plus." },
        { type: "heading", content: "Les 3 Types d'Apprentissage" },
        { type: "subheading", content: "Apprentissage Supervisé" },
        { type: "paragraph", content: "L'algorithme apprend à partir d'exemples étiquetés. Par exemple, on lui montre des milliers de photos de chats et de chiens, chacune labellisée \"chat\" ou \"chien\", et il apprend à distinguer les deux. C'est le type le plus courant, utilisé pour la classification, la prédiction et la détection." },
        { type: "subheading", content: "Apprentissage Non Supervisé" },
        { type: "paragraph", content: "L'algorithme découvre des structures cachées dans des données non étiquetées. Il identifie des groupes (clustering), des anomalies, ou des patterns sans qu'on lui dise quoi chercher. Utilisé pour la segmentation de clients, la détection de fraude, et la réduction de dimensionnalité." },
        { type: "subheading", content: "Apprentissage par Renforcement" },
        { type: "paragraph", content: "Un agent apprend à prendre des décisions en interagissant avec un environnement. Il reçoit des récompenses positives ou négatives selon ses actions. C'est ce qui a permis à AlphaGo de battre les meilleurs joueurs de Go et c'est utilisé pour les voitures autonomes et le fine-tuning des LLM (RLHF)." },
        { type: "tip", content: "Pour retenir : Supervisé = on lui montre la réponse. Non supervisé = il trouve seul. Renforcement = il apprend par essai-erreur." },
        { type: "heading", content: "Les Applications du Machine Learning" },
        { type: "paragraph", content: "Le ML est partout : prédiction de prix, diagnostic médical, filtrage de spam, recommandation de produits, traduction automatique, reconnaissance vocale, conduite autonome, trading algorithmique, et optimisation de publicités." },
        { type: "diagram", label: "Les 3 Types d'Apprentissage", flow: "horizontal", nodes: [
          { label: "Supervisé", sub: "Données étiquetées → prédiction", color: "purple" },
          { label: "Non supervisé", sub: "Clustering, anomalies", color: "blue" },
          { label: "Renforcement", sub: "Récompenses, essai-erreur", color: "emerald" },
        ]},
        { type: "video", videoId: { fr: "veUSMz1MZvU", en: "R9OHn5ZF4Uo" },
      videoDurationMinutes: 9, label: "Le Machine Learning expliqué simplement" },
        { type: "summary", items: [
          "Le Machine Learning permet aux machines d'apprendre à partir de données",
          "3 types : supervisé (avec exemples), non supervisé (sans labels), renforcement (essai-erreur)",
          "L'apprentissage supervisé est le plus courant",
          "Le ML est au coeur de la majorité des applications IA modernes",
          "RLHF (renforcement par feedback humain) est utilisé pour entraîner les LLM"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que le Machine Learning ?",
          options: ["Un langage de programmation", "Une branche de l'IA qui apprend à partir de données", "Un type de processeur", "Un logiciel de création graphique"],
          correctIndex: 1,
          explanation: "Le Machine Learning est une branche de l'IA qui permet aux systèmes d'apprendre automatiquement à partir de données sans être explicitement programmés pour chaque tâche."
        },
        {
          question: "Dans l'apprentissage supervisé, les données d'entraînement sont :",
          options: ["Non étiquetées", "Générées aléatoirement", "Étiquetées avec la bonne réponse", "Créées par l'algorithme lui-même"],
          correctIndex: 2,
          explanation: "L'apprentissage supervisé utilise des données étiquetées (avec la bonne réponse) pour que l'algorithme apprenne à associer des entrées a des sorties."
        },
        {
          question: "AlphaGo a battu le champion du monde de Go grâce à quel type d'apprentissage ?",
          options: ["Apprentissage supervisé", "Apprentissage non supervisé", "Apprentissage par renforcement", "Apprentissage profond uniquement"],
          correctIndex: 2,
          explanation: "AlphaGo a utilisé l'apprentissage par renforcement, jouant des millions de parties contre lui-même pour apprendre les meilleures stratégies."
        },
        {
          question: "Que signifie RLHF ?",
          options: ["Real Language High Frequency", "Reinforcement Learning from Human Feedback", "Recursive Learning for Huge Files", "Rapid Learning and High Fidelity"],
          correctIndex: 1,
          explanation: "RLHF (Reinforcement Learning from Human Feedback) est la technique utilisée pour affiner les grands modèles de langage en utilisant les retours d'évaluateurs humains."
        },
      ],
    },
    {
      number: 3,
      title: "Le Deep Learning Explique Simplement",
      description: "Les réseaux de neurones, les couches, et pourquoi le deep learning à tout changé.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Des Neurones Biologiques aux Neurones Artificiels" },
        { type: "paragraph", content: "Le Deep Learning (apprentissage profond) est inspiré du fonctionnement du cerveau humain. Tout comme notre cerveau est compose de milliards de neurones interconnectes, un réseau de neurones artificiel est compose de couches de \"neurones\" mathématiques qui traitent l'information." },
        { type: "paragraph", content: "Chaque neurone artificiel reçoit des entrées, les multiplie par des poids, appliqué une fonction d'activation, et produit une sortie. C'est simple individuellement, mais la puissance émerge de la combinaison de millions de ces neurones en couches successives." },
        { type: "heading", content: "L'Architecture d'un Réseau de Neurones" },
        { type: "paragraph", content: "Un réseau de neurones typique comprend : une couche d'entrée (reçoit les données brutes), des couches cachées (traitent et transforment l'information), et une couche de sortie (produit le résultat final)." },
        { type: "key-point", content: "Le \"deep\" dans \"deep learning\" fait référence au nombre de couches cachées. Plus il y a de couches, plus le réseau peut apprendre des représentations complexes et abstraites." },
        { type: "paragraph", content: "Les réseaux modernes comme GPT-5.4 peuvent avoir des centaines de couches et des trillions de paramètres. L'entraînement nécessite des milliers de GPU travaillant en parallèle pendant des semaines." },
        { type: "heading", content: "Pourquoi le Deep Learning a Tout Change" },
        { type: "paragraph", content: "Trois facteurs ont converge pour révolutionner l'IA : 1) La disponibilité de données massives (Internet, smartphones). 2) La puissance de calcul (GPU, TPU). 3) Les avancées algorithmiques (Transformers en 2017)." },
        { type: "paragraph", content: "En 2012, AlexNet a démontré que le deep learning pouvait dominer la vision par ordinateur. Depuis, le deep learning a successivement révolutionné le NLP (traduction, génération de texte), la génération d'images (DALL-E, Midjourney), la video (Sora), et même la découverte scientifique (AlphaFold pour les proteines)." },
        { type: "callout", content: "L'architecture Transformer, introduite par Google en 2017 dans l'article \"Attention Is All You Need\", est la fondation de tous les grands modèles de langage actuels (GPT, Claude, Gemini)." },
        { type: "video", videoId: { fr: "z-czi5DC2d4", en: "aircAruvnKk" },
      videoDurationMinutes: 19, label: "Comment fonctionne un réseau de neurones (3Blue1Brown)" },
        { type: "diagram", label: "Architecture d'un Réseau de Neurones", flow: "horizontal", nodes: [
          { label: "Couche d'entrée", sub: "Données brutes (pixels, tokens…)", color: "blue" },
          { label: "Couches cachées", sub: "Traitement et représentations abstraites", color: "purple" },
          { label: "Couche de sortie", sub: "Prédiction ou génération finale", color: "emerald" },
        ]},
        { type: "diagram", label: "Les 3 Catalyseurs du Deep Learning", flow: "horizontal", nodes: [
          { label: "Big Data", sub: "Milliards de textes et images", color: "amber" },
          { label: "GPU / TPU", sub: "Puissance de calcul parallèle", color: "pink" },
          { label: "Transformers", sub: "Architecture de 2017 — base des LLM", color: "purple" },
        ]},
        { type: "summary", items: [
          "Le Deep Learning est inspiré du cerveau avec des couches de neurones artificiels",
          "\"Deep\" = nombreuses couches cachées pour des représentations complexes",
          "3 facteurs : données massives + puissance de calcul + Transformers",
          "AlexNet (2012) a lancé la révolution, les Transformers (2017) l'ont acceleree",
          "Le Deep Learning est derrière GPT-5.4, Claude 4.6, Midjourney, Sora, etc."
        ]},
      ],
      quiz: [
        {
          question: "D'où vient l'inspiration du Deep Learning ?",
          options: ["Des circuits électroniques", "Du fonctionnement du cerveau humain", "De la mécanique quantique", "Des algorithmes génétiques"],
          correctIndex: 1,
          explanation: "Le Deep Learning est directement inspiré du fonctionnement du cerveau humain, avec des couches de neurones artificiels qui imitent les neurones biologiques."
        },
        {
          question: "Que signifie \"deep\" dans \"Deep Learning\" ?",
          options: ["L'apprentissage est très lent", "Le réseau utilise beaucoup de données", "Le réseau a de nombreuses couches cachées", "L'IA comprend les choses en profondeur"],
          correctIndex: 2,
          explanation: "\"Deep\" fait référence au nombre de couches cachées dans le réseau de neurones. Plus il y a de couches, plus le modèle peut apprendre des représentations abstraites et complexes."
        },
        {
          question: "Quelle architecture est a la base de GPT, Claude et Gemini ?",
          options: ["CNN (Convolutional Neural Network)", "RNN (Recurrent Neural Network)", "Transformer", "GAN (Générative Adversarial Network)"],
          correctIndex: 2,
          explanation: "L'architecture Transformer, introduite en 2017 par Google dans \"Attention Is All You Need\", est la fondation de tous les grands modèles de langage actuels."
        },
        {
          question: "Quels sont les 3 facteurs qui ont permis la révolution du Deep Learning ?",
          options: ["Argent + marketing + brevets", "Données massives + puissance de calcul + avancées algorithmiques", "Internet + smartphones + réseaux sociaux", "Gouvernements + universités + entreprises"],
          correctIndex: 1,
          explanation: "La convergence de données massives (Internet), de puissance de calcul (GPU) et d'avancées algorithmiques (Transformers) a rendu le Deep Learning extrêmement performant."
        },
      ],
    },
    {
      number: 4,
      title: "Le Traitement du Langage Naturel (NLP)",
      description: "Comment les machines comprennent et generent du texte humain.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Le NLP : Faire Comprendre le Langage aux Machines" },
        { type: "paragraph", content: "Le Traitement du Langage Naturel (NLP) est la branche de l'IA dédiée à l'interaction entre les ordinateurs et le langage humain. C'est la technologie qui permet à ChatGPT de comprendre vos questions et d'y répondre, a Google Translate de traduire des langues, et a Siri de comprendre vos commandes vocales." },
        { type: "heading", content: "Les Étapes du Traitement" },
        { type: "paragraph", content: "Le NLP comprend plusieurs étapes : la tokenisation (découpage du texte en morceaux), l'analyse syntaxique (grammaire), l'analyse sémantique (sens), et la génération (production de nouveau texte)." },
        { type: "key-point", content: "La tokenisation est fondamentale : elle détermine comment le modèle \"voit\" votre texte. Le mot \"intelligence\" peut être un seul token, tandis qu'un mot rare peut nécessiter plusieurs tokens." },
        { type: "heading", content: "L'Évolution : Des Règles aux Transformers" },
        { type: "paragraph", content: "Le NLP est passe des systèmes a règles manuelles (1960-2000) aux méthodes statistiques (2000-2017), puis à l'ère des Transformers (2017-présent). Les modèles pre-entraînés comme BERT, GPT et Claude ont révolutionné le domaine en apprenant les structures du langage à partir de milliards de textes." },
        { type: "diagram", label: "Pipeline du Traitement NLP", flow: "horizontal", nodes: [
          { label: "Tokenisation", sub: "Découpage du texte en tokens", color: "blue" },
          { label: "Analyse syntaxique", sub: "Structure grammaticale", color: "purple" },
          { label: "Analyse sémantique", sub: "Sens et intention", color: "emerald" },
          { label: "Génération", sub: "Production de nouveau texte", color: "amber" },
        ]},
        { type: "video", videoId: { fr: "46XbjplgwOw", en: "wjZofJX0v4M" },
      videoDurationMinutes: 27, label: "Comprendre les Transformers et les LLM (3Blue1Brown)" },
        { type: "summary", items: [
          "Le NLP permet aux machines de comprendre et générer du langage humain",
          "Étapes : tokenisation, analyse syntaxique, analyse sémantique, génération",
          "Les Transformers ont révolutionné le NLP depuis 2017",
          "Les LLM modernes sont pre-entraînés sur des milliards de textes"
        ]},
      ],
      quiz: [
        {
          question: "Que signifie NLP ?",
          options: ["Neural Language Processing", "Natural Language Programming", "Natural Language Processing", "Network Learning Protocol"],
          correctIndex: 2,
          explanation: "NLP signifie Natural Language Processing (Traitement du Langage Naturel), la branche de l'IA dédiée à l'interaction entre ordinateurs et langage humain."
        },
        {
          question: "Qu'est-ce que la tokenisation ?",
          options: ["Chiffrer le texte pour la sécurité", "Decouper le texte en morceaux (tokens)", "Traduire le texte en code binaire", "Compresser le texte pour le stockage"],
          correctIndex: 1,
          explanation: "La tokenisation est le processus de découpage du texte en morceaux (tokens) que le modèle peut traiter. C'est la première étape du traitement NLP."
        },
        {
          question: "Quelle révolution a transformé le NLP à partir de 2017 ?",
          options: ["Les réseaux convolutifs", "Les Transformers", "Les bases de données SQL", "Le cloud computing"],
          correctIndex: 1,
          explanation: "L'architecture Transformer, introduite en 2017, a révolutionné le NLP en permettant aux modèles de traiter le contexte de manière beaucoup plus efficace."
        },
        {
          question: "ChatGPT utilise principalement quelle technologie NLP ?",
          options: ["Des règles grammaticales manuelles", "Des méthodes statistiques classiques", "Un modèle de langage pre-entraîné (LLM)", "Un dictionnaire électronique"],
          correctIndex: 2,
          explanation: "ChatGPT est base sur un LLM (Large Language Model), un modèle de langage pre-entraîné sur des milliards de textes puis affiné par RLHF."
        },
      ],
    },
    { number: 5, title: "La Vision par Ordinateur", description: "Comment les machines analysent et comprennent les images et les vidéos.", estimatedMinutes: 6, sections: [{ type: "heading", content: "La Vision par Ordinateur" }, { type: "paragraph", content: "La vision par ordinateur permet aux machines de \"voir\" et d'interpréter les images et les vidéos. Reconnaissance faciale, détection d'objets, imagerie médicale, véhicules autonomes — cette technologie est partout." }, { type: "paragraph", content: "Les CNN (Convolutional Neural Networks) ont révolutionne ce domaine en 2012. Aujourd'hui, les modèles multimodaux comme GPT-5.4 et Gemini 3.1 combinent vision et langage pour analyser des images et répondre a des questions dessus." }, { type: "diagram", label: "Applications de la Vision par Ordinateur", flow: "horizontal", nodes: [{ label: "Reconnaissance faciale", sub: "Identification de personnes", color: "purple" }, { label: "Détection d'objets", sub: "Localiser et classer des objets", color: "blue" }, { label: "Imagerie médicale", sub: "Diagnostic précoce de maladies", color: "emerald" }, { label: "Véhicules autonomes", sub: "Perception de l'environnement", color: "amber" }] }, { type: "summary", items: ["La vision par ordinateur permet aux machines d'analyser images et vidéos", "Les CNN sont la base des systèmes de vision modernes", "Les modèles multimodaux combinent vision et langage", "Applications : reconnaissance faciale, imagerie médicale, véhicules autonomes"] }], quiz: [{ question: "Quel type de réseau est spécialisé dans l'analyse d'images ?", options: ["RNN", "CNN", "GAN", "MLP"], correctIndex: 1, explanation: "Les CNN (Convolutional Neural Networks) sont spécialisés dans le traitement d'images grâce à leurs filtres de convolution qui detectent les patterns visuels." }, { question: "Que signifie \"multimodal\" pour un modèle IA ?", options: ["Il fonctionne sur plusieurs ordinateurs", "Il peut traiter différents types de données (texte, image, audio)", "Il a été entraîné dans plusieurs pays", "Il peut parler plusieurs langues"], correctIndex: 1, explanation: "Un modèle multimodal peut traiter et générer différents types de données : texte, images, audio, video. GPT-5.4 et Gemini 3.1 sont multimodaux." }, { question: "AlexNet a révolutionne la vision par ordinateur en quelle année ?", options: ["2006", "2012", "2017", "2020"], correctIndex: 1, explanation: "AlexNet a remporté le concours ImageNet en 2012, démontrant la supériorité du deep learning pour la vision par ordinateur." }, { question: "Quelle application n'utilise PAS la vision par ordinateur ?", options: ["Reconnaissance faciale", "Traduction de texte", "Véhicules autonomes", "Imagerie médicale"], correctIndex: 1, explanation: "La traduction de texte releve du NLP (Traitement du Langage Naturel), pas de la vision par ordinateur." }] },
    { number: 6, title: "Les Modèles de Langage", description: "GPT-5.4, Claude 4.6, Gemini 3.1 — comment fonctionnent les LLM.", estimatedMinutes: 8, sections: [{ type: "heading", content: "Les Grands Modèles de Langage (LLM)" }, { type: "paragraph", content: "Les LLM sont des réseaux de neurones massifs entraînés sur des quantités colossales de texte pour prédire le mot suivant dans une séquence. Cette tâche simple en apparence, répétée des trillions de fois, fait émerger des capacités surprenantes : raisonnement, programmation, créativité, et même une forme de \"compréhension\"." }, { type: "subheading", content: "GPT-5.4 (OpenAI)" }, { type: "paragraph", content: "Sorti le 5 mars 2026, GPT-5.4 est disponible en trois variantes : Standard, Thinking (raisonnement avance) et Pro (capacité maximale). Contexte d'1,05 million de tokens, Computer Use natif, 33% moins d'hallucinations que GPT-5.2." }, { type: "subheading", content: "Claude 4.6 (Anthropic)" }, { type: "paragraph", content: "Claude Opus 4.6, lancé le 5 février 2026, offre 1 million de tokens de contexte, un horizon de tâche de 14,5 heures, et le meilleur score sur le benchmark Finance Agent. Claude se distingue par sa précision et son honnêteté." }, { type: "subheading", content: "Gemini 3.1 (Google DeepMind)" }, { type: "paragraph", content: "Gemini 3.1 Pro, sorti en février 2026, est nativement multimodal avec 1 million de tokens de contexte et un score de 77,1% sur ARC-AGI-2. Intégré dans tout l'écosystème Google." }, { type: "video", videoId: { fr: "46XbjplgwOw", en: "wjZofJX0v4M" },
      videoDurationMinutes: 27, label: "Comprendre les GPT : intro visuelle aux Transformers (3Blue1Brown)" }, { type: "diagram", label: "Comparatif des LLM Majeurs en 2026", flow: "horizontal", nodes: [{ label: "GPT-5.4", sub: "Computer Use natif, 1,05M tokens, 3 variantes", color: "emerald" }, { label: "Claude 4.6", sub: "14,5h d'autonomie, précision, honnêteté", color: "purple" }, { label: "Gemini 3.1", sub: "Multimodal natif, écosystème Google", color: "blue" }] }, { type: "summary", items: ["Les LLM predisent le mot suivant — cette simplicité fait émerger des capacités complexes", "GPT-5.4 : 3 variantes, Computer Use natif, 1,05M tokens", "Claude 4.6 : précision, honnêteté, 14,5h d'autonomie, 1M tokens", "Gemini 3.1 : multimodal natif, 77,1% ARC-AGI-2, intégration Google", "Tous les LLM de pointe atteignent 1 million de tokens de contexte en 2026"] }], quiz: [{ question: "Comment les LLM apprennent-ils principalement ?", options: ["En memorisant des réponses", "En predisant le mot suivant dans une séquence", "En copiant des pages web", "En discutant avec des humains"], correctIndex: 1, explanation: "Les LLM sont entraînés a prédire le mot suivant dans une séquence de texte. Cette tâche répétée des trillions de fois fait émerger des capacités de raisonnement et de génération." }, { question: "Combien de tokens de contexte les LLM de pointe supportent-ils en 2026 ?", options: ["32 000", "128 000", "500 000", "1 million+"], correctIndex: 3, explanation: "En mars 2026, GPT-5.4, Claude 4.6 et Gemini 3.1 supportent tous environ 1 million de tokens de contexte." }, { question: "Quel modèle a le plus long horizon de complétion de tâche ?", options: ["GPT-5.4 Pro", "Claude Opus 4.6", "Gemini 3.1 Pro", "Qwen 3.5"], correctIndex: 1, explanation: "Claude Opus 4.6 peut maintenir une tâche pendant 14,5 heures d'affilee — le plus long horizon de tous les modèles IA." }, { question: "Que signifie \"Computer Use\" pour un LLM ?", options: ["Le modèle fonctionne sur un ordinateur", "Le modèle peut contrôler un ordinateur comme un humain", "Le modèle consomme beaucoup de ressources", "Le modèle ne fonctionne qu'en local"], correctIndex: 1, explanation: "Le Computer Use permet au modèle de contrôler un ordinateur (cliquer, taper, naviguer) comme un humain le ferait, ouvrant la voie aux agents autonomes." }] },
    { number: 7, title: "L'IA Générative", description: "Comment l'IA crée du texte, des images, des vidéos et de la musique.", estimatedMinutes: 7, sections: [{ type: "heading", content: "L'IA Générative : Créer du Nouveau" }, { type: "paragraph", content: "L'IA générative désigné les systèmes capables de créer du contenu nouveau : texte, images, vidéos, musique, code. C'est la forme d'IA la plus visible et la plus utilisée en 2026." }, { type: "subheading", content: "Génération de Texte" }, { type: "paragraph", content: "Les LLM comme GPT-5.4 et Claude 4.6 generent du texte d'une qualité souvent indiscernable d'un rédacteur humain : articles, emails, code, scripts, poèmes, rapports." }, { type: "subheading", content: "Génération d'Images" }, { type: "paragraph", content: "Midjourney V7/V8, DALL-E 3 et Stable Diffusion transforment des descriptions textuelles en images. Midjourney excelle dans l'esthetique artistique, DALL-E dans le texte intégré, et Stable Diffusion dans le contrôle total (open source)." }, { type: "subheading", content: "Génération de Vidéo et Audio" }, { type: "paragraph", content: "Sora 2 d'OpenAI génère des vidéos avec dialogues synchronisés et physique réaliste. ElevenLabs produit des voix indiscernables de voix humaines. Suno créé de la musique complète avec voix, instruments et arrangement." }, { type: "diagram", label: "Panorama de l'IA Générative", flow: "horizontal", nodes: [{ label: "Texte", sub: "GPT-5.4, Claude 4.6, Gemini 3.1", color: "purple" }, { label: "Images", sub: "Midjourney, DALL-E 3, Stable Diffusion", color: "blue" }, { label: "Vidéo", sub: "Sora 2, Runway, Kling AI", color: "emerald" }, { label: "Audio / Musique", sub: "ElevenLabs, Suno, Udio", color: "amber" }] }, { type: "video", videoId: { fr: "7ell8KEbhJo", en: "_8xvHnGpIyY" },
      videoDurationMinutes: 27, label: "Comment fonctionne ChatGPT ?" }, { type: "summary", items: ["L'IA générative créé du contenu nouveau : texte, images, vidéos, musique", "Texte : GPT-5.4, Claude 4.6 — qualité professionnelle", "Images : Midjourney V7/V8, DALL-E 3, Stable Diffusion", "Vidéo : Sora 2 avec dialogues et effets sonores", "Audio : ElevenLabs (voix), Suno (musique complète)"] }], quiz: [{ question: "Qu'est-ce que l'IA générative ?", options: ["Une IA qui analyse des données existantes", "Une IA qui créé du contenu nouveau", "Une IA qui supprime du contenu", "Une IA qui trie des informations"], correctIndex: 1, explanation: "L'IA générative est capable de créer du contenu entièrement nouveau : texte, images, vidéos, musique, code — à partir de descriptions ou d'instructions." }, { question: "Quel outil excelle dans la génération d'images avec du texte intégré ?", options: ["Midjourney", "DALL-E 3", "Stable Diffusion", "Sora"], correctIndex: 1, explanation: "DALL-E 3 se distingue par sa capacité a générer du texte lisible et précis à l'intérieur des images, ce qui est utile pour les logos, affiches et infographies." }, { question: "Sora 2 est spécialisé dans :", options: ["La génération de texte", "La génération de musique", "La génération de video", "La traduction automatique"], correctIndex: 2, explanation: "Sora 2 d'OpenAI est un modèle de génération video qui crée des clips avec dialogues synchronisés, effets sonores et physique réaliste." }, { question: "Quel outil permet de créer de la musique complète avec voix ?", options: ["ElevenLabs", "Suno", "Midjourney", "ChatGPT"], correctIndex: 1, explanation: "Suno permet de créer de la musique complète — mélodie, arrangement, instruments et voix — à partir d'une simple description textuelle." }] },
    { number: 8, title: "Les Agents IA", description: "Les systèmes autonomes qui planifient, agissent et utilisent des outils.", estimatedMinutes: 8, sections: [{ type: "heading", content: "Qu'est-ce qu'un Agent IA ?" }, { type: "paragraph", content: "Un agent IA est un système autonome qui peut percevoir son environnement, prendre des décisions, et agir pour atteindre des objectifs. Contrairement a un simple chatbot, un agent peut planifier une séquence d'actions, utiliser des outils, et s'adapter en fonction des résultats." }, { type: "paragraph", content: "En mars 2026, les agents IA transforment le travail. Claude Opus 4.6 peut maintenir une tâche pendant 14,5 heures. GPT-5.4 intégré le Computer Use natif. Des outils comme Claude Code et Cursor Agent delegent des tâches complexes de programmation." }, { type: "heading", content: "Architecture d'un Agent" }, { type: "paragraph", content: "Un agent typique comprend : un LLM comme \"cerveau\" pour le raisonnement, un ensemble d'outils (recherche web, exécution de code, manipulation de fichiers), une mémoire, et un mecanisme de planification." }, { type: "key-point", content: "Le paradigme ReAct (Reasoning + Acting) : l'agent alterne entre réflexion, action, et observation des résultats. Cette boucle continue jusqu'à ce que l'objectif soit atteint." }, { type: "paragraph", content: "Le protocole MCP (Model Context Protocol), introduit par Anthropic et adopte par l'industrie, standardisé la façon dont les agents interagissent avec les outils et les sources de données externes." }, { type: "diagram", label: "Architecture d'un Agent IA", flow: "vertical", nodes: [{ label: "LLM (Cerveau)", sub: "Raisonnement et planification", color: "purple" }, { label: "Mémoire", sub: "Contexte court et long terme", color: "blue" }, { label: "Outils", sub: "Recherche web, code, fichiers…", color: "emerald" }, { label: "Boucle ReAct", sub: "Reflexion → Action → Observation", color: "amber" }] }, { type: "diagram", label: "Cycle ReAct d'un Agent", flow: "cycle", nodes: [{ label: "Thought", sub: "L'agent reflechit au problème", color: "blue" }, { label: "Action", sub: "Utilise un outil ou exécute une tâche", color: "emerald" }, { label: "Observation", sub: "Analyse le résultat obtenu", color: "purple" }] }, { type: "summary", items: ["Les agents IA sont des systèmes autonomes capables de planifier et d'agir", "Ils combinent un LLM, des outils, une mémoire et un mecanisme de planification", "Le paradigme ReAct alterne réflexion, action et observation", "MCP standardisé l'interaction entre agents et outils", "Computer Use : les agents controlent des ordinateurs comme des humains"] }], quiz: [{ question: "Qu'est-ce qui différencié un agent IA d'un chatbot ?", options: ["Un agent est plus rapide", "Un agent peut planifier des actions et utiliser des outils", "Un agent est gratuit", "Un agent n'a pas besoin d'Internet"], correctIndex: 1, explanation: "Un agent IA peut planifier une séquence d'actions, utiliser des outils externes (recherche, code, fichiers), et s'adapter aux résultats — un chatbot ne fait que répondre." }, { question: "Que signifie ReAct dans le contexte des agents IA ?", options: ["Reaction rapide", "Reasoning + Acting", "Real-time Action", "Recursive Agent Technology"], correctIndex: 1, explanation: "ReAct (Reasoning + Acting) est un paradigme ou l'agent alterne entre phases de réflexion (Thought), d'action (Action), et d'observation (Observation)." }, { question: "Qu'est-ce que le protocole MCP ?", options: ["Un format de fichier", "Un standard pour la communication entre agents et outils", "Un type de processeur", "Un langage de programmation"], correctIndex: 1, explanation: "MCP (Model Context Protocol), créé par Anthropic, standardisé la façon dont les agents interagissent avec les outils et les sources de données externes." }, { question: "Quel modèle peut maintenir une tâche pendant 14,5 heures ?", options: ["GPT-5.4 Pro", "Gemini 3.1 Ultra", "Claude Opus 4.6", "Qwen 3.5"], correctIndex: 2, explanation: "Claude Opus 4.6 à l'horizon de complétion de tâche le plus long du marche : 14,5 heures d'exécution autonome." }] },
    { number: 9, title: "L'Éthique de l'IA", description: "Biais, transparence, vie privee, deepfakes — les enjeux ethiques majeurs.", estimatedMinutes: 7, sections: [{ type: "heading", content: "Les Enjeux Ethiques de l'IA" }, { type: "paragraph", content: "L'IA souleve des questions ethiques fondamentales : biais algorithmiques, transparence des décisions, vie privee, impact sur l'emploi, deepfakes, et concentration du pouvoir technologique." }, { type: "subheading", content: "Les Biais Algorithmiques" }, { type: "paragraph", content: "Les systèmes d'IA apprennent à partir de données humaines qui contiennent des biais. Un système de recrutement entraîné sur des données historiques pourrait discriminer certains groupes. La solution : diversifier les données, auditer régulièrement les modèles, et maintenir une supervision humaine." }, { type: "subheading", content: "Deepfakes et Désinformation" }, { type: "paragraph", content: "L'IA générative peut créer des contenus trompeurs : fausses vidéos, faux audios, fausses images de personnes réelles. La lutte contre les deepfakes passe par le watermarking, la détection automatique, et l'éducation du public." }, { type: "heading", content: "La Regulation en 2026" }, { type: "paragraph", content: "L'AI Act européen impose des obligations selon le niveau de risque des systèmes IA. Le RGPD encadre le traitement des données personnelles. Ces cadres réglementaires visent à équilibrer innovation et protection des citoyens." }, { type: "diagram", label: "Niveaux de Risque selon l'AI Act Européen", flow: "vertical", nodes: [{ label: "Risque inacceptable", sub: "Systèmes interdits (manipulation, scoring social)", color: "pink" }, { label: "Haut risque", sub: "Obligations strictes (recrutement, santé, justice)", color: "amber" }, { label: "Risque limite", sub: "Obligations de transparence (chatbots)", color: "blue" }, { label: "Risque minimal", sub: "Aucune obligation spécifique (jeux, filtres)", color: "emerald" }] }, { type: "diagram", label: "Principaux Enjeux Ethiques de l'IA", flow: "horizontal", nodes: [{ label: "Biais algorithmiques", sub: "Discrimination héritée des données", color: "purple" }, { label: "Vie privee", sub: "Utilisation des données personnelles", color: "blue" }, { label: "Deepfakes", sub: "Désinformation et manipulation", color: "pink" }] }, { type: "summary", items: ["L'IA hérite des biais présents dans les données d'entraînement", "Les deepfakes sont une menace croissante pour la confiance publique", "L'AI Act européen classe les systèmes IA par niveau de risque", "La supervision humaine reste essentielle pour une IA ethique", "L'éducation et la transparence sont les meilleurs remparts"] }], quiz: [{ question: "D'où viennent les biais dans les systèmes d'IA ?", options: ["Du code source", "Des données d'entraînement", "Du hardware", "Des utilisateurs finaux"], correctIndex: 1, explanation: "Les biais proviennent principalement des données d'entraînement. Si les données refletent des prejudices humains, le modèle les reproduira." }, { question: "Qu'est-ce qu'un deepfake ?", options: ["Un bug dans un programmé IA", "Un contenu médiatique faux généré par l'IA", "Un type de ransomware", "Une technique de compression de données"], correctIndex: 1, explanation: "Un deepfake est un contenu médiatique (video, audio, image) faux généré par l'IA, suffisamment réaliste pour tromper les spectateurs." }, { question: "Que réglementé l'AI Act européen ?", options: ["Les prix des outils IA", "Le niveau de risque des systèmes IA", "La vitesse des processeurs", "Les brevets technologiques"], correctIndex: 1, explanation: "L'AI Act européen classe les systèmes IA par niveau de risque (minimal, limite, élève, inacceptable) et impose des obligations proportionnelles." }, { question: "Quel est le meilleur rempart contre les biais de l'IA ?", options: ["Interdire l'IA", "Diversifier les données et auditer régulièrement les modèles", "Utiliser uniquement des modèles open source", "Ne pas utiliser de données personnelles"], correctIndex: 1, explanation: "Diversifier les données d'entraînement, auditer régulièrement les modèles, et maintenir une supervision humaine sont les pratiques recommandées." }] },
    { number: 10, title: "L'IA dans la Vie Quotidienne", description: "Comment l'IA transforme la santé, l'éducation, la finance et les transports.", estimatedMinutes: 6, sections: [{ type: "heading", content: "L'IA au Quotidien" }, { type: "paragraph", content: "L'IA est déjà partout dans notre vie quotidienne, souvent sans qu'on s'en rende compte : recommandations de contenu, assistants vocaux, navigation GPS, filtrage de spam, traduction instantanée, et reconnaissance faciale pour déverrouiller votre téléphone." }, { type: "paragraph", content: "Dans la santé, l'IA détecte des cancers plus tôt que les médecins. En éducation, elle personnalisé l'apprentissage. En finance, elle détecte les fraudes en temps réel. Dans les transports, elle optimise les itinéraires et développé les véhicules autonomes." }, { type: "diagram", label: "L'IA dans les Grands Secteurs", flow: "horizontal", nodes: [{ label: "Santé", sub: "Diagnostic précoce, imagerie médicale", color: "pink" }, { label: "Éducation", sub: "Apprentissage personnalisé, tuteurs IA", color: "blue" }, { label: "Finance", sub: "Détection de fraude, trading", color: "emerald" }, { label: "Transports", sub: "Navigation optimisée, véhicules autonomes", color: "amber" }] }, { type: "summary", items: ["L'IA est presente dans la plupart de nos interactions quotidiennes", "Santé : diagnostic précoce, découverte de médicaments", "Éducation : apprentissage personnalisé, tuteurs IA 24/7", "Finance : détection de fraude, trading algorithmique", "Transports : navigation optimisée, véhicules autonomes"] }], quiz: [{ question: "Dans quel domaine l'IA peut-elle détecter des maladies plus tôt que les médecins ?", options: ["L'éducation", "La finance", "La santé", "Les transports"], correctIndex: 2, explanation: "En santé, l'IA peut détecter certains cancers dans les images médicales avec une précision supérieure a celle des médecins humains." }, { question: "Comment l'IA est-elle utilisée dans la finance ?", options: ["Pour imprimer des billets", "Pour détecter les fraudes en temps réel", "Pour compter les pieces de monnaie", "Pour concevoir des distributeurs automatiques"], correctIndex: 1, explanation: "L'IA analyse les transactions en temps réel pour détecter les patterns suspects et prévenir les fraudes bancaires." }, { question: "Quelle technologie IA est utilisée pour déverrouiller votre téléphone ?", options: ["Le NLP", "La vision par ordinateur (reconnaissance faciale)", "Le renforcement", "La génération de texte"], correctIndex: 1, explanation: "La reconnaissance faciale utilise la vision par ordinateur pour analyser les traits de votre visage et déverrouiller l'appareil." }, { question: "Comment l'IA améliore-t-elle l'éducation ?", options: ["En remplacant les enseignants", "En personnalisant l'apprentissage pour chaque élève", "En supprimant les examens", "En automatisant les inscriptions"], correctIndex: 1, explanation: "L'IA personnalise les parcours d'apprentissage, identifie les lacunes de chaque élève, et fournit des tuteurs disponibles 24/7." }] },
    { number: 11, title: "Commencer avec l'IA : Guide Pratique", description: "Les premiers pas concrets pour utiliser l'IA dans votre quotidien.", estimatedMinutes: 7, sections: [{ type: "heading", content: "Par ou Commencer ?" }, { type: "paragraph", content: "Vous n'avez besoin d'aucune compétence technique pour commencer à utiliser l'IA. Les outils modernes sont conçus pour être accessibles à tous. Voici un parcours recommandé pour débuter." }, { type: "subheading", content: "Étape 1 : Testez les Chatbots" }, { type: "paragraph", content: "Commencez par ChatGPT (gratuit) ou Claude (gratuit). Posez des questions, demandez de l'aide pour rédiger un email, resumez un article, ou explorez un sujet qui vous intéresse. L'objectif est de vous familiariser avec l'interaction." }, { type: "subheading", content: "Étape 2 : Identifiez vos Besoins" }, { type: "paragraph", content: "Quelles tâches répétitives pourriez-vous automatiser ? Rédaction, recherche, traduction, analyse de données, création de visuels ? L'IA est un accélérateur — elle amplifie ce que vous faites déjà." }, { type: "subheading", content: "Étape 3 : Experimentez" }, { type: "paragraph", content: "Testez Midjourney pour les images, Suno pour la musique, Perplexity pour la recherche. Chaque outil a ses forces. L'expérimentation est la meilleure façon d'apprendre." }, { type: "tip", content: "Commencez par les versions gratuites de chaque outil. Vous n'avez pas besoin de dépenser un centime pour découvrir la puissance de l'IA." }, { type: "diagram", label: "Votre Parcours pour Débuter avec l'IA", flow: "vertical", nodes: [{ label: "Étape 1 : Tester", sub: "ChatGPT ou Claude gratuits", color: "blue" }, { label: "Étape 2 : Identifier", sub: "Vos tâches répétitives à automatiser", color: "purple" }, { label: "Étape 3 : Expérimenter", sub: "Tester des outils spécialisés", color: "emerald" }, { label: "Étape 4 : Maîtriser", sub: "Approfondir 2-3 outils clés", color: "amber" }] }, { type: "video", videoId: { fr: "fENw2n2FmpQ", en: "ad79nYk2keg" },
      videoDurationMinutes: 5, label: "L'Intelligence Artificielle expliquée en 5 minutes" }, { type: "summary", items: ["Aucune compétence technique requise pour commencer", "Étape 1 : tester ChatGPT ou Claude gratuitement", "Étape 2 : identifier vos tâches répétitives à automatiser", "Étape 3 : expérimenter avec différents outils spécialisés", "Les versions gratuites suffisent pour débuter"] }], quiz: [{ question: "Quel est le meilleur premier pas pour découvrir l'IA ?", options: ["Acheter un abonnement premium", "Apprendre a programmer en Python", "Tester ChatGPT ou Claude gratuitement", "Lire des articles de recherche"], correctIndex: 2, explanation: "Le meilleur premier pas est simplement de tester ChatGPT ou Claude dans leur version gratuite, en posant des questions et en explorant les possibilités." }, { question: "Faut-il savoir programmer pour utiliser l'IA ?", options: ["Oui, c'est indispensable", "Non, les outils modernes sont accessibles à tous", "Seulement pour les outils avances", "Il faut au minimum connaître Python"], correctIndex: 1, explanation: "Les outils IA modernes sont conçus pour être utilisés en langage naturel, sans aucune compétence en programmation." }, { question: "Quel outil est recommandé pour la recherche d'information ?", options: ["Midjourney", "Suno", "Perplexity", "ElevenLabs"], correctIndex: 2, explanation: "Perplexity AI est un moteur de recherche IA qui fournit des réponses détaillées et sourcees, idéal pour la recherche d'information." }, { question: "Pourquoi l'expérimentation est-elle importante avec l'IA ?", options: ["Pour trouver des bugs", "Pour chaque outil a ses forces et vous devez trouver ceux qui vous conviennent", "Pour publier des articles de recherche", "Pour devenir programmeur"], correctIndex: 1, explanation: "Chaque outil IA a ses forces et faiblesses. L'expérimentation vous permet de découvrir ceux qui correspondent le mieux à vos besoins." }] },
    { number: 12, title: "L'Avenir de l'IA", description: "AGI, tendances 2026-2030, carrières et comment se préparer.", estimatedMinutes: 7, sections: [{ type: "heading", content: "Vers l'Intelligence Artificielle Générale (AGI)" }, { type: "paragraph", content: "L'AGI — une IA capable de comprendre et d'accomplir n'importe quelle tâche intellectuelle humaine — reste le Saint Graal de la recherche. En 2026, nous nous en rapprochons mais ne l'avons pas encore atteinte. Les LLM actuels montrent des capacités impressionnantes mais ont encore des limitations." }, { type: "heading", content: "Tendances 2026-2030" }, { type: "paragraph", content: "Les modèles multimodaux sont déjà la norme. Les agents IA autonomes avec Computer Use transforment les workflows. Les modèles compacts comme Qwen 3.5 9B rivalisent avec des modèles 13x plus gros. L'IA embarquee se développé grâce aux NPU (AMD Ryzen AI 400, Apple Neural Engine)." }, { type: "heading", content: "Carrières en IA" }, { type: "paragraph", content: "Les métiers les plus demandes : ingénieur ML, data scientist, prompt engineer, architecte IA, consultant en transformation IA. Mais au-dela des rôles spécialisés, la maîtrise des outils d'IA est devenue une compétence transversale précieuse dans tous les métiers." }, { type: "tip", content: "Vous n'avez pas besoin de devenir spécialiste en IA pour en bénéficier. Apprendre à utiliser efficacement les outils IA peut significativement augmenter votre productivité et votre valeur sur le marche du travail." }, { type: "diagram", label: "Carrières en IA : du Débutant à l'Expert", flow: "horizontal", nodes: [{ label: "Utilisateur IA", sub: "Maîtrise des outils no-code", color: "blue" }, { label: "Prompt Engineer", sub: "Optimisation des interactions LLM", color: "purple" }, { label: "Développeur IA", sub: "Integrations et agents autonomes", color: "emerald" }, { label: "Chercheur / Architecte", sub: "Conception de modèles et systèmes", color: "amber" }] }, { type: "diagram", label: "Tendances IA 2026-2030", flow: "vertical", nodes: [{ label: "Agents autonomes", sub: "IA qui agit sans supervision constante", color: "purple" }, { label: "Modèles embarques", sub: "IA locale sur smartphones et PC", color: "blue" }, { label: "IA multimodale native", sub: "Texte, image, audio, video intègres", color: "emerald" }, { label: "Vers l'AGI", sub: "Intelligence générale : horizon a définir", color: "pink" }] }, { type: "summary", items: ["L'AGI reste un objectif de recherche majeur mais n'est pas encore atteinte", "Tendances : agents autonomes, modèles compacts, IA embarquee", "Les carrières en IA sont nombreuses et bien rémunérées", "La maîtrise des outils IA est une compétence transversale précieuse", "L'apprentissage continu est la clé du succès dans l'ère de l'IA"] }], quiz: [{ question: "Que signifie AGI ?", options: ["Artificial General Intelligence", "Advanced GPU Infrastructure", "Automated Google Integration", "Applied Gradient Iteration"], correctIndex: 0, explanation: "AGI signifie Artificial General Intelligence — une IA hypothetique capable d'accomplir n'importe quelle tâche intellectuelle humaine." }, { question: "Quelle est une tendance majeure de l'IA en 2026 ?", options: ["L'IA remplace tous les emplois", "Les modèles compacts rivalisent avec les gros modèles", "L'IA n'est plus utilisée", "Les coûts augmentent"], correctIndex: 1, explanation: "Des modèles compacts comme Qwen 3.5 9B rivalisent avec des modèles 13x plus gros, democratisant l'accès à l'IA performante." }, { question: "Quel métier est directement lie à l'IA ?", options: ["Plombier", "Prompt engineer", "Pharmacien", "Architecte batiment"], correctIndex: 1, explanation: "Le prompt engineer est un métier directement lie à l'IA, spécialisé dans la création de prompts optimises pour obtenir les meilleurs résultats des modèles IA." }, { question: "Quelle est la clé du succès dans l'ère de l'IA ?", options: ["Éviter l'IA", "Memoriser des formules", "L'apprentissage continu et l'adaptabilite", "Avoir le meilleur matériel"], correctIndex: 2, explanation: "L'IA évolue très rapidement. L'apprentissage continu et l'adaptabilite sont les compétences les plus précieuses pour rester pertinent." }] },
  ],
};

export default content;
