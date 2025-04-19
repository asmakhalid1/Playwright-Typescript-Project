import {expect, test} from '@playwright/test'


const credentialsData = [
    {
        "username": "Admin",
        "password": "admin123"
    },
    {
        "username": "Admin123",
        "password": "admin"
    }
]

credentialsData.forEach(data =>{
    test(`Login test with Credentials ${data.username} and ${data.password}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/');
        await page.locator('[placeholder="Username"]').fill(data.username);
        await page.locator('[placeholder="Password"]').fill(data.password);
        await page.locator('[type="submit"]').click();
        await page.locator('.oxd-userdropdown').click();
        await page.locator('text=Logout').click();
      });
})