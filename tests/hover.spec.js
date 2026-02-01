const { test, expect } = require('@playwright/test')

test('Mouse hover', async ({ page }) => {

    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(2000)

    const Electronics = await page.locator("//span[text()='Electronics']")
    await Electronics.hover();
    await page.waitForTimeout(2000)
    await page.locator("//a[text()='Laptop and Desktop']").click();
    await page.waitForTimeout(2000)

})