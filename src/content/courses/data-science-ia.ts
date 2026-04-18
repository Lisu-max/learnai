import type { CourseContent } from "../types";

const content: CourseContent = {
  slug: "data-science-ia",
  chapters: [
    {
      number: 1,
      title: "Introduction à la Data Science avec l'IA",
      description: "Découvrir le monde de la data science et comment l'IA révolutionne ce domaine.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Qu'est-ce que la Data Science ?" },
        { type: "paragraph", content: "La data science est l'art d'extraire des connaissances et des insights à partir de données brutes. Elle combiné statistiques, informatique et expertise métier pour transformer des volumes massifs de données en décisions eclairees. En 2026, l'IA a radicalement accélère chaque étape du processus." },
        { type: "paragraph", content: "Un data scientist moderne ne travaille plus seul : il est assisté par des outils IA qui automatisent le nettoyage de données, suggerent des modèles, et generent des visualisations en quelques secondes. Le métier évolue du codage manuel vers l'orchestration intelligente." },
        { type: "callout", content: "Selon LinkedIn, la data science reste le métier le plus demande en tech en 2026, avec une augmentation de 35% des offres par rapport à 2024. L'IA n'a pas remplace les data scientists — elle les a rendus 10x plus productifs." },
        { type: "video", videoId: "ua-CiDNNj30",
      videoDurationMinutes: 352, label: "Introduction à la Data Science avec l'IA" },
        { type: "heading", content: "Le Pipeline Data Science" },
        { type: "paragraph", content: "Tout projet de data science suit un pipeline : collecte des données, nettoyage et préparation, exploration et visualisation, modélisation, évaluation, et déploiement. L'IA intervient désormais à chaque étape pour accélérer le travail." },
        { type: "subheading", content: "Data Science vs Machine Learning vs IA" },
        { type: "paragraph", content: "La data science est le domaine global qui englobe l'analyse de données. Le machine learning est une technique de la data science qui permet aux modèles d'apprendre automatiquement. L'IA est le cadre plus large qui inclut le ML, le NLP, la vision par ordinateur et bien plus." },
        { type: "key-point", content: "La data science sans IA, c'est comme conduire une voiture sans GPS : possible, mais beaucoup plus lent et risque. L'IA est devenue l'assistant indispensable du data scientist moderne." },
        { type: "diagram", label: "Le Pipeline Data Science", flow: "horizontal", nodes: [
          { label: "Collecte", sub: "APIs, bases de données, web scraping", color: "blue" },
          { label: "Nettoyage", sub: "Gestion des valeurs manquantes", color: "purple" },
          { label: "Exploration", sub: "Visualisation et statistiques", color: "emerald" },
          { label: "Modelisation", sub: "ML, deep learning, AutoML", color: "amber" },
          { label: "Déploiement", sub: "APIs, dashboards, MLOps", color: "pink" },
        ]},
        { type: "tip", content: "Pour débuter en data science, pas besoin d'un doctorat en mathématiques. Les outils IA modernes comme ChatGPT et Claude peuvent vous expliquer les concepts statistiques et vous aider a écrire du code Python en temps réel." },
        { type: "summary", items: [
          "La data science extrait des connaissances à partir de données brutes",
          "L'IA accélère chaque étape du pipeline data science",
          "Le métier évolue vers l'orchestration intelligente",
          "Data science > ML > IA : trois niveaux imbriques",
          "Les outils IA rendent la data science accessible à tous"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que la data science ?",
          options: ["Un langage de programmation", "L'art d'extraire des connaissances à partir de données", "Un type de base de données", "Un framework JavaScript"],
          correctIndex: 1,
          explanation: "La data science est l'art d'extraire des connaissances et des insights à partir de données brutes, en combinant statistiques, informatique et expertise métier."
        },
        {
          question: "Quelle est la première étape du pipeline data science ?",
          options: ["La modélisation", "Le déploiement", "La collecte des données", "L'évaluation"],
          correctIndex: 2,
          explanation: "La collecte des données est toujours la première étape. Sans données de qualité, aucun modèle ne peut produire de bons résultats."
        },
        {
          question: "Comment l'IA a-t-elle changé le métier de data scientist ?",
          options: ["Elle a remplace les data scientists", "Elle a rendu le métier obsolète", "Elle a rendu les data scientists 10x plus productifs", "Elle n'a eu aucun impact"],
          correctIndex: 2,
          explanation: "L'IA n'a pas remplace les data scientists mais les a rendus beaucoup plus productifs en automatisant les tâches répétitives et en accelerant l'analyse."
        },
        {
          question: "Quelle est la relation entre data science, ML et IA ?",
          options: ["Ce sont des synonymes", "La data science englobe le ML, l'IA englobe tout", "L'IA est un sous-ensemble du ML", "Le ML n'a rien à voir avec la data science"],
          correctIndex: 1,
          explanation: "L'IA est le cadre le plus large, le ML est une technique de l'IA, et la data science est le domaine appliqué qui utilise le ML et d'autres méthodes pour analyser les données."
        },
      ],
    },
    {
      number: 2,
      title: "Python et IA : Les Bases",
      description: "Les fondamentaux de Python pour la data science assistés par l'IA.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Pourquoi Python pour la Data Science ?" },
        { type: "paragraph", content: "Python est le langage dominant de la data science et du machine learning. Sa syntaxe claire, son écosystème massif de bibliotheques (NumPy, Pandas, Scikit-learn, TensorFlow, PyTorch), et sa communauté active en font le choix incontournable." },
        { type: "paragraph", content: "En 2026, coder en Python est encore plus facile grâce aux assistants IA. ChatGPT, Claude et Cursor peuvent générer, expliquer et debugger du code Python instantanément. Vous n'avez plus besoin de mémoriser chaque syntaxe — l'IA est votre copilote." },
        { type: "subheading", content: "Les Structures de Données Essentielles" },
        { type: "paragraph", content: "Les listes, dictionnaires, tuples et ensembles sont les briques de base. Les listes pour les séquences ordonnées, les dictionnaires pour les paires clé-valeur, les tuples pour les données immuables, et les ensembles pour les collections uniques." },
        { type: "subheading", content: "NumPy : Le Calcul Numérique" },
        { type: "paragraph", content: "NumPy est la fondation du calcul scientifique en Python. Ses tableaux multidimensionnels (ndarray) permettent des opérations mathématiques vectorisees, jusqu'à 100x plus rapides que les boucles Python natives. C'est la base sur laquelle Pandas, Scikit-learn et TensorFlow sont construits." },
        { type: "prompt-example", prompt: "Ecris un script Python avec NumPy qui génère 1000 nombres aléatoires suivant une distribution normale, calcule la moyenne, la mediane et l'ecart-type, puis affiche un histogramme avec matplotlib.", result: "import numpy as np\nimport matplotlib.pyplot as plt\n\ndata = np.random.normal(loc=0, scale=1, size=1000)\nprint(f'Moyenne: {np.mean(data):.4f}')\nprint(f'Mediane: {np.median(data):.4f}')\nprint(f'Ecart-type: {np.std(data):.4f}')\n\nplt.hist(data, bins=30, edgecolor='black')\nplt.title('Distribution Normale')\nplt.show()" },
        { type: "video", videoId: "vmEHCJofslg",
      videoDurationMinutes: 60, label: "Python pour la Data Science — les bases" },
        { type: "key-point", content: "Ne cherchez pas à tout mémoriser. Utilisez l'IA pour générer le code, puis comprenez ce qu'il fait. La compréhension est plus importante que la memorisation en 2026." },
        { type: "diagram", label: "L'Écosystème Python Data Science", flow: "horizontal", nodes: [
          { label: "NumPy", sub: "Calcul numérique vectorise", color: "blue" },
          { label: "Pandas", sub: "Manipulation de données tabulaires", color: "purple" },
          { label: "Matplotlib / Seaborn", sub: "Visualisation de données", color: "emerald" },
          { label: "Scikit-learn", sub: "Machine Learning classique", color: "amber" },
        ]},
        { type: "summary", items: [
          "Python est le langage incontournable de la data science",
          "NumPy est la fondation du calcul scientifique en Python",
          "L'IA (ChatGPT, Claude, Cursor) accélère l'apprentissage de Python",
          "Listes, dictionnaires, tuples et ensembles sont les bases",
          "La compréhension du code est plus importante que la memorisation"
        ]},
      ],
      quiz: [
        {
          question: "Pourquoi Python domine-t-il la data science ?",
          options: ["Il est le plus rapide", "Sa syntaxe claire et son écosystème massif de bibliotheques", "Il est le plus ancien", "Il est le seul langage compatible avec l'IA"],
          correctIndex: 1,
          explanation: "Python domine grâce à sa syntaxe claire, lisible, et surtout a son écosystème massif de bibliotheques spécialisées (NumPy, Pandas, Scikit-learn, etc.)."
        },
        {
          question: "Qu'est-ce que NumPy ?",
          options: ["Un editeur de code", "Une bibliotheque de calcul numérique", "Un framework web", "Un outil de visualisation"],
          correctIndex: 1,
          explanation: "NumPy est la bibliotheque fondamentale pour le calcul scientifique en Python, offrant des tableaux multidimensionnels et des opérations vectorisees."
        },
        {
          question: "Comment l'IA aide-t-elle a coder en Python ?",
          options: ["Elle remplace complètement le développeur", "Elle génère, expliqué et debugge du code instantanément", "Elle n'est pas utile pour Python", "Elle traduit Python en Java"],
          correctIndex: 1,
          explanation: "Les assistants IA comme ChatGPT et Claude generent du code Python, l'expliquent ligne par ligne, et aident à debugger les erreurs en temps réel."
        },
        {
          question: "Quelle structure Python est idéale pour stocker des paires clé-valeur ?",
          options: ["Liste", "Tuple", "Dictionnaire", "Ensemble"],
          correctIndex: 2,
          explanation: "Les dictionnaires Python stockent des paires clé-valeur, ce qui les rend idéaux pour représenter des données structurees comme des enregistrements."
        },
      ],
    },
    {
      number: 3,
      title: "Pandas et Analyse de Données",
      description: "Maîtriser Pandas pour manipuler, nettoyer et analyser des jeux de données.",
      estimatedMinutes: 9,
      sections: [
        { type: "heading", content: "Pandas : L'Outil Incontournable" },
        { type: "paragraph", content: "Pandas est la bibliotheque Python la plus utilisée pour la manipulation de données tabulaires. Ses deux structures principales — Series (1D) et DataFrame (2D) — permettent de charger, nettoyer, transformer et analyser des données avec une syntaxe intuitive." },
        { type: "paragraph", content: "Imaginez Pandas comme un Excel surpuissant programmable. Vous pouvez filtrer des millions de lignes en une seule commande, fusionner des tables complexes, et appliquer des transformations en masse — le tout en quelques lignes de code." },
        { type: "subheading", content: "Les Operations Fondamentales" },
        { type: "paragraph", content: "Charger des données (read_csv, read_excel, read_sql), explorer (head, describe, info), filtrer (loc, iloc, conditions booleennes), grouper (groupby), fusionner (merge, join), et exporter (to_csv, to_excel). Ce sont les opérations que vous utiliserez quotidiennement." },
        { type: "subheading", content: "Le Nettoyage de Données" },
        { type: "paragraph", content: "80% du travail d'un data scientist est le nettoyage de données. Valeurs manquantes (dropna, fillna), doublons (drop_duplicates), types de données (astype), outliers, et normalisation. L'IA peut désormais automatiser une grande partie de ce nettoyage." },
        { type: "prompt-example", prompt: "J'ai un DataFrame Pandas avec des ventes mensuelles. Montre-moi comment nettoyer les valeurs manquantes, grouper par catégorie de produit, et calculer le total des ventes par catégorie.", result: "import pandas as pd\n\n# Nettoyage des valeurs manquantes\ndf = df.dropna(subset=['montant'])\ndf['catégorie'] = df['catégorie'].fillna('Inconnu')\n\n# Groupement et aggregation\nventes_par_cat = df.groupby('catégorie')['montant'].agg(['sum','mean','count'])\nventes_par_cat = ventes_par_cat.sort_values('sum', ascending=False)\nprint(ventes_par_cat)" },
        { type: "callout", content: "Astuce IA : demandez a ChatGPT ou Claude de générer vos pipelines Pandas. Decrivez vos données en langage naturel et l'IA produira le code optimisé. Verifiez toujours le résultat sur un echantillon." },
        { type: "video", videoId: "i_LwzRVP7bg",
      videoDurationMinutes: 234, label: "Pandas en 20 minutes — tutoriel pratique" },
        { type: "diagram", label: "Le Workflow Pandas Typique", flow: "horizontal", nodes: [
          { label: "Charger", sub: "read_csv, read_excel, read_sql", color: "blue" },
          { label: "Explorer", sub: "head, describe, info, shape", color: "purple" },
          { label: "Nettoyer", sub: "dropna, fillna, drop_duplicates", color: "pink" },
          { label: "Transformer", sub: "groupby, merge, pivot, apply", color: "emerald" },
          { label: "Exporter", sub: "to_csv, to_excel, to_sql", color: "amber" },
        ]},
        { type: "summary", items: [
          "Pandas est l'outil central de la manipulation de données en Python",
          "DataFrame (2D) et Series (1D) sont les structures principales",
          "80% du travail est le nettoyage de données",
          "L'IA peut générer et optimiser vos pipelines Pandas",
          "Operations clés : charger, explorer, nettoyer, transformer, exporter"
        ]},
      ],
      quiz: [
        {
          question: "Quelle est la structure principale de Pandas pour les données tabulaires ?",
          options: ["Array", "DataFrame", "Matrix", "Table"],
          correctIndex: 1,
          explanation: "Le DataFrame est la structure 2D principale de Pandas, équivalent a un tableau avec des lignes et des colonnes nommees."
        },
        {
          question: "Quel pourcentage du travail d'un data scientist est consacre au nettoyage de données ?",
          options: ["20%", "50%", "80%", "95%"],
          correctIndex: 2,
          explanation: "Environ 80% du temps d'un data scientist est consacre au nettoyage et a la préparation des données — c'est l'étape la plus chronophage."
        },
        {
          question: "Quelle méthode Pandas supprime les lignes avec des valeurs manquantes ?",
          options: ["remove_null()", "dropna()", "clean()", "delete_missing()"],
          correctIndex: 1,
          explanation: "La méthode dropna() supprime les lignes (ou colonnes) contenant des valeurs manquantes (NaN) dans un DataFrame."
        },
        {
          question: "Comment Pandas charge-t-il un fichier CSV ?",
          options: ["pd.open_csv()", "pd.read_csv()", "pd.load_csv()", "pd.import_csv()"],
          correctIndex: 1,
          explanation: "pd.read_csv() est la méthode standard pour charger un fichier CSV dans un DataFrame Pandas."
        },
      ],
    },
    {
      number: 4,
      title: "Visualisation de Données avec l'IA",
      description: "Créer des graphiques impactants avec Matplotlib, Seaborn et les outils IA.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "L'Art de la Visualisation de Données" },
        { type: "paragraph", content: "Une bonne visualisation transformé des données brutes en insights comprehensibles instantanément. Elle raconte une histoire, révèle des tendances cachées, et guide la prise de décision. En data science, la visualisation est aussi importante que l'analyse elle-même." },
        { type: "subheading", content: "Matplotlib : La Fondation" },
        { type: "paragraph", content: "Matplotlib est la bibliotheque de base pour la visualisation en Python. Flexible mais verbose, elle permet de créer pratiquement n'importé quel type de graphique. Sa syntaxe orientée objet offre un contrôle total sur chaque élément du graphique." },
        { type: "subheading", content: "Seaborn : La Beaute Statistique" },
        { type: "paragraph", content: "Seaborn est construit sur Matplotlib et offre des graphiques statistiques élégants en une seule ligne de code. Histogrammes, heatmaps, violin plots, pair plots — Seaborn excelle dans l'exploration visuelle des données." },
        { type: "subheading", content: "Plotly : L'Interactivite" },
        { type: "paragraph", content: "Plotly créé des graphiques interactifs pour le web. Zoom, survol, filtres dynamiques — idéal pour les dashboards et les présentations. Dash (par Plotly) permet de créer des applications web complètes de data visualization." },
        { type: "tip", content: "Demandez a ChatGPT ou Claude de générer vos graphiques. Decrivez ce que vous voulez visualiser et l'IA produira le code Matplotlib, Seaborn ou Plotly adapte. Vous pouvez même lui envoyer une capture d'écran du graphique souhaite." },
        { type: "video", videoId: "OGxgnH8y2NM",
      videoDurationMinutes: 6, label: "Visualisation de données avec Python" },
        { type: "key-point", content: "Le choix du graphique dépend de la question posee : barres pour comparer, lignes pour les tendances temporelles, scatter pour les correlations, pie pour les proportions, heatmap pour les matrices." },
        { type: "diagram", label: "Quel Graphique pour Quelle Question ?", flow: "horizontal", nodes: [
          { label: "Barres", sub: "Comparer des catégories", color: "blue" },
          { label: "Lignes", sub: "Tendances temporelles", color: "purple" },
          { label: "Scatter", sub: "Correlations entre variables", color: "emerald" },
          { label: "Heatmap", sub: "Matrices de correlation", color: "amber" },
        ]},
        { type: "prompt-example", prompt: "Cree un graphique Seaborn qui montre la correlation entre le prix et la surface d'appartements, avec une ligne de régression et les points colores par quartier.", result: "import seaborn as sns\nimport matplotlib.pyplot as plt\n\nsns.lmplot(data=df, x='surface', y='prix',\n           hue='quartier', height=8,\n           scatter_kws={'alpha': 0.6})\nplt.title('Prix vs Surface par Quartier')\nplt.xlabel('Surface (m2)')\nplt.ylabel('Prix (EUR)')\nplt.show()" },
        { type: "summary", items: [
          "La visualisation transformé des données brutes en insights actionnables",
          "Matplotlib pour le contrôle total, Seaborn pour l'élégance, Plotly pour l'interactivité",
          "Le choix du graphique dépend de la question posee",
          "L'IA peut générer des graphiques complexes à partir de descriptions en langage naturel",
          "Une bonne visualisation raconte une histoire claire"
        ]},
      ],
      quiz: [
        {
          question: "Quelle bibliotheque Python offre des graphiques statistiques élégants en une ligne ?",
          options: ["Matplotlib", "Seaborn", "NumPy", "Pandas"],
          correctIndex: 1,
          explanation: "Seaborn est construit sur Matplotlib et offre des graphiques statistiques élégants avec une syntaxe minimaliste, en une seule ligne de code."
        },
        {
          question: "Quel type de graphique est idéal pour montrer une tendance temporelle ?",
          options: ["Diagramme en barres", "Graphique en lignes", "Pie chart", "Scatter plot"],
          correctIndex: 1,
          explanation: "Les graphiques en lignes sont idéaux pour montrer l'évolution d'une variable au fil du temps (tendances temporelles)."
        },
        {
          question: "Quelle bibliotheque permet de créer des graphiques interactifs pour le web ?",
          options: ["Matplotlib", "Seaborn", "Plotly", "NumPy"],
          correctIndex: 2,
          explanation: "Plotly créé des graphiques interactifs pour le web avec zoom, survol, et filtres dynamiques — idéal pour les dashboards."
        },
        {
          question: "Quel graphique utiliser pour visualiser une matrice de correlation ?",
          options: ["Histogramme", "Heatmap", "Camembert", "Graphique en barres"],
          correctIndex: 1,
          explanation: "La heatmap est le graphique idéal pour visualiser une matrice de correlation, avec des couleurs représentant l'intensite des correlations."
        },
      ],
    },
    {
      number: 5,
      title: "Machine Learning : Concepts Fondamentaux",
      description: "Comprendre les bases du ML : supervisé, non supervisé, évaluation des modèles.",
      estimatedMinutes: 9,
      sections: [
        { type: "heading", content: "Les Fondements du Machine Learning" },
        { type: "paragraph", content: "Le machine learning permet aux ordinateurs d'apprendre des patterns à partir de données sans être explicitement programmés. En data science, c'est l'outil qui transforme les données en prédictions, classifications et recommandations." },
        { type: "subheading", content: "Apprentissage Supervisé" },
        { type: "paragraph", content: "Le modèle apprend à partir d'exemples étiquetés. Donnez-lui des milliers d'emails classes comme spam ou non-spam, et il apprendra à distinguer les deux. Les algorithmes clés : régression lineaire, arbres de décision, Random Forest, SVM, et réseaux de neurones." },
        { type: "subheading", content: "Apprentissage Non Supervisé" },
        { type: "paragraph", content: "Le modèle découvre des structures cachées sans étiquettes. Il identifie des groupes (clustering), réduit la dimensionnalité, ou détecte des anomalies. Algorithmes clés : K-Means, DBSCAN, PCA, et autoencoders." },
        { type: "heading", content: "Le Workflow ML" },
        { type: "paragraph", content: "1) Split des données (train/test/validation). 2) Choix de l'algorithme. 3) Entraînement sur les données train. 4) Évaluation sur les données test. 5) Optimisation des hyperparametres. 6) Déploiement du modèle final." },
        { type: "key-point", content: "Le sur-apprentissage (overfitting) est le piege numero 1 en ML. Un modèle qui performe trop bien sur les données d'entraînement mais mal sur de nouvelles données est inutile. Le split train/test est votre première protection." },
        { type: "video", videoId: "ua-CiDNNj30",
      videoDurationMinutes: 352, label: "Les concepts clés du Machine Learning" },
        { type: "diagram", label: "Le Workflow Machine Learning", flow: "horizontal", nodes: [
          { label: "Split données", sub: "Train / Test / Validation", color: "blue" },
          { label: "Entraînement", sub: "L'algorithme apprend les patterns", color: "purple" },
          { label: "Évaluation", sub: "Metriques sur données test", color: "emerald" },
          { label: "Optimisation", sub: "Tuning des hyperparametres", color: "amber" },
        ]},
        { type: "diagram", label: "Supervisé vs Non Supervisé", flow: "horizontal", nodes: [
          { label: "Supervisé", sub: "Données étiquetées → prédiction", color: "purple" },
          { label: "Non supervisé", sub: "Pas d'étiquettes → découverte", color: "blue" },
        ]},
        { type: "tip", content: "Scikit-learn offre une API unifiee pour quasiment tous les algorithmes ML classiques. Apprenez fit(), predict() et score() — ces 3 méthodes couvrent 90% de vos besoins." },
        { type: "summary", items: [
          "Le ML permet d'apprendre des patterns à partir de données",
          "Supervisé : données étiquetées, prédiction et classification",
          "Non supervisé : pas d'étiquettes, clustering et détection d'anomalies",
          "Le sur-apprentissage est le piege principal a éviter",
          "Le split train/test est essentiel pour évaluer un modèle"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que le sur-apprentissage (overfitting) ?",
          options: ["Un modèle qui apprend trop lentement", "Un modèle trop performant sur les données d'entraînement mais mauvais sur de nouvelles données", "Un modèle qui manque de données", "Un modèle qui utilise trop de RAM"],
          correctIndex: 1,
          explanation: "Le sur-apprentissage se produit quand un modèle memorise les données d'entraînement au lieu d'apprendre les patterns generalisables."
        },
        {
          question: "Pourquoi divise-t-on les données en train et test ?",
          options: ["Pour économiser de la mémoire", "Pour évaluer la performance du modèle sur des données inédites", "Par convention uniquement", "Pour accélérer l'entraînement"],
          correctIndex: 1,
          explanation: "Le split train/test permet d'évaluer comment le modèle se comporte sur des données qu'il n'a jamais vues, simulant une utilisation réelle."
        },
        {
          question: "Quel algorithme est utilisé pour le clustering ?",
          options: ["Regression lineaire", "K-Means", "Random Forest", "SVM"],
          correctIndex: 1,
          explanation: "K-Means est un algorithme de clustering (apprentissage non supervisé) qui regroupe les données en K clusters bases sur leur similarite."
        },
        {
          question: "Quelles sont les 3 méthodes Scikit-learn les plus utilisées ?",
          options: ["load(), save(), run()", "fit(), predict(), score()", "train(), test(), deploy()", "read(), write(), exécute()"],
          correctIndex: 1,
          explanation: "fit() entraîné le modèle, predict() fait des prédictions, et score() évalue la performance — ces 3 méthodes couvrent 90% des besoins en ML."
        },
      ],
    },
    {
      number: 6,
      title: "Regression et Classification",
      description: "Les deux piliers du ML supervisé : prédire des valeurs et classifier des catégories.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Regression : Predire des Valeurs Continues" },
        { type: "paragraph", content: "La régression prédit une valeur numérique continue : prix d'un appartement, température demain, chiffre d'affaires du mois prochain. La régression lineaire est le point de depart, mais des modèles plus complexes comme Random Forest Regressor et XGBoost offrent souvent de meilleures performances." },
        { type: "paragraph", content: "Les métriques de régression : MAE (erreur absolue moyenne), MSE (erreur quadratique moyenne), RMSE (racine de MSE), et R2 (coefficient de détermination). Un R2 de 0.85 signifie que votre modèle expliqué 85% de la variance des données." },
        { type: "heading", content: "Classification : Predire des Catégories" },
        { type: "paragraph", content: "La classification assigne une catégorie a une observation : spam ou non-spam, client fidèle ou desabonne, maladie presente ou absente. Les algorithmes courants : régression logistique, arbres de décision, Random Forest, SVM, et réseaux de neurones." },
        { type: "paragraph", content: "Les métriques de classification : accuracy, précision, recall, F1-score, et matrice de confusion. L'accuracy seule peut être trompeuse avec des classes desequilibrees — le F1-score est souvent plus fiable." },
        { type: "callout", content: "Attention aux classes desequilibrees ! Si 95% de vos emails sont non-spam, un modèle qui répond toujours \"non-spam\" aura 95% d'accuracy mais sera complètement inutile. Utilisez le F1-score ou l'AUC-ROC." },
        { type: "video", videoId: "vmEHCJofslg",
      videoDurationMinutes: 60, label: "Regression vs Classification expliquees" },
        { type: "prompt-example", prompt: "Entraîné un modèle Random Forest pour prédire si un client va se desabonner (churn), avec un rapport de classification complet.", result: "from sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_sélection import train_test_split\nfrom sklearn.metrics import classification_report\n\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\nmodel = RandomForestClassifier(n_estimators=100, random_state=42)\nmodel.fit(X_train, y_train)\ny_pred = model.predict(X_test)\nprint(classification_report(y_test, y_pred))" },
        { type: "diagram", label: "Regression vs Classification", flow: "horizontal", nodes: [
          { label: "Regression", sub: "Valeurs continues (prix, température)", color: "blue" },
          { label: "Classification", sub: "Catégories (spam/non-spam, oui/non)", color: "purple" },
        ]},
        { type: "key-point", content: "Le choix entre régression et classification dépend de la nature de votre variable ciblé : continue (nombre) = régression, categorielle (classe) = classification." },
        { type: "summary", items: [
          "Regression : prédire des valeurs continues (prix, température)",
          "Classification : prédire des catégories (spam, churn, maladie)",
          "Metriques régression : MAE, RMSE, R2",
          "Metriques classification : accuracy, précision, recall, F1-score",
          "Attention aux classes desequilibrees — le F1-score est plus fiable que l'accuracy"
        ]},
      ],
      quiz: [
        {
          question: "Quel type de ML utiliser pour prédire le prix d'un appartement ?",
          options: ["Classification", "Clustering", "Regression", "Reinforcement learning"],
          correctIndex: 2,
          explanation: "Le prix est une valeur continue, donc on utilise la régression pour le prédire."
        },
        {
          question: "Que signifie un R2 de 0.85 ?",
          options: ["Le modèle a 85% d'accuracy", "Le modèle expliqué 85% de la variance des données", "Le modèle a 85% de précision", "Le modèle utilise 85% des données"],
          correctIndex: 1,
          explanation: "Le R2 (coefficient de détermination) mesure la proportion de la variance expliquée par le modèle. 0.85 signifie que le modèle capture 85% de la variabilité."
        },
        {
          question: "Pourquoi l'accuracy peut-elle être trompeuse ?",
          options: ["Elle est toujours fausse", "Elle ne fonctionne pas avec les classes desequilibrees", "Elle est trop complexe a calculer", "Elle ne mesure que la régression"],
          correctIndex: 1,
          explanation: "Avec des classes desequilibrees (ex: 95% non-spam), un modèle naif peut atteindre 95% d'accuracy en predisant toujours la classe majoritaire."
        },
        {
          question: "Quel algorithme est couramment utilise pour la classification ?",
          options: ["Regression lineaire", "K-Means", "Random Forest", "PCA"],
          correctIndex: 2,
          explanation: "Random Forest est un algorithme polyvalent utilise pour la classification (et la régression). Il combiné des centaines d'arbres de décision pour des prédictions robustes."
        },
      ],
    },
    {
      number: 7,
      title: "Clustering et Segmentation",
      description: "Regrouper automatiquement les données pour découvrir des structures cachées.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "Le Clustering : Découvrir des Groupes" },
        { type: "paragraph", content: "Le clustering est une technique d'apprentissage non supervisé qui regroupe des observations similaires ensemble. Sans étiquettes prealables, l'algorithme identifié des structures naturelles dans les données : segments de clients, groupes de produits, ou clusters de comportements." },
        { type: "subheading", content: "K-Means" },
        { type: "paragraph", content: "K-Means est l'algorithme de clustering le plus populaire. Il partitionne les données en K groupes en minimisant la distance intra-cluster. Simple et rapide, il fonctionne bien pour des clusters spheriques de taille similaire. La méthode du coude (elbow method) aide à déterminer le nombre optimal de clusters." },
        { type: "subheading", content: "DBSCAN" },
        { type: "paragraph", content: "DBSCAN détecte des clusters de formes arbitraires et identifié automatiquement les points aberrants (outliers). Contrairement a K-Means, il ne nécessite pas de spécifier le nombre de clusters à l'avance — il les découvre automatiquement." },
        { type: "heading", content: "Cas d'Usage : La Segmentation Client" },
        { type: "paragraph", content: "La segmentation RFM (Recency, Frequency, Monetary) est un classique du marketing data-driven. En appliquant K-Means sur les scores RFM, vous identifiez vos meilleurs clients, les clients a risque, et les clients perdus — permettant des actions marketing ciblées." },
        { type: "video", videoId: "i_LwzRVP7bg",
      videoDurationMinutes: 234, label: "Clustering et segmentation expliques" },
        { type: "diagram", label: "K-Means vs DBSCAN", flow: "horizontal", nodes: [
          { label: "K-Means", sub: "Clusters spheriques, K fixe", color: "blue" },
          { label: "DBSCAN", sub: "Formes arbitraires, K auto", color: "purple" },
        ]},
        { type: "tip", content: "Pour la segmentation client, commencez toujours par une analyse RFM. C'est simple, interpretable, et actionnable. L'IA peut vous aider a déterminer le nombre optimal de segments." },
        { type: "diagram", label: "La Segmentation RFM", flow: "horizontal", nodes: [
          { label: "Recency", sub: "Date du dernier achat", color: "emerald" },
          { label: "Frequency", sub: "Nombre d'achats", color: "amber" },
          { label: "Monetary", sub: "Montant total dépense", color: "pink" },
        ]},
        { type: "summary", items: [
          "Le clustering regroupe des données similaires sans étiquettes",
          "K-Means : simple, rapide, clusters spheriques",
          "DBSCAN : formes arbitraires, détection d'outliers",
          "La segmentation RFM est un cas d'usage classique en marketing",
          "L'IA aide à déterminer le nombre optimal de clusters"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que le clustering ?",
          options: ["Predire une valeur continue", "Regrouper des données similaires sans étiquettes", "Classifier des emails comme spam", "Entraîner un réseau de neurones"],
          correctIndex: 1,
          explanation: "Le clustering regroupe des observations similaires ensemble sans utiliser d'étiquettes — c'est un apprentissage non supervisé."
        },
        {
          question: "Quel avantage DBSCAN a-t-il sur K-Means ?",
          options: ["Il est plus rapide", "Il détecte des clusters de formes arbitraires", "Il nécessite moins de données", "Il est plus précis"],
          correctIndex: 1,
          explanation: "DBSCAN peut détecter des clusters de formes arbitraires et identifier les outliers, alors que K-Means est limite aux clusters spheriques."
        },
        {
          question: "Que signifie RFM dans la segmentation client ?",
          options: ["Random Forest Model", "Recency, Frequency, Monetary", "Real-time Feature Mapping", "Recursive Function Method"],
          correctIndex: 1,
          explanation: "RFM signifie Recency (récence d'achat), Frequency (fréquence d'achat), Monetary (montant dépense) — trois critères pour segmenter les clients."
        },
        {
          question: "Comment déterminer le nombre optimal de clusters en K-Means ?",
          options: ["On choisit toujours 3", "La méthode du coude (elbow method)", "On prend le nombre de variables", "On testé aleatoirement"],
          correctIndex: 1,
          explanation: "La méthode du coude trace l'inertie en fonction du nombre de clusters et identifié le point d'inflexion optimal."
        },
      ],
    },
    {
      number: 8,
      title: "NLP et Analyse de Texte",
      description: "Analyser du texte avec l'IA : sentiment, extraction d'entites, topic modeling.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Le NLP au Service de la Data Science" },
        { type: "paragraph", content: "Le traitement du langage naturel (NLP) permet d'analyser des données textuelles a grande échelle : avis clients, articles, emails, rapports. En 2026, les LLM ont révolutionné le NLP — ce qui necessitait des semaines de code peut être fait en un prompt." },
        { type: "subheading", content: "Analyse de Sentiment" },
        { type: "paragraph", content: "Détecter si un texte est positif, négatif ou neutre. Applications : monitoring de marque, analyse d'avis clients, détection de tendances sur les réseaux sociaux. Les LLM comme Claude et GPT excellent dans cette tâche avec une précision supérieure aux méthodes classiques." },
        { type: "subheading", content: "Extraction d'Entites Nommees (NER)" },
        { type: "paragraph", content: "Identifier automatiquement les personnes, lieux, organisations, dates et montants dans un texte. SpaCy et les LLM permettent cette extraction en quelques lignes de code. Essentiel pour structurer des données textuelles brutes." },
        { type: "subheading", content: "Topic Modeling" },
        { type: "paragraph", content: "Découvrir les thèmes principaux dans un corpus de documents. LDA (Latent Dirichlet Allocation) et BERTopic sont les approches classiques. Les LLM offrent désormais une alternative plus simple : donnez un corpus a Claude et demandez-lui d'identifier les thèmes." },
        { type: "prompt-example", prompt: "Analyse le sentiment de ces 5 avis clients et classe-les en positif, neutre ou négatif. Explique ton raisonnement.", result: "Avis 1: \"Produit genial, livraison rapide\" → POSITIF (termes laudatifs)\nAvis 2: \"Correct mais rien d'exceptionnel\" → NEUTRE (nuance)\nAvis 3: \"Complètement decue, ne fonctionne pas\" → NEGATIF (deception)\nAvis 4: \"Bon rapport qualité-prix\" → POSITIF (satisfaction)\nAvis 5: \"Service client inexistant\" → NEGATIF (critique)" },
        { type: "video", videoId: "OGxgnH8y2NM",
      videoDurationMinutes: 6, label: "NLP et analyse de texte avec Python" },
        { type: "diagram", label: "Les Techniques NLP en Data Science", flow: "horizontal", nodes: [
          { label: "Sentiment", sub: "Positif / Négatif / Neutre", color: "purple" },
          { label: "NER", sub: "Personnes, lieux, organisations", color: "blue" },
          { label: "Topic Modeling", sub: "Thèmes principaux d'un corpus", color: "emerald" },
          { label: "Summarization", sub: "Résumé automatique de textes", color: "amber" },
        ]},
        { type: "summary", items: [
          "Le NLP analyse des données textuelles a grande échelle",
          "Les LLM ont révolutionné le NLP — un prompt remplace des semaines de code",
          "Analyse de sentiment : détecter l'opinion dans les textes",
          "NER : extraire personnes, lieux, organisations automatiquement",
          "Topic modeling : découvrir les thèmes dans un corpus"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que l'analyse de sentiment ?",
          options: ["Détecter les émotions faciales", "Déterminer si un texte est positif, négatif ou neutre", "Traduire un texte dans une autre langue", "Résumer un document"],
          correctIndex: 1,
          explanation: "L'analyse de sentiment détermine la polarite d'un texte (positif, négatif, neutre) — essentielle pour le monitoring de marque et l'analyse d'avis."
        },
        {
          question: "Que signifie NER ?",
          options: ["Neural Engine Recognition", "Named Entity Recognition", "Natural Expression Resolver", "Numeric Extraction Routine"],
          correctIndex: 1,
          explanation: "NER (Named Entity Recognition) identifié automatiquement les entites nommees dans un texte : personnes, lieux, organisations, dates."
        },
        {
          question: "Comment les LLM ont-ils changé le NLP ?",
          options: ["Ils l'ont rendu obsolète", "Ils permettent de faire en un prompt ce qui prenait des semaines", "Ils n'ont eu aucun impact", "Ils ont complexifie le processus"],
          correctIndex: 1,
          explanation: "Les LLM comme Claude et GPT permettent de réaliser des tâches NLP complexes (sentiment, NER, résumé) en un seul prompt, sans code spécialisé."
        },
        {
          question: "Quel est l'objectif du topic modeling ?",
          options: ["Traduire des textes", "Découvrir les thèmes principaux dans un corpus", "Corriger l'orthographe", "Compresser des fichiers texte"],
          correctIndex: 1,
          explanation: "Le topic modeling identifié automatiquement les thèmes dominants dans un ensemble de documents, sans supervision humaine."
        },
      ],
    },
    {
      number: 9,
      title: "Vision par Ordinateur",
      description: "Analyser des images et vidéos avec Python : détection d'objets, classification, OCR.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "La Vision par Ordinateur en Data Science" },
        { type: "paragraph", content: "La vision par ordinateur permet aux machines d'analyser et de comprendre les images et les vidéos. En data science, elle est utilisée pour la classification d'images, la détection d'objets, l'OCR (reconnaissance de texte), et l'analyse de documents visuels." },
        { type: "subheading", content: "Classification d'Images" },
        { type: "paragraph", content: "Assigner une catégorie a une image : chat vs chien, tumeur benigne vs maligne, produit defectueux vs conforme. Les modèles pre-entraînés (ResNet, EfficientNet, ViT) permettent d'obtenir d'excellents résultats avec peu de données via le transfer learning." },
        { type: "subheading", content: "Détection d'Objets" },
        { type: "paragraph", content: "Localiser et identifier des objets dans une image. YOLO (You Only Look Once) est le standard de facto pour la détection en temps réel. Applications : véhicules autonomes, surveillance, comptage automatique, contrôle qualité industriel." },
        { type: "heading", content: "L'IA Multimodale Simplifie Tout" },
        { type: "paragraph", content: "En 2026, les modèles multimodaux comme GPT-5.4 et Claude 4.6 peuvent analyser des images directement. Plus besoin de pipelines complexes pour de nombreuses tâches : envoyez l'image à l'API et posez votre question en langage naturel." },
        { type: "callout", content: "Le transfer learning est votre meilleur ami en vision par ordinateur. Au lieu d'entraîner un modèle de zéro (nécessitant des millions d'images), utilisez un modèle pre-entraîné et affinez-le sur vos données — quelques centaines d'images suffisent souvent." },
        { type: "video", videoId: "ua-CiDNNj30",
      videoDurationMinutes: 352, label: "Vision par ordinateur avec Python" },
        { type: "diagram", label: "Applications de la Vision par Ordinateur", flow: "horizontal", nodes: [
          { label: "Classification", sub: "Catégorie d'une image", color: "purple" },
          { label: "Détection", sub: "Localiser des objets (YOLO)", color: "blue" },
          { label: "OCR", sub: "Extraire du texte d'images", color: "emerald" },
          { label: "Segmentation", sub: "Decouper une image en zones", color: "amber" },
        ]},
        { type: "summary", items: [
          "La vision par ordinateur analyse images et vidéos automatiquement",
          "Transfer learning : affiner un modèle pre-entraîné avec peu de données",
          "YOLO est le standard pour la détection d'objets en temps réel",
          "Les modèles multimodaux simplifient l'analyse d'images",
          "Applications : santé, industrie, véhicules autonomes, documents"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que le transfer learning ?",
          options: ["Transferer des données entre serveurs", "Reutiliser un modèle pre-entraîné pour une nouvelle tâche", "Copier le code d'un collègue", "Envoyer un modèle sur le cloud"],
          correctIndex: 1,
          explanation: "Le transfer learning consiste à prendre un modèle pre-entraîné sur des millions d'images et à l'affiner sur votre tâche spécifique avec peu de données."
        },
        {
          question: "Quel algorithme est le standard pour la détection d'objets en temps réel ?",
          options: ["K-Means", "Random Forest", "YOLO", "PCA"],
          correctIndex: 2,
          explanation: "YOLO (You Only Look Once) est l'algorithme de référence pour la détection d'objets en temps réel, utilisé dans les véhicules autonomes et la surveillance."
        },
        {
          question: "Comment les modèles multimodaux simplifient-ils la vision par ordinateur ?",
          options: ["Ils sont gratuits", "Ils analysent des images via une simple question en langage naturel", "Ils sont plus rapides que YOLO", "Ils n'ont pas besoin de GPU"],
          correctIndex: 1,
          explanation: "Les modèles multimodaux permettent d'analyser des images en posant simplement une question en langage naturel, sans pipeline complexe."
        },
        {
          question: "Que signifie OCR ?",
          options: ["Online Computer Rendering", "Optical Character Recognition", "Object Classification Runtime", "Optimized Code Repository"],
          correctIndex: 1,
          explanation: "OCR (Optical Character Recognition) est la technologie qui extrait du texte à partir d'images ou de documents scannes."
        },
      ],
    },
    {
      number: 10,
      title: "AutoML et No-Code ML",
      description: "Créer des modèles ML sans coder grâce aux plateformes AutoML.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "AutoML : Le Machine Learning Automatise" },
        { type: "paragraph", content: "L'AutoML automatisé les étapes les plus complexes du machine learning : sélection de features, choix d'algorithme, tuning d'hyperparametres, et même la création d'ensembles de modèles. Ce qui prenait des jours a un expert prend désormais quelques minutes." },
        { type: "subheading", content: "Outils AutoML Open Source" },
        { type: "paragraph", content: "Auto-sklearn et TPOT sont des bibliotheques Python qui automatisent la sélection et l'optimisation de modèles Scikit-learn. H2O AutoML offre une plateforme complète avec une interface web. PyCaret simplifie le ML en quelques lignes de code." },
        { type: "subheading", content: "Plateformes No-Code" },
        { type: "paragraph", content: "Google Vertex AI, Azure ML, et Amazon SageMaker proposent des interfaces visuelles pour créer des modèles sans écrire une seule ligne de code. Importez vos données, choisissez votre ciblé, et la plateforme fait le reste." },
        { type: "heading", content: "Les LLM comme Outils AutoML" },
        { type: "paragraph", content: "En 2026, la façon la plus simple de faire du ML est de demander à Claude ou GPT. Decrivez votre dataset et votre objectif, et l'IA generera le code complet : preprocessing, feature engineering, entraînement, évaluation et visualisation." },
        { type: "tip", content: "L'AutoML est parfait pour le prototypage rapide et pour obtenir une baseline. Mais pour les modèles en production a haute performance, l'expertise humaine reste nécessaire pour le feature engineering et l'optimisation fine." },
        { type: "video", videoId: "vmEHCJofslg",
      videoDurationMinutes: 60, label: "AutoML — créer des modèles sans expertise" },
        { type: "diagram", label: "Du Code Manuel à l'AutoML", flow: "vertical", nodes: [
          { label: "Code manuel", sub: "Expert, flexible, long", color: "pink" },
          { label: "Bibliotheques AutoML", sub: "Auto-sklearn, PyCaret, H2O", color: "purple" },
          { label: "Plateformes no-code", sub: "Vertex AI, SageMaker, Azure ML", color: "blue" },
          { label: "LLM assistants", sub: "Claude, GPT — ML en langage naturel", color: "emerald" },
        ]},
        { type: "summary", items: [
          "AutoML automatisé sélection d'algorithme, tuning et évaluation",
          "Outils open source : Auto-sklearn, PyCaret, H2O AutoML",
          "Plateformes no-code : Vertex AI, SageMaker, Azure ML",
          "Les LLM sont la nouvelle interface pour faire du ML",
          "AutoML pour le prototypage, expertise humaine pour la production"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que l'AutoML automatisé ?",
          options: ["Uniquement la collecte de données", "La sélection d'algorithme, le tuning et l'évaluation", "Uniquement la visualisation", "Uniquement le déploiement"],
          correctIndex: 1,
          explanation: "L'AutoML automatisé les étapes les plus complexes du ML : sélection de features, choix d'algorithme, tuning d'hyperparametres et création d'ensembles."
        },
        {
          question: "Quelle plateforme no-code est proposée par Google ?",
          options: ["SageMaker", "Azure ML", "Vertex AI", "H2O"],
          correctIndex: 2,
          explanation: "Google Vertex AI est la plateforme ML de Google Cloud, offrant des outils AutoML avec une interface visuelle no-code."
        },
        {
          question: "Pourquoi l'AutoML ne remplace-t-il pas complètement l'expertise humaine ?",
          options: ["Il est trop cher", "Le feature engineering et l'optimisation fine restent critiques en production", "Il ne fonctionne qu'avec Python", "Il ne supporte pas le deep learning"],
          correctIndex: 1,
          explanation: "L'AutoML est excellent pour le prototypage, mais les modèles de production haute performance nécessitent une expertise humaine en feature engineering et optimisation."
        },
        {
          question: "Comment les LLM revolutionnent-ils le ML en 2026 ?",
          options: ["Ils remplacent tous les algorithmes", "Ils permettent de decrire un objectif ML en langage naturel et générer le code", "Ils sont gratuits", "Ils fonctionnent sans données"],
          correctIndex: 1,
          explanation: "Les LLM permettent de decrire votre dataset et objectif en langage naturel, et ils generent le code ML complet : preprocessing, entraînement, évaluation."
        },
      ],
    },
    {
      number: 11,
      title: "Feature Engineering avec l'IA",
      description: "Créer et sélectionner les meilleures features pour améliorer vos modèles.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Le Feature Engineering : L'Art Cache du ML" },
        { type: "paragraph", content: "Le feature engineering est le processus de création, transformation et sélection des variables d'entrée pour un modèle ML. C'est souvent ce qui fait la différence entre un modèle mediocre et un modèle excellent. Un bon feature engineering peut améliorer la performance de 20% a 50%." },
        { type: "subheading", content: "Techniques de Création de Features" },
        { type: "paragraph", content: "Encodage des variables categorielles (one-hot, label, target encoding), création de features temporelles (jour de semaine, mois, saison), interactions entre variables, transformations mathématiques (log, racine carree), et features de texte (TF-IDF, embeddings)." },
        { type: "subheading", content: "Sélection de Features" },
        { type: "paragraph", content: "Trop de features = overfitting et lenteur. Les méthodes de sélection : correlation avec la ciblé, importance dans les arbres de décision, élimination recursive (RFE), et regularisation (Lasso, Ridge). L'objectif est de garder les features les plus informatives." },
        { type: "heading", content: "L'IA Comme Assistant de Feature Engineering" },
        { type: "paragraph", content: "En 2026, les LLM excellent dans le feature engineering. Decrivez votre dataset a Claude ou GPT, et il suggerera des features pertinentes basées sur l'expertise du domaine. Il peut aussi générer le code de transformation complet." },
        { type: "prompt-example", prompt: "J'ai un dataset de ventes e-commerce avec : date_achat, montant, catégorie_produit, ville_client, age_client. Quelles features supplémentaires pourrais-je créer pour prédire la probabilité de rachat ?", result: "Features suggérées :\n1. recence_dernier_achat (jours depuis dernier achat)\n2. fréquence_achats_30j (nombre d'achats sur 30 jours)\n3. montant_moyen_par_achat\n4. jour_de_semaine (encodage cyclique)\n5. catégorie_préférée (mode)\n6. diversité_catégories (nombre unique)\n7. tendance_montant (hausse/baisse sur 3 derniers achats)\n8. distance_au_magasin (si données géographiques)\n9. saison_achat (printemps, été, automne, hiver)\n10. anciennete_client (jours depuis premier achat)" },
        { type: "video", videoId: "i_LwzRVP7bg",
      videoDurationMinutes: 234, label: "Feature engineering avec Python et l'IA" },
        { type: "key-point", content: "Le feature engineering est l'étape ou l'expertise métier fait la plus grande différence. L'IA peut suggérer des features génériques, mais la connaissance du domaine permet de créer des features vraiment discriminantes." },
        { type: "diagram", label: "Le Pipeline de Feature Engineering", flow: "horizontal", nodes: [
          { label: "Création", sub: "Nouvelles features à partir des brutes", color: "blue" },
          { label: "Transformation", sub: "Encodage, normalisation, log", color: "purple" },
          { label: "Sélection", sub: "Garder les plus informatives", color: "emerald" },
          { label: "Validation", sub: "Impact sur la performance du modèle", color: "amber" },
        ]},
        { type: "summary", items: [
          "Le feature engineering peut améliorer la performance de 20% a 50%",
          "Techniques : encodage, features temporelles, interactions, embeddings",
          "La sélection de features évite l'overfitting et accélère l'entraînement",
          "Les LLM suggerent des features pertinentes basées sur l'expertise du domaine",
          "L'expertise métier reste essentielle pour les features discriminantes"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que le feature engineering ?",
          options: ["L'entraînement d'un modèle", "La création et sélection de variables d'entrée pour un modèle", "Le déploiement d'une API", "La visualisation de données"],
          correctIndex: 1,
          explanation: "Le feature engineering est le processus de création, transformation et sélection des variables (features) utilisées par un modèle ML."
        },
        {
          question: "De combien le feature engineering peut-il améliorer la performance ?",
          options: ["1-2%", "5-10%", "20-50%", "100%"],
          correctIndex: 2,
          explanation: "Un bon feature engineering peut améliorer la performance d'un modèle de 20% a 50%, c'est souvent l'étape la plus impactante."
        },
        {
          question: "Que fait la méthode one-hot encoding ?",
          options: ["Elle normalisé les données", "Elle transforme une variable categorielle en colonnes binaires", "Elle supprime les outliers", "Elle calcule la moyenne"],
          correctIndex: 1,
          explanation: "Le one-hot encoding transformé chaque valeur d'une variable categorielle en une colonne binaire (0 ou 1), permettant aux algorithmes ML de traiter des catégories."
        },
        {
          question: "Pourquoi la sélection de features est-elle importante ?",
          options: ["Pour avoir plus de colonnes", "Pour éviter l'overfitting et accélérer l'entraînement", "Pour rendre le code plus long", "Pour augmenter la taille du dataset"],
          correctIndex: 1,
          explanation: "Trop de features entraînent de l'overfitting et ralentissent l'entraînement. La sélection garde uniquement les features les plus informatives."
        },
      ],
    },
    {
      number: 12,
      title: "Déploiement de Modèles",
      description: "Mettre un modèle ML en production : APIs, conteneurs, et cloud.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "Du Notebook a la Production" },
        { type: "paragraph", content: "Un modèle ML dans un Jupyter Notebook ne sert à rien s'il ne peut pas être utilise en production. Le déploiement transformé un prototype en un service fiable, scalable et accessible par d'autres applications ou utilisateurs." },
        { type: "subheading", content: "API REST avec FastAPI" },
        { type: "paragraph", content: "FastAPI est le framework Python de référence pour déployer des modèles ML en tant qu'API REST. Performant, type-safe, et avec documentation automatique, il permet de créer un endpoint de prédiction en quelques lignes de code." },
        { type: "subheading", content: "Conteneurisation avec Docker" },
        { type: "paragraph", content: "Docker empaquette votre modèle, ses dépendances et son environnement dans un conteneur portable. Un conteneur Docker fonctionne de manière identique sur votre machine, en staging et en production — plus de \"ca marche sur mon PC\"." },
        { type: "subheading", content: "Déploiement Cloud" },
        { type: "paragraph", content: "AWS SageMaker, Google Vertex AI et Azure ML offrent des services manages pour déployer des modèles. Pour les projets plus simples, des plateformes comme Hugging Face Spaces, Streamlit Cloud et Railway permettent un déploiement en quelques clics." },
        { type: "callout", content: "En 2026, le déploiement de modèles est beaucoup plus simple qu'avant. Des outils comme BentoML et MLflow gèrent l'empaquetage, le versioning et le déploiement en quelques commandes." },
        { type: "video", videoId: "OGxgnH8y2NM",
      videoDurationMinutes: 6, label: "Déployer un modèle ML en production" },
        { type: "diagram", label: "Du Notebook a la Production", flow: "horizontal", nodes: [
          { label: "Jupyter Notebook", sub: "Prototype et expérimentation", color: "blue" },
          { label: "API FastAPI", sub: "Endpoint de prédiction", color: "purple" },
          { label: "Docker", sub: "Conteneur portable", color: "emerald" },
          { label: "Cloud / Plateforme", sub: "Déploiement scalable", color: "amber" },
        ]},
        { type: "tip", content: "Commencez toujours par le déploiement le plus simple possible. Un modèle sur Hugging Face Spaces ou Streamlit Cloud peut être déployé en 5 minutes. Optimisez ensuite si le trafic le justifie." },
        { type: "summary", items: [
          "Un modèle dans un notebook est inutile — il faut le déployer",
          "FastAPI est le standard pour les APIs ML en Python",
          "Docker garantit la portabilite entre environnements",
          "Plateformes simples : Hugging Face Spaces, Streamlit Cloud",
          "Cloud : SageMaker, Vertex AI, Azure ML pour le scale"
        ]},
      ],
      quiz: [
        {
          question: "Pourquoi déployer un modèle ML ?",
          options: ["Pour le rendre plus précis", "Pour qu'il soit utilisable en production par d'autres applications", "Pour économiser de la mémoire", "Pour le rendre open source"],
          correctIndex: 1,
          explanation: "Le déploiement transformé un prototype en un service accessible et fiable, utilisable par d'autres applications ou utilisateurs en production."
        },
        {
          question: "Quel framework Python est recommandé pour déployer des modèles ML en API ?",
          options: ["Django", "Flask", "FastAPI", "Tornado"],
          correctIndex: 2,
          explanation: "FastAPI est le framework de référence : performant (asynchrone), type-safe, avec documentation automatique et support natif de Pydantic."
        },
        {
          question: "Quel est l'avantage principal de Docker ?",
          options: ["Il accélère le modèle", "Il garantit un fonctionnement identique partout", "Il réduit la taille du modèle", "Il améliore la précision"],
          correctIndex: 1,
          explanation: "Docker empaquette le modèle et ses dépendances dans un conteneur qui fonctionne de manière identique partout — plus de problèmes d'environnement."
        },
        {
          question: "Quelle plateforme permet un déploiement en quelques clics ?",
          options: ["AWS Lambda", "Hugging Face Spaces", "Kubernetes", "Terraform"],
          correctIndex: 1,
          explanation: "Hugging Face Spaces permet de déployer des modèles ML en quelques clics, sans configuration complexe de serveurs."
        },
      ],
    },
    {
      number: 13,
      title: "MLOps et Monitoring",
      description: "Gérer le cycle de vie des modèles en production : monitoring, retraining, CI/CD.",
      estimatedMinutes: 8,
      sections: [
        { type: "heading", content: "MLOps : Le DevOps du Machine Learning" },
        { type: "paragraph", content: "Le MLOps est l'ensemble des pratiques qui gèrent le cycle de vie complet des modèles ML en production : versioning, entraînement automatisé, déploiement, monitoring, et retraining. C'est ce qui transforme un modèle one-shot en un système fiable et evolutif." },
        { type: "subheading", content: "Versioning des Données et Modèles" },
        { type: "paragraph", content: "Git pour le code, DVC (Data Version Control) pour les données, MLflow pour les modèles et les expériences. Le versioning permet de reproduire n'importé quelle expérience et de revenir a une version antérieure en cas de régression." },
        { type: "subheading", content: "Monitoring en Production" },
        { type: "paragraph", content: "Un modèle en production peut se dégrader : data drift (les données changent), concept drift (la relation données-ciblé changé), ou bugs dans le pipeline. Le monitoring détecte ces problèmes avant qu'ils n'impactent les utilisateurs." },
        { type: "subheading", content: "CI/CD pour le ML" },
        { type: "paragraph", content: "Les pipelines CI/CD automatisent les tests, la validation et le déploiement des modèles. À chaque push de code ou de données, le pipeline re-entraîné le modèle, validé ses performances, et le déploie automatiquement si les critères sont remplis." },
        { type: "key-point", content: "Le data drift est le problème numero 1 des modèles en production. Un modèle entraîné sur des données de 2024 peut devenir obsolète en quelques mois si les comportements des utilisateurs changent." },
        { type: "video", videoId: "ua-CiDNNj30",
      videoDurationMinutes: 352, label: "MLOps — gérer des modèles en production" },
        { type: "diagram", label: "Le Cycle MLOps", flow: "cycle", nodes: [
          { label: "Entraînement", sub: "Données + algorithme → modèle", color: "blue" },
          { label: "Déploiement", sub: "API + conteneur → production", color: "purple" },
          { label: "Monitoring", sub: "Drift, performance, alertes", color: "emerald" },
        ]},
        { type: "diagram", label: "Les Outils MLOps", flow: "horizontal", nodes: [
          { label: "MLflow", sub: "Tracking experiments + modèles", color: "blue" },
          { label: "DVC", sub: "Versioning des données", color: "purple" },
          { label: "Evidently AI", sub: "Monitoring et drift détection", color: "pink" },
          { label: "GitHub Actions", sub: "CI/CD pour ML pipelines", color: "amber" },
        ]},
        { type: "summary", items: [
          "Le MLOps gère le cycle de vie complet des modèles en production",
          "Versioning : Git (code), DVC (données), MLflow (modèles)",
          "Le data drift est le problème numero 1 en production",
          "Le monitoring détecte les degradations avant qu'elles n'impactent les utilisateurs",
          "CI/CD automatisé tests, validation et déploiement des modèles"
        ]},
      ],
      quiz: [
        {
          question: "Qu'est-ce que le MLOps ?",
          options: ["Un langage de programmation", "Les pratiques de gestion du cycle de vie des modèles ML", "Un type de réseau de neurones", "Un service cloud"],
          correctIndex: 1,
          explanation: "Le MLOps est l'ensemble des pratiques (versioning, déploiement, monitoring, retraining) qui gèrent les modèles ML en production de manière fiable."
        },
        {
          question: "Qu'est-ce que le data drift ?",
          options: ["Un bug de code", "Un changement dans la distribution des données en production", "Une perte de données", "Un problème de mémoire"],
          correctIndex: 1,
          explanation: "Le data drift se produit quand les données en production différent de celles utilisées pour l'entraînement, degradant les performances du modèle."
        },
        {
          question: "Quel outil gère le versioning des données ?",
          options: ["Git", "DVC", "Docker", "Kubernetes"],
          correctIndex: 1,
          explanation: "DVC (Data Version Control) est conçu spécifiquement pour versionner les données et les modèles ML, complementant Git pour le code."
        },
        {
          question: "Pourquoi le CI/CD est-il important en MLOps ?",
          options: ["Pour écrire plus de code", "Pour automatiser tests, validation et déploiement des modèles", "Pour réduire les coûts cloud", "Pour remplacer les data scientists"],
          correctIndex: 1,
          explanation: "Le CI/CD automatisé le pipeline ML complet : à chaque modification, le modèle est re-entraîné, validé et déployé automatiquement si les critères sont remplis."
        },
      ],
    },
    {
      number: 14,
      title: "Éthique des Données",
      description: "Biais, vie privee, RGPD et IA responsable dans la data science.",
      estimatedMinutes: 7,
      sections: [
        { type: "heading", content: "L'Éthique au Coeur de la Data Science" },
        { type: "paragraph", content: "La data science manipule des données sensibles : données personnelles, financieres, médicales. Chaque modèle ML prend des décisions qui impactent des vies réelles. L'ethique n'est pas optionnelle — c'est une responsabilité fondamentale du data scientist." },
        { type: "subheading", content: "Les Biais dans les Données" },
        { type: "paragraph", content: "Les modèles ML heritent des biais présents dans les données d'entraînement. Un modèle de recrutement entraîné sur des données historiquement biaisees perpetuera ces discriminations. L'audit des données et des prédictions est essentiel pour détecter et corriger ces biais." },
        { type: "subheading", content: "RGPD et Protection des Données" },
        { type: "paragraph", content: "Le RGPD (Reglement Général sur la Protection des Données) impose des règles strictes : consentement, droit à l'oubli, minimisation des données, portabilite, et transparence. L'AI Act européen ajouté des obligations spécifiques pour les systèmes IA a haut risque." },
        { type: "subheading", content: "IA Responsable" },
        { type: "paragraph", content: "L'IA responsable repose sur 4 piliers : equite (pas de discrimination), transparence (décisions explicables), sécurité (protection des données), et accountability (responsabilité des consequences). Ces principes doivent guider chaque décision en data science." },
        { type: "callout", content: "En 2026, l'AI Act européen est pleinement en vigueur. Les entreprises qui déploient des systèmes IA a haut risque (recrutement, santé, finance) doivent réaliser des évaluations d'impact et maintenir une documentation complète." },
        { type: "video", videoId: "vmEHCJofslg",
      videoDurationMinutes: 60, label: "Éthique et IA responsable" },
        { type: "diagram", label: "Les 4 Piliers de l'IA Responsable", flow: "horizontal", nodes: [
          { label: "Equite", sub: "Pas de discrimination", color: "purple" },
          { label: "Transparence", sub: "Decisions explicables", color: "blue" },
          { label: "Sécurité", sub: "Protection des données", color: "emerald" },
          { label: "Accountability", sub: "Responsabilité des consequences", color: "amber" },
        ]},
        { type: "summary", items: [
          "Les modèles ML heritent des biais présents dans les données",
          "Le RGPD et l'AI Act imposent des règles strictes",
          "IA responsable : equite, transparence, sécurité, accountability",
          "L'audit des données et des prédictions est essentiel",
          "L'ethique est une responsabilité fondamentale du data scientist"
        ]},
      ],
      quiz: [
        {
          question: "D'où viennent les biais dans les modèles ML ?",
          options: ["Du code Python", "Des données d'entraînement", "Du matériel informatique", "Des utilisateurs finaux"],
          correctIndex: 1,
          explanation: "Les modèles ML heritent des biais présents dans les données d'entraînement. Si les données refletent des discriminations historiques, le modèle les reproduira."
        },
        {
          question: "Quel règlement européen protégé les données personnelles ?",
          options: ["AI Act", "RGPD", "NIS2", "DORA"],
          correctIndex: 1,
          explanation: "Le RGPD (Reglement Général sur la Protection des Données) impose des règles strictes sur le traitement des données personnelles en Europe."
        },
        {
          question: "Quels sont les 4 piliers de l'IA responsable ?",
          options: ["Vitesse, précision, coût, simplicité", "Equite, transparence, sécurité, accountability", "Python, R, SQL, Spark", "Entraînement, test, validation, déploiement"],
          correctIndex: 1,
          explanation: "L'IA responsable repose sur l'equite (pas de discrimination), la transparence (décisions explicables), la sécurité (protection des données) et l'accountability."
        },
        {
          question: "Que impose l'AI Act européen pour les systèmes IA a haut risque ?",
          options: ["Ils doivent être gratuits", "Des évaluations d'impact et une documentation complète", "Ils doivent être open source", "Ils sont interdits"],
          correctIndex: 1,
          explanation: "L'AI Act impose aux systèmes IA a haut risque (recrutement, santé, finance) des évaluations d'impact et une documentation complète."
        },
      ],
    },
    {
      number: 15,
      title: "Projet Complet de Data Science",
      description: "Réaliser un projet data science de bout en bout avec l'IA comme assistant.",
      estimatedMinutes: 10,
      sections: [
        { type: "heading", content: "Projet : Prédiction du Churn Client" },
        { type: "paragraph", content: "Ce chapitre vous guide dans un projet complet de data science : prédire quels clients vont se desabonner (churn). Nous suivrons chaque étape du pipeline, de la compréhension du problème au déploiement, en utilisant l'IA comme assistant à chaque étape." },
        { type: "subheading", content: "Étape 1 : Comprendre le Problème" },
        { type: "paragraph", content: "Le churn coûte cher : acquerir un nouveau client coûte 5 à 25 fois plus que retenir un existant. Predire le churn permet d'agir proactivement : offres de retention, contact personnalisé, amélioration du produit." },
        { type: "subheading", content: "Étape 2 : Exploration des Données" },
        { type: "paragraph", content: "Chargement du dataset avec Pandas, statistiques descriptives, distribution des variables, correlation avec la ciblé (churn). Visualisation avec Seaborn pour identifier les patterns : quels segments churnent le plus ?" },
        { type: "subheading", content: "Étape 3 : Feature Engineering" },
        { type: "paragraph", content: "Créer les features pertinentes : ancienneté, fréquence d'utilisation récente, tendance de consommation, nombre de tickets support, score NPS. Encoder les variables categorielles, normaliser les numériques." },
        { type: "subheading", content: "Étape 4 : Modelisation" },
        { type: "paragraph", content: "Comparer plusieurs modèles : régression logistique (baseline), Random Forest, XGBoost, et LightGBM. Utiliser la validation croisee pour une évaluation robuste. Optimiser les hyperparametres avec GridSearchCV ou Optuna." },
        { type: "subheading", content: "Étape 5 : Évaluation et Interprétation" },
        { type: "paragraph", content: "Matrice de confusion, précision, recall, F1-score, courbe ROC-AUC. Utiliser SHAP pour expliquer les prédictions : quelles features influencent le plus le churn ? Présenter les résultats avec des visualisations claires." },
        { type: "subheading", content: "Étape 6 : Déploiement" },
        { type: "paragraph", content: "Déployer le modèle final en API avec FastAPI, conteneuriser avec Docker, et mettre en place un monitoring pour détecter le data drift. Créer un dashboard Streamlit pour les équipes métier." },
        { type: "prompt-example", prompt: "Tu es un data scientist expert. Je te donne un dataset de clients telecom avec colonnes : tenure, monthly_charges, total_charges, contract_type, internet_service, tech_support, churn. Guide-moi pour prédire le churn avec XGBoost, en incluant feature engineering, validation croisee, et interprétation SHAP.", result: "import xgboost as xgb\nfrom sklearn.model_sélection import cross_val_score\nimport shap\n\n# Feature engineering\ndf['charge_par_mois_tenure'] = df['total_charges'] / (df['tenure'] + 1)\ndf['is_month_to_month'] = (df['contract_type'] == 'Month-to-month').astype(int)\n\n# Modèle XGBoost\nmodel = xgb.XGBClassifier(n_estimators=200, learning_rate=0.1)\nscores = cross_val_score(model, X, y, cv=5, scoring='f1')\nmodel.fit(X_train, y_train)\n\n# Interprétation SHAP\nexplainer = shap.TreeExplainer(model)\nshap_values = explainer.shap_values(X_test)\nshap.summary_plot(shap_values, X_test)" },
        { type: "video", videoId: "i_LwzRVP7bg",
      videoDurationMinutes: 234, label: "Projet complet de data science de A à Z" },
        { type: "key-point", content: "Un projet data science réussi ne s'arrête pas au modèle. La valeur est dans l'impact business : combien de clients retenus, quel ROI ? Presentez toujours vos résultats en termes business, pas en métriques techniques." },
        { type: "diagram", label: "Le Projet Data Science de Bout en Bout", flow: "vertical", nodes: [
          { label: "Comprendre", sub: "Problème business + objectifs", color: "blue" },
          { label: "Explorer", sub: "EDA, visualisation, patterns", color: "purple" },
          { label: "Créer", sub: "Feature engineering + preprocessing", color: "emerald" },
          { label: "Modeliser", sub: "Entraînement + validation croisee", color: "amber" },
          { label: "Déployer", sub: "API + monitoring + dashboard", color: "pink" },
        ]},
        { type: "summary", items: [
          "Un projet complet va de la compréhension du problème au déploiement",
          "Le churn prédiction est un cas d'usage classique et impactant",
          "Feature engineering et sélection de modèle sont les étapes clés",
          "SHAP rend les prédictions interpretables et explicables",
          "Presentez toujours les résultats en termes d'impact business"
        ]},
      ],
      quiz: [
        {
          question: "Pourquoi prédire le churn est-il important ?",
          options: ["C'est un exercice académique", "Acquerir un nouveau client coûte 5 a 25x plus que retenir un existant", "C'est obligatoire par la loi", "C'est plus facile que les autres projets ML"],
          correctIndex: 1,
          explanation: "Le churn coûte cher : retenir un client existant est 5 à 25 fois moins cher que d'en acquerir un nouveau. Predire le churn permet d'agir proactivement."
        },
        {
          question: "A quoi sert SHAP dans un projet ML ?",
          options: ["A entraîner le modèle plus vite", "A expliquer quelles features influencent les prédictions", "A nettoyer les données", "A déployer le modèle"],
          correctIndex: 1,
          explanation: "SHAP (SHapley Additive exPlanations) expliqué la contribution de chaque feature à chaque prédiction, rendant le modèle interpretable."
        },
        {
          question: "Quelle est l'étape souvent negligee dans les projets data science ?",
          options: ["L'entraînement du modèle", "Le déploiement et le monitoring en production", "La collecte de données", "L'installation de Python"],
          correctIndex: 1,
          explanation: "Beaucoup de projets s'arretent au notebook. Le déploiement en production avec monitoring est essentiel pour créer de la valeur réelle."
        },
        {
          question: "Comment présenter les résultats d'un projet data science ?",
          options: ["Uniquement avec des métriques techniques", "En termes d'impact business (clients retenus, ROI)", "En montrant le code Python", "En envoyant le notebook Jupyter"],
          correctIndex: 1,
          explanation: "Les stakeholders business s'intéressent à l'impact : combien de clients retenus, quel ROI, quelle réduction de coûts — pas aux métriques techniques."
        },
      ],
    },
  ],
};

export default content;
