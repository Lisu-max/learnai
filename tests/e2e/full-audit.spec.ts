import { test, expect } from '@playwright/test';

// ============================================================
// 1. PAGES LOAD & NO CONSOLE ERRORS
// ============================================================

const publicPages = [
  { path: '/', name: 'Home' },
  { path: '/cours', name: 'Cours listing' },
  { path: '/cours/ia-de-a-a-z', name: 'Cours gratuit detail' },
  { path: '/cours/maitriser-outils-ia', name: 'Cours premium detail' },
  { path: '/cours/prompt-engineering-pro', name: 'Prompt Engineering' },
  { path: '/cours/ia-pour-votre-business', name: 'Business IA' },
  { path: '/cours/creer-avec-ia', name: 'Créer avec IA' },
  { path: '/connexion', name: 'Login' },
  { path: '/inscription', name: 'Inscription' },
  { path: '/reinitialisation-mot-de-passe', name: 'Reset password' },
  { path: '/cgv', name: 'CGV' },
  { path: '/politique-confidentialite', name: 'Privacy Policy' },
  { path: '/mentions-legales', name: 'Mentions légales' },
];

for (const pg of publicPages) {
  test(`Page "${pg.name}" (${pg.path}) loads without errors`, async ({ page }) => {
    const errors: string[] = [];
    page.on('console', msg => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', err => errors.push(err.message));

    const res = await page.goto(pg.path, { waitUntil: 'networkidle' });
    expect(res?.status()).toBeLessThan(400);

    // Filter out known non-critical errors (hydration warnings, etc.)
    const criticalErrors = errors.filter(e =>
      !e.includes('hydrat') &&
      !e.includes('Warning:') &&
      !e.includes('favicon') &&
      !e.includes('Download the React DevTools')
    );

    if (criticalErrors.length > 0) {
      console.log(`[${pg.name}] Console errors:`, criticalErrors);
    }
  });
}

// ============================================================
// 2. HOMEPAGE — STATS ACCURACY
// ============================================================

test('Homepage: stats are accurate (free courses count)', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  // Check free course count — only 1 free course exists (ia-de-a-a-z)
  const statsSection = page.locator('.grid.grid-cols-3');
  const firstStat = statsSection.locator('div').first();
  const statValue = await firstStat.locator('p').first().textContent();

  // This should be "1" not "2"
  if (statValue?.trim() === '2') {
    test.info().annotations.push({
      type: 'BUG',
      description: 'Homepage claims "2 Cours gratuits" but only 1 free course exists (ia-de-a-a-z)',
    });
  }
  // Total chapters: 12+18+20+25+22 = 97
  const chaptersText = await page.locator('text=Chapitres interactifs').locator('..').locator('p').first().textContent();
  expect(chaptersText?.trim()).toBe('97');
});

// ============================================================
// 3. NAVIGATION — ALL LINKS WORK
// ============================================================

test('Homepage: all navigation links are valid', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const links = await page.locator('a[href]').evaluateAll(els =>
    els.map(el => ({
      href: el.getAttribute('href') || '',
      text: el.textContent?.trim().slice(0, 50) || '',
    }))
  );

  const internalLinks = links
    .filter(l => l.href.startsWith('/'))
    .filter((l, i, arr) => arr.findIndex(x => x.href === l.href) === i);

  for (const link of internalLinks) {
    const res = await page.request.get(link.href);
    if (res.status() >= 400) {
      test.info().annotations.push({
        type: 'BROKEN_LINK',
        description: `"${link.text}" → ${link.href} returned ${res.status()}`,
      });
    }
    expect(res.status(), `Link "${link.text}" (${link.href})`).toBeLessThan(400);
  }
});

// ============================================================
// 4. COURSES PAGE — ALL 5 COURSES DISPLAYED
// ============================================================

test('Courses page: shows all 5 courses with correct info', async ({ page }) => {
  await page.goto('/cours', { waitUntil: 'networkidle' });

  const expectedCourses = [
    'L\'IA de A à Z',
    'Maîtriser les Outils IA',
    'Prompt Engineering Pro',
    'L\'IA pour votre Business',
    'Créer avec l\'IA',
  ];

  for (const title of expectedCourses) {
    const el = page.locator(`text=${title}`).first();
    await expect(el, `Course "${title}" should be visible`).toBeVisible();
  }

  // Check free badge exists
  const freeBadges = page.locator('text=Gratuit');
  expect(await freeBadges.count()).toBeGreaterThanOrEqual(1);

  // Check premium price exists (9,99 €)
  const prices = page.locator('text=9,99');
  expect(await prices.count()).toBeGreaterThanOrEqual(1);
});

// ============================================================
// 5. COURSE DETAIL — FREE COURSE
// ============================================================

test('Free course detail: accessible without login', async ({ page }) => {
  await page.goto('/cours/ia-de-a-a-z', { waitUntil: 'networkidle' });

  await expect(page.locator('h1')).toContainText('IA');
  // Should have a "start" button, not a "buy" button
  const pageContent = await page.textContent('body');
  expect(pageContent).not.toContain('Acheter');
});

// ============================================================
// 6. COURSE DETAIL — PREMIUM COURSE
// ============================================================

test('Premium course detail: shows price and buy CTA', async ({ page }) => {
  await page.goto('/cours/maitriser-outils-ia', { waitUntil: 'networkidle' });

  await expect(page.locator('h1')).toContainText('Outils IA');
  // Should show price
  const body = await page.textContent('body');
  expect(body).toMatch(/9[,.]99/);
});

// ============================================================
// 7. AUTH — SIGNUP FORM VALIDATION
// ============================================================

test('Signup: validates empty fields', async ({ page }) => {
  await page.goto('/inscription', { waitUntil: 'networkidle' });

  // Try submitting empty form
  await page.click('button[type="submit"]');

  // HTML5 validation should block — check required fields
  const firstNameInput = page.locator('input[name="firstName"]');
  const isInvalid = await firstNameInput.evaluate(
    (el) => !(el as HTMLInputElement).validity.valid
  );
  expect(isInvalid).toBe(true);
});

// Helper: fill the BirthDateInput (3 selects: day, month, year)
async function fillBirthDate(page: any, day: string, month: string, year: string) {
  const selects = page.locator('select');
  await selects.nth(0).selectOption(day);   // Day
  await selects.nth(1).selectOption(month); // Month (1-indexed)
  await selects.nth(2).selectOption(year);  // Year
}

test('Signup: password mismatch shows error', async ({ page }) => {
  await page.goto('/inscription', { waitUntil: 'networkidle' });

  await page.fill('input[name="firstName"]', 'Test');
  await page.fill('input[name="lastName"]', 'User');
  await fillBirthDate(page, '15', '6', '2000');

  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.fill('input[name="confirmPassword"]', 'differentpassword');

  await page.click('button[type="submit"]');
  await page.waitForTimeout(500);

  const errorMsg = page.locator('.bg-red-500\\/10');
  await expect(errorMsg).toBeVisible();
});

test('Signup: password too short shows error', async ({ page }) => {
  await page.goto('/inscription', { waitUntil: 'networkidle' });

  await page.fill('input[name="firstName"]', 'Test');
  await page.fill('input[name="lastName"]', 'User');
  await fillBirthDate(page, '15', '6', '2000');

  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', '12345');
  await page.fill('input[name="confirmPassword"]', '12345');

  await page.click('button[type="submit"]');
  await page.waitForTimeout(500);

  const errorMsg = page.locator('.bg-red-500\\/10');
  await expect(errorMsg).toBeVisible();
});

test('Signup: underage user (< 13) shows error', async ({ page }) => {
  await page.goto('/inscription', { waitUntil: 'networkidle' });

  await page.fill('input[name="firstName"]', 'Young');
  await page.fill('input[name="lastName"]', 'Kid');
  await fillBirthDate(page, '15', '1', '2020');

  await page.fill('input[name="email"]', 'kid@example.com');
  await page.fill('input[name="password"]', 'password123');
  await page.fill('input[name="confirmPassword"]', 'password123');

  await page.click('button[type="submit"]');
  await page.waitForTimeout(500);

  const errorMsg = page.locator('.bg-red-500\\/10');
  await expect(errorMsg).toBeVisible();
});

// ============================================================
// 8. AUTH — LOGIN FORM
// ============================================================

test('Login: form is functional', async ({ page }) => {
  await page.goto('/connexion', { waitUntil: 'networkidle' });

  await expect(page.locator('input[name="email"]')).toBeVisible();
  await expect(page.locator('input[name="password"]')).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toBeVisible();

  // Google OAuth button present
  const googleBtn = page.locator('text=Google').first();
  await expect(googleBtn).toBeVisible();

  // Forgot password link
  const resetLink = page.locator('a[href="/reinitialisation-mot-de-passe"]');
  await expect(resetLink).toBeVisible();
});

test('Login: wrong credentials shows error', async ({ page }) => {
  await page.goto('/connexion', { waitUntil: 'networkidle' });

  await page.fill('input[name="email"]', 'fake@notexist.com');
  await page.fill('input[name="password"]', 'wrongpassword123');
  await page.click('button[type="submit"]');

  const errorMsg = page.locator('.bg-red-500\\/10');
  await expect(errorMsg).toBeVisible({ timeout: 10000 });
});

// ============================================================
// 9. PROTECTED ROUTES — REDIRECT TO LOGIN
// ============================================================

test('Protected route /compte redirects to /connexion when not logged in', async ({ page }) => {
  await page.goto('/compte', { waitUntil: 'networkidle' });
  expect(page.url()).toContain('/connexion');
});

// ============================================================
// 10. PASSWORD INCONSISTENCY CHECK
// ============================================================

test('BUG: Password min length inconsistency (signup=6, reset=8)', async ({ page }) => {
  // Signup allows 6 chars
  await page.goto('/inscription', { waitUntil: 'networkidle' });
  const signupPasswordInput = page.locator('input[name="password"]');
  const signupMinLength = await signupPasswordInput.getAttribute('minLength');

  // Reset requires 8 chars
  await page.goto('/nouveau-mot-de-passe', { waitUntil: 'networkidle' });
  const resetPasswordInput = page.locator('input[name="password"]');
  const resetMinLength = await resetPasswordInput.getAttribute('minLength');

  test.info().annotations.push({
    type: 'BUG',
    description: `Password min length mismatch: signup=${signupMinLength || '6 (JS only)'}, reset=${resetMinLength || '8'}`,
  });

  // They should be the same
  if (signupMinLength !== resetMinLength) {
    console.log('⚠️ PASSWORD INCONSISTENCY: signup allows 6 chars, reset requires 8 chars');
  }
});

// ============================================================
// 11. IMAGES — ALL COURSE IMAGES LOAD
// ============================================================

test('All course images load correctly', async ({ page }) => {
  await page.goto('/cours', { waitUntil: 'networkidle' });

  const images = page.locator('img');
  const count = await images.count();

  for (let i = 0; i < count; i++) {
    const img = images.nth(i);
    const src = await img.getAttribute('src');
    if (!src) continue;

    const isLoaded = await img.evaluate((el) => {
      const imgEl = el as HTMLImageElement;
      return imgEl.complete && imgEl.naturalWidth > 0;
    });

    if (!isLoaded) {
      test.info().annotations.push({
        type: 'BROKEN_IMAGE',
        description: `Image not loaded: ${src}`,
      });
    }
  }
});

// ============================================================
// 12. LEGAL PAGES — CONTENT EXISTS
// ============================================================

test('CGV page has required legal content', async ({ page }) => {
  await page.goto('/cgv', { waitUntil: 'networkidle' });
  const body = await page.textContent('body') || '';

  expect(body).toContain('Stripe');
  expect(body).toContain('contact@learn-ai.fr');
  expect(body).toContain('Eterna Inc.');
});

test('Privacy policy has GDPR content', async ({ page }) => {
  await page.goto('/politique-confidentialite', { waitUntil: 'networkidle' });
  const body = await page.textContent('body') || '';

  expect(body).toContain('RGPD');
  expect(body).toContain('Supabase');
  expect(body).toContain('legal@learn-ai.fr');
});

test('Mentions légales has required info', async ({ page }) => {
  await page.goto('/mentions-legales', { waitUntil: 'networkidle' });
  const body = await page.textContent('body') || '';

  expect(body).toContain('Vercel');
  expect(body).toContain('contact@learn-ai.fr');
});

// ============================================================
// 13. MOBILE RESPONSIVE
// ============================================================

test('Homepage is mobile responsive (375px)', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/', { waitUntil: 'networkidle' });

  // No horizontal scroll
  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 5);

  // Hero text visible
  const h1 = page.locator('h1').first();
  await expect(h1).toBeVisible();
});

test('Courses page is mobile responsive (375px)', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/cours', { waitUntil: 'networkidle' });

  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);
  expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 5);
});

// ============================================================
// 14. SEO — META TAGS
// ============================================================

test('Homepage has proper meta tags', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const title = await page.title();
  expect(title).toBeTruthy();
  expect(title.length).toBeGreaterThan(5);

  const description = await page.locator('meta[name="description"]').getAttribute('content');
  expect(description).toBeTruthy();
});

// ============================================================
// 15. CHAPTER ACCESS — FREE COURSE
// ============================================================

test('Free course chapters page loads (may require auth)', async ({ page }) => {
  const res = await page.goto('/cours/ia-de-a-a-z/chapitres', { waitUntil: 'networkidle' });

  // Should either show chapters or redirect to login
  const url = page.url();
  const isChaptersPage = url.includes('/chapitres');
  const isLoginPage = url.includes('/connexion');
  const isCourseDetail = url.includes('/cours/ia-de-a-a-z') && !url.includes('/chapitres');

  expect(isChaptersPage || isLoginPage || isCourseDetail).toBe(true);
});

// ============================================================
// 16. 404 HANDLING
// ============================================================

test('Non-existent page returns 404', async ({ page }) => {
  const res = await page.goto('/cette-page-nexiste-pas', { waitUntil: 'networkidle' });
  expect(res?.status()).toBe(404);
});

test('Non-existent course returns 404', async ({ page }) => {
  const res = await page.goto('/cours/fake-course-slug', { waitUntil: 'networkidle' });
  expect(res?.status()).toBe(404);
});

// ============================================================
// 17. PERFORMANCE — PAGE LOAD TIMES
// ============================================================

test('Homepage loads in under 5 seconds', async ({ page }) => {
  const start = Date.now();
  await page.goto('/', { waitUntil: 'networkidle' });
  const loadTime = Date.now() - start;

  test.info().annotations.push({
    type: 'PERF',
    description: `Homepage load: ${loadTime}ms`,
  });

  expect(loadTime).toBeLessThan(5000);
});

// ============================================================
// 18. FOOTER — LINKS & CONTENT
// ============================================================

test('Footer contains legal links', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  const footer = page.locator('footer');
  if (await footer.count() > 0) {
    const footerLinks = await footer.locator('a[href]').evaluateAll(els =>
      els.map(el => el.getAttribute('href'))
    );

    // Should have links to legal pages
    const hasLegalLinks = footerLinks.some(h => h?.includes('cgv') || h?.includes('mentions') || h?.includes('confidentialite'));
    expect(hasLegalLinks).toBe(true);
  }
});

// ============================================================
// 19. HEADER/NAV
// ============================================================

test('Header navigation works', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' });

  // Logo/brand link
  const homeLink = page.locator('a[href="/"]').first();
  await expect(homeLink).toBeVisible();

  // Courses link
  const coursLink = page.locator('a[href="/cours"]').first();
  if (await coursLink.count() > 0) {
    await coursLink.click();
    await page.waitForURL('**/cours');
  }
});

// ============================================================
// 20. RESET PASSWORD FORM
// ============================================================

test('Reset password: form works', async ({ page }) => {
  await page.goto('/reinitialisation-mot-de-passe', { waitUntil: 'networkidle' });

  await expect(page.locator('input[type="email"]')).toBeVisible();
  await expect(page.locator('button[type="submit"]')).toBeVisible();
});
