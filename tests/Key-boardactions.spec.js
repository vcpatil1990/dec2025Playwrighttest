const { test, expect } = require('@playwright/test')

test('Key board actions', async ({ page }) => {

    await page.goto("https://gotranscript.com/text-compare");

    await page.waitForTimeout(3000);
    await page.locator("//textarea[@name='text1']").fill("Hi team automation pune");
    await page.waitForTimeout(2000);
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Control+C');
    await page.waitForTimeout(2000);
    await page.keyboard.press('Tab');
    await page.waitForTimeout(2000);
    await page.keyboard.press("Control+V");
    await page.waitForTimeout(2000);

})