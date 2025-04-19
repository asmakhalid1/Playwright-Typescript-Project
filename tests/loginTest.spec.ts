import {test, expect} from '@playwright/test'

test("Orange HRM Login Test", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await page.locator('[name="username"]').fill("Admin");
    await page.locator('[name="password"]').fill("admin123");
    await page.locator('[type="submit"]').click();
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toBeVisible(); 
    await page.pause();
})