import {test} from '@playwright/test'

test.beforeEach('Orange HRM login',async({page}) => {
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await page.locator('[name="username"]').fill("Admin");
    await page.locator('[name="password"]').fill("admin123");
    await page.locator('[type="submit"]').click();
})

test.afterEach('Orange HRM logout', async({page}) => {
    await page.locator('.oxd-userdropdown-tab').click();
    await page.locator('a[href="/web/index.php/auth/logout"]').click();
})

test('Test 1', async({page}) => {
    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
})

test('Test 2', async({page}) => {
    await page.locator('a[href="/web/index.php/pim/viewPimModule"]').click();
})
