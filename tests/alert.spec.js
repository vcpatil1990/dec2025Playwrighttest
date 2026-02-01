const { test, expect } = require('@playwright/test')

test('simple alert box', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain("I am an alert box!")
        await page.waitForTimeout(3000);
        await dialog.accept(); 
    })
    const alertButton = await page.locator("//button[text()='Simple Alert']");
    await alertButton.click();
})


// test('Confirmation alert box', async ({ page }) => {
//     await page.goto("https://testautomationpractice.blogspot.com/");
//     await page.waitForTimeout(3000);
//     page.on('dialog', async dialog => {
//         expect(dialog.type()).toContain('confirm')
//         expect(dialog.message()).toContain("Press a button!")
//         await page.waitForTimeout(3000);
//         await dialog.dismiss()
//     })
//     const alertButton = await page.locator("//button[text()='Confirmation Alert']");
//     await alertButton.click();
//     await expect(page.locator("//p[text()='You pressed Cancel!']")).toHaveText("You pressed Cancel!")
//     await page.waitForTimeout(3000);
// })



test.only('Prompt alert box', async ({ page }) => {
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.waitForTimeout(3000);
    page.on('dialog', async dialog => {
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toContain("Harry Potter");
        await page.waitForTimeout(3000);
        await dialog.accept("Hi Team Automation");
    })
    const alertButton = await page.locator("//button[text()='Prompt Alert']");
    await alertButton.click();
    await expect(page.locator("//p[@id='demo']")).toHaveText("Hello Hi Team Automation! How are you today?")
    await page.waitForTimeout(3000);
})
