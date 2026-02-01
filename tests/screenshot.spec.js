const { test, expect } = require('@playwright/test')

test('Home Page screenshot', async ({ page }) => {

    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000)
    await page.screenshot({ path: 'tests/screenshots/' + 'HomePage.png' });
})
test('Amazon full Page Screenshot', async ({ page }) => {

    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000)
    await page.screenshot({ path: 'tests/screenshots/' + 'FullPage.png', fullPage: true });

})


test.only('Element ScreenShot', async ({ page }) => {

    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(3000)

    const text=await page.locator("//h2[text()='Revamp your home in style']")
    await text.screenshot({ path: 'tests/screenshots/' + 'Element.png'});

})