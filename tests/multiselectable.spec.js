const { test, expect } = require('@playwright/test')

test('Multiselectable dropdown', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);
    const colour = await page.locator("//label[text()='Colors:']");
    await colour.scrollIntoViewIfNeeded();
    await page.waitForTimeout(3000);
    await page.selectOption("//select[@id='colors']", ["Blue", "Red", "Green"]);
    await page.waitForTimeout(3000);
    const options = await page.$$("//select[@id='colors']//option")
    console.log("Total options are = ", options.length);
    await page.waitForTimeout(3000);

    let content = await page.locator("//select[@id='colors']").textContent();
    await expect(content.includes("Green")).toBeTruthy();
    await page.waitForTimeout(3000);
})