import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register');
    await page.getByRole('radio', { name: 'Male', exact: true }).check();
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'First name:' }).fill('Vaibhav ');
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Last name:' }).fill('patil');
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Email:' }).fill('vcp123@gmail.com');
    await page.waitForTimeout(3000);
    await page.getByRole('textbox', { name: 'Company name:' }).fill('xyz');
    await page.waitForTimeout(3000);
});