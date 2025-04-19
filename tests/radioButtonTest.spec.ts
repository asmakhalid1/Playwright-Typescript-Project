import { test, expect } from '@playwright/test';

test('Regular Single Left Click Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/Register.html");
    const maleRadioButton = page.locator('[value="Male"]');
    const femaleRadioButton = page.locator('[value="FeMale"]');

    //Default state
    expect(maleRadioButton).not.toBeChecked();
    expect(femaleRadioButton).not.toBeChecked();

    await maleRadioButton.check();
    expect(await maleRadioButton.isChecked()).toBeTruthy();
    expect(await femaleRadioButton.isChecked()).toBeFalsy();

    await femaleRadioButton.check();
    expect(await femaleRadioButton.isChecked()).toBeTruthy();
    expect(await maleRadioButton.isChecked()).toBeFalsy();
});

