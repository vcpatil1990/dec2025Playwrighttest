const { test, expect } = require('@playwright/test')

test('right click', async ({ page }) => {

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");

    await page.waitForTimeout(2000)
    let rightclickbutton = await page.locator("//span[text()='right click me']");
    await rightclickbutton.click({ button: 'right' });
    await page.waitForTimeout(2000)

})