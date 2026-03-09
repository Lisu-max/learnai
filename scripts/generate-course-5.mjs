import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public', 'pdfs');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const doc = new PDFDocument({ size: 'A4', margin: 72, bufferPages: true });
const stream = fs.createWriteStream(path.join(outputDir, 'creer-avec-ia.pdf'));
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
function tip(t) {
  checkNewPage(80);
  doc.moveDown(0.3);
  doc.fontSize(10).fillColor('#0d9488').text(`💡 ${t}`, { indent: 10 });
  doc.moveDown(0.4);
}

// COVER
doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f0a2e');
doc.rect(0, 0, doc.page.width, 8).fill(purple);
doc.rect(0, 8, doc.page.width, 4).fill(blue);
doc.fontSize(14).fillColor('#a78bfa').text('LEARNAI - FORMATION COMPLETE', 72, 180, { align: 'center', width: doc.page.width - 144 });
doc.fontSize(36).fillColor('white').text("Creer avec l'IA", 72, 240, { align: 'center', width: doc.page.width - 144 });
doc.fontSize(22).fillColor('#c4b5fd').text('Le Guide du Createur Digital', 72, 300, { align: 'center', width: doc.page.width - 144 });
doc.fontSize(12).fillColor('#94a3b8').text("Images, video, musique, ecriture, design", 72, 400, { align: 'center', width: doc.page.width - 144 });
doc.text("Liberez votre creativite avec l'Intelligence Artificielle", { align: 'center', width: doc.page.width - 144 });
doc.fontSize(11).fillColor('#64748b').text('Edition Mars 2026', 72, 580, { align: 'center', width: doc.page.width - 144 });

// TOC
doc.addPage();
doc.fontSize(24).fillColor(purple).text('Table des Matieres', { align: 'center' });
doc.moveDown(1.5);
const chapters = [
  "L'IA : Le Nouvel Outil du Createur", "Comprendre l'IA Generative",
  "Creation d'Images avec Midjourney", "DALL-E 3 : Generation d'Images Avancee",
  "Stable Diffusion : La Puissance Open Source", "Retouche et Edition Photo avec l'IA",
  "Creation de Logos et Identites Visuelles", "Design UI/UX Assiste par l'IA",
  "Generation Video avec Sora et Runway", "Animation et Motion Design IA",
  "Creation Musicale avec Suno et Udio", "Synthese Vocale et Doublage IA",
  "Ecriture Creative avec les LLM", "Creation de Contenu pour les Reseaux Sociaux",
  "Podcasting et Production Audio IA", "Creation de Jeux Video avec l'IA",
  "L'IA pour la Mode et le Design Textile", "Architecture et Design d'Interieur IA",
  "NFTs et Art Digital IA", "Monetiser ses Creations IA",
  "Droits d'Auteur et Propriete Intellectuelle", "L'Avenir de la Creation avec l'IA"
];
chapters.forEach((ch, i) => { doc.fontSize(11).fillColor(dark).text(`${i+1}. ${ch}`, { indent: 20 }); doc.moveDown(0.4); });

chapterTitle(1, "L'IA : Le Nouvel Outil du Createur");
doc.moveDown(2);
sectionTitle("1.1 Une Revolution Creative");
para("L'Intelligence Artificielle est en train de redefinir ce que signifie etre creatif. Pour la premiere fois dans l'histoire, n'importe qui peut generer des images photoréalistes, composer de la musique, ecrire des histoires, et produire des videos — sans des annees de formation technique. L'IA ne remplace pas la creativite humaine, elle la democratise et l'amplifie.");
para("En 2026, les outils d'IA creative sont utilises par des millions de createurs, des artistes professionnels aux amateurs passionnes. Des illustrateurs integrent Midjourney dans leur workflow pour accelerer la phase d'ideation. Des musiciens utilisent Suno pour experimenter de nouvelles directions musicales. Des ecrivains collaborent avec Claude pour developper des univers narratifs complexes. L'IA est devenue un partenaire creatif a part entiere.");
sectionTitle("1.2 L'IA Augmente, Ne Remplace Pas");
para("Un malentendu courant est que l'IA va remplacer les createurs. En realite, l'IA est un outil — comme le sont le pinceau, l'appareil photo, ou le logiciel de montage. La vision artistique, l'emotion, le message, et l'intention restent fondamentalement humains. L'IA excelle dans l'execution technique, mais c'est l'humain qui donne du sens et de la direction a la creation.");
summaryBox(["L'IA democratise la creation pour tous", "Elle augmente les capacites, ne remplace pas la creativite humaine", "Vision, emotion et intention restent humaines", "L'IA est un partenaire creatif, pas un remplacement"]);

chapterTitle(2, "Comprendre l'IA Generative");
doc.moveDown(2);
sectionTitle("2.1 Les Modeles de Diffusion");
para("La majorite des generateurs d'images IA (Midjourney, DALL-E, Stable Diffusion) utilisent des modeles de diffusion. Le principe : on entraine le modele a « debruiter » des images. Pendant l'entrainement, on ajoute progressivement du bruit a des images reelles jusqu'a obtenir du bruit pur, et le modele apprend a inverser ce processus. Pour generer une nouvelle image, on part de bruit aleatoire et le modele le transforme progressivement en image coherente, guide par le prompt textuel.");
para("Les Diffusion Transformers (DiT) combinent l'architecture Transformer avec les modeles de diffusion pour des resultats encore meilleurs. Cette architecture est au coeur des modeles les plus recents comme Stable Diffusion 3, DALL-E 3, et Sora pour la video.");
sectionTitle("2.2 Les Grands Modeles de Langage pour la Creation");
para("Les LLM comme Claude et GPT-4.5 ne sont pas seulement des outils de redaction — ce sont des moteurs creatifs polyvalents. Ils peuvent generer des histoires, des scripts, des poemes, des paroles de chansons, des concepts de jeux video, des descriptions de personnages, et meme du code creatif (generative art, animations, visualisations de donnees).");
summaryBox(["Les modeles de diffusion transforment du bruit en images", "Le prompt textuel guide la generation", "Les LLM sont des moteurs creatifs polyvalents", "Les DiT combinent Transformers et diffusion"]);

chapterTitle(3, "Creation d'Images avec Midjourney");
doc.moveDown(2);
sectionTitle("3.1 Guide Complet de Midjourney");
para("Midjourney est l'outil de reference pour la generation d'images IA de haute qualite artistique. Accessible via Discord et son site web, il excelle dans les rendus esthetiques, les portraits, les paysages, l'art conceptuel et le design. La version 6.1 (2026) offre un realisme et un controle sans precedent.");
sectionTitle("3.2 Maitriser les Prompts Midjourney");
subSection("Structure d'un Prompt Efficace");
para("Un bon prompt Midjourney suit cette structure : [sujet] + [details du sujet] + [environnement] + [eclairage] + [style artistique] + [technique photographique/artistique] + [parametres]. Exemple : 'A majestic snow leopard resting on a mountain peak, golden sunset light, dramatic clouds, National Geographic photography style, telephoto lens 200mm, high detail --ar 16:9 --v 6.1 --s 500'.");
subSection("Les Parametres Essentiels");
para("--ar : ratio d'aspect (16:9, 1:1, 9:16, 3:4). --v : version du modele (6.1 recommande). --s (stylize) : 0 = fidele au prompt, 1000 = tres artistique. --c (chaos) : 0 = coherent, 100 = variations extremes. --q : qualite (0.25, 0.5, 1, 2). --no : exclure des elements. --style raw : interpretation minimale.");
checkNewPage();
sectionTitle("3.3 Techniques Avancees");
para("Vary Region : selectionnez une zone de l'image et regenerez-la avec un nouveau prompt. Zoom Out : etendez l'image au-dela de ses bordures. Pan : deplacez le cadrage. Blend : combinez 2-5 images en une seule. Style References : utilisez une image de reference pour copier le style avec --sref. Character Reference : maintenez la coherence d'un personnage avec --cref.");
tip("Utilisez /describe sur une image existante pour obtenir des prompts similaires. C'est un excellent moyen d'apprendre le vocabulaire visuel.");
summaryBox(["Structure : sujet + details + environnement + style + parametres", "Maitrisez --ar, --v, --s, --c, --q pour un controle precis", "Vary Region, Zoom Out, Blend pour l'edition avancee", "--sref pour le style, --cref pour la coherence de personnage"]);

chapterTitle(4, "DALL-E 3 : Generation d'Images Avancee");
doc.moveDown(2);
sectionTitle("4.1 Les Forces de DALL-E 3");
para("DALL-E 3 se distingue par sa comprehension exceptionnelle du langage naturel. Vous n'avez pas besoin de maitriser un vocabulaire technique specifique — decrivez simplement ce que vous voulez en langage courant. DALL-E 3 excelle particulierement dans le rendu de texte dans les images (logos, affiches, couvertures de livres), les compositions complexes avec plusieurs elements, et les illustrations explicatives.");
sectionTitle("4.2 Cas d'Usage Privilegies");
para("Infographies et visuels educatifs. Mockups de produits et d'emballages. Illustrations pour articles et presentations. Couvertures de livres et d'ebooks. Affiches et flyers avec texte integre. Storyboards pour la video et l'animation. DALL-E 3 est le meilleur choix quand votre image doit inclure du texte lisible et precis.");
summaryBox(["DALL-E 3 comprend le langage naturel sans vocabulaire technique", "Meilleur outil pour le texte dans les images", "Ideal pour les infographies, mockups et illustrations educatives", "Integration native avec ChatGPT pour une iteration rapide"]);

chapterTitle(5, "Stable Diffusion : Open Source");
doc.moveDown(2);
para("Stable Diffusion est le modele open source de reference pour la generation d'images. Gratuit et installable localement, il offre un controle total et aucune restriction d'utilisation. L'ecosysteme est immense : des milliers de modeles specialises (photo-realisme, anime, illustrations), des extensions comme ControlNet (controle de la pose et la composition), et des interfaces intuitives (Automatic1111, ComfyUI). Ideal pour les createurs qui veulent une liberte totale et la capacite de generer en masse sans cout par image.");
summaryBox(["Gratuit, open source, pas de limites d'utilisation", "Controle total sur la generation", "ControlNet pour le controle precis de la pose et composition", "Necessite un GPU (8+ Go VRAM) ou un service cloud"]);

chapterTitle(6, "Retouche et Edition Photo avec l'IA");
doc.moveDown(2);
para("L'IA a revolutionne la retouche photo. Adobe Photoshop integre Generative Fill (remplissage generatif) pour ajouter ou supprimer des elements, etendre les images, et modifier des zones selectionnees. Adobe Lightroom utilise l'IA pour l'edition automatique des couleurs, de l'exposition et du bruit. Des outils comme Remove.bg suppriment les arriere-plans instantanement. Topaz Labs utilise l'IA pour le debruitage et l'upscaling d'images.");
para("Le workflow type : photographier ou generer une image de base, puis utiliser l'IA pour la retoucher, l'etendre, corriger les defauts, et l'ameliorer. La combinaison d'images generees par IA et de retouche IA permet d'obtenir des resultats photoréalistes impossibles a distinguer de vraies photographies.");
summaryBox(["Generative Fill de Photoshop : ajouter/supprimer/modifier des zones", "Suppression d'arriere-plan instantanee (Remove.bg)", "Upscaling et debruitage IA (Topaz Labs)", "Combinez generation et retouche pour des resultats optimaux"]);

chapterTitle(7, "Creation de Logos et Identites Visuelles");
doc.moveDown(2);
para("L'IA permet de creer des logos et des identites visuelles professionnelles a une fraction du cout traditionnel. Workflow recommande : 1) Utilisez un LLM pour brainstormer des concepts et des metaphores visuelles. 2) Generez des dizaines de variations avec Midjourney ou DALL-E. 3) Selectionnez les meilleurs candidats. 4) Affinez dans un outil vectoriel (Illustrator, Figma). 5) Declinez l'identite visuelle (couleurs, typographies, applications).");
para("Pour les prompts de logos, pensez « simple et memorable ». Evitez les details excessifs. Utilisez des termes comme 'minimal logo design', 'flat vector', 'clean lines', 'icon style'. Specifiez le style : geometrique, organique, typographique, pictogramme, ou combinaison.");
tip("Generez toujours en noir et blanc d'abord. Un bon logo fonctionne en monochrome. Ajoutez la couleur ensuite.");
summaryBox(["Brainstorm IA + generation + affinage vectoriel", "Promptez 'minimal', 'flat vector', 'clean lines'", "Testez en noir et blanc d'abord", "Cout : quelques euros vs des milliers en design traditionnel"]);

chapterTitle(8, "Design UI/UX Assiste par l'IA");
doc.moveDown(2);
para("L'IA accelere chaque etape du design UI/UX. Ideation : generez des concepts d'interface avec Midjourney ou DALL-E. Wireframing : utilisez des outils IA comme Galileo AI ou Uizard pour transformer des descriptions textuelles en wireframes. Prototypage : convertissez des mockups en code fonctionnel avec des outils comme v0 (Vercel) ou Bolt. Design system : l'IA peut generer des composants coherents, des palettes de couleurs et des typographies harmonieuses.");
para("Figma, l'outil de design le plus populaire, integre desormais des fonctionnalites IA : suggestion automatique de layouts, generation de contenu de remplissage realiste, et conversion de designs en code. Le workflow moderne combine la vision du designer humain avec la productivite de l'IA.");
summaryBox(["Galileo AI et Uizard : du texte aux wireframes", "v0 et Bolt : du design au code fonctionnel", "Figma integre l'IA pour accelerer le design", "Le designer humain reste essentiel pour la vision et l'UX"]);

chapterTitle(9, "Generation Video avec Sora et Runway");
doc.moveDown(2);
sectionTitle("9.1 Sora : La Revolution Video");
para("Sora d'OpenAI genere des videos de haute qualite a partir de descriptions textuelles. Il comprend la physique du monde reel, la coherence temporelle, et peut creer des mouvements de camera cinematographiques. En 2026, Sora genere des clips de 1-2 minutes en resolution HD avec un realisme impressionnant. Applications : teasers produits, publicites, contenu reseaux sociaux, pre-visualisation pour le cinema, clips musicaux.");
sectionTitle("9.2 Runway Gen-3");
para("Runway est une plateforme de creation video IA complete. Gen-3 genere des videos a partir de texte ou d'images de reference. Les outils d'edition incluent : suppression d'objets, extension de clips, lip sync (synchronisation labiale), et transfert de style. Runway est plus accessible que Sora pour les debutants et offre plus de controle sur l'edition.");
sectionTitle("9.3 Prompts Video Efficaces");
para("Un bon prompt video decrit : le sujet et l'action, le mouvement de camera (dolly, pan, tilt, aerial, tracking shot), l'eclairage et l'ambiance, le rythme et le tempo, et le style visuel. Exemple : 'Cinematic tracking shot of a barista pouring latte art in slow motion, warm morning light streaming through a cafe window, shallow depth of field, 4K film grain, cozy atmosphere'.");
summaryBox(["Sora : videos HD de 1-2 minutes a partir de texte", "Runway : plateforme complete avec edition avancee", "Decrivez le mouvement de camera et l'ambiance", "Applications : publicites, reseaux sociaux, cinema, clips"]);

chapterTitle(10, "Animation et Motion Design IA");
doc.moveDown(2);
para("L'IA transforme l'animation et le motion design. Des outils comme Runway Gen-3, Pika Labs et Luma Dream Machine permettent d'animer des images fixes. Le processus classique d'animation qui prenait des semaines peut maintenant produire des resultats preliminaires en minutes. Les motion designers utilisent l'IA pour l'ideation rapide, les tests d'animation, et la production de contenu a grande echelle pour les reseaux sociaux.");
para("Le workflow type : creer une image cle (keyframe) avec Midjourney ou Stable Diffusion, puis l'animer avec Runway ou Pika en ajoutant du mouvement, de la camera, et des effets. Pour les projets plus complexes, le resultat IA sert de reference ou de pre-visualisation pour une animation finale realisee dans des logiciels professionnels.");
summaryBox(["Animez des images fixes avec Runway, Pika, Luma", "Ideation et pre-visualisation en minutes au lieu de semaines", "Combinez image IA + animation IA pour un workflow rapide", "L'IA sert de reference pour les projets professionnels"]);

chapterTitle(11, "Creation Musicale avec Suno et Udio");
doc.moveDown(2);
sectionTitle("11.1 Suno : Votre Studio Musical IA");
para("Suno permet a quiconque de creer de la musique complete en quelques secondes. Decrivez le style, l'ambiance et eventuellement les paroles, et Suno genere un morceau avec voix, instruments et arrangement. La qualite est suffisante pour le contenu reseaux sociaux, les podcasts, les videos, et meme la diffusion commerciale (sous certaines conditions de licence).");
para("Pour obtenir les meilleurs resultats, specifiez : le genre musical (pop, rock, jazz, lo-fi, electronic, classical...), le tempo (lent, moyen, rapide ou BPM precis), l'instrumentation (acoustic guitar, piano, synth pads...), l'ambiance (joyful, melancholic, energetic, chill...), et la structure (verse-chorus-verse-chorus-bridge-chorus).");
sectionTitle("11.2 Udio : L'Alternative Haute Fidelite");
para("Udio se distingue par sa fidelite audio superieure et sa capacite a reproduire des styles musicaux specifiques avec precision. Il est particulierement performant pour les genres instrumentaux, le jazz, le classique, et les productions electroniques sophistiquees. La fonctionnalite d'extension permet d'allonger un morceau en preservant la coherence musicale.");
tip("Generez plusieurs variations et combinez les meilleures parties de chacune pour un resultat final optimise.");
summaryBox(["Suno : musique complete (voix + instruments) en secondes", "Specifiez genre, tempo, instrumentation et ambiance", "Udio : haute fidelite pour les genres sophistiques", "Suffisant pour contenu web, podcasts et videos"]);

chapterTitle(12, "Synthese Vocale et Doublage IA");
doc.moveDown(2);
para("ElevenLabs est le leader de la synthese vocale IA avec des voix d'un realisme saisissant. Applications : narration de livres audio, voix off pour videos, doublage dans plusieurs langues, podcasts automatises, assistants vocaux personnalises, et accessibilite. Le clonage vocal permet de reproduire n'importe quelle voix a partir d'un echantillon de quelques minutes, soulevant des questions ethiques importantes (toujours obtenir le consentement de la personne).");
para("Le doublage IA automatise traduit et double une video dans des dizaines de langues tout en preservant le ton et l'emotion de l'orateur original. Un createur YouTube francais peut ainsi toucher un public mondial sans engager des doubleurs professionnels pour chaque langue.");
summaryBox(["ElevenLabs : voix IA indiscernables de voix humaines", "Clonage vocal a partir de quelques minutes d'echantillon", "Doublage automatique dans des dizaines de langues", "Toujours obtenir le consentement pour le clonage vocal"]);

chapterTitle(13, "Ecriture Creative avec les LLM");
doc.moveDown(2);
para("Les LLM sont des collaborateurs creatifs puissants pour l'ecriture. Romans, nouvelles, scripts, poesie, paroles de chansons, scenarii de jeux video — l'IA peut aider a chaque etape du processus creatif. La cle est de considerer l'IA comme un co-auteur ou un brainstorming partner, pas comme un remplacement. Les meilleures oeuvres naissent de la collaboration entre la vision humaine et la productivite IA.");
para("Workflow recommande pour la fiction : 1) Brainstormez les themes et les concepts avec l'IA. 2) Developpez les personnages (backgrounds, motivations, arcs). 3) Creez un plan detaille. 4) Redigez chapitre par chapitre avec l'IA. 5) Editez et personnalisez chaque passage. 6) Revision finale 100% humaine pour la coherence et la voix. Ne publiez jamais un texte IA brut — la touche humaine fait toute la difference.");
summaryBox(["L'IA est un collaborateur creatif, pas un remplacement", "Brainstorm → plan → redaction → edition humaine", "Ne publiez jamais un texte IA brut", "La voix et la vision restent humaines"]);

chapterTitle(14, "Contenu pour les Reseaux Sociaux");
doc.moveDown(2);
para("L'IA est devenue indispensable pour la creation de contenu reseaux sociaux a grande echelle. Un createur assiste par l'IA peut maintenir une presence active sur 3-5 plateformes simultanement. Workflow : 1) Generez des idees de contenu avec un LLM (topics, angles, hooks). 2) Creez les visuels avec Midjourney ou DALL-E. 3) Redigez les captions avec Claude ou ChatGPT. 4) Generez des variations pour chaque plateforme (LinkedIn, Instagram, Twitter, TikTok). 5) Planifiez avec un outil de scheduling.");
para("Pour les Reels et TikToks, utilisez Sora ou Runway pour generer des clips video. Pour les carousels, creez une serie d'images coherentes avec Midjourney. Pour les Stories, combinez images IA et texte dynamique. Adaptez le format et le ton a chaque plateforme.");
summaryBox(["Maintenez 3-5 plateformes avec l'IA", "Workflow : idees → visuels → texte → variations → planning", "Adaptez format et ton a chaque plateforme", "Authenticite et valeur ajoutee restent essentielles"]);

chapterTitle(15, "Podcasting et Production Audio IA");
doc.moveDown(2);
para("L'IA simplifie la production de podcasts : transcription automatique, generation de notes d'emission, creation de musiques d'intro/outro avec Suno, edition audio automatisee (suppression des silences, normalisation), et meme creation d'episodes entiers avec des voix synthetiques. NotebookLM de Google peut generer automatiquement un podcast conversationnel a partir de documents, avec deux voix IA naturelles qui discutent du contenu.");
summaryBox(["Transcription, notes et edition automatisees", "Musique d'intro personnalisee avec Suno", "NotebookLM genere des podcasts conversationnels", "ElevenLabs pour la narration voix off"]);

chapterTitle(16, "Creation de Jeux Video avec l'IA");
doc.moveDown(2);
para("L'IA accelere chaque aspect du developpement de jeux video : concept art et character design avec Midjourney, textures et assets 3D avec des modeles specialises, musique et effets sonores avec Suno et ElevenLabs, dialogues et narration avec les LLM, level design assiste, et meme prototypage de gameplay avec des outils IA de generation de code.");
para("Des jeux indie entiers ont ete crees par des equipes d'une seule personne grace a l'IA. L'IA genere les assets visuels, la musique, les dialogues, et assiste le developpeur dans le code. Le createur se concentre sur le game design, la vision artistique et l'experience joueur — les aspects qui necessitent une sensibilite humaine.");
summaryBox(["Concept art, textures, musique et dialogues generes par IA", "Des jeux complets crees par une seule personne", "L'IA accelere le prototypage et l'iteration", "Le game design et l'experience joueur restent humains"]);

chapterTitle(17, "L'IA pour la Mode et le Design Textile");
doc.moveDown(2);
para("L'industrie de la mode adopte rapidement l'IA : generation de collections (silhouettes, motifs, couleurs), visualisation de vetements sur des mannequins virtuels, prediction des tendances par analyse des reseaux sociaux et des donne es de vente, et creation de prints et motifs uniques. Des marques comme H&M, Zara et Nike utilisent l'IA dans leur processus creatif.");
para("Pour les createurs independants, Midjourney est un outil precieux pour l'ideation de collections. Generez des centaines de designs en quelques heures, selectionnez les meilleurs, et affinez-les pour la production. L'IA permet d'explorer des directions creatives qui n'auraient jamais ete envisagees autrement.");
summaryBox(["Generation de collections et de motifs avec l'IA", "Mannequins virtuels et essayage IA", "Prediction des tendances par analyse de donnees", "Ideation de centaines de designs en quelques heures"]);

chapterTitle(18, "Architecture et Design d'Interieur IA");
doc.moveDown(2);
para("L'IA revolutionne l'architecture et le design d'interieur. Des outils comme Midjourney generent des rendus architecturaux photoréalistes a partir de descriptions textuelles. Les designers d'interieur utilisent l'IA pour proposer des dizaines de variations d'amenagement a leurs clients en quelques minutes. Des applications comme RoomGPT permettent de re-designer une piece a partir d'une simple photo.");
para("Le workflow professionnel : photographier l'espace existant, generer des propositions d'amenagement avec l'IA, presenter les options au client, affiner la selection, et produire les plans finaux dans un logiciel de CAO. L'IA accelere la phase d'ideation de 80% tout en offrant plus de choix au client.");
summaryBox(["Rendus architecturaux photoréalistes en quelques secondes", "Re-design de pieces a partir de photos", "Ideation acceleree de 80%", "Plus de choix pour le client"]);

chapterTitle(19, "NFTs et Art Digital IA");
doc.moveDown(2);
para("L'art digital IA a cree une nouvelle categorie dans le monde de l'art. Des oeuvres generees par IA se sont vendues pour des dizaines de milliers de dollars. Le marche des NFTs d'art IA, bien que plus calme qu'en 2022, reste actif pour les createurs qui apportent une vision artistique unique et une narration forte autour de leurs oeuvres. La valeur reside dans la curation, la coherence esthetique et l'histoire de l'artiste, pas dans la generation brute.");
summaryBox(["L'art IA est une categorie reconnue dans l'art digital", "La valeur vient de la vision artistique, pas de la technique", "Curation et coherence esthetique sont essentielles", "Le marche valorise les artistes avec une voix unique"]);

chapterTitle(20, "Monetiser ses Creations IA");
doc.moveDown(2);
sectionTitle("20.1 Vendre des Visuels IA");
para("Plusieurs plateformes acceptent l'art IA : stock photos (Adobe Stock, Shutterstock avec les labels IA), print-on-demand (Redbubble, Society6, Printful), marketplaces d'art digital (Etsy, Gumroad), et services personnalises (logos, illustrations, portraits sur Fiverr et Upwork). Les createurs les plus performants generent 1 000 a 10 000€/mois en combinant plusieurs canaux.");
sectionTitle("20.2 Services Creatifs IA");
para("Proposez des services creatifs assistes par IA : direction artistique IA, creation de contenu reseaux sociaux, design d'identite visuelle, production de videos courtes, creation de musique et sound design, et formation IA pour les creatifs. Le positionnement cle : vous vendez votre expertise creative et votre gout, l'IA est votre outil.");
sectionTitle("20.3 Creer des Cours et Formations");
para("Si vous maitrisez un outil IA creatif, creez des formations : tutoriels video, ebooks, cours en ligne, workshops, et coaching. Le marche de la formation IA est en plein boom avec des millions de personnes cherchant a apprendre ces competences.");
summaryBox(["Stock photos IA, print-on-demand, marketplaces d'art", "Services creatifs : vendez votre expertise, pas la technique", "Formation IA : marche en plein boom", "1 000-10 000€/mois possibles avec plusieurs canaux"]);

chapterTitle(21, "Droits d'Auteur et Propriete Intellectuelle");
doc.moveDown(2);
para("Le cadre juridique de l'art IA est encore en evolution en 2026. Les points cles : les images generees par IA seule ne sont generalement pas protegeable par le droit d'auteur (absence de « creation originale humaine »). Cependant, une oeuvre qui combine generation IA et apport creatif humain significatif peut etre protegee. Les termes de service varient selon les outils : Midjourney et DALL-E accordent les droits commerciaux aux utilisateurs payants.");
para("Recommandations pratiques : lisez les CGU de chaque outil. Conservez vos prompts et votre processus creatif comme preuve de contribution humaine. Evitez de generer des oeuvres trop similaires a des artistes existants (risque juridique). Soyez transparent sur l'utilisation de l'IA quand c'est requis ou attendu.");
summaryBox(["Le cadre juridique de l'art IA evolue rapidement", "L'apport creatif humain est cle pour la protection", "Lisez les CGU : droits commerciaux varient selon l'outil", "Transparence sur l'usage de l'IA recommandee"]);

chapterTitle(22, "L'Avenir de la Creation avec l'IA");
doc.moveDown(2);
para("L'avenir de la creation IA est vertigineux. La generation video en temps reel permettra de creer des films interactifs. Les mondes virtuels generes par IA offriront des experiences immersives uniques. La creation multimodale integree (texte + image + video + musique + 3D dans un seul workflow) deviendra la norme. Les outils deviendront de plus en plus intuitifs, reduisant la barriere d'entree a zero.");
para("Les createurs qui reussiront sont ceux qui embrasseront l'IA comme un partenaire creatif tout en cultivant ce qui les rend uniques : leur vision, leur emotion, leur perspective sur le monde. L'IA democratise la technique — ce qui restera rare et precieux, c'est l'authenticite et la singularite de la voix artistique humaine.");
summaryBox(["Generation video en temps reel et mondes virtuels IA", "Creation multimodale integree sera la norme", "Les outils seront de plus en plus accessibles", "L'authenticite humaine reste l'avantage competitif ultime"]);

// CONCLUSION
doc.addPage();
doc.rect(0, 0, doc.page.width, 160).fill('#1e1b4b');
doc.fontSize(28).fillColor('white').text('Conclusion', 72, 70, { width: doc.page.width - 144 });
doc.rect(0, 160, doc.page.width, 4).fill(purple);
doc.moveDown(4);
para("Vous avez maintenant toutes les cles pour creer avec l'IA. Des images aux videos, de la musique a l'ecriture, du design a la mode, l'IA ouvre des possibilites creatives sans precedent. Mais n'oubliez jamais : l'outil le plus puissant reste votre imagination.");
para("L'IA vous donne les moyens techniques — c'est a vous d'y apporter la vision, l'emotion et le sens. Les plus belles creations de demain naitront de cette synergie entre l'humain et la machine. Alors experimentez, explorez, et surtout — creez !");
doc.moveDown(1);
doc.fontSize(14).fillColor(purple).text("Continuez votre apprentissage avec les autres formations LearnAI !", { align: 'center' });

addPageNumber();
doc.end();
stream.on('finish', () => {
  const stats = fs.statSync(path.join(outputDir, 'creer-avec-ia.pdf'));
  console.log(`PDF generated: creer-avec-ia.pdf (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
});
