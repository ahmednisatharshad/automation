import { test, expect } from '@playwright/test';

test('keyboard', async ({ page }) => {
  await  page.waitForTimeout(5000)
  await page.goto('https://demoqa.com/text-box');
  
  await page.getByRole('textbox', { name: 'Current Address' }).click();
  await page.getByRole('textbox', { name: 'Current Address' }).fill('Chennai');

  await page.getByRole('textbox', { name: 'Current Address' }).press('Control+A') 
  await page.getByRole('textbox', { name: 'Current Address' }).press('Control+C')
  await page.locator('#permanentAddress').click();
  await page.locator('#permanentAddress').press('Control+V')
  await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Copy_paste_screenshot.png'})
  await page.keyboard.down('Tab')  //To press
  await page.keyboard.up('Tab')    //To release
  await page.getByRole('button', { name: 'Submit' }).click();
});