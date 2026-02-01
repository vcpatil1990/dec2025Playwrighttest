const { test, expect } = require('@playwright/test')

test.skip('test 1', async ({ page }) => {

    console.log('this is test 1')
})
test('test 2', async ({ page }) => {
    test.fixme();
    console.log('this is test 2')
})
test('test 3', async ({ page }) => {
    test.fail();
    console.log('this is test 3')
})
test.skip('test 4', async ({ page }) => {
    console.log('this is test 4')
})
test.only('test 5', async ({ page }) => {
     //test.slow();
    await page.goto("https://www.amazon.in/");
    await page.waitForTimeout(4000)
    console.log('this is test 5')
})






