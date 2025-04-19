import { test, expect } from '@playwright/test';
import {DateTime} from 'luxon' 
//Luxon is a JavaScript library that makes it easier to work with date and time.
//Installed the dependency using >npm install -D luxon

test('Select Date using the fill() method', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date = '2025-04-09';
    await page.locator('#birthday').fill(date);
    //to find the format write in console in dev tools >document.getElementById("birthday").value
})
test('Select Date using the luxon', async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    await page.locator('input[placeholder="Start date"]').click();
    const monthYear = page.locator('div[class="datepicker-days"] th[class="datepicker-switch"]');
    const prevButton = page.locator('div[class="datepicker-days"] th[class="prev"]');
    const nextButton = page.locator('div[class="datepicker-days"] th[class="next"]');
    let dateToSelect = "October 2020";
    const formattedMonth = DateTime.fromFormat(dateToSelect, "MMMM yyyy" )
    /*General date conversion annotations
    MMM - month in shor form, e.g. Jan, Feb, Mar, ...
    MMMM - month in full form, e.g. January, February, ...
    yyy - year in short form, e.g. 20
    yyyy - year in full form, e.g. 2020
    */
   while(await monthYear.textContent() === dateToSelect){
    if(formattedMonth < DateTime.fromJSDate(new Date())){
        await prevButton.click();
    }
    else{
        await nextButton.click();
    }
   }
   await page.locator('//td[@class="day"] [text()="18"]').click();
})
