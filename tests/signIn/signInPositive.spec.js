import { test, expect } from '@playwright/test';

test('Successful `Sign in` flow test', async ({ page }) => {
  const email = ''; // TODO add email
  const password = ''; // TODO add password
  await page.goto('https://conduit.mate.academy/user/login');
  await page.getByPlaceholder('Email').fill('teste2908@gmail.com');
  await page.getByPlaceholder('Password').fill('teste2908');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByText('Your Feed')).toBeVisible();
});
