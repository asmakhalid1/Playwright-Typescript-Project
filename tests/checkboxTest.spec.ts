import { test, expect } from '@playwright/test';

test('Regular Single Left Click Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    const cricket = page.locator('#checkbox1');
    const movies = page.locator('#checkbox2');
    const hockey = page.locator('#checkbox3');

    //Default state
    expect(cricket).not.toBeChecked();
    expect(movies).not.toBeChecked();
    expect(hockey).not.toBeChecked();

    await cricket.check();
    await movies.check();
    expect(await cricket.isChecked()).toBeTruthy();
    expect(await movies.isChecked()).toBeTruthy();
    expect(await hockey.isChecked()).toBeFalsy();

    await cricket.uncheck();
    expect(await cricket.isChecked()).toBeFalsy();
});

