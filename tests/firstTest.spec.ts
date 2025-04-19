import {test, expect} from '@playwright/test'

test("My first Playwright test using Typescript", async({page})=>{
    await page.goto("http:/www.google.com");
    await expect(page).toHaveTitle("Google");
})