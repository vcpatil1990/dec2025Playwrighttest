const { test, expect } = require('@playwright/test')

test("Drag and Drop Testscript", async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/#");

    await page.waitForTimeout(5000);

    const draganddrop=await page.locator("//h2[text()='Drag and Drop']")
    await draganddrop.scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000);

    const source = await page.locator("//div[@id='draggable']");
    const dest = await page.locator("//div[@id='droppable']")

    await source.dragTo(dest);
    await page.waitForTimeout(5000);

})