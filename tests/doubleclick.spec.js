const { test, expect } = require('@playwright/test')

test("Double click", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/#")
    await page.waitForTimeout(4000);
    const Doubleclick = await page.locator("//h2[text()='Double Click']")
    await Doubleclick.scrollIntoViewIfNeeded();
    await page.waitForTimeout(4000);
    const dbclickbutton = await page.locator("//button[text()='Copy Text']")
    await dbclickbutton.dblclick();
    const field2 = await page.locator("//input[@id='field2']")
    await expect(field2).toHaveValue("Hello World!");
    await page.waitForTimeout(3000);
    const pointme=await page.locator("//button[text()='Point Me']")
    await pointme.hover();
    const mobiles=await page.locator("//a[text()='Mobiles']")
    await expect(mobiles).toHaveText("Mobiles");
    await page.waitForTimeout(3000);
})