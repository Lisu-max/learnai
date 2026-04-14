# LearnAI — CLAUDE.md

Guide de contexte pour Claude Code. Lire en priorité au début de chaque session.

---

## Qu'est-ce que ce projet ?

**LearnAI** est une plateforme SaaS d'e-learning en français pour apprendre l'IA.
- 2 cours gratuits + 3 cours premium (97 chapitres au total)
- Abonnement mensuel via Stripe
- Auth + base de données via Supabase
- Interface principalement en français, support i18n FR/EN

---

## Stack technique

| Technologie | Version | Usage |
|---|---|---|
| Next.js | 16.1.6 | Framework (App Router) |
| React | 19.2.3 | UI |
| TypeScript | 5 | Typage |
| Tailwind CSS | 4 | Styling |
| Supabase | @supabase/ssr 0.8 | Auth + PostgreSQL |
| Stripe | 20.4.0 | Paiements / abonnements |
| shadcn/ui + Radix UI | — | Composants UI |
| pdf-lib / pdfkit | — | Génération PDF |

Commandes clés :
```bash
npm run dev       # Dev server (webpack mode)
npm run build     # Build production
npm run lint      # ESLint
```

---

## Architecture

```
src/
├── app/                        # Next.js App Router
│   ├── page.tsx                # Homepage
│   ├── cours/                  # Liste des cours
│   │   └── [slug]/             # Détail cours
│   │       └── chapitres/
│   │           └── [num]/      # Chapitre + quiz
│   ├── compte/                 # Dashboard utilisateur (protégé)
│   ├── connexion/              # Login
│   ├── inscription/            # Register
│   ├── api/
│   │   ├── stripe/checkout/    # POST → crée session Stripe
│   │   ├── stripe/portal/      # Stripe customer portal
│   │   └── webhooks/stripe/    # Webhook Stripe → met à jour Supabase
│   └── auth/callback|confirm   # Supabase OAuth callbacks
├── components/
│   ├── home/                   # Sections homepage (hero, faq, testimonials...)
│   ├── courses/                # course-card, course-grid, paywall, buy-button
│   ├── chapter/                # chapter-content, chapter-nav, section-renderers/
│   ├── quiz/                   # quiz-container, quiz-question, inline-quiz
│   ├── account/                # account-dashboard
│   └── Header.tsx / Footer.tsx / MobileNav.tsx
├── lib/
│   ├── access.ts               # hasAccessToCourse() — contrôle d'accès principal
│   ├── courses.ts              # Liste des cours + FREE_SLUGS / PREMIUM_SLUGS
│   ├── stripe.ts               # Singleton Stripe
│   ├── stripe-helpers.ts       # getOrCreateStripeCustomer() + getServiceSupabase()
│   ├── supabase/
│   │   ├── client.ts           # Client browser
│   │   ├── server.ts           # Client serveur (cookies)
│   │   └── middleware.ts       # updateSession() + protection /compte
│   └── i18n/                   # context.tsx + translations.ts (FR/EN)
├── content/
│   ├── types.ts                # ChapterSection, QuizQuestion, Chapter, CourseContent
│   ├── index.ts                # getCourseContent(slug) — chargement lazy
│   └── courses/                # ia-de-a-a-z.ts, maitriser-outils-ia.ts, etc.
├── hooks/
│   └── useSubscription.ts      # isPro, status, loading — realtime Supabase
└── config/
    └── site.ts                 # siteConfig (nom, url, navigation)
```

---

## Base de données Supabase

### Tables principales

**`profiles`** (liée à `auth.users`)
```sql
id                    uuid (= auth.users.id)
subscription_status   text  -- "free" | "pro" | "past_due"
subscription_id       text  -- Stripe subscription ID
stripe_customer_id    text  -- Stripe customer ID
subscription_end_date timestamptz
```

**`purchases`** (achats legacy one-time)
```sql
id          uuid
user_id     uuid
course_slug text
```

---

## Logique d'accès aux cours

`src/lib/access.ts` — `hasAccessToCourse(courseSlug)` :
1. Cours gratuit (`FREE_SLUGS`) → accès libre, auth optionnelle
2. Cours premium → user connecté + `profiles.subscription_status === "pro"`
3. Fallback legacy → `purchases` table (achat one-time ou "pack-complet-ia-2026")

---

## Flux Stripe

1. User clique "S'abonner" → `POST /api/stripe/checkout`
2. Stripe redirige vers `success_url: /compte?success=true`
3. Webhook `POST /api/webhooks/stripe` gère les events :
   - `checkout.session.completed` → `subscription_status = "pro"`
   - `customer.subscription.updated` → sync status
   - `customer.subscription.deleted` → `subscription_status = "free"`
   - `invoice.payment_failed` → `subscription_status = "past_due"`

---

## Variables d'environnement requises

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=          # Utilisé côté serveur uniquement
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRICE_PRO_MONTHLY=           # ID du price Stripe
NEXT_PUBLIC_BASE_URL=               # URL de l'app (prod: https://learnai-gules.vercel.app)
```

---

## Conventions de code

- **Langue de l'interface** : Français (labels, messages d'erreur, contenu)
- **Composants serveur** par défaut, `"use client"` uniquement si nécessaire
- **Imports** : alias `@/` pour `src/`
- **Styling** : Tailwind 4 + `cn()` (clsx + tailwind-merge) pour les classes conditionnelles
- **shadcn/ui** : composants dans `src/components/ui/`
- **Pas de tests** actuellement dans le projet

---

## Points de sécurité (audit 2026-04-14)

- `SUPABASE_SERVICE_ROLE_KEY` ne doit jamais être exposé côté client
- Vérification signature webhook Stripe dans `constructEvent()`
- `hasAccessToCourse()` est le point d'entrée unique pour le contrôle d'accès
- Middleware protège uniquement `/compte` — les pages cours vérifient l'accès dans les Server Components
- `/auth/callback` : le paramètre `next` est validé pour bloquer les open redirects (`safeRedirectPath()`)
- Toutes les variables d'env sont validées explicitement au démarrage (plus de `!` non-null assertions)
- Webhook fallback : si `supabase_user_id` absent des métadonnées Stripe → lookup par `stripe_customer_id`
- `/compte/page.tsx` : `export const dynamic = "force-dynamic"` pour éviter le pre-rendering sans env vars

---

## Déploiement

- **Plateforme** : Vercel
- **URL prod** : https://learnai-gules.vercel.app
- **Base de données** : Supabase cloud
