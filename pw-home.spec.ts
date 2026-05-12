import { test, expect } from '@playwright/test';

test('index page loads and shows expected content', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Sitio web de Bauti');
  await expect(page.locator('h1')).toContainText('Bienvenidos');
});
