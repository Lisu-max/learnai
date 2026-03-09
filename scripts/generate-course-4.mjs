import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public', 'pdfs');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const doc = new PDFDocument({ size: 'A4', margin: 72, bufferPages: true });
const stream = fs.createWriteStream(path.join(outputDir, 'ia-pour-votre-business.pdf'));
doc.pipe(stream);

const purple = '#7C3AED'; const blue = '#2563EB'; const dark = '#1a1a2e';

function addPageNumber() {
  const pages = doc.bufferedPageRange();
  for (let i = 1; i < pages.count; i++) {
    doc.switchToPage(i);
    doc.fontSize(9).fillColor('#999').text(`${i + 1}`, 0, doc.page.height - 50, { align: 'center', width: doc.page.width });
  }
}
function chapterTitle(num, title) {
  doc.addPage();
  doc.rect(0, 0, doc.page.width, 160).fill('#1e1b4b');
  doc.rect(0, 160, doc.page.width, 4).fill(purple);
  doc.fontSize(16).fillColor('#a78bfa').text(`CHAPITRE ${num}`, 72, 60, { width: doc.page.width - 144 });
  doc.fontSize(24).fillColor('white').text(title, 72, 90, { width: doc.page.width - 144 });
}
function sectionTitle(t) { doc.moveDown(1.5); doc.fontSize(16).fillColor(purple).text(t); doc.moveDown(0.5); }
function subSection(t) { doc.moveDown(1); doc.fontSize(13).fillColor(blue).text(t); doc.moveDown(0.4); }
function para(t) { doc.fontSize(11).fillColor(dark).text(t, { align: 'justify', lineGap: 4 }); doc.moveDown(0.5); }
function checkNewPage(n = 200) { if (doc.y > doc.page.height - n) doc.addPage(); }
function summaryBox(points) {
  checkNewPage(250);
  doc.moveDown(1);
  doc.rect(82, doc.y, doc.page.width - 164, 2).fill(purple);
  doc.moveDown(0.5);
  doc.fontSize(13).fillColor(purple).text('Points cles', 92);
  doc.moveDown(0.5);
  points.forEach(p => { doc.fontSize(10).fillColor(dark).text(`✓  ${p}`, 92, doc.y, { width: doc.page.width - 184 }); doc.moveDown(0.3); });
  doc.moveDown(1);
}
function caseStudy(title, content) {
  checkNewPage(180);
  doc.moveDown(0.5);
  doc.rect(82, doc.y, doc.page.width - 164, 2).fill('#0d9488');
  doc.moveDown(0.3);
  doc.fontSize(11).fillColor('#0d9488').text(`Etude de cas : ${title}`, 82);
  doc.moveDown(0.3);
  doc.fontSize(10).fillColor(dark).text(content, 92, doc.y, { width: doc.page.width - 184 });
  doc.moveDown(0.5);
}

// COVER
doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f0a2e');
doc.rect(0, 0, doc.page.width, 8).fill(purple);
doc.rect(0, 8, doc.page.width, 4).fill(blue);
doc.fontSize(14).fillColor('#a78bfa').text('LEARNAI - FORMATION COMPLETE', 72, 180, { align: 'center', width: doc.page.width - 144 });
doc.fontSize(34).fillColor('white').text("L'IA pour Votre Business", 72, 240, { align: 'center', width: doc.page.width - 144 });
doc.fontSize(22).fillColor('#c4b5fd').text('Strategies et Mise en Oeuvre', 72, 300, { align: 'center', width: doc.page.width - 144 });
doc.fontSize(12).fillColor('#94a3b8').text("Transformez votre entreprise avec l'Intelligence Artificielle", 72, 400, { align: 'center', width: doc.page.width - 144 });
doc.text("ROI, automatisation, marketing, ventes, operations", { align: 'center', width: doc.page.width - 144 });
doc.fontSize(11).fillColor('#64748b').text('Edition Mars 2026', 72, 580, { align: 'center', width: doc.page.width - 144 });

// TOC
doc.addPage();
doc.fontSize(24).fillColor(purple).text('Table des Matieres', { align: 'center' });
doc.moveDown(1.5);
const chapters = [
  "L'IA : Une Revolution pour les Entreprises", "Etat des Lieux de l'IA en 2026",
  "Identifier les Opportunites IA", "ROI de l'IA : Mesurer l'Impact",
  "Automatiser le Service Client", "L'IA pour le Marketing Digital",
  "Personnalisation et Recommandation", "L'IA pour la Vente et le CRM",
  "Optimisation des Operations", "L'IA dans les Ressources Humaines",
  "L'IA pour la Finance et la Comptabilite", "L'IA dans la Supply Chain",
  "Creation de Contenu avec l'IA", "L'IA pour l'E-commerce",
  "Analyse de Donnees et Business Intelligence", "Chatbots et Assistants Virtuels",
  "L'IA pour les PME et Startups", "L'IA pour les Freelances et Solopreneurs",
  "Aspects Juridiques et RGPD", "Securite et IA",
  "Construire une Equipe IA", "Choisir les Bons Outils et Partenaires",
  "Etudes de Cas : Entreprises qui Reussissent", "Plan d'Action : Integrer l'IA en 90 Jours",
  "Tendances Business IA 2026-2030"
];
chapters.forEach((ch, i) => { doc.fontSize(11).fillColor(dark).text(`${i+1}. ${ch}`, { indent: 20 }); doc.moveDown(0.4); });

// CHAPTERS
chapterTitle(1, "L'IA : Une Revolution pour les Entreprises");
doc.moveDown(2);
sectionTitle("1.1 Le Changement de Paradigme");
para("L'Intelligence Artificielle n'est plus une technologie futuriste — c'est un avantage competitif immediat. En 2026, les entreprises qui n'integrent pas l'IA dans leurs operations risquent de prendre un retard irreversible face a leurs concurrents. L'IA ne remplace pas les employes, elle amplifie leur productivite, automatise les taches repetitives, et permet de prendre des decisions basees sur les donnees plutot que sur l'intuition seule.");
para("Selon les dernieres etudes de McKinsey, l'IA generative a elle seule pourrait generer entre 2 600 et 4 400 milliards de dollars de valeur annuelle pour l'economie mondiale. Les entreprises qui ont adopte l'IA rapportent en moyenne une augmentation de 25% de leur productivite et une reduction de 30% de leurs couts operationnels dans les domaines automatises.");
sectionTitle("1.2 Qui Peut Beneficier de l'IA ?");
para("Toutes les entreprises, quelle que soit leur taille, peuvent beneficier de l'IA. Les grandes entreprises utilisent l'IA pour l'optimisation a grande echelle. Les PME l'utilisent pour rivaliser avec les grands acteurs en automatisant les taches chronophages. Les startups l'utilisent pour innover rapidement et disrupter les marches etablis. Les freelances et solopreneurs l'utilisent pour multiplier leur productivite et offrir des services premium.");
summaryBox(["L'IA est un avantage competitif immediat, pas futuriste", "Productivite +25%, couts -30% dans les domaines automatises", "Toutes les tailles d'entreprise peuvent en beneficier", "Le risque est de ne PAS adopter l'IA"]);

chapterTitle(2, "Etat des Lieux de l'IA en 2026");
doc.moveDown(2);
sectionTitle("2.1 Les Chiffres Cles");
para("En mars 2026, le marche mondial de l'IA est estime a plus de 200 milliards de dollars, avec une croissance annuelle de 35%. Plus de 80% des entreprises du Fortune 500 utilisent l'IA generative dans au moins un processus. Le nombre d'outils IA disponibles depasse les 10 000, contre 2 000 debut 2024. L'adoption par les PME a double en un an.");
para("Les couts d'utilisation de l'IA ont drastiquement baisse. Les API d'OpenAI, Anthropic et Google coutent 10x moins cher qu'en 2024. Les modeles open source (LLaMA, Mistral) permettent aux entreprises de deployer l'IA sans frais de licence. Le cloud computing offre des GPU a la demande a des prix accessibles.");
sectionTitle("2.2 Les Secteurs les Plus Impactes");
para("Le marketing et la vente sont les premiers secteurs impactes, avec une adoption massive des outils de generation de contenu, de personnalisation et d'analyse. Le service client est transforme par les chatbots IA. Le developpement logiciel voit une acceleration de 40-60% grace aux assistants de code. La finance, la sante, la logistique et l'education suivent de pres.");
summaryBox(["Marche de l'IA : 200+ milliards $ en 2026", "Couts divises par 10 en 2 ans", "80% du Fortune 500 utilise l'IA generative", "Marketing, vente et service client sont les plus impactes"]);

chapterTitle(3, "Identifier les Opportunites IA");
doc.moveDown(2);
sectionTitle("3.1 L'Audit IA de Votre Entreprise");
para("La premiere etape est de cartographier vos processus actuels et d'identifier ceux qui sont repetitifs, chronophages, sujets aux erreurs, ou gourmands en donnees. Posez-vous ces questions pour chaque processus : Est-ce que cette tache suit des regles previsibles ? Implique-t-elle le traitement de texte, d'images ou de donnees ? Un humain expert pourrait-il l'enseigner a un autre humain rapidement ?");
para("Classez les opportunites selon deux axes : impact business (gain de temps, revenus, satisfaction client) et facilite d'implementation (disponibilite des donnees, complexite technique, resistance au changement). Commencez par les « quick wins » — fort impact, faible complexite — pour demontrer la valeur de l'IA et obtenir l'adhesion de l'equipe.");
sectionTitle("3.2 Les Quick Wins Universels");
para("Certaines applications de l'IA fonctionnent pour presque toutes les entreprises : 1) Redaction automatisee d'emails et de documents. 2) Resume et synthese de reunions. 3) Traduction de contenu. 4) Analyse de retours clients. 5) Generation de contenu marketing. 6) Recherche et veille concurrentielle. 7) Automatisation du support client niveau 1.");
summaryBox(["Cartographiez vos processus et identifiez les taches automatisables", "Classez par impact business et facilite d'implementation", "Commencez par les quick wins a fort impact et faible complexite", "7 quick wins universels applicables a toute entreprise"]);

chapterTitle(4, "ROI de l'IA : Mesurer l'Impact");
doc.moveDown(2);
sectionTitle("4.1 Calculer le ROI");
para("Le ROI de l'IA se mesure sur plusieurs dimensions : temps economise (heures de travail automatisees x cout horaire), revenus supplementaires (personnalisation, upsell, nouveaux services), couts evites (erreurs, recrutement, formation), et amelioration de la qualite (satisfaction client, retention). Un outil IA a 200€/mois qui fait gagner 20h/mois a un collaborateur payé 40€/h genere un ROI de 3 900% (20x40 - 200 = 600€ net/mois).");
sectionTitle("4.2 KPIs a Suivre");
para("Definissez des KPIs clairs avant de deployer l'IA : taux de resolution automatique (support), temps de production de contenu, taux de conversion (personnalisation), delai de traitement (operations), taux d'erreur (qualite). Mesurez avant et apres implementation pour quantifier l'impact reel.");
summaryBox(["ROI = temps economise + revenus supplementaires + couts evites", "Un outil a 200€/mois peut generer des milliers d'euros de valeur", "Definissez des KPIs mesurables avant implementation", "Mesurez avant/apres pour quantifier l'impact"]);

chapterTitle(5, "Automatiser le Service Client");
doc.moveDown(2);
sectionTitle("5.1 Le Service Client IA en 2026");
para("Les chatbots IA de 2026 n'ont plus rien a voir avec les chatbots frustrants du passe. Propulses par des LLM comme GPT-4 et Claude, ils comprennent le langage naturel, gerent des conversations complexes, accedent aux bases de donnees clients, et resolvent la majorite des demandes de maniere autonome. Le taux de resolution automatique atteint regulierement 60-80% pour les entreprises bien configurees.");
para("L'implementation suit generalement ce schema : 1) Analyse des questions les plus frequentes. 2) Creation d'une base de connaissances. 3) Configuration du chatbot avec un system prompt adapte. 4) Integration avec le CRM et les outils existants. 5) Phase de test avec supervision humaine. 6) Deploiement progressif avec escalade automatique vers un humain pour les cas complexes.");
caseStudy("E-commerce mode (50 employes)", "Une boutique en ligne de mode a deploye un chatbot Claude pour le support client. Resultat apres 3 mois : 72% des tickets resolus automatiquement, temps de reponse moyen passe de 4h a 30 secondes, satisfaction client +18%, et une economie de 3 postes de support niveau 1 (reinvestis dans le conseil personnalise haut de gamme).");
summaryBox(["Les chatbots IA resolvent 60-80% des demandes automatiquement", "Temps de reponse : de plusieurs heures a quelques secondes", "Implementation progressive avec escalade vers un humain", "ROI typique : economies de 2-5 postes de support niveau 1"]);

chapterTitle(6, "L'IA pour le Marketing Digital");
doc.moveDown(2);
sectionTitle("6.1 Creation de Contenu a Grande Echelle");
para("L'IA transforme la creation de contenu marketing. Un marketeur assiste par l'IA peut produire 5 a 10 fois plus de contenu qu'avant : articles de blog, posts reseaux sociaux, newsletters, descriptions produits, scripts video, et publicites. La cle est d'utiliser l'IA comme accelerateur, pas comme remplacement total — la strategie, la voix de marque et la validation restent humaines.");
sectionTitle("6.2 SEO Assiste par l'IA");
para("L'IA revolutionne le SEO : recherche de mots-cles semantique, analyse de la concurrence, generation de contenu optimise, creation de meta-descriptions et de titres, maillage interne automatise, et analyse des intentions de recherche. Des outils comme Surfer SEO, Jasper et Frase combinent l'IA avec les donnees SEO pour guider la creation de contenu.");
sectionTitle("6.3 Email Marketing Personnalise");
para("L'IA permet une personnalisation a grande echelle des campagnes email : objets optimises par A/B testing IA, contenu dynamique adapte a chaque segment, timing d'envoi personnalise, et analyse predictive de l'engagement. Les taux d'ouverture et de clic augmentent typiquement de 20-40% avec la personnalisation IA.");
summaryBox(["Production de contenu x5 a x10 avec l'IA", "SEO assiste : mots-cles, contenu optimise, analyse concurrentielle", "Email : personnalisation a grande echelle, +20-40% engagement", "La strategie et la voix de marque restent humaines"]);

chapterTitle(7, "Personnalisation et Recommandation");
doc.moveDown(2);
sectionTitle("7.1 La Personnalisation IA");
para("La personnalisation IA adapte l'experience de chaque client en temps reel : recommandations de produits, contenu personnalise, offres ciblees, et parcours d'achat adaptatifs. Amazon genere 35% de ses ventes grace a ses recommandations IA. Netflix estime que son systeme de recommandation vaut 1 milliard de dollars par an en retention client.");
para("Pour les PME, la personnalisation IA est desormais accessible via des outils no-code. Les plateformes e-commerce (Shopify, WooCommerce) integrent des modules de recommandation IA. Les outils d'email marketing offrent des fonctionnalites de segmentation et de personnalisation automatique. Les chatbots peuvent adapter leurs reponses au profil et a l'historique de chaque client.");
summaryBox(["Amazon : 35% des ventes via les recommandations IA", "Personnalisation accessible aux PME via des outils no-code", "Augmente la conversion, le panier moyen et la fidelite", "Necessite des donnees clients de qualite"]);

chapterTitle(8, "L'IA pour la Vente et le CRM");
doc.moveDown(2);
sectionTitle("8.1 Lead Scoring IA");
para("Le lead scoring IA analyse automatiquement les prospects pour predire leur probabilite de conversion. En analysant des dizaines de signaux (comportement sur le site, engagement email, profil demographique, historique d'interactions), l'IA attribue un score a chaque lead, permettant aux commerciaux de se concentrer sur les prospects les plus prometteurs.");
sectionTitle("8.2 Sales Intelligence");
para("L'IA enrichit automatiquement les fiches prospect avec des informations publiques (levees de fonds, recrutements, actualites), identifie les moments optimaux pour contacter un prospect, et genere des messages de prospection personnalises. Des outils comme Apollo, ZoomInfo et Lemlist integrent l'IA pour optimiser chaque etape du cycle de vente.");
summaryBox(["Le lead scoring IA priorise les prospects a fort potentiel", "L'enrichissement automatique des fiches prospect fait gagner du temps", "Les messages de prospection personnalises augmentent les taux de reponse", "Integration native avec les CRM (Salesforce, HubSpot)"]);

chapterTitle(9, "Optimisation des Operations");
doc.moveDown(2);
sectionTitle("9.1 Automatisation des Processus");
para("L'IA automatise les processus operationnels repetitifs : traitement de factures, saisie de donnees, verification de conformite, gestion de stocks, planification des equipes, et maintenance predictive. L'IPA (Intelligent Process Automation) combine l'IA avec la RPA (Robotic Process Automation) pour automatiser des workflows complets de bout en bout.");
para("La maintenance predictive utilise l'IA pour analyser les donnees des capteurs et predire les pannes avant qu'elles ne se produisent. Dans l'industrie manufacturiere, cela reduit les temps d'arret de 30-50% et les couts de maintenance de 20-40%. Le meme principe s'applique aux serveurs informatiques, aux flottes de vehicules, et aux equipements de bureau.");
summaryBox(["IPA automatise les workflows complets de bout en bout", "Maintenance predictive : -30-50% de temps d'arret", "Traitement automatique des documents (factures, contrats)", "Planification optimisee des ressources et des equipes"]);

chapterTitle(10, "L'IA dans les Ressources Humaines");
doc.moveDown(2);
sectionTitle("10.1 Recrutement Assiste par l'IA");
para("L'IA transforme le recrutement : redaction automatique d'offres d'emploi optimisees, tri intelligent des CV (en evitant les biais grace a l'anonymisation), chatbots de pre-qualification des candidats, matching automatique candidat-poste, et planification intelligente des entretiens. Le temps moyen de recrutement est reduit de 30-50%.");
sectionTitle("10.2 Formation et Onboarding");
para("L'IA personnalise les parcours de formation : evaluation du niveau initial, recommandation de contenus adaptes, tuteurs IA disponibles 24/7, generation de quiz et d'exercices personnalises, et suivi automatise de la progression. L'onboarding des nouveaux employes est accelere grace a des assistants IA qui repondent a toutes les questions pratiques.");
summaryBox(["Recrutement : -30-50% de temps avec le tri IA", "Formation personnalisee avec tuteurs IA 24/7", "Attention aux biais algorithmiques dans le recrutement", "L'IA libere les RH pour les taches a haute valeur ajoutee"]);

chapterTitle(11, "L'IA pour la Finance et la Comptabilite");
doc.moveDown(2);
sectionTitle("11.1 Automatisation Comptable");
para("L'IA automatise la saisie comptable, la categorisation des transactions, le rapprochement bancaire, et la detection d'anomalies. Les outils comme Dext, Pennylane et Qonto integrent l'IA pour reduire le temps de traitement comptable de 50-70%. La detection de fraude IA identifie les transactions suspectes en temps reel avec une precision superieure aux methodes traditionnelles.");
sectionTitle("11.2 Previsions Financieres");
para("Les modeles de prevision IA analysent les donnees historiques, les tendances du marche, et les facteurs externes pour generer des previsions de tresorerie, de ventes et de couts plus precises que les methodes traditionnelles. Ils identifient egalement les risques et les opportunites que les analyses humaines pourraient manquer.");
summaryBox(["Automatisation comptable : -50-70% de temps de traitement", "Detection de fraude en temps reel", "Previsions financieres plus precises avec l'IA", "ROI mesurable des le premier mois"]);

chapterTitle(12, "L'IA dans la Supply Chain");
doc.moveDown(2);
para("L'IA optimise chaque maillon de la supply chain : prevision de la demande (reduction des ruptures de stock de 30-50%), optimisation des itineraires de livraison (economies de carburant de 10-20%), gestion automatisee des stocks, suivi en temps reel des expeditions, et detection des risques fournisseurs. Les entreprises qui adoptent l'IA dans leur supply chain rapportent des economies de 15-25% sur leurs couts logistiques.");
summaryBox(["Prevision de demande : -30-50% de ruptures de stock", "Optimisation logistique : -10-20% de couts de transport", "Gestion automatisee des stocks et des fournisseurs", "ROI de 15-25% sur les couts logistiques"]);

chapterTitle(13, "Creation de Contenu avec l'IA");
doc.moveDown(2);
para("La creation de contenu est l'application business la plus accessible de l'IA. Articles de blog, posts LinkedIn, newsletters, scripts video, descriptions produits, presentations — tout peut etre accelere par l'IA. La cle est d'etablir un workflow clair : briefing humain → premier jet IA → revision et personnalisation humaine → publication. Ce workflow permet de produire du contenu de qualite a un rythme impossible manuellement.");
para("Pour les visuels, les outils comme Midjourney et DALL-E remplacent les banques d'images couteuses. Une startup peut creer une identite visuelle complete (logo, illustrations, photos de produit, banniere) en quelques heures pour quelques dizaines d'euros au lieu de milliers.");
summaryBox(["Workflow contenu : briefing → IA → revision → publication", "Production x5 a x10 en quantite", "Visuels IA remplacent les banques d'images couteuses", "Toujours valider et personnaliser le contenu genere"]);

chapterTitle(14, "L'IA pour l'E-commerce");
doc.moveDown(2);
para("L'e-commerce est l'un des secteurs les plus impactes par l'IA. Recommandations personnalisees (+15-30% de panier moyen), descriptions produits generees automatiquement, photos et visuels produits par l'IA, chatbot shopping assistant, optimisation dynamique des prix, analyse predictive du comportement d'achat, et detection de fraude. Les e-commercants qui deployent l'IA sur plusieurs axes voient leur chiffre d'affaires augmenter de 20-40%.");
summaryBox(["Recommandations IA : +15-30% de panier moyen", "Descriptions et visuels produits automatises", "Chatbot shopping pour l'assistance a l'achat", "Impact global : +20-40% de CA pour les early adopters"]);

chapterTitle(15, "Analyse de Donnees et Business Intelligence");
doc.moveDown(2);
para("L'IA democratise l'analyse de donnees. Plus besoin d'etre data analyst pour obtenir des insights actionnables. Les outils comme ChatGPT Advanced Data Analysis, Claude avec fichiers, et les plateformes de BI augmentees permettent d'interroger vos donnees en langage naturel : 'Quel est notre taux de retention par cohorte ?' 'Compare les ventes Q1 vs Q2 par categorie de produit.' Le modele analyse les donnees, genere des graphiques et formule des recommandations.");
summaryBox(["L'IA democratise l'analyse de donnees", "Interrogez vos donnees en langage naturel", "Insights automatiques et recommandations actionnables", "Plus besoin d'expertise technique en data analysis"]);

chapterTitle(16, "Chatbots et Assistants Virtuels");
doc.moveDown(2);
para("Les chatbots IA modernes sont bien plus que des FAQ automatisees. Ils comprennent le contexte, gerent des conversations multi-tours, accedent aux systemes de l'entreprise (CRM, base de connaissances, gestion de commandes), et peuvent effectuer des actions (modifier une commande, planifier un rendez-vous, initier un remboursement). Les plateformes de deploiement incluent Intercom, Zendesk AI, Botpress, et des solutions custom via les API.");
summaryBox(["Les chatbots modernes comprennent le contexte et agissent", "Integration avec CRM, ticketing, base de connaissances", "Deploiement via Intercom, Zendesk, Botpress ou custom API", "Phase de test avec supervision humaine recommandee"]);

chapterTitle(17, "L'IA pour les PME et Startups");
doc.moveDown(2);
para("Les PME et startups ont un avantage unique : leur agilite leur permet d'adopter l'IA rapidement, sans les contraintes bureaucratiques des grandes entreprises. Budget recommande pour demarrer : 200-500€/mois couvrant ChatGPT Plus ou Claude Pro (20€), un outil de generation d'images (10-30€), un outil d'automatisation (20-50€), et potentiellement un outil de support client IA (50-200€). Ce budget modeste peut generer des milliers d'euros de valeur.");
para("Les cas d'usage prioritaires pour les PME : automatisation du support client, creation de contenu marketing, analyse des retours clients, et optimisation des operations administratives. Commencez petit, mesurez les resultats, et elargissez progressivement.");
summaryBox(["Budget de demarrage : 200-500€/mois", "L'agilite des PME est un avantage pour l'adoption IA", "Priorite : support, contenu, analyse, admin", "Commencez petit et elargissez progressivement"]);

chapterTitle(18, "L'IA pour les Freelances et Solopreneurs");
doc.moveDown(2);
para("L'IA est un multiplicateur de force pour les freelances et solopreneurs. Un freelance assiste par l'IA peut delivrer la valeur d'une equipe de 3-5 personnes. Applications cles : redaction et edition de contenu, gestion de projet et planning, prospection et generation de leads, creation de propositions commerciales, comptabilite et facturation automatisee, veille concurrentielle, et creation de formations en ligne.");
para("Le stack IA recommande pour un freelance : Claude ou ChatGPT pour la redaction et le raisonnement, Midjourney pour les visuels, Notion AI pour la gestion de projet, Grammarly pour la relecture, et Make ou Zapier pour l'automatisation des workflows.");
summaryBox(["L'IA donne a un freelance la puissance d'une equipe de 3-5", "Stack recommande : LLM + images + gestion de projet + automatisation", "Investissement de 50-100€/mois pour un ROI 10x+", "Concentrez-vous sur la valeur ajoutee humaine"]);

chapterTitle(19, "Aspects Juridiques et RGPD");
doc.moveDown(2);
para("L'utilisation de l'IA en entreprise souleve des questions juridiques importantes. Le RGPD impose des regles strictes sur le traitement des donnees personnelles par l'IA : base legale du traitement, transparence, droit d'opposition, evaluation d'impact (DPIA) pour les traitements a haut risque. L'AI Act europeen ajoute des obligations specifiques selon le niveau de risque du systeme IA.");
para("Recommandations pratiques : ne partagez jamais de donnees personnelles sensibles avec des outils IA publics. Utilisez des versions entreprise avec des garanties de confidentialite (ChatGPT Enterprise, Claude for Business). Documentez vos usages IA. Informez vos collaborateurs et clients de l'utilisation de l'IA. Consultez un juriste pour les cas complexes.");
summaryBox(["RGPD : regles strictes pour les donnees personnelles", "AI Act : obligations selon le niveau de risque", "Utilisez les versions entreprise pour la confidentialite", "Documentez et communiquez sur vos usages IA"]);

chapterTitle(20, "Securite et IA");
doc.moveDown(2);
para("L'IA introduit de nouveaux risques de securite : fuite de donnees sensibles via les prompts, prompt injection (manipulation du systeme par des entrees malveillantes), generation de contenu trompeur, et dependance a des fournisseurs exterieurs. Mettez en place des politiques d'utilisation IA claires, formez vos equipes aux risques, et auditez regulierement vos deployements IA.");
summaryBox(["Principaux risques : fuite de donnees, prompt injection, dependance", "Politiques d'utilisation IA obligatoires", "Formation des equipes aux risques", "Audit regulier des deployements"]);

chapterTitle(21, "Construire une Equipe IA");
doc.moveDown(2);
para("Pour integrer l'IA efficacement, designez un « champion IA » dans votre equipe — quelqu'un de passionné qui testera les outils, formera les collegues et evangelisera les bonnes pratiques. Pour les PME, un consultant IA externe peut accelerer l'adoption. Pour les grandes entreprises, une equipe IA dediee (data scientists, ML engineers, prompt engineers) est necessaire.");
summaryBox(["Designez un champion IA interne", "Formez l'ensemble des equipes aux outils IA", "Consultants externes pour accelerer l'adoption PME", "Equipe dediee pour les grandes entreprises"]);

chapterTitle(22, "Choisir les Bons Outils et Partenaires");
doc.moveDown(2);
para("Criteres de selection : qualite des resultats pour votre cas d'usage, cout total (abonnement + integration + formation), facilite d'integration avec vos outils existants, garanties de securite et confidentialite, support et documentation, et perennite du fournisseur. Testez toujours 2-3 alternatives avant de vous engager. Preferez les outils avec des API pour l'automatisation future.");
summaryBox(["Testez 2-3 alternatives avant de choisir", "Evaluez le cout total : licence + integration + formation", "Privilegiez les outils avec API et integrations", "Verifiez les garanties de securite et confidentialite"]);

chapterTitle(23, "Etudes de Cas : Entreprises qui Reussissent");
doc.moveDown(2);
caseStudy("Agence immobiliere (15 employes)", "Une agence immobiliere regionale a deploye ChatGPT pour la redaction automatique d'annonces, Claude pour l'analyse de marche, et un chatbot Intercom pour la qualification de leads. Resultat : +40% de leads qualifies, -60% de temps sur les annonces, +25% de satisfaction client. Investissement : 500€/mois. ROI : 3 000€/mois de valeur generee.");
caseStudy("Cabinet comptable (8 employes)", "Un cabinet comptable a utilise l'IA pour automatiser la saisie, la categorisation des transactions, et la generation de rapports mensuels. Les comptables se concentrent desormais sur le conseil a haute valeur ajoutee. Resultat : +30% de clients geres avec le meme effectif, satisfaction collaborateurs en hausse.");
caseStudy("E-commerce cosmetiques (30 employes)", "Une marque de cosmetiques en ligne a deploye l'IA sur toute la chaine : descriptions produits, photos generees, chatbot beauty advisor, recommandations personnalisees, et analyse des avis clients. Resultat : CA +35%, panier moyen +22%, retours -15%.");
summaryBox(["ROI concret mesure dans chaque cas", "Investissements modestes (200-500€/mois)", "Impact sur toute la chaine de valeur", "L'humain reste au centre de la strategie"]);

chapterTitle(24, "Plan d'Action : Integrer l'IA en 90 Jours");
doc.moveDown(2);
sectionTitle("Semaines 1-2 : Audit et Strategie");
para("Cartographiez vos processus. Identifiez les 3-5 cas d'usage prioritaires. Definissez les KPIs. Constituez l'equipe projet. Budget : temps de reflexion, pas de depenses.");
sectionTitle("Semaines 3-4 : Experimentation");
para("Testez les outils sur vos cas d'usage prioritaires. Formez les early adopters. Documentez les resultats. Ajustez les priorites selon les premiers retours. Budget : 200-500€ pour les outils.");
sectionTitle("Semaines 5-8 : Deploiement");
para("Deployez les solutions validees. Formez l'ensemble des equipes concernees. Mettez en place les metriques de suivi. Creez les guides et les bonnes pratiques. Budget : integration et formation.");
sectionTitle("Semaines 9-12 : Optimisation");
para("Analysez les resultats. Optimisez les prompts et les workflows. Identifiez les prochains cas d'usage. Planifiez la phase 2. Communiquez les succes en interne.");
summaryBox(["90 jours suffisent pour une premiere integration reussie", "Audit → Experimentation → Deploiement → Optimisation", "Commencez par 3-5 cas d'usage prioritaires", "Mesurez et communiquez les resultats a chaque etape"]);

chapterTitle(25, "Tendances Business IA 2026-2030");
doc.moveDown(2);
para("Les agents IA autonomes transformeront les workflows d'entreprise : un agent pourra gerer un projet complet, de la planification a l'execution, avec supervision humaine minimale. L'IA multimodale permettra des interactions encore plus naturelles. La personnalisation extreme de l'experience client deviendra la norme. Les entreprises « AI-native » — concues autour de l'IA des leur creation — disruperont les acteurs etablis dans chaque secteur.");
para("Les modeles IA specialises par industrie (sante, finance, juridique, retail) offriront des performances superieures aux modeles generiques. L'IA on-premise et edge computing permettront aux entreprises de deployer l'IA sans envoyer leurs donnees dans le cloud. La regulation se structurera, creant un cadre plus clair pour les entreprises.");
summaryBox(["Agents IA autonomes pour les workflows complexes", "IA multimodale et personnalisation extreme", "Modeles specialises par industrie", "L'AI-native disrupe les acteurs etablis", "Investissez maintenant pour etre positionne en 2030"]);

// CONCLUSION
doc.addPage();
doc.rect(0, 0, doc.page.width, 160).fill('#1e1b4b');
doc.fontSize(28).fillColor('white').text('Conclusion', 72, 70, { width: doc.page.width - 144 });
doc.rect(0, 160, doc.page.width, 4).fill(purple);
doc.moveDown(4);
para("L'IA n'est plus une option — c'est une necessite strategique. Quelle que soit la taille de votre entreprise, les outils et les strategies presentes dans cette formation vous donnent les cles pour transformer votre business avec l'IA. Commencez aujourd'hui, commencez petit, mais commencez.");
para("Les entreprises qui reussiront demain sont celles qui investissent dans l'IA aujourd'hui. Pas necessairement les plus grandes ou les plus financees, mais les plus agiles, les plus curieuses, et les plus determinees a exploiter cette revolution technologique.");
doc.moveDown(1);
doc.fontSize(14).fillColor(purple).text("Continuez votre apprentissage avec les autres formations LearnAI !", { align: 'center' });

addPageNumber();
doc.end();
stream.on('finish', () => {
  const stats = fs.statSync(path.join(outputDir, 'ia-pour-votre-business.pdf'));
  console.log(`PDF generated: ia-pour-votre-business.pdf (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
});
