import {test, expect} from '@playwright/test'
test("Simple Alert Test", async({page})=>{
    await page.goto("http://the-internet.herokuapp.com/javascript_alerts");
    //We write the assertion of the dialog box before we trigger it because 
    // once the dialog box is open we cannot communicate with the browser
    page.on('dialog', async(alertPar)=>{
        const alertMessage = alertPar.message();
        expect(alertMessage).toEqual('I am a JS Alert');
        await alertPar.accept();
    })
    await page.locator('button[onclick="jsAlert()"]').click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
})

test("Confirmation - OK Alert Test", async({page})=>{
    await page.goto("http://the-internet.herokuapp.com/javascript_alerts");
    //We write the assertion of the dialog box before we trigger it because 
    // once the dialog box is open we cannot communicate with the browser
    page.on('dialog', async(alertPar)=>{
        const alertMessage = alertPar.message();
        expect(alertMessage).toEqual('I am a JS Confirm');
        await alertPar.accept();
    })
    await page.locator('button[onclick="jsConfirm()"]').click();
    await expect(page.locator('#result')).toHaveText('You clicked: Ok');
    // await page.locator('button[onclick="jsPrompt()"]').click();
    // await page.pause();
})

test("Confirmation - Cancel Alert Test", async({page})=>{
    await page.goto("http://the-internet.herokuapp.com/javascript_alerts");
    //We write the assertion of the dialog box before we trigger it because 
    // once the dialog box is open we cannot communicate with the browser
    page.on('dialog', async(alertPar)=>{
        const alertMessage = alertPar.message();
        expect(alertMessage).toEqual('I am a JS Confirm');
        await alertPar.dismiss();
    })
    await page.locator('button[onclick="jsConfirm()"]').click();
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
})

test("Prompt Alert Test", async({page})=>{
    await page.goto("http://the-internet.herokuapp.com/javascript_alerts");
    //We write the assertion of the dialog box before we trigger it because 
    // once the dialog box is open we cannot communicate with the browser
    page.on('dialog', async(alertPar)=>{
        const alertMessage = alertPar.message();
        expect(alertMessage).toEqual('I am a JS prompt');
        await alertPar.accept('Testing123');
    })
    await page.locator('button[onclick="jsPrompt()"]').click();
    await expect(page.locator('#result')).toHaveText('You entered: Testing123');
})

test("Prompt Alert Test with Cancel button", async({page})=>{
    await page.goto("http://the-internet.herokuapp.com/javascript_alerts");
    //We write the assertion of the dialog box before we trigger it because 
    // once the dialog box is open we cannot communicate with the browser
    page.on('dialog', async(alertPar)=>{
        const alertMessage = alertPar.message();
        expect(alertMessage).toEqual('I am a JS prompt');
        await alertPar.dismiss();
    })
    await page.locator('button[onclick="jsPrompt()"]').click();
    await expect(page.locator('#result')).toHaveText('You entered: null');
})