# LearnAI — Progression, Certificats & Gamification

**Date :** 2026-04-16
**Objectif :** Augmenter les conversions free → pro, reduire le churn, attirer du trafic via le partage social.
**Scope :** Backend progression, systeme XP/niveaux, 15 badges, certificats PDF premium avec QR verification, dashboard refonte, leaderboard public, partage social.

---

## 1. Backend Progression (fondation)

### Etat actuel

- Tables `chapter_progress` et `quiz_results` existent en DB (migration `20260324_interactive_chapters.sql`) mais ne sont **jamais lues par l'UI**.
- La progression est stockee en **localStorage** (`learnai-progress-{slug}`) — perdue au changement de device.
- Le dashboard (`/compte`) lit uniquement localStorage.

### Migration

Exploiter les tables existantes + creer `user_stats` :

```sql
CREATE TABLE user_stats (
  user_id         uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  total_xp        integer NOT NULL DEFAULT 0,
  level           integer NOT NULL DEFAULT 1,
  current_streak  integer NOT NULL DEFAULT 0,
  longest_streak  integer NOT NULL DEFAULT 0,
  last_activity   timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);

ALTER TABLE user_stats ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own stats" ON user_stats FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users update own stats" ON user_stats FOR UPDATE USING (auth.uid() = user_id);
```

**Fallback localStorage → DB :** au premier chargement du dashboard avec un user authentifie, lire localStorage, ecrire les chapitres trouves dans `chapter_progress`, puis supprimer le localStorage. One-shot, idempotent.

### API Routes

**`POST /api/progress/complete`**
- Body : `{ courseSlug: string, chapterNumber: number }`
- Actions : upsert `chapter_progress`, calcul XP (+10), check badges, update `user_stats`
- Auth requise (Supabase session)

**`POST /api/progress/quiz`**
- Body : `{ courseSlug: string, chapterNumber: number, score: number, totalQuestions: number }`
- Actions : insert `quiz_results`, calcul XP (+25 si >70%, +50 si 100%), check badges course-complete, update `user_stats`
- Auth requise

Les deux routes retournent `{ xp_gained, new_total_xp, new_level, badges_earned: Badge[] }` pour les animations cote client.

---

## 2. Systeme XP & Niveaux

### Table XP

| Action | XP | Condition |
|--------|----|-----------|
| Terminer un chapitre | +10 | Upsert, pas de double award |
| Quiz reussi (>70%) | +25 | Par quiz, meilleur score retenu |
| Quiz parfait (100%) | +50 | Remplace les +25, pas cumul |
| Cours termine (tous chapitres + quiz) | +100 | One-time par cours |
| Streak journalier | +5 | Incremente a chaque jour d'activite consecutive |

**Idempotence :** chaque award XP est idempotent. Refaire un chapitre ne redonne pas d'XP. Refaire un quiz ne donne de l'XP supplementaire que si le score s'ameliore (difference entre ancien et nouveau award).

### Niveaux

| Niveau | Nom | XP minimum |
|--------|-----|------------|
| 1 | Curieux IA | 0 |
| 2 | Explorateur IA | 100 |
| 3 | Praticien IA | 300 |
| 4 | Specialiste IA | 600 |
| 5 | Expert IA | 1000 |
| 6 | Maitre IA | 2000 |

**Calcul :** `level = findLastIndex(thresholds, t => total_xp >= t) + 1`

Stocke dans `user_stats.level` pour queries rapides (leaderboard). Recalcule a chaque gain d'XP.

---

## 3. Badges (15)

### Table

```sql
CREATE TABLE user_badges (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  badge_slug  text NOT NULL,
  earned_at   timestamptz NOT NULL DEFAULT now(),
  UNIQUE(user_id, badge_slug)
);

ALTER TABLE user_badges ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own badges" ON user_badges FOR SELECT USING (auth.uid() = user_id);
```

### Definitions

| Slug | Nom | Condition | Icone (Lucide) |
|------|-----|-----------|----------------|
| `premier-pas` | Premier Pas | Terminer 1 chapitre | `footprints` |
| `quiz-master` | Quiz Master | Premier quiz a 100% | `trophy` |
| `scholar` | Scholar | Terminer 1 cours complet | `graduation-cap` |
| `polyglotte` | Polyglotte | Terminer cours dans 2 langues | `languages` |
| `perfectionniste` | Perfectionniste | 5 quiz a 100% | `star` |
| `assidu` | Assidu | Streak de 7 jours | `flame` |
| `marathonien` | Marathonien | Streak de 30 jours | `medal` |
| `collectionneur` | Collectionneur | Gagner 10 badges | `gallery-vertical` |
| `expert-prompt` | Expert Prompt | Terminer prompt-engineering-pro | `terminal` |
| `business-ready` | Business Ready | Terminer ia-pour-votre-business | `briefcase` |
| `createur` | Createur | Terminer creer-avec-ia | `palette` |
| `tools-master` | Tools Master | Terminer maitriser-outils-ia | `wrench` |
| `encyclopedie` | Encyclopedie | Terminer tous les cours | `book-open` |
| `elite` | Elite | Atteindre niveau Maitre IA | `crown` |
| `early-adopter` | Early Adopter | S'inscrire avant le 1er juin 2026 | `rocket` |

### Logique de check

Fichier `src/lib/badges.ts` — exporte `checkBadges(userId)` qui :
1. Lit l'etat actuel (chapter_progress, quiz_results, user_stats, user_badges)
2. Evalue chaque condition
3. Insert les badges non encore gagnes
4. Retourne les **nouveaux** badges pour animation cote client

Appele dans les routes `/api/progress/complete` et `/api/progress/quiz`.

### API

**`GET /api/badges`**
- Auth requise
- Retourne `{ badges: { slug, name, icon, earned_at | null }[] }` (tous les badges, gagnes ou pas)

---

## 4. Certificats PDF Premium

### Table

```sql
CREATE TABLE certificates (
  id           uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id      uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  course_slug  text NOT NULL,
  score        integer NOT NULL,
  issued_at    timestamptz NOT NULL DEFAULT now(),
  verify_code  text NOT NULL UNIQUE,
  UNIQUE(user_id, course_slug)
);

ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users read own certificates" ON certificates FOR SELECT USING (auth.uid() = user_id);
-- verify_code lookup : service role via API route (public page)
```

### Conditions d'obtention

Pour un cours donne, l'user doit avoir :
1. **Tous les chapitres termines** dans `chapter_progress`
2. **Tous les quiz passes** (score >= 70%) dans `quiz_results`

Le `score` sur le certificat = moyenne des scores quiz du cours.

### Generation PDF

**Route : `GET /api/certificate/[slug]`**
- Auth requise
- Verifie eligibilite
- Si certificat n'existe pas en DB → le cree (generate `verify_code` via nanoid 12 chars)
- Genere le PDF avec `pdf-lib` (deja dans les deps) :
  - Dimensions : A4 paysage
  - Header : logo LearnAI + "Certificat de Reussite"
  - Corps : nom complet (depuis profiles), titre du cours, date, score moyen
  - QR code (genere avec une lib legere, ex: `qrcode`) → lien `https://learn-ai.fr/verify/[verify_code]`
  - Footer : "Verifiez ce certificat sur learn-ai.fr/verify/[code]"
  - Design : bordure decorative, couleurs du cours (course.color), police propre
- Retourne `Content-Type: application/pdf`

### Page de verification

**Page : `/verify/[code]`**
- Server Component, acces public (pas d'auth)
- Lit `certificates` + `profiles` + `courses` via service role
- Affiche : nom, cours, date, score, badge "Certificat Authentique"
- Si code invalide : "Ce certificat n'existe pas"
- Meta OG dynamiques pour preview riche sur LinkedIn/Twitter :
  - `og:title` = "Certificat LearnAI — [Cours]"
  - `og:description` = "[Nom] a termine [Cours] avec un score de [X]%"
  - `og:image` = image OG generee dynamiquement (voir section 7)

---

## 5. Dashboard Refonte (`/compte`)

Remplacement complet de `account-dashboard.tsx`. Tout lit depuis Supabase, plus de localStorage.

### Section 1 — Profil & Niveau

- Avatar (initiales si pas de photo), nom, email
- **Niveau actuel** : nom + icone + barre de progression XP vers le prochain
- **Streak** : flamme animee + nombre de jours (affiche uniquement si streak > 0)
- Bouton gestion abonnement (Stripe portal)

### Section 2 — Mes Cours

- Cards par cours accessible (free + achetes + pro)
- Chaque card affiche :
  - Barre de progression (chapitres termines / total)
  - Score moyen quiz
  - Badge "Termine" si 100%
  - Bouton "Continuer" (reprend au dernier chapitre non termine)
  - Bouton "Certificat" si eligible (icone download)
- Cours non accessibles affiches en gris avec CTA "Passer Pro"

### Section 3 — Badges

- Grille 5 colonnes (3 colonnes mobile)
- Badge gagne : couleur pleine, nom, date
- Badge non gagne : gris, icone lock, condition affichee au hover/tap
- Animation pulse/glow quand un badge vient d'etre gagne dans la session

### Section 4 — Statistiques

- **Cards KPI** : chapitres termines, quiz reussis, taux de reussite moyen, XP total
- **Position leaderboard** : "Tu es #23 sur 1240 apprenants"
- Lien vers `/leaderboard`

---

## 6. Leaderboard

### Table cache

```sql
CREATE TABLE leaderboard_cache (
  user_id      uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  display_name text NOT NULL,
  total_xp     integer NOT NULL DEFAULT 0,
  level        integer NOT NULL DEFAULT 1,
  rank         integer
);

-- Refresh par trigger ou cron
CREATE OR REPLACE FUNCTION refresh_leaderboard() RETURNS void AS $$
BEGIN
  TRUNCATE leaderboard_cache;
  INSERT INTO leaderboard_cache (user_id, display_name, total_xp, level, rank)
  SELECT
    us.user_id,
    COALESCE(LEFT(p.full_name, POSITION(' ' IN p.full_name || ' ')) || LEFT(SPLIT_PART(p.full_name, ' ', 2), 1) || '.', 'Anonyme'),
    us.total_xp,
    us.level,
    ROW_NUMBER() OVER (ORDER BY us.total_xp DESC)
  FROM user_stats us
  JOIN profiles p ON p.id = us.user_id
  WHERE us.total_xp > 0;
END;
$$ LANGUAGE plpgsql;
```

Refresh : appeler `refresh_leaderboard()` dans les routes progress (apres update XP) ou via cron Supabase toutes les 5 min.

### Page `/leaderboard`

- Server Component, acces public
- Top 50 affiches : rang, display_name, niveau, XP
- Si l'user est connecte : sa position mise en evidence meme s'il n'est pas dans le top 50
- Message motivant : "Plus que X XP pour monter au rang Y !"
- Design : cards avec medaille or/argent/bronze pour le top 3

### API

**`GET /api/leaderboard`**
- Public (pas d'auth requise pour le top 50)
- Query param optionnel `userId` pour inclure la position de l'user
- Retourne `{ top: LeaderboardEntry[], userRank?: LeaderboardEntry }`

---

## 7. Partage Social (trafic)

### Boutons de partage

Sur le dashboard, chaque element partageable a un bouton "Partager" :

**Certificat :**
- Lien : `https://learn-ai.fr/verify/[code]`
- Texte pre-rempli : "Je viens d'obtenir mon certificat [Cours] sur LearnAI ! 🎓"
- Cibles : LinkedIn, Twitter/X, copier le lien

**Badge :**
- Lien : `https://learn-ai.fr/leaderboard?highlight=[userId]` (ou page dediee future)
- Texte : "Je viens de debloquer le badge [Nom] sur LearnAI !"

**Niveau :**
- Texte : "Je suis [Niveau] sur LearnAI ! [XP] XP et [N] badges gagnes."

### Images OG dynamiques

**Route : `GET /api/share/certificate/[code]`**
- Genere une image 1200x630 (format OG) avec :
  - Logo LearnAI
  - Nom du cours
  - Nom de l'user
  - Score
  - "Verifiez sur learn-ai.fr"
- Utilise `@vercel/og` (ImageResponse) ou canvas server-side
- Cache CDN (immutable, le certificat ne change pas)

Les meta OG de `/verify/[code]` pointent vers cette image.

---

## 8. Notifications en temps reel

Quand l'user gagne de l'XP, un badge ou debloque un certificat → **toast anime** en bas a droite :

- "+10 XP" (animation compteur)
- "Badge debloque : Quiz Master 🏆" (avec icone et confetti)
- "Certificat disponible ! Telecharger" (lien direct)
- "Niveau suivant : Specialiste IA" (barre de progression animee)

Composant `<AchievementToast>` client-side, declenche par le retour des routes API progress.

---

## 9. Schema des migrations Supabase

Fichier unique : `supabase/migrations/20260416_progression_gamification.sql`

Contient :
1. `CREATE TABLE user_stats` + RLS
2. `CREATE TABLE user_badges` + RLS
3. `CREATE TABLE certificates` + RLS
4. `CREATE TABLE leaderboard_cache` + fonction refresh
5. Index sur `user_stats.total_xp DESC` (leaderboard)
6. Index sur `certificates.verify_code` (lookup public)
7. Trigger : auto-create `user_stats` row quand un user s'inscrit

---

## 10. Fichiers a creer / modifier

### Nouveaux fichiers

```
src/lib/xp.ts                          — constantes XP, calcul niveau, thresholds
src/lib/badges.ts                       — definitions badges, checkBadges()
src/lib/certificates.ts                 — generateCertificatePDF(), conditions
src/app/api/progress/complete/route.ts  — POST chapitre termine
src/app/api/progress/quiz/route.ts      — POST quiz termine
src/app/api/certificate/[slug]/route.ts — GET generer/telecharger PDF
src/app/api/leaderboard/route.ts        — GET top 50 + position user
src/app/api/badges/route.ts             — GET badges user
src/app/api/share/certificate/[code]/route.ts — GET image OG
src/app/verify/[code]/page.tsx          — page verification publique
src/app/leaderboard/page.tsx            — page leaderboard publique
src/components/account/profile-level.tsx    — profil + niveau + streak
src/components/account/course-progress.tsx  — cards cours avec progression
src/components/account/badge-grid.tsx       — grille de badges
src/components/account/stats-cards.tsx      — KPIs
src/components/account/achievement-toast.tsx — notifications XP/badges
src/components/share/share-buttons.tsx      — boutons partage social
supabase/migrations/20260416_progression_gamification.sql
```

### Fichiers a modifier

```
src/app/compte/page.tsx                     — refonte complete, lire depuis Supabase
src/components/account/account-dashboard.tsx — refonte complete
src/components/quiz/quiz-container.tsx       — appeler /api/progress/quiz au submit
src/components/quiz/inline-quiz.tsx          — idem
src/components/chapter/chapter-content.tsx   — appeler /api/progress/complete a la fin
src/hooks/useSubscription.ts                — ajouter hook useProgress / useStats
```

---

## 11. Dependances nouvelles

```
qrcode          — generation QR code pour certificats PDF
nanoid          — generation verify_code unique
@vercel/og      — images OG dynamiques (si pas deja present)
```

`pdf-lib` est deja dans les deps.

---

## 12. Hors scope (futur)

- Notifications email (badge gagne, certificat dispo)
- Badges custom / saisonniers
- Challenges temporaires
- Integration Discord/Slack communaute
- Progression hors-ligne (service worker)
