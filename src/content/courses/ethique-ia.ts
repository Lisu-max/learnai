import type { CourseContent } from "../types";

const content: CourseContent = {
  slug: "ethique-ia",
  chapters: [
    {
      number: 1,
      title: "Introduction à l'Éthique de l'IA",
      description: "Pourquoi l'ethique est essentielle dans le développement et l'utilisation de l'IA.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Pourquoi l'Éthique de l'IA Nous Concerne Tous" },
        { type: "paragraph", content: "L'intelligence artificielle prend des décisions qui affectent nos vies chaque jour : les contenus que nous voyons sur les réseaux sociaux, les candidatures retenues pour un emploi, les diagnostics médicaux, les taux d'intérêt proposes par nos banques. Quand une technologie a autant d'impact, la question n'est plus seulement \"que peut-elle faire ?\" mais \"que devrait-elle faire ?\"." },
        { type: "paragraph", content: "L'ethique de l'IA est le domaine qui étudie les consequences morales, sociales et juridiques de ces systèmes. Ce n'est pas un sujet reserve aux philosophes — c'est une préoccupation pratique pour chaque utilisateur, développeur et decideur." },
        { type: "callout", content: "En 2026, plus de 80% des entreprises du Fortune 500 utilisent l'IA dans leurs processus decisionnels. La question de l'ethique n'est plus théorique — elle est opérationnelle." },
        { type: "video", videoId: "t9gmyvf7JYo",
      videoDurationMinutes: 10, label: "Introduction à l'ethique de l'IA" },
        { type: "heading", content: "Les Grands Principes Ethiques" },
        { type: "paragraph", content: "Les principaux cadres ethiques pour l'IA s'articulent autour de 5 principes : la bienfaisance (l'IA doit faire le bien), la non-malfaisance (ne pas causer de tort), l'autonomie (respecter les choix humains), la justice (equite et non-discrimination), et l'explicabilite (pouvoir comprendre les décisions de l'IA)." },
        { type: "key-point", content: "L'ethique de l'IA n'est pas contre l'innovation. Elle vise à s'assurer que l'innovation bénéficie à tous et ne cause pas de tort disproportionne a certains groupes." },
        { type: "diagram", label: "Les 5 Principes Ethiques de l'IA", flow: "horizontal", nodes: [
          { label: "Bienfaisance", sub: "L'IA doit faire le bien", color: "emerald" },
          { label: "Non-malfaisance", sub: "Ne pas causer de tort", color: "pink" },
          { label: "Justice", sub: "Equite et non-discrimination", color: "blue" },
          { label: "Autonomie", sub: "Respecter les choix humains", color: "purple" },
          { label: "Explicabilite", sub: "Comprendre les décisions", color: "amber" },
        ]},
        { type: "paragraph", content: "Ce cours explore chacun de ces enjeux en profondeur : biais algorithmiques, impact sur l'emploi, vie privee, deepfakes, réglementation et responsabilité. L'objectif est de vous donner les clés pour utiliser l'IA de manière eclairee et responsable." },
        { type: "summary", items: [
          "L'IA prend des décisions qui affectent nos vies quotidiennement",
          "L'ethique de l'IA concerne tous les utilisateurs, pas seulement les experts",
          "5 principes : bienfaisance, non-malfaisance, justice, autonomie, explicabilite",
          "80% des entreprises du Fortune 500 utilisent l'IA dans leurs décisions",
          "L'ethique n'est pas contre l'innovation — elle la guide"
        ]},
      ],
      quiz: [
        {
          question: "Pourquoi l'ethique de l'IA est-elle importante ?",
          options: ["Pour ralentir l'innovation", "Parce que l'IA prend des décisions qui affectent nos vies", "Pour rendre l'IA plus chère", "Pour limiter l'accès à l'IA"],
          correctIndex: 1,
          explanation: "L'IA influence les contenus que nous voyons, les décisions de recrutement, les diagnostics médicaux et bien plus. L'ethique est essentielle pour guider ces impacts."
        },
        {
          question: "Quel principe ethique signifie que l'IA ne doit pas causer de tort ?",
          options: ["Bienfaisance", "Non-malfaisance", "Autonomie", "Explicabilite"],
          correctIndex: 1,
          explanation: "La non-malfaisance est le principe selon lequel les systèmes d'IA ne doivent pas causer de tort aux individus ou aux groupes."
        },
        {
          question: "L'ethique de l'IA est-elle reservee aux experts ?",
          options: ["Oui, seuls les développeurs sont concernes", "Oui, c'est un sujet de philosophes", "Non, elle concerne tous les utilisateurs et decideurs", "Oui, seuls les gouvernements s'en occupent"],
          correctIndex: 2,
          explanation: "L'ethique de l'IA concerne chaque utilisateur, développeur et decideur. Nous sommes tous affectes par les décisions prises par les systèmes d'IA."
        },
        {
          question: "Que signifie l'explicabilite dans le contexte de l'IA ?",
          options: ["L'IA peut s'expliquer elle-même", "On peut comprendre comment l'IA prend ses décisions", "L'IA est plus rapide", "L'IA donne toujours la bonne réponse"],
          correctIndex: 1,
          explanation: "L'explicabilite signifie qu'on peut comprendre et auditer le processus de décision de l'IA, ce qui est crucial pour la confiance et la responsabilité."
        },
      ],
    },
    {
      number: 2,
      title: "Biais Algorithmiques : Comprendre et Prévenir",
      description: "Comment les biais s'infiltrent dans l'IA et comment les combattre.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Qu'est-ce qu'un Biais Algorithmique ?" },
        { type: "paragraph", content: "Un biais algorithmique se produit quand un système d'IA produit des résultats systematiquement injustes envers certains groupes. Ces biais ne sont pas intentionnels — ils sont le reflet des prejudices présents dans les données d'entraînement, les choix de conception ou les métriques d'évaluation." },
        { type: "paragraph", content: "Par exemple, en 2018, Amazon a découvert que son système de recrutement IA penalisait les CV contenant le mot \"femme\" (comme \"équipe de football feminin\") parce qu'il avait été entraîné sur 10 ans de CV, majoritairement masculins. Le système avait appris que les candidats hommes étaient plus souvent embauches." },
        { type: "heading", content: "Les Sources de Biais" },
        { type: "subheading", content: "Biais dans les Données" },
        { type: "paragraph", content: "Si les données d'entraînement ne sont pas representatives de la diversité de la population, le modèle reproduira les déséquilibres existants. Un système de reconnaissance faciale entraîné principalement sur des visages caucasiens performera moins bien sur d'autres ethnies." },
        { type: "subheading", content: "Biais de Conception" },
        { type: "paragraph", content: "Les choix des concepteurs influencent les résultats : quelles données collecter, quelles métriques optimiser, quelles populations tester. Si l'équipe de développement manque de diversité, certains biais passeront inapercus." },
        { type: "subheading", content: "Biais de Feedback" },
        { type: "paragraph", content: "Les systèmes d'IA peuvent amplifier les biais existants dans une boucle de retroaction. Un algorithme de justice prédictive qui ciblé davantage un quartier entrainera plus d'arrestations dans ce quartier, \"confirmant\" le biais initial." },
        { type: "callout", content: "Une étude du NIST (2024) a montre que les systèmes de reconnaissance faciale ont un taux d'erreur 10 à 100 fois plus élève pour les personnes a la peau foncee que pour les personnes a la peau claire." },
        { type: "heading", content: "Comment Prévenir les Biais" },
        { type: "paragraph", content: "La prévention passe par : la diversification des données d'entraînement, les audits réguliers des modèles, la diversité dans les équipes de développement, les tests sur des sous-groupes de population, et la mise en place de mecanismes de recours pour les personnes affectees." },
        { type: "key-point", content: "Les biais algorithmiques sont un problème humain, pas technologique. Ils refletent les prejudices de notre société. La technologie seule ne peut pas les résoudre — il faut aussi un changement organisationnel et culturel." },
        { type: "diagram", label: "Les Sources de Biais Algorithmiques", flow: "vertical", nodes: [
          { label: "Biais dans les données", sub: "Données non representatives", color: "pink" },
          { label: "Biais de conception", sub: "Choix des développeurs", color: "purple" },
          { label: "Biais de feedback", sub: "Boucle d'amplification", color: "amber" },
          { label: "Biais d'évaluation", sub: "Metriques inadaptees", color: "blue" },
        ]},
        { type: "summary", items: [
          "Les biais algorithmiques produisent des résultats injustes pour certains groupes",
          "Ils proviennent des données, de la conception et des boucles de feedback",
          "Amazon a du abandonner son IA de recrutement pour biais de genre",
          "La reconnaissance faciale a un taux d'erreur 10-100x plus élève sur les peaux foncees",
          "Prévention : diversité des données, audits réguliers, équipes diverses"
        ]},
      ],
      quiz: [
        {
          question: "D'où viennent principalement les biais algorithmiques ?",
          options: ["Du hardware", "Des données d'entraînement et des choix de conception", "De la vitesse de calcul", "Des utilisateurs finaux uniquement"],
          correctIndex: 1,
          explanation: "Les biais proviennent principalement des données d'entraînement non representatives et des choix de conception (métriques, populations ciblés, etc.)."
        },
        {
          question: "Pourquoi Amazon a-t-il abandonne son IA de recrutement ?",
          options: ["Elle était trop lente", "Elle penalisait les candidatures feminines", "Elle coutait trop cher", "Elle ne fonctionnait pas"],
          correctIndex: 1,
          explanation: "L'IA de recrutement d'Amazon penalisait les CV contenant des références feminines car elle avait appris à partir de 10 ans de données majoritairement masculines."
        },
        {
          question: "Qu'est-ce qu'un biais de feedback ?",
          options: ["Un commentaire négatif d'un utilisateur", "Une boucle ou l'IA amplifie les biais existants", "Un bug dans le code", "Un problème de connexion"],
          correctIndex: 1,
          explanation: "Un biais de feedback est une boucle ou les prédictions biaisees de l'IA influencent les données futures, amplifiant le biais initial."
        },
        {
          question: "Comment prévenir les biais algorithmiques ?",
          options: ["Supprimer l'IA", "Diversifier les données, auditer régulièrement, diversifier les équipes", "Utiliser plus de puissance de calcul", "Ignorer le problème"],
          correctIndex: 1,
          explanation: "La prévention combiné diversification des données, audits réguliers, diversité des équipes et mecanismes de recours pour les personnes affectees."
        },
      ],
    },
    {
      number: 3,
      title: "IA et Emploi : Menaces et Opportunites",
      description: "Analyser l'impact réel de l'IA sur le marche du travail et les stratégies d'adaptation.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'IA Va-t-elle Remplacer Nos Emplois ?" },
        { type: "paragraph", content: "C'est la question qui inquiete le plus. La réponse est nuancee : l'IA ne remplace pas des métiers entiers, elle automatisé des tâches spécifiques au sein de chaque métier. Selon le Forum Économique Mondial (2025), l'IA supprimera 85 millions d'emplois d'ici 2030 mais en creera 97 millions de nouveaux — un gain net de 12 millions." },
        { type: "paragraph", content: "Le véritable enjeu n'est pas la disparition des emplois mais leur transformation. Un comptable ne sera pas remplace par l'IA, mais un comptable qui utilise l'IA sera plus productif qu'un comptable qui ne l'utilise pas." },
        { type: "heading", content: "Les Métiers les Plus Impactes" },
        { type: "paragraph", content: "Les tâches les plus exposees sont celles qui sont répétitives, prévisibles et basées sur des règles : saisie de données, traduction basique, service client de niveau 1, analyse de documents standardises. À l'inverse, les tâches nécessitant créativité, empathie, negociation complexe et jugement moral sont les moins automatisables." },
        { type: "diagram", label: "Impact de l'IA sur les Types de Tâches", flow: "horizontal", nodes: [
          { label: "Haut risque", sub: "Saisie, traduction basique, tri", color: "pink" },
          { label: "Risque modéré", sub: "Analyse, rédaction, programmation", color: "amber" },
          { label: "Faible risque", sub: "Créativité, empathie, stratégie", color: "emerald" },
        ]},
        { type: "heading", content: "Les Nouvelles Opportunites" },
        { type: "paragraph", content: "L'IA créé de nouveaux métiers : prompt engineer, AI traîner, ethicien IA, ingénieur MLOps, consultant en transformation IA. Mais au-dela de ces rôles spécialisés, chaque métier existant est enrichi par de nouvelles compétences IA. Un marketeur qui maîtrise l'IA générative, un avocat qui utilise l'IA pour la recherche juridique, un médecin assisté par l'IA diagnostique." },
        { type: "callout", content: "Étude Goldman Sachs (2025) : l'IA générative pourrait augmenter la productivité mondiale de 7% par an, ce qui représente 7 000 milliards de dollars de valeur ajoutée." },
        { type: "key-point", content: "La stratégie gagnante n'est pas de rivaliser avec l'IA mais de combiner votre expertise humaine avec ses capacités. Les professionnels les plus valorises seront ceux qui savent quand et comment utiliser l'IA." },
        { type: "tip", content: "Investissez dans les compétences que l'IA ne peut pas remplacer : pensee critique, intelligence émotionnelle, créativité, leadership et capacité d'adaptation." },
        { type: "summary", items: [
          "L'IA transformé les métiers plus qu'elle ne les supprime",
          "85M d'emplois supprimes mais 97M créés d'ici 2030 (gain net de 12M)",
          "Les tâches répétitives et prévisibles sont les plus exposees",
          "De nouveaux métiers émergent : prompt engineer, ethicien IA, MLOps",
          "La stratégie gagnante : combiner expertise humaine + capacités IA"
        ]},
      ],
      quiz: [
        {
          question: "Selon le Forum Économique Mondial, quel est le bilan net de l'IA sur l'emploi d'ici 2030 ?",
          options: ["Perte nette de 85 millions d'emplois", "Gain net de 12 millions d'emplois", "Aucun changement", "Perte nette de 50 millions d'emplois"],
          correctIndex: 1,
          explanation: "L'IA supprimera 85 millions d'emplois mais en creera 97 millions de nouveaux, soit un gain net de 12 millions d'emplois."
        },
        {
          question: "Quelles tâches sont les plus exposees à l'automatisation par l'IA ?",
          options: ["Créativité et empathie", "Tâches répétitives, prévisibles et basées sur des règles", "Negociation complexe", "Leadership stratégique"],
          correctIndex: 1,
          explanation: "Les tâches répétitives, prévisibles et basées sur des règles (saisie de données, tri, traduction basique) sont les plus facilement automatisables."
        },
        {
          question: "Quelle est la meilleure stratégie face à l'IA dans le monde du travail ?",
          options: ["Ignorer l'IA", "Rivaliser avec l'IA", "Combiner expertise humaine et capacités de l'IA", "Changer complètement de métier"],
          correctIndex: 2,
          explanation: "La stratégie gagnante est de combiner votre expertise humaine unique avec les capacités de l'IA pour être plus productif et plus précieux."
        },
        {
          question: "Quel nouveau métier est directement lie à l'IA ?",
          options: ["Plombier IA", "Prompt engineer", "Cuisinier algorithmique", "Pilote de drone IA"],
          correctIndex: 1,
          explanation: "Le prompt engineer est un métier directement créé par l'essor de l'IA générative, spécialisé dans l'optimisation des interactions avec les LLM."
        },
      ],
    },
    {
      number: 4,
      title: "Vie Privee et Surveillance à l'Ère de l'IA",
      description: "Comprendre les risques pour la vie privee et apprendre à protéger ses données.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'IA et Vos Données Personnelles" },
        { type: "paragraph", content: "L'IA a besoin de données pour fonctionner — et souvent, ces données sont les votres. Chaque interaction avec un chatbot, chaque photo partagee, chaque recherche effectuee génère des données qui peuvent être utilisées pour entraîner des modèles, cibler des publicités ou établir des profils comportementaux." },
        { type: "paragraph", content: "La question n'est pas de savoir si vos données sont collectées — elles le sont. La question est : par qui, pour quoi, et avez-vous donne votre consentement eclaire ?" },
        { type: "heading", content: "Les Risques Majeurs" },
        { type: "subheading", content: "Profilage Comportemental" },
        { type: "paragraph", content: "Les algorithmes de recommandation créent des profils détaillés de vos préférences, habitudes et personnalité. Ces profils sont utilisés pour le ciblage publicitaire mais peuvent aussi influencer votre accès au credit, à l'assurance ou à l'emploi." },
        { type: "subheading", content: "Reconnaissance Faciale" },
        { type: "paragraph", content: "La reconnaissance faciale permet l'identification en temps réel dans les espaces publics. Certains pays l'utilisent pour la surveillance de masse, tandis que d'autres, comme l'UE avec l'AI Act, la reglementent strictement." },
        { type: "subheading", content: "Données d'Entraînement des LLM" },
        { type: "paragraph", content: "Les LLM sont entraînés sur des données issues d'Internet qui peuvent inclure des informations personnelles. Quand vous partagez du contenu avec un chatbot, il peut être utilise pour améliorer le modèle — sauf si vous desactivez cette option." },
        { type: "callout", content: "Le RGPD (Europe) donne aux citoyens le droit d'accès, de rectification et de suppression de leurs données personnelles. L'AI Act ajouté des obligations spécifiques pour les systèmes d'IA a haut risque." },
        { type: "heading", content: "Comment Protéger Sa Vie Privee" },
        { type: "paragraph", content: "Utilisez les versions entreprise des chatbots (pas d'entraînement sur vos données), desactivez l'historique quand possible, ne partagez jamais d'informations sensibles avec des chatbots publics, et verifiez les politiques de confidentialité des outils que vous utilisez." },
        { type: "key-point", content: "Chaque outil IA a une politique de données différente. Lisez-la. La gratuite a souvent un coût : vos données." },
        { type: "diagram", label: "Protéger sa Vie Privee avec l'IA", flow: "vertical", nodes: [
          { label: "Utiliser les versions entreprise", sub: "Pas d'entraînement sur vos données", color: "emerald" },
          { label: "Desactiver l'historique", sub: "Quand l'option est disponible", color: "blue" },
          { label: "Ne pas partager de données sensibles", sub: "Mots de passe, infos clients, finances", color: "pink" },
          { label: "Vérifier les politiques", sub: "Lire les conditions d'utilisation", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'IA collecté et utilise vos données pour fonctionner et s'améliorer",
          "Le profilage comportemental peut influencer credit, assurance et emploi",
          "Le RGPD et l'AI Act protegent les citoyens européens",
          "Utilisez les versions entreprise pour protéger vos données",
          "La gratuite a un coût : souvent, ce sont vos données"
        ]},
      ],
      quiz: [
        {
          question: "Quel est le principal risque pour la vie privee avec les chatbots IA ?",
          options: ["Ils sont trop lents", "Les données partagees peuvent être utilisées pour entraîner les modèles", "Ils coûtent trop cher", "Ils ne fonctionnent pas bien"],
          correctIndex: 1,
          explanation: "Les données que vous partagez avec un chatbot peuvent être utilisées pour améliorer le modèle, sauf si vous utilisez une version entreprise ou desactivez cette option."
        },
        {
          question: "Que garantit le RGPD aux citoyens européens ?",
          options: ["Un accès gratuit à l'IA", "Le droit d'accès, de rectification et de suppression de leurs données", "Des ordinateurs gratuits", "L'anonymat total sur Internet"],
          correctIndex: 1,
          explanation: "Le RGPD donne aux citoyens le droit d'acceder à leurs données personnelles, de les faire corriger et de demander leur suppression."
        },
        {
          question: "Pourquoi les versions entreprise des chatbots sont-elles recommandées ?",
          options: ["Elles sont moins chères", "Vos données ne sont pas utilisées pour entraîner les modèles", "Elles sont plus rapides", "Elles ont plus de fonctionnalités"],
          correctIndex: 1,
          explanation: "Les versions entreprise garantissent que vos données ne seront pas utilisées pour entraîner les modèles, protégeant ainsi la confidentialité."
        },
        {
          question: "Quel est le \"coût\" des outils IA gratuits ?",
          options: ["Il n'y a aucun coût", "Vos données personnelles servent souvent a entraîner les modèles", "Le temps d'attente", "La publicité"],
          correctIndex: 1,
          explanation: "Les outils IA gratuits financent souvent leur fonctionnement en utilisant vos données pour améliorer leurs modèles ou cibler des publicités."
        },
      ],
    },
    {
      number: 5,
      title: "Deepfakes et Désinformation",
      description: "Comprendre les deepfakes, les risques de désinformation et les moyens de s'en protéger.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'Ère des Deepfakes" },
        { type: "paragraph", content: "Un deepfake est un contenu médiatique (video, audio, image) génère ou manipule par l'IA pour être faux mais convaincant. En 2026, la technologie a atteint un niveau ou il est souvent impossible à l'oeil nu de distinguer un deepfake d'un contenu authentique." },
        { type: "paragraph", content: "Les deepfakes peuvent reproduire le visage et la voix de n'importé qui. Des logiciels accessibles permettent de créer un deepfake video convaincant en quelques minutes avec juste une photo et quelques secondes d'audio." },
        { type: "heading", content: "Les Risques des Deepfakes" },
        { type: "subheading", content: "Manipulation Politique" },
        { type: "paragraph", content: "Des vidéos deepfake de dirigeants politiques peuvent être diffusees pour influencer des elections, créer des crises diplomatiques ou manipuler l'opinion publique. En période electorale, un deepfake viral peut atteindre des millions de personnes avant d'être dementi." },
        { type: "subheading", content: "Arnaque et Fraude" },
        { type: "paragraph", content: "Les deepfakes audio sont utilisés pour des arnaques telephoniques : un faux appel de votre PDG vous demandant un virement urgent, une fausse voix d'un proche en detresse. En 2025, les pertes liées aux arnaques par deepfake ont depasse 25 milliards de dollars dans le monde." },
        { type: "subheading", content: "Atteintes a la Reputation" },
        { type: "paragraph", content: "Des deepfakes pornographiques non consentis touchent majoritairement les femmes. Ce phénomène a conduit a de nouvelles législations dans de nombreux pays, dont la France et les États-Unis." },
        { type: "callout", content: "En 2025, le nombre de deepfakes détectés en ligne a augmente de 900% par rapport à 2020. 96% des deepfakes video sont de nature pornographique non consentie." },
        { type: "heading", content: "Comment Détecter et Se Protéger" },
        { type: "paragraph", content: "Plusieurs stratégies existent : le watermarking IA (marques invisibles intégrées dans le contenu génère), les outils de détection (Microsoft Vidéo Authenticator, Intel FakeCatcher), la vérification des sources, et la litteratie médiatique." },
        { type: "tip", content: "Avant de partager une video choquante, verifiez la source. Utilisez la recherche inversee d'image et consultez les sites de fact-checking. Si c'est trop choquant pour être vrai, ca ne l'est peut-être pas." },
        { type: "key-point", content: "Le meilleur rempart contre les deepfakes est l'esprit critique. Questionnez systématiquement les contenus surprenants, verifiez les sources et ne partagez pas de contenu dont vous n'etes pas certain de l'authenticite." },
        { type: "diagram", label: "Types de Deepfakes et Risques", flow: "horizontal", nodes: [
          { label: "Vidéo", sub: "Manipulation politique, reputation", color: "pink" },
          { label: "Audio", sub: "Arnaques, faux appels urgents", color: "purple" },
          { label: "Image", sub: "Faux documents, usurpation", color: "amber" },
          { label: "Texte", sub: "Désinformation a grande échelle", color: "blue" },
        ]},
        { type: "summary", items: [
          "Les deepfakes sont des contenus faux générés par l'IA, souvent indiscernables",
          "Risques : manipulation politique, arnaques financières, atteintes a la reputation",
          "25 milliards de dollars de pertes liées aux arnaques deepfake en 2025",
          "Le watermarking et les outils de détection aident mais ne suffisent pas",
          "L'esprit critique et la vérification des sources sont les meilleurs remparts"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce qu'un deepfake ?",
          options: ["Un contenu créé manuellement par un artiste", "Un contenu médiatique faux génère par l'IA", "Un type de virus informatique", "Un format de fichier video"],
          correctIndex: 1,
          explanation: "Un deepfake est un contenu médiatique (video, audio, image) génère ou manipule par l'IA pour être faux mais convaincant."
        },
        {
          question: "Quel est le montant des pertes liées aux arnaques deepfake en 2025 ?",
          options: ["1 milliard de dollars", "5 milliards de dollars", "25 milliards de dollars", "100 milliards de dollars"],
          correctIndex: 2,
          explanation: "Les pertes liées aux arnaques par deepfake ont depasse 25 milliards de dollars dans le monde en 2025."
        },
        {
          question: "Quel pourcentage des deepfakes video est de nature pornographique non consentie ?",
          options: ["10%", "50%", "75%", "96%"],
          correctIndex: 3,
          explanation: "96% des deepfakes video détectés en ligne sont de nature pornographique non consentie, touchant majoritairement les femmes."
        },
        {
          question: "Quel est le meilleur rempart contre les deepfakes ?",
          options: ["Éviter Internet", "L'esprit critique et la vérification des sources", "Des logiciels antivirus", "Ne jamais regarder de vidéos"],
          correctIndex: 1,
          explanation: "L'esprit critique, la vérification des sources et le refus de partager du contenu non vérifie sont les meilleurs remparts contre les deepfakes."
        },
      ],
    },
    {
      number: 6,
      title: "Réglementation : AI Act et RGPD",
      description: "Comprendre le cadre juridique européen qui encadre l'utilisation de l'IA.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Le Cadre Reglementaire Européen" },
        { type: "paragraph", content: "L'Union Européenne est pionniere dans la réglementation de l'IA avec deux textes majeurs : le RGPD (Reglement Général sur la Protection des Données, en vigueur depuis 2018) et l'AI Act (première loi mondiale dédiée à l'IA, entrée en application progressive depuis 2024)." },
        { type: "paragraph", content: "Ces règlements visent à protéger les citoyens tout en permettant l'innovation. Ils imposent des obligations proportionnelles aux risques : plus un système d'IA est risque, plus les contraintes sont strictes." },
        { type: "heading", content: "L'AI Act Explique" },
        { type: "paragraph", content: "L'AI Act classe les systèmes d'IA en 4 niveaux de risque. Les systèmes a risque inacceptable sont interdits (manipulation subliminale, scoring social, surveillance biometrique en temps réel dans les espaces publics sauf exceptions). Les systèmes a haut risque doivent respecter des obligations strictes (transparence, documentation, supervision humaine)." },
        { type: "diagram", label: "Les 4 Niveaux de Risque de l'AI Act", flow: "vertical", nodes: [
          { label: "Risque inacceptable", sub: "Interdit : scoring social, manipulation subliminale", color: "pink" },
          { label: "Haut risque", sub: "Obligations strictes : recrutement, justice, santé", color: "amber" },
          { label: "Risque limite", sub: "Transparence : chatbots, deepfakes, IA générative", color: "blue" },
          { label: "Risque minimal", sub: "Libre : jeux video, filtres photo, spam", color: "emerald" },
        ]},
        { type: "heading", content: "Le RGPD et l'IA" },
        { type: "paragraph", content: "Le RGPD s'appliqué a toute utilisation de données personnelles par des systèmes d'IA. Il garantit le droit à l'explication (comprendre pourquoi une décision automatisée a été prise), le droit d'opposition (refuser une décision purement automatisée), et le droit a la portabilite (recuperer ses données)." },
        { type: "subheading", content: "Impact Pratique" },
        { type: "paragraph", content: "Pour les entreprises : obligation de documenter les systèmes IA a haut risque, d'effectuer des évaluations d'impact, de nommer un responsable IA. Pour les citoyens : droit de savoir si une décision les concernant a été prise par une IA, droit de contester cette décision." },
        { type: "callout", content: "Les amendes de l'AI Act peuvent atteindre 35 millions d'euros ou 7% du chiffre d'affaires mondial pour les infractions les plus graves — plus severe que le RGPD." },
        { type: "key-point", content: "L'Europe est le premier continent a réglementer l'IA de manière globale. L'AI Act est un modèle qui influence les législations dans le monde entier, comme le RGPD l'a fait pour la protection des données." },
        { type: "tip", content: "Si vous developpez ou utilisez de l'IA en Europe, verifiez dans quelle catégorie de risque se situe votre système. Les obligations varient considerablement selon le niveau." },
        { type: "summary", items: [
          "L'UE est pionniere avec le RGPD (2018) et l'AI Act (2024+)",
          "L'AI Act classe l'IA en 4 niveaux de risque avec obligations proportionnelles",
          "Le scoring social et la manipulation subliminale sont interdits",
          "Le RGPD garantit le droit à l'explication et à l'opposition",
          "Les amendes peuvent atteindre 35M euros ou 7% du CA mondial"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que l'AI Act ?",
          options: ["Un film de science-fiction", "La première loi mondiale dédiée à l'IA, créée par l'UE", "Un logiciel d'intelligence artificielle", "Un concours international d'IA"],
          correctIndex: 1,
          explanation: "L'AI Act est la première législation mondiale spécifiquement dédiée a la réglementation de l'IA, créée par l'Union Européenne."
        },
        {
          question: "Combien de niveaux de risque l'AI Act definit-il ?",
          options: ["2", "3", "4", "5"],
          correctIndex: 2,
          explanation: "L'AI Act definit 4 niveaux de risque : inacceptable (interdit), haut risque, risque limite et risque minimal."
        },
        {
          question: "Quel droit le RGPD garantit-il face aux décisions automatisees ?",
          options: ["Le droit a un ordinateur gratuit", "Le droit à l'explication et à l'opposition", "Le droit a un emploi", "Le droit a Internet gratuit"],
          correctIndex: 1,
          explanation: "Le RGPD garantit le droit de comprendre pourquoi une décision automatisée a été prise et le droit de s'y opposer."
        },
        {
          question: "Quel montant maximum les amendes de l'AI Act peuvent-elles atteindre ?",
          options: ["1 million d'euros", "10 millions d'euros", "35 millions d'euros ou 7% du CA mondial", "100 millions d'euros"],
          correctIndex: 2,
          explanation: "Les amendes de l'AI Act peuvent atteindre 35 millions d'euros ou 7% du chiffre d'affaires mondial — plus severe que le RGPD."
        },
      ],
    },
    {
      number: 7,
      title: "Responsabilité et Transparence de l'IA",
      description: "Qui est responsable quand l'IA se trompe ? Comment rendre l'IA transparente et fiable.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "La Question de la Responsabilité" },
        { type: "paragraph", content: "Quand une voiture autonome cause un accident, qui est responsable ? Le constructeur ? Le développeur de l'IA ? Le propriétaire ? Quand un chatbot donne un conseil médical dangereux, qui est en faute ? La question de la responsabilité est l'un des défis juridiques les plus complexes de l'ère IA." },
        { type: "paragraph", content: "En 2026, la plupart des législations adoptent une approche de responsabilité en chaîne : le développeur est responsable de la fiabilité du modèle, le deployeur de son utilisation appropriee, et l'utilisateur de son usage conforme. Mais les zones grises restent nombreuses." },
        { type: "heading", content: "La Transparence : Boîte Noire vs Boîte Blanche" },
        { type: "paragraph", content: "Beaucoup de systèmes d'IA, en particulier les réseaux de neurones profonds, sont des \"boîtes noires\" : ils produisent des résultats sans pouvoir expliquer leur raisonnement. C'est problematique quand ces systèmes prennent des décisions affectant la vie des gens (justice, santé, credit)." },
        { type: "subheading", content: "L'IA Explicable (XAI)" },
        { type: "paragraph", content: "L'IA explicable (Explainable AI ou XAI) vise à rendre les décisions de l'IA comprehensibles pour les humains. Des techniques comme LIME, SHAP et les cartes d'attention permettent de comprendre quels facteurs ont influence une décision." },
        { type: "key-point", content: "La transparence n'est pas seulement technique — c'est aussi une question de communication. Les entreprises doivent informer clairement quand l'IA est utilisée et comment elle affecte les décisions." },
        { type: "heading", content: "L'IA Responsable en Pratique" },
        { type: "paragraph", content: "Les bonnes pratiques incluent : documenter les choix de conception et les données d'entraînement, tester les modèles sur des populations diverses, permettre le recours humain pour les décisions a fort impact, publier des rapports de transparence (model cards), et mettre en place des mecanismes de signalement." },
        { type: "callout", content: "Anthropic (créateur de Claude) publié des \"Responsible Scaling Policies\" et des évaluations de sécurité pour chaque version de ses modèles — un exemple de transparence dans l'industrie." },
        { type: "diagram", label: "La Chaîne de Responsabilité IA", flow: "vertical", nodes: [
          { label: "Développeur du modèle", sub: "Fiabilité, biais, sécurité du modèle", color: "purple" },
          { label: "Deployeur / Entreprise", sub: "Utilisation appropriee, documentation", color: "blue" },
          { label: "Utilisateur", sub: "Usage conforme, vérification des résultats", color: "emerald" },
          { label: "Regulateur", sub: "Contrôle, sanctions, recours", color: "amber" },
        ]},
        { type: "tip", content: "Quand vous utilisez l'IA pour des décisions importantes, documentez le processus : quel outil, quelles données, quelle décision. Cette tracabilite est votre meilleure protection." },
        { type: "summary", items: [
          "La responsabilité est partagee : développeur, deployeur, utilisateur",
          "Les systèmes IA sont souvent des \"boîtes noires\" inexplicables",
          "L'IA explicable (XAI) vise à rendre les décisions comprehensibles",
          "Les model cards et rapports de transparence deviennent la norme",
          "Documentez vos décisions assistées par IA pour la tracabilite"
        ]},
      ],
      quiz: [
        {
          question: "Qui est responsable quand une IA prend une mauvaise décision ?",
          options: ["Uniquement le développeur", "Uniquement l'utilisateur", "La responsabilité est partagee en chaîne", "Personne n'est responsable"],
          correctIndex: 2,
          explanation: "La responsabilité est partagee : le développeur est responsable de la fiabilité, le deployeur de l'utilisation appropriee, et l'utilisateur de l'usage conforme."
        },
        {
          question: "Que signifie \"boîte noire\" pour un système d'IA ?",
          options: ["Le système est peint en noir", "Le système ne peut pas expliquer son raisonnement", "Le système ne fonctionne pas", "Le système est secret et non publié"],
          correctIndex: 1,
          explanation: "Une \"boîte noire\" désigné un système qui produit des résultats sans pouvoir expliquer son raisonnement interne — un défi pour la transparence."
        },
        {
          question: "Que signifie XAI ?",
          options: ["eXtreme Artificial Intelligence", "Explainable Artificial Intelligence", "eXtended AI Intégration", "eXpert AI Interface"],
          correctIndex: 1,
          explanation: "XAI (Explainable Artificial Intelligence) est le domaine qui vise à rendre les décisions de l'IA comprehensibles pour les humains."
        },
        {
          question: "Pourquoi la transparence est-elle importante pour l'IA ?",
          options: ["Pour rendre l'IA plus rapide", "Pour comprendre et vérifier les décisions de l'IA", "Pour réduire les coûts", "Pour impressionner les clients"],
          correctIndex: 1,
          explanation: "La transparence permet de comprendre, vérifier et contester les décisions de l'IA, ce qui est essentiel quand ces décisions affectent la vie des gens."
        },
      ],
    },
    {
      number: 8,
      title: "Le Futur de l'IA : Enjeux et Espoirs",
      description: "Les grands défis a venir et les promesses d'une IA responsable et benefique.",
      estimatedMinutes: 9,
      sections: [
        { type: "heading", content: "L'IA de Demain : Entre Promesses et Défis" },
        { type: "paragraph", content: "L'IA évolue a une vitesse sans précédent. En 2026, les agents autonomes, les modèles multimodaux et l'IA embarquee transforment déjà notre quotidien. Mais les plus grands changements sont encore a venir. L'horizon 2030 promet des avancées majeures — et souleve des questions ethiques d'une ampleur inédite." },
        { type: "paragraph", content: "Ce chapitre final explore les grands enjeux du futur : l'AGI (Intelligence Artificielle Générale), l'IA en santé et climat, la gouvernance mondiale et la place de l'humain dans un monde de plus en plus automatisé." },
        { type: "heading", content: "L'AGI : Le Saint Graal Controverse" },
        { type: "paragraph", content: "L'AGI — une IA capable d'accomplir n'importé quelle tâche intellectuelle humaine — est le but ultime de nombreux laboratoires. Si elle est atteinte, elle pourrait résoudre des problèmes que l'humanité ne peut pas résoudre seule : maladies incurables, changement climatique, énergies propres. Mais elle pourrait aussi concentrer un pouvoir immense entre quelques mains." },
        { type: "callout", content: "Geoffrey Hinton, prix Nobel de physique et \"parrain du Deep Learning\", a quitte Google en 2023 pour alerter sur les risques existentiels de l'IA avancée. Il reste neanmoins optimiste sur le potentiel benefique de l'IA encadree." },
        { type: "heading", content: "L'IA au Service de l'Humanité" },
        { type: "subheading", content: "Santé" },
        { type: "paragraph", content: "L'IA accélère la découverte de médicaments (AlphaFold a prédit la structure de 200 millions de proteines), améliore le diagnostic précoce (détection de cancers invisible à l'oeil nu) et personnalisé les traitements. D'ici 2030, l'IA pourrait contribuer à sauver des millions de vies." },
        { type: "subheading", content: "Climat et Environnement" },
        { type: "paragraph", content: "L'IA optimisé les réseaux électriques, améliore les prévisions météo (modèle GraphCast de DeepMind), accélère la recherche sur les matériaux pour les batteries et le solaire, et aide à surveiller la deforestation par satellite." },
        { type: "heading", content: "Les Défis a Relever" },
        { type: "paragraph", content: "La concentration du pouvoir IA entre quelques entreprises américaines et chinoises pose un problème de souverainete. L'impact environnemental des datacenters est croissant. L'inégalité d'accès à l'IA entre pays riches et pauvres risque de creuser le fosse numérique." },
        { type: "diagram", label: "Les Enjeux du Futur de l'IA", flow: "horizontal", nodes: [
          { label: "AGI", sub: "Potentiel immense, risques existentiels", color: "purple" },
          { label: "Santé / Climat", sub: "IA au service de l'humanité", color: "emerald" },
          { label: "Gouvernance", sub: "Regulation mondiale nécessaire", color: "blue" },
          { label: "Equite", sub: "Accès égal pour tous les pays", color: "amber" },
        ]},
        { type: "key-point", content: "L'avenir de l'IA n'est pas predetermine. Il sera ce que nous en ferons. Chaque citoyen, développeur et decideur a un rôle a jouer pour s'assurer que l'IA bénéficie à l'ensemble de l'humanité." },
        { type: "diagram", label: "Votre Rôle dans l'IA Responsable", flow: "vertical", nodes: [
          { label: "S'informer", sub: "Comprendre les enjeux ethiques de l'IA", color: "blue" },
          { label: "Questionner", sub: "Esprit critique face aux décisions IA", color: "purple" },
          { label: "Agir", sub: "Exiger transparence et responsabilité", color: "emerald" },
          { label: "Participer", sub: "Contribuer au débat democratique sur l'IA", color: "amber" },
        ]},
        { type: "summary", items: [
          "L'AGI pourrait résoudre de grands problèmes ou concentrer un pouvoir immense",
          "L'IA en santé pourrait sauver des millions de vies d'ici 2030",
          "L'impact environnemental et l'inégalité d'accès sont des défis majeurs",
          "La gouvernance mondiale de l'IA est un enjeu geopolitique",
          "L'avenir de l'IA dépend de nos choix collectifs — chacun a un rôle"
        ]},
      ],
      quiz: [
        {
          question: "Que signifie AGI ?",
          options: ["Automated Général Interface", "Artificial Général Intelligence", "Advanced GPU Infrastructure", "Applied Gradient Iteration"],
          correctIndex: 1,
          explanation: "AGI (Artificial Général Intelligence) désigné une IA hypothetique capable d'accomplir n'importé quelle tâche intellectuelle humaine."
        },
        {
          question: "Comment l'IA peut-elle aider a combattre le changement climatique ?",
          options: ["En remplacant les humains", "En optimisant les réseaux électriques et la recherche sur les matériaux", "En supprimant Internet", "En arretant toute production industrielle"],
          correctIndex: 1,
          explanation: "L'IA optimisé les réseaux électriques, améliore les prévisions météo, accélère la recherche sur les batteries et aide à surveiller la deforestation."
        },
        {
          question: "Quel est un défi majeur de la concentration du pouvoir IA ?",
          options: ["Les entreprises IA sont trop petites", "Quelques entreprises controlent une technologie qui affecte toute l'humanité", "L'IA est trop lente", "Il y a trop d'entreprises IA"],
          correctIndex: 1,
          explanation: "La concentration du pouvoir IA entre quelques entreprises américaines et chinoises pose des problèmes de souverainete et d'equite mondiale."
        },
        {
          question: "Quel est le message principal de ce cours sur l'ethique de l'IA ?",
          options: ["L'IA est dangereuse et doit être interdite", "L'avenir de l'IA dépend de nos choix collectifs", "L'IA est parfaite et n'a pas besoin de regulation", "Seuls les experts peuvent influencer l'avenir de l'IA"],
          correctIndex: 1,
          explanation: "L'avenir de l'IA n'est pas predetermine. Chaque citoyen, développeur et decideur a un rôle a jouer pour une IA responsable et benefique."
        },
      ],
    },
  ],
};

export default content;
