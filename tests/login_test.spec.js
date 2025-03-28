

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login';

test('test', async ({ page }) => {


    const Login = new LoginPage(page)

    await Login.goToLoginPage()
    await Login.login('student', 'Passwrod123')



    // await page.goto('https://practicetestautomation.com/practice-test-login/');
    // await page.getByRole('textbox', { name: 'Username' }).click();
    // await page.getByRole('textbox', { name: 'Username' }).fill('student');
    // await page.getByRole('textbox', { name: 'Username' }).press('Enter');
    // await page.getByRole('textbox', { name: 'Username' }).press('Tab');
    // await page.getByRole('textbox', { name: 'Password' }).click();
    // await page.getByRole('textbox', { name: 'Password' }).fill('Password123');
    // await page.getByRole('button', { name: 'Submit' }).click();
    // await page.getByRole('link', { name: 'Log out' }).click();
});