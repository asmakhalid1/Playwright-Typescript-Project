import {test, expect} from '@playwright/test'
test('Upload single file', async({page})=>{
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    const uploadFile = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('[name="files[]"]').click()
    ]);
    await uploadFile[0].setFiles(['filesToUpload/playwright_1.png']);
    await page.waitForTimeout(5000);
})
test('Upload multiple files - Approach 1', async({page})=>{
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    const uploadFile = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('[name="files[]"]').click()
    ]);
    await uploadFile[0].setFiles(['filesToUpload/playwright_1.png', 'filesToUpload/playwright_2.png']);
    await page.waitForTimeout(5000);
})

test('Upload multiple files - Approach 2', async({page})=>{
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    page.setInputFiles('[name="files[]"]', ['filesToUpload/playwright_1.png', 'filesToUpload/playwright_2.png'])
    await page.waitForTimeout(5000);
})