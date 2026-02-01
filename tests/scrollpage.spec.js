const { test, expect } = require('@playwright/test')

test("Scrolling pf page", async ({ page }) => {

    await page.goto('https://practicetestautomation.com/practice-test-login/');
    await page.waitForTimeout(4000);
    // await page.evaluate(() => {
    //     window.scrollBy(0, 700);
    // })
    // await page.waitForTimeout(4000);
    // await page.evaluate(() => {
    //     window.scrollBy(0, -400);
    // })
    //await page.waitForTimeout(4000);
    const casetext = await page.locator("//h5[text()='Test case 3: Negative password test']");
    await casetext.scrollIntoViewIfNeeded();
    await page.waitForTimeout(4000);

    const casetext1 = await page.locator("//h2[text()='Test login']");
    await casetext1.scrollIntoViewIfNeeded();
    await page.waitForTimeout(4000);
})