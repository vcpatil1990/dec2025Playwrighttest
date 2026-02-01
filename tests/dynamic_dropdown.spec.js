const { test, expect } = require('@playwright/test')

test('Dynamic DropDown', async ({ page }) => {

    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(2000);
    await page.locator("//input[@placeholder='Search Amazon.in']").
    fill("mobile under 40000");
    await page.waitForTimeout(2000);
    let options = await page.$$("//div[@role='row']")
    for (let op of options) {

        let value = await op.textContent();
        console.log(value);
    }
    await page.waitForTimeout(3000);
})