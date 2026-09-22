import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demo.automationtesting.in/Frames.html');
//SingleFrame
  await page.getByRole('link', { name: 'Single Iframe' }).click();
  await page.locator('iframe[name="SingleFrame"]').contentFrame().locator('html').click();
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').click();
  await page.locator('iframe[name="SingleFrame"]').contentFrame().getByRole('textbox').fill('Hi Everyone');


//NestedFrame
    await page.getByRole('link', { name: 'Iframe with in an Iframe' }).click();

    await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().locator('div').first().click();
    await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().locator('div').nth(1).click();
    await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').click();
    await page.locator('#Multiple').getByText('<p>Your browser does not').contentFrame().getByText('<p>Your browser does not').contentFrame().getByRole('textbox').fill('Nested Frame is working');
  });

