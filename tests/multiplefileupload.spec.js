const { test, expect } = require('@playwright/test')

test('Multiple file upload', async ({ page }) => {


    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
    await page.waitForTimeout(2000);

    await page.locator("//input[@name='filesToUpload']").setInputFiles(["tests/uploadfiles/ImpJavascript.pptx",
        "tests/uploadfiles/product.txt",
        "tests/uploadfiles/Read Data from CSV Playwright Code.docx"])
    await page.waitForTimeout(5000);

})