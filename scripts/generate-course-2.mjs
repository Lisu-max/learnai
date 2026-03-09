import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const outputDir = path.join(process.cwd(), 'public', 'pdfs');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const doc = new PDFDocument({ size: 'A4', margin: 72, bufferPages: true });
const stream = fs.createWriteStream(path.join(outputDir, 'maitriser-outils-ia.pdf'));
doc.pipe(stream);

const purple = '#7C3AED';
const blue = '#2563EB';
const dark = '#1a1a2e';

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
  doc.fontSize(26).fillColor('white').text(title, 72, 90, { width: doc.page.width - 144 });
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
  doc.fontSize(13).fillColor(purple).text('Points cles a retenir', 92);
  doc.moveDown(0.5);
  points.forEach(p => { doc.fontSize(10).fillColor(dark).text(`✓  ${p}`, 92, doc.y, { width: doc.page.width - 184 }); doc.moveDown(0.3); });
  doc.moveDown(1);
}
function tip(t) {
  checkNewPage(100);
  doc.moveDown(0.5);
  doc.fontSize(10).fillColor('#0d9488').text(`💡 Astuce : ${t}`, { indent: 10 });
  doc.moveDown(0.5);
}

// COVER
doc.rect(0, 0, doc.page.width, doc.page.height).fill('#0f0a2e');
doc.rect(0, 0, doc.page.width, 8).fill(purple);
doc.rect(0, 8, doc.page.width, 4).fill(blue);
doc.fontSize(14).fillColor('#a78bfa').text('LEARNAI - FORMATION COMPLETE', 72, 180, { align: 'center', width: doc.page.width - 144 });
doc.fontSize(36).fillColor('white').text('Maitriser les Outils IA', 72, 240, { align: 'center', width: doc.page.width - 144 });
doc.fontSize(22).fillColor('#c4b5fd').text('Guide Professionnel', 72, 300, { align: 'center', width: doc.page.width - 144 });
doc.fontSize(12).fillColor('#94a3b8').text('ChatGPT, Claude, Gemini, Midjourney, Stable Diffusion', 72, 400, { align: 'center', width: doc.page.width - 144 });
doc.text('Copilot, Cursor, Sora, ElevenLabs, Suno et bien plus', { align: 'center', width: doc.page.width - 144 });
doc.fontSize(11).fillColor('#64748b').text('Edition Mars 2026', 72, 580, { align: 'center', width: doc.page.width - 144 });
doc.text('LearnAI - Votre parcours vers la maitrise de l\'IA', { align: 'center', width: doc.page.width - 144 });

// TABLE OF CONTENTS
doc.addPage();
doc.fontSize(24).fillColor(purple).text('Table des Matieres', { align: 'center' });
doc.moveDown(2);
const chapters = [
  "Introduction aux Outils IA Modernes", "ChatGPT : Guide Complet", "Claude par Anthropic",
  "Google Gemini", "Midjourney : Creation d'Images", "DALL-E 3 et Generation d'Images",
  "Stable Diffusion", "Sora et la Generation Video IA", "ElevenLabs et la Synthese Vocale",
  "Suno et la Creation Musicale IA", "GitHub Copilot et les Assistants de Code",
  "Cursor et les IDE IA", "NotebookLM et la Recherche IA", "Perplexity AI pour la Recherche",
  "Automatisation avec Make et Zapier + IA", "Les API d'IA", "Comparer et Choisir ses Outils IA",
  "Construire son Workflow IA Personnel"
];
chapters.forEach((ch, i) => { doc.fontSize(12).fillColor(dark).text(`Chapitre ${i+1} — ${ch}`, { indent: 20 }); doc.moveDown(0.5); });

// CH1
chapterTitle(1, "Introduction aux Outils IA Modernes");
doc.moveDown(2);
sectionTitle("1.1 Le Paysage des Outils IA en 2026");
para("En 2026, le paysage des outils d'intelligence artificielle est plus riche et diversifie que jamais. Des assistants conversationnels aux generateurs d'images, en passant par les outils de code, de video et de musique, l'IA est devenue un ecosysteme complet d'outils interconnectes qui transforment chaque aspect du travail creatif et professionnel.");
para("Le marche des outils IA est domine par quelques acteurs majeurs — OpenAI, Anthropic, Google, Meta — mais une multitude de startups et de projets open source viennent enrichir l'offre avec des solutions specialisees. La cle du succes n'est plus simplement de connaitre un seul outil, mais de savoir naviguer dans cet ecosysteme et choisir le bon outil pour chaque tache.");
sectionTitle("1.2 Categories d'Outils");
para("Les outils IA se repartissent en plusieurs grandes categories. Les assistants conversationnels (ChatGPT, Claude, Gemini) sont les plus utilises et les plus polyvalents. Les generateurs d'images (Midjourney, DALL-E, Stable Diffusion) permettent de creer des visuels a partir de descriptions textuelles. Les outils de code (GitHub Copilot, Cursor, Claude Code) assistent les developpeurs dans l'ecriture et le debogage de logiciels.");
para("Les outils de generation video (Sora, Runway) et audio (ElevenLabs, Suno) ouvrent de nouvelles possibilites creatives. Les outils de recherche (Perplexity, NotebookLM) revolutionnent la facon dont nous trouvons et synthetisons l'information. Enfin, les plateformes d'automatisation (Make, Zapier) permettent de connecter tous ces outils entre eux pour creer des workflows puissants.");
sectionTitle("1.3 Gratuit vs Payant");
para("La plupart des outils IA offrent un niveau gratuit permettant de decouvrir leurs fonctionnalites. ChatGPT Free, Claude Free, et Gemini Free sont accessibles a tous. Les versions payantes (ChatGPT Plus a 20$/mois, Claude Pro a 20$/mois) offrent des modeles plus puissants, des limites d'utilisation plus elevees, et des fonctionnalites avancees comme la generation d'images, la navigation web, et l'analyse de documents.");
tip("Commencez par les versions gratuites pour identifier les outils qui correspondent le mieux a vos besoins avant de souscrire a un abonnement.");
summaryBox(["Le paysage IA 2026 est riche avec des dizaines d'outils specialises", "Les principales categories : texte, image, code, video, audio, recherche", "La plupart offrent un niveau gratuit pour debuter", "Choisir le bon outil pour chaque tache est une competence cle"]);

// CH2
chapterTitle(2, "ChatGPT : Guide Complet");
doc.moveDown(2);
sectionTitle("2.1 Presentation de ChatGPT");
para("ChatGPT, developpe par OpenAI, est l'outil IA le plus populaire au monde avec plus de 300 millions d'utilisateurs actifs en 2026. Disponible via le web, des applications mobiles et une API, ChatGPT est un assistant conversationnel polyvalent capable de rediger du texte, repondre a des questions, analyser des documents, generer du code, creer des images (via DALL-E integre), et bien plus encore.");
para("En 2026, ChatGPT est propulse par les modeles GPT-4o (multimodal rapide), GPT-4.5 (haute qualite), et les modeles de raisonnement o1 et o3. Chaque modele a ses forces : GPT-4o pour les interactions rapides et multimodales, GPT-4.5 pour les taches complexes de redaction et d'analyse, et o3 pour le raisonnement mathematique et logique avance.");
sectionTitle("2.2 Fonctionnalites Essentielles");
subSection("Mode Conversation");
para("Le mode conversation est la fonctionnalite de base. Vous posez une question ou donnez une instruction, et ChatGPT repond. Les conversations ont une memoire contextuelle — ChatGPT se souvient de ce qui a ete dit precedemment dans la meme conversation. Vous pouvez affiner les reponses en demandant des clarifications, des modifications, ou en changeant de direction.");
subSection("Analyse de Documents");
para("ChatGPT peut analyser des fichiers PDF, Word, Excel, des images et meme des fichiers de code. Glissez-deposez un document dans la conversation et posez des questions dessus. Vous pouvez faire resumer un rapport de 100 pages, extraire des donnees d'un tableau, ou faire analyser le contenu d'une image.");
subSection("Generation d'Images avec DALL-E");
para("ChatGPT integre DALL-E pour la generation d'images. Decrivez l'image que vous souhaitez en langage naturel et ChatGPT la genere. Vous pouvez demander des modifications, changer le style, ou iterer sur le resultat. Les images generees sont de haute qualite et peuvent etre utilisees pour des presentations, des reseaux sociaux, ou du design.");
checkNewPage();
subSection("Navigation Web");
para("ChatGPT peut effectuer des recherches sur le web en temps reel pour fournir des informations actualisees. Cette fonctionnalite est particulierement utile pour les questions sur l'actualite, les prix, les evenements recents, ou toute information qui change frequemment.");
subSection("GPTs Personnalises");
para("Le GPT Store permet de creer et de partager des versions personnalisees de ChatGPT. Vous pouvez configurer un GPT avec des instructions specifiques, des connaissances supplementaires (fichiers uploades), et des actions (appels API). Des milliers de GPTs specialises sont disponibles pour des cas d'usage specifiques.");
tip("Utilisez le raccourci clavier Ctrl+Shift+; pour acceder rapidement a ChatGPT depuis n'importe quelle application sur desktop.");
summaryBox(["ChatGPT est l'outil IA le plus utilise avec 300M+ d'utilisateurs", "Modeles disponibles : GPT-4o, GPT-4.5, o1, o3", "Fonctionnalites : conversation, analyse de docs, images, navigation web", "GPTs personnalises pour des cas d'usage specifiques", "Version Plus a 20$/mois pour plus de fonctionnalites"]);

// CH3
chapterTitle(3, "Claude par Anthropic");
doc.moveDown(2);
sectionTitle("3.1 Presentation de Claude");
para("Claude est l'assistant IA developpe par Anthropic, une entreprise fondee par d'anciens chercheurs d'OpenAI. En 2026, Claude s'est impose comme l'un des meilleurs assistants IA du marche, reconnu pour sa precision, son honnetete intellectuelle (il admet ce qu'il ne sait pas), sa capacite a suivre des instructions complexes, et ses performances exceptionnelles en redaction et en programmation.");
para("Claude 4 (Opus, Sonnet et Haiku) represente la derniere generation de modeles d'Anthropic. Opus est le modele le plus puissant pour les taches complexes, Sonnet offre le meilleur equilibre performance/vitesse, et Haiku est le modele le plus rapide et economique. Claude se distingue par sa fenetre de contexte massive (200K+ tokens), lui permettant d'analyser des documents tres longs.");
sectionTitle("3.2 Points Forts de Claude");
subSection("Redaction et Style");
para("Claude excelle dans la redaction. Ses textes sont naturels, bien structures, et adaptables a tous les styles. Que ce soit pour un email professionnel, un article de blog, un rapport technique, ou un texte creatif, Claude produit un contenu de haute qualite qui necessite peu de retouches.");
subSection("Programmation");
para("Claude est un excellent assistant de programmation. Il comprend et genere du code dans de nombreux langages (Python, JavaScript, TypeScript, Java, C++, etc.), peut deboguer des problemes complexes, refactorer du code, et expliquer des concepts techniques. Claude Code, l'outil CLI d'Anthropic, pousse cette capacite encore plus loin en permettant une integration directe dans le workflow de developpement.");
subSection("Analyse de Documents Longs");
para("Grace a sa fenetre de contexte de 200K+ tokens, Claude peut analyser des documents entiers — livres, rapports annuels, contrats juridiques — et en extraire les informations pertinentes. Cette capacite est inegalee pour les taches de recherche, de synthese, et d'analyse documentaire.");
checkNewPage();
sectionTitle("3.3 Claude Code");
para("Claude Code est un outil en ligne de commande (CLI) qui integre Claude directement dans votre terminal. Il peut lire et modifier des fichiers, executer des commandes, naviguer dans votre codebase, et effectuer des taches de developpement complexes de maniere autonome. C'est un veritable assistant de developpement qui comprend le contexte de votre projet.");
tip("Utilisez Claude pour les taches de redaction et d'analyse documentaire ou il excelle particulierement, et Claude Code pour le developpement logiciel.");
summaryBox(["Claude se distingue par sa precision et son honnetete", "Modeles : Opus (puissant), Sonnet (equilibre), Haiku (rapide)", "Fenetre de contexte massive de 200K+ tokens", "Excellent en redaction, programmation et analyse documentaire", "Claude Code integre l'IA directement dans le terminal de developpement"]);

// CH4
chapterTitle(4, "Google Gemini");
doc.moveDown(2);
sectionTitle("4.1 Presentation de Gemini");
para("Gemini est la famille de modeles IA de Google DeepMind, concue des le depart comme nativement multimodale. Cela signifie que Gemini peut traiter et generer du texte, des images, de l'audio et de la video de maniere fluide et integree, sans avoir besoin de modules separes pour chaque modalite.");
para("En 2026, Gemini 2.0 est integre dans l'ensemble de l'ecosysteme Google. Il est disponible directement dans Google Search (AI Overviews), Gmail (redaction assistee), Google Docs (ecriture et edition), Google Sheets (analyse de donnees), Google Slides (creation de presentations), et Android (assistant personnel).");
sectionTitle("4.2 Gemini vs ChatGPT vs Claude");
para("Chaque assistant a ses forces. Gemini excelle dans l'integration avec les services Google et le traitement multimodal natif. Son contexte ultra-long (plus d'1 million de tokens) lui permet d'analyser des documents extremement volumineux. ChatGPT est le plus polyvalent et possede le plus grand ecosysteme de plugins et GPTs. Claude est le plus precis et le plus fiable pour la redaction et l'analyse technique.");
para("En pratique, les professionnels avises utilisent plusieurs outils selon la tache : Gemini pour la recherche et l'integration Google Workspace, Claude pour la redaction et le code, ChatGPT pour sa polyvalence et son ecosysteme. La maitrise de plusieurs outils est un avantage competitif majeur.");
summaryBox(["Gemini est nativement multimodal : texte, image, audio, video", "Integration profonde dans l'ecosysteme Google", "Contexte ultra-long de 1M+ tokens", "Complementaire a ChatGPT et Claude selon les cas d'usage"]);

// CH5
chapterTitle(5, "Midjourney : Creation d'Images");
doc.moveDown(2);
sectionTitle("5.1 Qu'est-ce que Midjourney ?");
para("Midjourney est un outil de generation d'images par IA qui transforme des descriptions textuelles (prompts) en images de haute qualite. Repute pour son esthetique artistique exceptionnelle, Midjourney est devenu l'outil de reference pour les graphistes, illustrateurs, marketeurs, et createurs de contenu. Il est accessible principalement via Discord et dispose desormais d'un site web dedie.");
sectionTitle("5.2 Ecrire des Prompts Efficaces");
para("La qualite de l'image generee depend directement de la qualite du prompt. Un bon prompt Midjourney comprend : le sujet principal, le style artistique souhaite, l'eclairage, l'angle de vue, les couleurs dominantes, et eventuellement des references a des artistes ou des techniques. Par exemple : « portrait of a young woman, oil painting style, dramatic lighting, rich colors, Rembrandt-inspired --ar 3:4 --v 6.1 ».");
subSection("Les Parametres Essentiels");
para("--ar (aspect ratio) : definit le rapport largeur/hauteur (16:9, 1:1, 3:4, etc.). --v (version) : selectionne la version du modele. --s (stylize) : controle l'intensite artistique (0-1000). --c (chaos) : ajoute de la variabilite. --q (quality) : ajuste la qualite de rendu. --no : exclut des elements. --style raw : reduit l'interpretation artistique pour un resultat plus literal.");
checkNewPage();
sectionTitle("5.3 Techniques Avancees");
para("Le Style Tuning permet de creer un profil de style personnalise que vous pouvez appliquer a toutes vos generations. Le Vary Region permet de modifier une partie specifique d'une image generee. Le Zoom Out etend l'image au-dela de ses bordures. Le Pan permet de deplacer le cadrage. Le Blend melange plusieurs images de reference en une seule.");
tip("Commencez par des prompts simples et ajoutez progressivement des details. Utilisez /describe sur une image existante pour obtenir des prompts similaires.");
summaryBox(["Midjourney est le leader pour les images IA de haute qualite artistique", "Un bon prompt inclut : sujet, style, eclairage, angle, couleurs", "Les parametres (--ar, --v, --s, --c) offrent un controle precis", "Techniques avancees : Style Tuning, Vary Region, Zoom Out, Blend"]);

// CH6
chapterTitle(6, "DALL-E 3 et Generation d'Images");
doc.moveDown(2);
sectionTitle("6.1 DALL-E 3 : L'IA d'Images d'OpenAI");
para("DALL-E 3 est le modele de generation d'images d'OpenAI, integre directement dans ChatGPT. Sa force principale reside dans sa comprehension exceptionnelle du langage : il comprend des prompts complexes et nuances en langage naturel, sans necessiter la maitrise de parametres techniques specifiques. Vous decrivez ce que vous voulez comme vous parleriez a un humain, et DALL-E genere l'image.");
para("Contrairement a Midjourney qui excelle dans l'esthetique artistique, DALL-E 3 se distingue par sa fidelite au prompt. Il gere remarquablement bien le texte dans les images, les compositions complexes avec plusieurs elements, et les concepts abstraits. Il est egalement tres performant pour les illustrations explicatives, les infographies, et les visuels educatifs.");
sectionTitle("6.2 DALL-E vs Midjourney");
para("DALL-E 3 est ideal pour les images informatives, les illustrations educatives et le contenu web. Midjourney est preferable pour les creations artistiques, les portraits et les paysages esthetiques. Les deux outils sont complementaires et les professionnels utilisent souvent les deux.");
summaryBox(["DALL-E 3 excelle dans la comprehension des prompts complexes", "Integration native avec ChatGPT pour une experience fluide", "Meilleur que Midjourney pour le texte dans les images", "Complementaire a Midjourney selon le type de creation"]);

// CH7
chapterTitle(7, "Stable Diffusion");
doc.moveDown(2);
sectionTitle("7.1 La Puissance de l'Open Source");
para("Stable Diffusion est un modele de generation d'images open source developpe par Stability AI. Sa principale force est qu'il peut etre installe et utilise localement sur votre propre ordinateur, sans abonnement ni limitation d'utilisation. Cela en fait l'outil ideal pour les utilisateurs qui souhaitent un controle total sur leur generation d'images, sans dependre d'un service cloud.");
para("L'ecosysteme Stable Diffusion est immense. Des milliers de modeles personnalises (checkpoints) sont disponibles sur des plateformes comme Civitai et Hugging Face, specialises dans differents styles : photo-realisme, anime, illustration, art conceptuel, etc. Des extensions comme ControlNet permettent un controle precis de la pose, de la composition et de la structure de l'image generee.");
sectionTitle("7.2 Installation et Configuration");
para("Pour utiliser Stable Diffusion localement, vous avez besoin d'un GPU avec au moins 8 Go de VRAM (NVIDIA recommande). Les interfaces les plus populaires sont Automatic1111 (WebUI) et ComfyUI (interface nodale plus avancee). L'installation se fait via Git et Python, et de nombreux tutoriels guident les debutants a travers le processus.");
para("Pour ceux qui ne disposent pas d'un GPU puissant, des services cloud comme RunDiffusion, Google Colab, ou Replicate permettent d'utiliser Stable Diffusion dans le cloud a un cout reduit.");
summaryBox(["Stable Diffusion est gratuit et open source", "Installation locale = controle total et pas de limites", "Milliers de modeles specialises disponibles", "ControlNet offre un controle precis de la generation", "Necessite un GPU avec 8+ Go de VRAM"]);

// CH8
chapterTitle(8, "Sora et la Generation Video IA");
doc.moveDown(2);
sectionTitle("8.1 La Revolution de la Video IA");
para("Sora, developpe par OpenAI, a marque un tournant dans la generation de video par IA. Capable de creer des videos de haute qualite a partir de descriptions textuelles, Sora comprend la physique du monde reel, la coherence temporelle, et peut generer des scenes complexes avec des mouvements de camera cinematographiques.");
para("En 2026, Sora peut generer des videos de plusieurs minutes en resolution HD, avec une coherence visuelle et narrative impressionnante. Les applications vont de la creation de contenu pour les reseaux sociaux a la pre-visualisation pour le cinema, en passant par la publicite, l'education, et le prototypage de concepts visuels.");
sectionTitle("8.2 Alternatives a Sora");
para("Runway Gen-3 est un concurrent serieux avec des fonctionnalites d'edition video avancees. Pika Labs offre une interface accessible pour la generation de videos courtes. Kling et Minimax se distinguent dans certaines niches. La competition stimule l'innovation et les progres sont rapides dans ce domaine.");
summaryBox(["Sora genere des videos HD de plusieurs minutes a partir de texte", "Comprend la physique, la coherence temporelle et les mouvements de camera", "Alternatives : Runway Gen-3, Pika Labs, Kling", "Applications : reseaux sociaux, publicite, cinema, education"]);

// CH9
chapterTitle(9, "ElevenLabs et la Synthese Vocale");
doc.moveDown(2);
sectionTitle("9.1 La Voix par l'IA");
para("ElevenLabs est le leader de la synthese vocale IA. Sa technologie produit des voix d'un realisme saisissant, capables de transmettre des emotions, des intonations, et des nuances prosodiques qui les rendent quasi-indistinguables de voix humaines. La plateforme prend en charge des dizaines de langues et permet meme le clonage vocal a partir d'un court echantillon.");
para("Les cas d'usage sont nombreux : narration de livres audio, doublage de videos dans plusieurs langues, creation de podcasts, assistants vocaux personnalises, accessibilite pour les personnes malvoyantes, et production de contenu audio a grande echelle.");
sectionTitle("9.2 Fonctionnalites Principales");
para("Text-to-Speech : convertit du texte en parole naturelle avec un choix de centaines de voix. Voice Cloning : reproduit une voix specifique a partir d'un echantillon de quelques minutes. Speech-to-Speech : transforme une performance vocale en une autre voix tout en preservant l'emotion. Audio Dubbing : traduit et double automatiquement des videos.");
summaryBox(["ElevenLabs produit les voix IA les plus realistes du marche", "Clonage vocal, text-to-speech, dubbing automatique", "Supporte des dizaines de langues", "Applications : livres audio, podcasts, doublage, accessibilite"]);

// CH10
chapterTitle(10, "Suno et la Creation Musicale IA");
doc.moveDown(2);
sectionTitle("10.1 Creer de la Musique avec l'IA");
para("Suno est une plateforme revolutionnaire qui permet a quiconque de creer de la musique complete — paroles, melodie, arrangement, voix — a partir d'une simple description textuelle. Vous decrivez le style musical souhaite (pop, rock, jazz, electronique, classique...), l'ambiance, le tempo, et eventuellement les paroles, et Suno genere un morceau complet en quelques secondes.");
para("La qualite des productions est remarquable : les morceaux sont bien structures avec des couplets, refrains et ponts, les instruments sont realistes, et les voix synthetiques chantent avec expression. Suno a democratise la creation musicale, permettant a des personnes sans aucune formation musicale de produire des chansons professionnelles.");
sectionTitle("10.2 Udio : L'Alternative");
para("Udio est le principal concurrent de Suno, avec une approche similaire mais des forces differentes. Udio excelle dans la fidelite audio et la diversite stylistique, tandis que Suno est souvent prefere pour les chansons avec paroles. Les deux plateformes evoluent rapidement et la competition beneficie aux utilisateurs.");
summaryBox(["Suno cree de la musique complete a partir de descriptions textuelles", "Paroles, melodie, arrangement et voix en quelques secondes", "Aucune competence musicale requise", "Udio est l'alternative principale avec des forces complementaires"]);

// CH11
chapterTitle(11, "GitHub Copilot et les Assistants de Code");
doc.moveDown(2);
sectionTitle("11.1 GitHub Copilot");
para("GitHub Copilot, developpe par GitHub (Microsoft) en partenariat avec OpenAI, est l'assistant de programmation IA le plus utilise au monde. Integre directement dans les editeurs de code (VS Code, JetBrains, Neovim), il suggere du code en temps reel pendant que vous tapez, complete des fonctions entieres, genere des tests, et peut meme ecrire des fichiers complets a partir de commentaires descriptifs.");
para("Copilot comprend le contexte de votre projet — les fichiers ouverts, les imports, les conventions de codage — et adapte ses suggestions en consequence. Le mode Chat permet d'interagir avec Copilot en langage naturel pour poser des questions sur votre code, demander des refactorisations, ou obtenir des explications.");
sectionTitle("11.2 Copilot Workspace");
para("Copilot Workspace va plus loin en proposant un environnement de developpement assiste par IA. A partir d'une issue GitHub, Copilot Workspace analyse le probleme, propose un plan de modifications, genere le code, et cree une pull request. C'est une evolution majeure vers le developpement logiciel autonome assiste par IA.");
summaryBox(["Copilot suggere du code en temps reel dans votre editeur", "Comprend le contexte du projet pour des suggestions pertinentes", "Mode Chat pour interagir en langage naturel", "Copilot Workspace automatise le workflow issue-to-PR"]);

// CH12
chapterTitle(12, "Cursor et les IDE IA");
doc.moveDown(2);
sectionTitle("12.1 Cursor : L'IDE IA-Native");
para("Cursor est un editeur de code (base sur VS Code) concu des le depart pour l'IA. Contrairement a Copilot qui est un plugin ajoute a un editeur existant, Cursor integre l'IA dans chaque aspect de l'experience de developpement. Il peut modifier plusieurs fichiers simultanement, comprendre l'architecture globale du projet, et effectuer des refactorisations complexes guidees par le langage naturel.");
para("Cursor se distingue par ses modes Tab (completion predictive avancee), Chat (conversation avec le codebase), et Composer (modifications multi-fichiers). Le mode Agent permet a Cursor de travailler de maniere autonome sur des taches complexes, executant du code, lisant des fichiers, et iterant sur les resultats.");
sectionTitle("12.2 Autres IDE IA");
para("Windsurf (ex-Codeium) offre une alternative gratuite avec des fonctionnalites similaires. Zed integre des capacites IA dans un editeur ultra-rapide ecrit en Rust. JetBrains AI Assistant apporte l'IA aux IDE JetBrains populaires (IntelliJ, PyCharm, WebStorm). Le choix depend de vos preferences et de votre ecosysteme.");
summaryBox(["Cursor est l'IDE le plus avance pour le developpement assiste par IA", "Modes : Tab, Chat, Composer, Agent", "Alternatives : Windsurf, Zed, JetBrains AI", "L'IDE IA-native depasse le simple plugin"]);

// CH13-18 (more concise to fit)
chapterTitle(13, "NotebookLM et la Recherche IA");
doc.moveDown(2);
sectionTitle("13.1 NotebookLM de Google");
para("NotebookLM est un outil de recherche et de prise de notes propulse par Gemini. Sa particularite est qu'il travaille exclusivement a partir de vos documents — vous uploadez des PDF, des articles, des notes, et NotebookLM les analyse pour repondre a vos questions avec des citations precises. Pas d'hallucinations puisque toutes les reponses sont ancrees dans vos sources.");
para("La fonctionnalite Audio Overview genere automatiquement un podcast conversationnel a partir de vos documents, synthetisant les points cles dans un format audio facile a consommer. C'est un outil precieux pour les etudiants, les chercheurs, les journalistes et tout professionnel qui travaille avec de grandes quantites d'information.");
summaryBox(["NotebookLM analyse vos documents sans hallucinations", "Citations precises ancrees dans vos sources", "Audio Overview genere des podcasts de synthese", "Ideal pour la recherche, les etudes et l'analyse documentaire"]);

chapterTitle(14, "Perplexity AI pour la Recherche");
doc.moveDown(2);
sectionTitle("14.1 Le Moteur de Recherche IA");
para("Perplexity AI est un moteur de recherche propulse par l'IA qui fournit des reponses detaillees et sourcees a vos questions. Contrairement a Google qui retourne des liens, Perplexity synthetise l'information de multiples sources et fournit une reponse structuree avec des citations verificables. C'est un hybride entre un moteur de recherche et un assistant IA.");
para("Perplexity Pro offre l'acces a des modeles plus puissants (GPT-4, Claude, etc.) et des fonctionnalites avancees comme la recherche academique, l'analyse de fichiers et la generation de rapports. Les Collections permettent d'organiser vos recherches par projet ou par theme.");
summaryBox(["Perplexity combine moteur de recherche et IA conversationnelle", "Reponses sourcees avec citations verificables", "Ideal pour la recherche factuelle et l'actualite", "Pro offre des modeles avances et des fonctionnalites supplementaires"]);

chapterTitle(15, "Automatisation avec Make et Zapier + IA");
doc.moveDown(2);
sectionTitle("15.1 L'Automatisation Intelligente");
para("Make (anciennement Integromat) et Zapier sont des plateformes d'automatisation no-code qui permettent de connecter des centaines d'applications entre elles. Avec l'integration de l'IA, ces plateformes deviennent encore plus puissantes : vous pouvez creer des workflows qui utilisent ChatGPT, Claude ou d'autres modeles IA pour traiter, analyser et transformer les donnees automatiquement.");
para("Exemples de workflows : recevoir un email, le faire analyser par Claude pour en extraire les informations cles, mettre a jour un CRM, et envoyer une reponse automatique personnalisee. Ou encore : monitorer les reseaux sociaux, analyser le sentiment des mentions de votre marque, et generer un rapport quotidien.");
summaryBox(["Make et Zapier connectent des centaines d'applications", "L'integration IA permet des workflows intelligents", "Automatisez l'analyse de donnees, la redaction, le support client", "Aucune competence en programmation requise"]);

chapterTitle(16, "Les API d'IA");
doc.moveDown(2);
sectionTitle("16.1 Comprendre les API");
para("Les API (Application Programming Interfaces) d'IA permettent aux developpeurs d'integrer les capacites de l'IA directement dans leurs propres applications. Au lieu d'utiliser ChatGPT via le site web, vous pouvez appeler l'API d'OpenAI depuis votre code pour generer du texte, analyser des images, ou creer des embeddings. De meme, les API d'Anthropic (Claude), Google (Gemini) et d'autres fournisseurs ouvrent des possibilites infinies.");
para("Les API fonctionnent generalement avec un modele de tarification a l'usage (pay-per-token). Vous ne payez que pour ce que vous consommez, ce qui les rend accessibles aussi bien aux startups qu'aux grandes entreprises. Les prix ont considerablement baisse en 2025-2026, rendant l'IA par API de plus en plus abordable.");
summaryBox(["Les API integrent l'IA dans vos propres applications", "Tarification a l'usage (pay-per-token)", "Principales API : OpenAI, Anthropic, Google, Mistral", "Les prix baissent rapidement, rendant l'IA API tres accessible"]);

chapterTitle(17, "Comparer et Choisir ses Outils IA");
doc.moveDown(2);
sectionTitle("17.1 Criteres de Choix");
para("Pour choisir le bon outil IA, considerez : la qualite des resultats pour votre cas d'usage specifique, le cout (gratuit vs abonnement), la facilite d'utilisation, l'integration avec vos outils existants, la confidentialite des donnees, et les fonctionnalites specifiques dont vous avez besoin.");
para("Pour la redaction : Claude > ChatGPT > Gemini. Pour le code : Claude Code / Cursor > Copilot > ChatGPT. Pour les images artistiques : Midjourney > Stable Diffusion > DALL-E. Pour la recherche : Perplexity > Gemini > ChatGPT. Pour l'integration Google : Gemini. Ces classements sont subjectifs et evoluent rapidement.");
summaryBox(["Chaque outil a ses forces et ses faiblesses", "Evaluez selon : qualite, cout, facilite, integration, confidentialite", "N'hesitez pas a utiliser plusieurs outils complementaires", "Le paysage evolue vite — restez informe des nouveautes"]);

chapterTitle(18, "Construire son Workflow IA Personnel");
doc.moveDown(2);
sectionTitle("18.1 Definir ses Besoins");
para("Un workflow IA efficace commence par l'identification de vos taches repetitives, chronophages ou a faible valeur ajoutee. Faites un inventaire de votre journee type : quelles taches pourraient etre accelerees ou automatisees par l'IA ? Redaction d'emails, recherche d'information, creation de contenu, analyse de donnees, programmation ?");
sectionTitle("18.2 Construire son Stack IA");
para("Voici un exemple de stack IA pour un professionnel du marketing : Claude ou ChatGPT pour la redaction de contenu, Midjourney pour les visuels, Perplexity pour la veille concurrentielle, Make pour l'automatisation des publications, ElevenLabs pour les voix off, et Suno pour les jingles. Adaptez ce stack a vos besoins specifiques et experimentez regulierement de nouveaux outils.");
sectionTitle("18.3 Bonnes Pratiques");
para("Gardez l'humain dans la boucle : relisez et editez toujours le contenu genere par l'IA. Protegez vos donnees : ne partagez pas d'informations confidentielles avec des outils IA publics. Documentez vos prompts efficaces pour pouvoir les reutiliser. Formez vos collegues pour maximiser l'impact de l'IA dans votre equipe.");
summaryBox(["Identifiez vos taches automatisables en priorite", "Construisez un stack d'outils complementaires", "Gardez l'humain dans la boucle pour la validation", "Protegez vos donnees sensibles", "Documentez et partagez vos meilleures pratiques"]);

// CONCLUSION
doc.addPage();
doc.rect(0, 0, doc.page.width, 160).fill('#1e1b4b');
doc.fontSize(28).fillColor('white').text('Conclusion', 72, 70, { width: doc.page.width - 144 });
doc.rect(0, 160, doc.page.width, 4).fill(purple);
doc.moveDown(4);
para("Vous disposez desormais d'une vision complete des outils IA disponibles en 2026. De ChatGPT a Stable Diffusion, de Claude a Sora, chaque outil a ses forces et ses cas d'usage ideaux. La cle n'est pas de tous les maitriser, mais de choisir ceux qui correspondent a vos besoins et de les utiliser efficacement.");
para("L'ecosysteme IA evolue a une vitesse vertigineuse. De nouveaux outils apparaissent chaque mois, les existants s'ameliorent constamment, et les prix baissent regulierement. Restez curieux, experimentez, et n'hesitez pas a sortir de votre zone de confort pour explorer de nouveaux outils.");
doc.moveDown(1);
doc.fontSize(14).fillColor(purple).text("Continuez votre apprentissage avec les autres formations LearnAI !", { align: 'center' });

addPageNumber();
doc.end();
stream.on('finish', () => {
  const stats = fs.statSync(path.join(outputDir, 'maitriser-outils-ia.pdf'));
  console.log(`PDF generated: maitriser-outils-ia.pdf (${(stats.size / 1024 / 1024).toFixed(2)} MB)`);
});
