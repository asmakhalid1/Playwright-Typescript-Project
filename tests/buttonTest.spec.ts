import { test, expect } from '@playwright/test';

test('Regular Single Left Click Test', async ({ page }) => {
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");
    await page.locator('#click_area').click();
    await expect(page.locator('#click_type')).toHaveText('Click');
});

test('Double Click Test', async ({ page }) => {
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");
    await page.locator('#click_area').dblclick();
    await expect(page.locator('#click_type')).toHaveText('Double-Click');
});

test('Right Click Test', async ({ page }) => {
    await page.goto("https://play1.automationcamp.ir/mouse_events.html");
    await page.locator('#click_area').click({button:'right', clickCount:5});
    await page.pause();
    await expect(page.locator('#click_type')).toHaveText('Right-Click');
});