import {test, expect} from '@playwright/test'

test("Single Tab Handling Test", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html");
    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button:has-text("click")')
    ])
    await page.pause();
    await newTab.waitForLoadState('networkidle');
    await newTab.locator('a[href="/downloads"]').click();
    await newTab.locator('a[href="/documentation"]').click();
    await newTab.close();
})

test("Single Window Handling Test", async({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.locator('a[href="#Seperate"]').click();
    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('button[onclick="newwindow()"]')
    ])
    await page.pause();
    await newWindow.waitForLoadState('networkidle');
    await newWindow.locator('a[href="/downloads"]').click();
    await newWindow.locator('a[href="/documentation"]').click();
    await newWindow.close();
})

test("Multi Tab Handling Test", async({page})=>{
    test.setTimeout(60000)
    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");
    const [multipleTab] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('#newTabsBtn')
    ])
    await page.pause();
    await multipleTab.waitForLoadState('domcontentloaded');
    const pages = multipleTab.context().pages();
    await pages[1].bringToFront();
    await pages[1].locator('#firstName').fill('Asma');
    await pages[2].bringToFront();
    await pages[2].locator('#alertBox').click();
    await multipleTab.close();
})

test("Multi Window Handling Test", async({page})=>{
    test.setTimeout(60000);
    await page.goto("https://www.hyrtutorials.com/p/window-handles-practice.html");
    const [multipleWindows] = await Promise.all([
        page.waitForEvent('popup'),
        await page.click('#newWindowsBtn')
    ])
    await page.pause();
    await multipleWindows.waitForLoadState('domcontentloaded');
    const pages = multipleWindows.context().pages();
    await pages[1].bringToFront();
    await pages[1].locator('[name="fName"]').fill('Asma');
    await pages[2].bringToFront();
    await pages[2].locator('#contactList > tbody > tr:nth-child(2) > td:nth-child(1) > input[type=checkbox]').check();
    await multipleWindows.close();
})
