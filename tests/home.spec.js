import { test, expect } from "@playwright/test";

test("Homepage validation", async ({ page }) => {
  await page.goto("http://localhost:5173/");
  await expect(page).toHaveTitle("React with playwright");
  await page.waitForTimeout(2000);
});
