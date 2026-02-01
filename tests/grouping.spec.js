const { test, expect } = require('@playwright/test')
test.describe('Intake record page', () => {
    test('test 1', async ({ page }) => {
        console.log("this is test 1")
    })
    test('test 2', async ({ page }) => {
        console.log("this is test 2")
    })
})

test.describe.skip('Sales page', () => {
    test('test 3', async ({ page }) => {
        console.log("this is test 3")
    })
    test('test 4', async ({ page }) => {
        console.log("this is test 4")
    })
})