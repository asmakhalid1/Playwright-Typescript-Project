import { test, expect } from '@playwright/test';

test('Handling Webtable Test', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = page.locator('[name="BookTable"]');

    const rows = table.locator('tbody tr');
    const rowCount = await rows.count();
    console.log(rowCount);

    const columns = table.locator('tbody th');
    const columnCount = await columns.count();
    console.log(columnCount);
});

test('Select Single Checkbox Test', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    const table = page.locator('#productTable');

    const rows = table.locator('tbody tr');
    const columns = table.locator('thead tr th');

    const matchedRows = rows.filter({
        has: page.locator('td'),
        hasText: 'Tablet'
    });
    
    matchedRows.locator('[type="checkbox"]').check();
    await page.pause();
});

//Write a test to check a checkbox on pagination page 2

