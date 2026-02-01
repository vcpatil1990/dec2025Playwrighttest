const { test, expect } = require('@playwright/test')

test('builtin assertions', async ({ page }) => {

    await page.goto("https://demo.nopcommerce.com/register");
    await page.waitForTimeout(3000);
    await expect.soft(page).toHaveURL("https://demo.nopcommerce.com/register");
    await expect.soft(page).toHaveTitle("nopCommerce demo store. Register");
    await page.waitForTimeout(3000);
    const logo=await page.locator("//div[@class='header-logo']")
    await expect.soft(logo).toBeVisible();
    await page.waitForTimeout(3000);
    const searchbox=await page.locator("//input[@id='small-searchterms']")
    expect.soft(searchbox).toBeEnabled()
    const Male_Radio_button=await page.locator("//input[@id='gender-male']")
    await Male_Radio_button.click();
    await expect.soft(Male_Radio_button).toBeChecked();
    await page.waitForTimeout(3000);
    const regbutton=await page.locator("#register-button");
    await expect.soft(regbutton).toHaveAttribute('type','submit');
    await page.waitForTimeout(3000);

    const text=await page.locator("//div[@class='page-title']")
    await expect.soft(text).toHaveText("Register");
    await expect.soft(text).toContainText("Reg");
    await page.waitForTimeout(3000);

    const firstname=await page.locator("#FirstName")
    await firstname.fill("Snehal");
    await expect(firstname).toHaveValue("Snehal");
    await page.waitForTimeout(3000);

    // await page.goto("https://demo.nopcommerce.com/computers");

    // const options=await page.locator("//h2//a")
    // await expect(options).toHaveCount(3)
    //  await page.waitForTimeout(3000);

})