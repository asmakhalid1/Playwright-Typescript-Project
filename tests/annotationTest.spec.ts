import {test} from '@playwright/test'

//Completly skipped test will never execute
test.skip('Skipped test', async()=>{
    //This code will not run because the test is skipped.
})

//Conditionally skipping the test only when the browser is webkit (Safari)
test('Skip for WebKit', async({page, browserName})=>{
    //Skips the test in webkit with a message
    test.skip(browserName === 'webkit', 'This test is not implemented for Mac');
    //Add test code here, will not run for Safari
})

// Marks the test as "expected to fail" regardless of browser.
// Will show as XFAIL in test reports.
test('Not yet ready', async () => {
    test.fail(); // Indicates this test is under development or known to fail.
    // Add test logic here
  });

  // Conditionally mark test as "expected to fail" only on WebKit (Safari).
test('fail in WebKit', async ({ page, browserName }) => {
    test.fail(browserName === 'webkit', 'This feature is not implemented for Mac yet');
    // Add test code here
  });

// Skips the test with a "FIXME" flag indicating it needs to be fixed.
test.fixme('Yet to fix the test', async () => {
    // This will be highlighted in reports as something you need to fix later.
    // Add test logic when ready.
  });
  
// Marks this test as slow, increasing the timeout (typically 3x default timeout).
test('slow test', async ({ page }) => {
    test.slow(); // Useful if this test is known to take longer.
    // Add slow-running test code here.
  });

// Conditionally mark as slow only when running on WebKit (Safari).
test('slow in WebKit', async ({ page, browserName }) => {
    test.slow(browserName === 'webkit', 'This feature is slow on Mac');
    // Add test code here
  });

// Executes ONLY this test and ignores all others in the suite.
// test.only('Executes Only this test', async ({ page }) => {
//     console.log("Only Test got executed");
//     // Add code here - only this will run in the suite due to test.only()
//   });