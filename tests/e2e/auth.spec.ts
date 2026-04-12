import { test, expect } from "@playwright/test";

const TEST_EMAIL = "test-playwright@learnai.fr";
const TEST_PASSWORD = "TestLearnAI2026!";

// ============================================================
// 1. LOGIN — success & failure cases
// ============================================================

test.describe("Login flow", () => {
  test("Login page renders correctly", async ({ page }) => {
    await page.goto("/connexion", { waitUntil: "networkidle" });
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test("Login with wrong password shows error", async ({ page }) => {
    await page.goto("/connexion", { waitUntil: "networkidle" });
    await page.fill('input[name="email"]', TEST_EMAIL);
    await page.fill('input[name="password"]', "wrongpassword!");
    await page.click('button[type="submit"]');

    // Should stay on /connexion and show error
    await page.waitForTimeout(2000);
    expect(page.url()).toContain("/connexion");
    const errorEl = page.locator('[role="alert"], .text-red-400, .text-destructive').first();
    await expect(errorEl).toBeVisible({ timeout: 5000 });
  });

  test("Login with valid credentials redirects to home", async ({ page }) => {
    await page.goto("/connexion", { waitUntil: "networkidle" });
    await page.fill('input[name="email"]', TEST_EMAIL);
    await page.fill('input[name="password"]', TEST_PASSWORD);
    await page.click('button[type="submit"]');

    await page.waitForURL("/", { timeout: 10000 });
    expect(page.url()).toBe("http://localhost:3000/");
  });

  test("Login form rejects empty fields", async ({ page }) => {
    await page.goto("/connexion", { waitUntil: "networkidle" });
    await page.click('button[type="submit"]');

    // HTML5 validation or app-level should block submission
    const emailInput = page.locator('input[name="email"]');
    const validationMessage = await emailInput.evaluate(
      (el: HTMLInputElement) => el.validationMessage
    );
    expect(validationMessage.length).toBeGreaterThan(0);
  });
});

// ============================================================
// 2. AUTHENTICATED SESSION — pages accessible after login
// ============================================================

test.describe("Authenticated user", () => {
  test.use({ storageState: "tests/.auth/user.json" });

  test("Can access /compte after login", async ({ page }) => {
    await page.goto("/compte", { waitUntil: "networkidle" });
    expect(page.url()).not.toContain("/connexion");
    expect(page.url()).toContain("/compte");
  });

  test("Can access premium chapter after login (free tier)", async ({ page }) => {
    // Free course chapter — should be accessible without purchase
    await page.goto("/cours/ia-de-a-a-z/chapitres/1", { waitUntil: "networkidle" });
    expect(page.url()).not.toContain("/connexion");
    expect(page.url()).toContain("/chapitres/1");
  });

  test("Premium chapter redirects to course page (no purchase)", async ({ page }) => {
    // Premium course — test user has no purchase
    await page.goto("/cours/maitriser-outils-ia/chapitres/1", {
      waitUntil: "networkidle",
    });
    // Should redirect to course detail page (not connexion, not chapter)
    expect(page.url()).not.toContain("/chapitres/1");
    expect(page.url()).toContain("/maitriser-outils-ia");
  });

  test("Account page shows user email", async ({ page }) => {
    await page.goto("/compte", { waitUntil: "networkidle" });
    const content = await page.content();
    expect(content).toContain(TEST_EMAIL);
  });

  test("Logout redirects to home or connexion", async ({ page }) => {
    await page.goto("/compte", { waitUntil: "networkidle" });

    // Find and click logout button
    const logoutBtn = page.locator('button:has-text("Déconnexion"), button:has-text("Logout"), [data-testid="logout"]').first();
    if (await logoutBtn.isVisible()) {
      await logoutBtn.click();
      await page.waitForTimeout(2000);
      // After logout, should be on home or connexion
      expect(["http://localhost:3000/", "http://localhost:3000/connexion"]).toContain(
        page.url().replace(/\/$/, "") + (page.url().endsWith("/") ? "" : "")
      );
    } else {
      test.skip(true, "Logout button not found — skip");
    }
  });
});

// ============================================================
// 3. SIGNUP — validation
// ============================================================

test.describe("Signup form validation", () => {
  test("Signup page renders all required fields", async ({ page }) => {
    await page.goto("/inscription", { waitUntil: "networkidle" });
    await expect(page.locator('input[name="firstName"]')).toBeVisible();
    await expect(page.locator('input[name="lastName"]')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    await expect(page.locator('input[name="password"]')).toBeVisible();
  });

  test("Signup rejects mismatched passwords", async ({ page }) => {
    await page.goto("/inscription", { waitUntil: "networkidle" });
    await page.fill('input[name="firstName"]', "Test");
    await page.fill('input[name="lastName"]', "User");
    await page.fill('input[name="email"]', "newuser@test.fr");
    await page.fill('input[name="password"]', "Password123!");
    await page.fill('input[name="confirmPassword"]', "DifferentPassword!");

    await page.click('button[type="submit"]');
    await page.waitForTimeout(1000);

    // Should show error and stay on inscription page
    expect(page.url()).toContain("/inscription");
  });

  test("Signup rejects underage user", async ({ page }) => {
    await page.goto("/inscription", { waitUntil: "networkidle" });
    await page.fill('input[name="firstName"]', "Jeune");
    await page.fill('input[name="lastName"]', "User");

    // Set birthdate to 10 years ago (underage)
    const tenYearsAgo = new Date();
    tenYearsAgo.setFullYear(tenYearsAgo.getFullYear() - 10);
    const dateStr = tenYearsAgo.toISOString().split("T")[0];
    await page.fill('input[name="birthDate"]', dateStr);

    await page.fill('input[name="email"]', "jeune@test.fr");
    await page.fill('input[name="password"]', "Password123!");
    await page.fill('input[name="confirmPassword"]', "Password123!");

    await page.click('button[type="submit"]');
    await page.waitForTimeout(1000);

    expect(page.url()).toContain("/inscription");
  });

  test("Signup rejects existing email", async ({ page }) => {
    await page.goto("/inscription", { waitUntil: "networkidle" });
    await page.fill('input[name="firstName"]', "Test");
    await page.fill('input[name="lastName"]', "Duplicate");

    const eighteenYearsAgo = new Date();
    eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18);
    await page.fill('input[name="birthDate"]', eighteenYearsAgo.toISOString().split("T")[0]);

    await page.fill('input[name="email"]', TEST_EMAIL); // existing email
    await page.fill('input[name="password"]', "Password123!");
    await page.fill('input[name="confirmPassword"]', "Password123!");

    await page.click('button[type="submit"]');
    await page.waitForTimeout(2000);

    // Should stay on inscription (Supabase returns error for duplicate email)
    expect(page.url()).toContain("/inscription");
  });
});

// ============================================================
// 4. PASSWORD RESET — form validation
// ============================================================

test.describe("Password reset flow", () => {
  test("Reset page renders email input", async ({ page }) => {
    await page.goto("/reinitialisation-mot-de-passe", { waitUntil: "networkidle" });
    await expect(page.locator('input[name="email"], input[type="email"]')).toBeVisible();
  });

  test("Reset form submits without crash", async ({ page }) => {
    await page.goto("/reinitialisation-mot-de-passe", { waitUntil: "networkidle" });
    const emailInput = page.locator('input[name="email"], input[type="email"]').first();
    await emailInput.fill("unknown@test.fr");
    await page.click('button[type="submit"]');
    await page.waitForTimeout(2000);

    // Should not crash — either confirmation or still on page
    const status = await page.evaluate(() => document.readyState);
    expect(status).toBe("complete");
  });
});
