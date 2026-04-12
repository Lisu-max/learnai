import { chromium, FullConfig } from "@playwright/test";

/**
 * Global setup — creates an authenticated session for the test user
 * and saves it to tests/.auth/user.json so auth tests can reuse it.
 *
 * Test user: test-playwright@learnai.fr / TestLearnAI2026!
 * Created in Supabase via SQL migration (auth.users table)
 */
export default async function globalSetup(_config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("http://localhost:3000/connexion", { waitUntil: "networkidle" });

  // Fill login form
  await page.fill('input[name="email"]', "test-playwright@learnai.fr");
  await page.fill('input[name="password"]', "TestLearnAI2026!");
  await page.click('button[type="submit"]');

  // Wait for redirect after login
  await page.waitForURL("http://localhost:3000/", { timeout: 10000 });

  // Save auth state (cookies + localStorage with Supabase session)
  await page.context().storageState({ path: "tests/.auth/user.json" });

  await browser.close();
  console.log("[global-setup] Auth session saved to tests/.auth/user.json");
}
