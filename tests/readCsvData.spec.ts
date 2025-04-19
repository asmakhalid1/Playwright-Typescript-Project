import { test, expect } from '@playwright/test';
import fs from 'fs';//Javascript inbuilt file stream
import path from 'path';//
import {parse} from 'csv-parse/sync'
//The csv-parse package is a parser converting CSV text input into arrays or objects.
// //Installed the dependency using >npm install -D csv-parse

const orangeHrmData = parse(fs.readFileSync(path.join(__dirname,'testData','orangeHRMCreds.csv')),{
    columns:true,
    skip_empty_lines:true
});

test('Login test with valid Credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(orangeHrmData[0].username);
    await page.locator('[placeholder="Password"]').fill(orangeHrmData[0].password);
    await page.locator('[type="submit"]').click();
    await page.locator('.oxd-userdropdown').click();
    await page.locator('text=Logout').click();
});

test('Login test with invalid Credentials', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    await page.locator('[placeholder="Username"]').fill(orangeHrmData[1].username);
    await page.locator('[placeholder="Password"]').fill(orangeHrmData[1].password);
    await page.locator('[type="submit"]').click();
    await expect(page.locator('.orangehrm-login-error>.oxd-alert--error')).toBeVisible();
});

/*
Similar to Read CSV - We can write test to read data from excel
using xlsx dependency - https://www.npmjs.com/package/xlsx
*/