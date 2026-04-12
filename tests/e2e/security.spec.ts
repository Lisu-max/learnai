import { test, expect } from '@playwright/test';

// ============================================================
// SECURITY TESTS — auth gates, protected routes, PDF access
// ============================================================

// 1. Protected routes redirect unauthenticated users
const protectedRoutes = [
  { path: '/compte', name: 'Account page' },
  { path: '/cours/maitriser-outils-ia/chapitres', name: 'Premium chapters list' },
  { path: '/cours/maitriser-outils-ia/chapitres/1', name: 'Premium chapter content' },
  { path: '/cours/prompt-engineering-pro/chapitres/1', name: 'Prompt Engineering chapter' },
];

for (const route of protectedRoutes) {
  test(`Protected route "${route.name}" redirects unauthenticated user`, async ({ page }) => {
    await page.goto(route.path, { waitUntil: 'networkidle' });
    // Should redirect to /connexion or show auth gate
    expect(page.url()).toContain('/connexion');
  });
}

// 2. Free course chapters are accessible without auth
test('Free course chapters accessible without auth', async ({ page }) => {
  const res = await page.goto('/cours/ia-de-a-a-z/chapitres/1', { waitUntil: 'networkidle' });
  // Should NOT redirect to /connexion
  expect(page.url()).not.toContain('/connexion');
  expect(res?.status()).toBeLessThan(400);
});

// 3. PDFs not directly accessible from /public/pdfs/
test('Direct PDF access is blocked (403)', async ({ page }) => {
  const res = await page.goto('/pdfs/maitriser-outils-ia.pdf');
  expect(res?.status()).toBe(403);
});

test('Direct PDF access blocked for all slugs', async ({ page }) => {
  const slugs = [
    'maitriser-outils-ia',
    'creer-avec-ia',
    'prompt-engineering-pro',
    'ia-pour-votre-business',
    'ia-de-a-a-z',
  ];
  for (const slug of slugs) {
    const res = await page.goto(`/pdfs/${slug}.pdf`);
    expect(res?.status(), `Expected 403 for /pdfs/${slug}.pdf`).toBe(403);
  }
});

// 4. Protected PDF API returns 403 without auth
test('PDF API /api/pdf/[slug] returns 403 without auth', async ({ page }) => {
  const res = await page.goto('/api/pdf/maitriser-outils-ia');
  expect(res?.status()).toBe(403);
});

// 5. Checkout API returns 401 without auth
test('Checkout API returns 401 without auth', async ({ request }) => {
  const res = await request.post('/api/checkout', {
    data: { courseSlug: 'maitriser-outils-ia', courseLang: 'fr' },
  });
  expect(res.status()).toBe(401);
});

test('Stripe subscription checkout returns 401 without auth', async ({ request }) => {
  const res = await request.post('/api/stripe/checkout');
  expect(res.status()).toBe(401);
});

// 6. Checkout rejects invalid course slugs
test('Checkout rejects invalid course slug', async ({ request }) => {
  const res = await request.post('/api/checkout', {
    data: { courseSlug: '../../../etc/passwd', courseLang: 'fr' },
  });
  // Should be 401 (no auth) or 400 (validation) — NOT 200 or 500
  expect([400, 401]).toContain(res.status());
});

// 7. Rate limiting on checkout (basic check — not exhaustive)
test('Checkout rate limiting returns 429 after excessive requests', async ({ request }) => {
  const requests = Array.from({ length: 12 }, () =>
    request.post('/api/checkout', {
      data: { courseSlug: 'maitriser-outils-ia', courseLang: 'fr' },
    })
  );
  const responses = await Promise.all(requests);
  const statuses = responses.map((r) => r.status());
  // At least one should be 429 (rate limited) after 10 requests
  expect(statuses).toContain(429);
});
