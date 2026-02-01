const { test, expect } = require('@playwright/test')

test('Select Date in Calender', async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(2000);
    let DatePicker = await page.locator("//p[text()='Date Picker 1 (mm/dd/yyyy): ']");
    await DatePicker.scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    const year = "2028";
    const month = "February";
    const date = "28";
    await page.waitForTimeout(2000);
    await page.locator("//input[@id='datepicker']").click();
    await page.waitForTimeout(2000);
    while (true) {
        const presentyear = await page.locator("//span[@class='ui-datepicker-year']").textContent()
        const presentMonth = await page.locator("//span[@class='ui-datepicker-month']").textContent()
        if (presentyear == year && presentMonth == month) {
            break;
        }   
        await page.locator("//span[text()='Next']").click();
      //  await page.locator("//span[text()='Prev']").click();
    }
    await page.waitForTimeout(4000);
    const dates = await page.$$("//a[@class='ui-state-default']")
    for (const dt of dates) {
        if (await dt.textContent() == date) {
            await dt.click();
            break;
        }
    }
    
})