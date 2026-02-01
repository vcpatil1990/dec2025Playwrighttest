const { test, expect } = require('@playwright/test')

test('Test1@sanity', async ({ page }) => {
    console.log("Test case 1 ......")

})
test('Test2@sanity', async ({ page }) => {
    console.log("Test case 2......")

})
test('Test3@smoke', async ({ page }) => {
    console.log("Test case 3......")

})
test('Test4@smokeregression', async ({ page }) => {
    console.log("Test case 4......")
})
