const { test, expect } = require('@playwright/test')

test('inbuilt locators ', async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.waitForTimeout(3000);
    let logo = await page.getByAltText("company-branding");
    //let logo1 = await page.getByAltText("orangehrm-logo");

    await expect(logo).toBeVisible();
    // await expect(logo1).toBeVisible();
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('Username').fill('Admin');
    await page.waitForTimeout(3000);
    await page.getByPlaceholder('Password').fill('admin123');
    await page.waitForTimeout(3000);
    await page.getByRole('button', { type: 'submit' }).click();
    await page.waitForTimeout(3000);
    const username = await page.locator("//p[@class='oxd-userdropdown-name']").textContent();
    await expect(await page.getByText(username)).toBeVisible();
    await page.waitForTimeout(3000);
    
})