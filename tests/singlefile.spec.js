const { test, expect } = require('@playwright/test')

test('Single file upload', async ({ page }) => {

    await page.goto("https://automationtesting.co.uk/fileupload.html");
    await page.waitForTimeout(3000);
    await page.locator("//input[@name='fileToUpload']").setInputFiles("tests/uploadfiles/product.txt");

    await page.waitForTimeout(3000);



})