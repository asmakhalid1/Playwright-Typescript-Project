import { test, expect } from '@playwright/test';

test('Downloading file Test', async ({ page }) => {
    await page.goto("https://demo.automationtesting.in/FileDownload.html#google_vignette");
    await page.locator('//textarea[@id="textbox"]').click();
    await page.locator('#textbox').pressSequentially('This is my Playwright portfolio project.');
    await page.locator('#createTxt').click();
    const download = await Promise.all([
        page.waitForEvent('download'),
        page.locator('#link-to-download').click()
    ]);
    const path = download[0].path();
    //Way 1 - using the default file name
    //const fileName = download[0].suggestedFilename();
    //Way 2 - using custom file name
    const fileName = "Playwright_downloaded_file";

    await download[0].saveAs(`./downloadedFiles/${fileName}.txt`);
    /*await page.locator('#link-to-download').click();
    We are not using the above line of code to directly click on the download link because it will create 
    the file in a temp folder and delete it after running the test*/
})