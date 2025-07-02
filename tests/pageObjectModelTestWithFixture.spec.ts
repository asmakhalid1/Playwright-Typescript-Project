import {test, expect} from '../fixtures/pomFixture';

test("Orange HRM Login Test with valid credentials", async({page, loginPage})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com");
    
    await loginPage.enterUserName('Admin');
    await loginPage.enterPassword('admin123');
    await loginPage.clickLogin();
});