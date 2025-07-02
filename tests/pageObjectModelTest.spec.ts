import {test, expect} from "@playwright/test";
import {LoginPage} from "./pages/loginPage";

test("Orange HRM Login Test with valid credentials", async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com");
    //object declaration
    const loginPage = new LoginPage(page);
    await loginPage.enterUserName('Admin');
    await loginPage.enterPassword('admin123');
    await loginPage.clickLogin();
});