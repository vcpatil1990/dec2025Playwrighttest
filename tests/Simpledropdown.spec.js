const { test, expect } = require('@playwright/test')

test('Simple Dropdown', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);
    const country = await page.locator("//label[text()='Country:']");
    await country.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await page.locator("//select[@id='country']").selectOption({label:'Brazil'});
    await page.waitForTimeout(3000);
    await page.locator("//select[@id='country']").selectOption("Japan");
    await page.waitForTimeout(3000);
    await page.locator("//select[@id='country']").selectOption({value:'france'});
    await page.waitForTimeout(3000);
    await page.locator("//select[@id='country']").selectOption({index:1});
    await page.waitForTimeout(3000);
    await page.selectOption("//select[@id='country']","United Kingdom");
    await page.waitForTimeout(3000);
    const options = await page.$$("//select[@id='country']//option");
    console.log("total options are ", options.length);
    let status = false;
    for (const option of options) {
        let value = await option.textContent();
        console.log(value);
        if (value.includes("United States")) {
            status = true;
            break;
        }
    }
})