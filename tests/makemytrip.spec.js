const { test, expect } = require('@playwright/test')

test('Make My trip dropdown', async ({ page }) => {

    await page.goto("https://www.makemytrip.com/");
    await page.waitForTimeout(3000);
    await page.locator("//span[@data-cy='closeModal']").click();
    await page.waitForTimeout(3000);
    await page.locator("//input[@data-cy='fromCity']").click();
    await page.waitForTimeout(3000);
    //let options = await page.$$("//span[@class='revampedCityName']")
    let options=await page.$$("//p[@class='revampedAirportName']")
    for (let op of options) {
        let value = await op.textContent();
        console.log(value);
    }
   await page.waitForTimeout(3000);
})