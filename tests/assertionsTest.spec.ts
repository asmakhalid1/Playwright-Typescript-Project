import {test, expect} from '@playwright/test'

test("Visible/Hidden Assertion", async({page})=>{
    await page.goto("https://www.letskodeit.com/practice");
    await expect(page.locator('[name="show-hide"]')).toBeVisible();
    await page.locator('[name="show-hide"]').fill('AsmaK');
    await page.locator('#hide-textbox').click();
    await expect(page.locator('[name="show-hide"]')).toBeHidden();
    await page.locator('#show-textbox').click();
    await expect(page.locator('[name="show-hide"]')).toBeVisible();
})

test("Present/NotPresent Assertion", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/add_remove_elements/");
    await expect(page.locator('[onclick="deleteElement()"]')).not.toHaveCount(1);
    await page.locator('[onclick="addElement()"]').click();
    await expect(page.locator('[onclick="deleteElement()"]')).toHaveCount(1);
    await page.locator('[onclick="addElement()"]').click();
    await expect(page.locator('[onclick="deleteElement()"]')).toHaveCount(2);
    await page.locator('(//button[@onclick="deleteElement()"])[1]').click();
    await expect(page.locator('[onclick="deleteElement()"]')).toHaveCount(1);
    await page.locator('(//button[@onclick="deleteElement()"])[1]').click();
    await expect(page.locator('[onclick="deleteElement()"]')).toHaveCount(0);
})

test("Text Match/Mismatch Assertion", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await page.locator('[name="username"]').fill("Admin");
    await page.locator('//input[@placeholder="password"]').fill("admin123");
    await page.locator('[type="submit"]').click();
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toBeVisible();
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toHaveText('Dashboard');
    await page.locator('a[href="/web/index.php/performance/viewPerformanceModule"]').click();
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).toBeVisible();
    await expect(page.locator('.oxd-topbar-header-breadcrumb-module')).not.toHaveText('Dashboard');
})

test("Element Attribute Assertion", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await expect(page.locator('[name="username"]')).toHaveAttribute('placeholder', 'Username');
})

test("URL Assertion", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com");
    
    //Full url assertion
    //Method 1:
    expect(page.url()).toEqual('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Method 2:
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    //Partial url assertion
    await expect(page).toHaveURL(/demo.orangehrmlive.com/); //Giving partial url using Regex
})

test("Title Assertion", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com");
    
    //Full title assertion
    await expect(page).toHaveTitle('OrangeHRM');

    //Partial title assertion
    await expect(page).toHaveTitle(/Orange/); //Giving partial title using Regex
})

test("Screenshot Assertion", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com");
    await page.locator('[name="username"]').fill("Admin");
    await page.locator('[name="password"]').fill("admin123");
    await expect(page).toHaveScreenshot();
    //test is failing because the original screenshot was taken after entering username but not password 
})

test.only("Enabled/disabled Assertion", async({page})=>{
    await page.goto("https://letcode.in/button");
    await expect(page.locator('#home')).toBeEnabled();
    await expect(page.locator('[title="Disabled button"]')).toBeDisabled();
})