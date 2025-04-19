import { test, expect } from "@playwright/test";

test('Drag and drop - Approach 1',async({page})=>{
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    /*we are using the xpath to div and text because the id contains numbers, 
     which can be problematic sometimes*/
    const washington = page.locator('//div[@id="box3"] [text()="Washington"]');
    const unitedstates = page.locator('//div[@id="box103"] [text()="United States"]');
    await washington.hover();
    await page.mouse.down();
    await unitedstates.hover();
    await page.mouse.up();
})

test('Drag and drop - Approach 2',async({page})=>{
    await page.goto('http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    const washington = page.locator('//div[@id="box3"] [text()="Washington"]');
    const unitedstates = page.locator('//div[@id="box103"] [text()="United States"]');
    await washington.dragTo(unitedstates);
})