import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  expect.soft(page).toHaveTitle(/OrangeHRM/)
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeEmpty();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.screenshot({path:'tests/Screenshots/'+Date.now()+'FullPage.png', fullPage:true})
  await page.getByRole('link', { name: 'Time' }).click();

  await page.getByRole('textbox', { name: 'Type for hints...' }).click()
  
  await expect(page.getByRole('textbox', { name: 'Type for hints...' })).toBeEmpty();
  
});