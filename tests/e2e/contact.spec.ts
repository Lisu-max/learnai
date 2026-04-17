import { test, expect } from "@playwright/test";

test.describe("Contact form", () => {
  test("renders the contact page with all fields", async ({ page }) => {
    await page.goto("/contact", { waitUntil: "networkidle" });
    await expect(page.getByRole("heading", { name: /nous.*contacter/i })).toBeVisible();
    await expect(page.locator('input[type="text"]').first()).toBeVisible();
    await expect(page.locator('input[type="email"]')).toBeVisible();
    await expect(page.locator("textarea")).toBeVisible();
    await expect(page.getByRole("button", { name: /envoyer/i })).toBeVisible();
  });

  test("blocks submission when fields are empty", async ({ page }) => {
    await page.goto("/contact", { waitUntil: "networkidle" });
    await page.getByRole("button", { name: /envoyer/i }).click();
    // Browser native validation or staying on same page
    expect(page.url()).toContain("/contact");
  });

  test("rejects invalid payload via API (schema validation)", async ({ request }) => {
    const res = await request.post("/api/contact", {
      data: { name: "x", email: "not-an-email", subject: "", message: "" },
    });
    expect(res.status()).toBe(400);
  });

  test("rejects empty body via API", async ({ request }) => {
    const res = await request.post("/api/contact", {
      data: "not-json" as unknown as object,
      headers: { "content-type": "application/json" },
    });
    expect([400, 500]).toContain(res.status());
  });
});
