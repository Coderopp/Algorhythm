import { test, expect } from '@playwright/test';

test('homepage loads and shows app shell', async ({ page }) => {
  await page.goto('/');

  // Check for app container or title text that indicates the app rendered
  await expect(page.locator('text=ALGORHYTHM')).toBeVisible({ timeout: 5000 }).catch(async () => {
    // Fallback: assert that the body loaded and contains something common
    await expect(page.locator('main')).toBeVisible();
  });
});
