import {expect, test} from 'playwright/test';

test('Web Url', async ({ page }) => {
    await page.goto('https://www.demoblaze.com');
    await page.locator('id=login2').click();  
    
    await page.locator('#loginusername').fill('Rachin')
    await page.locator('#loginpassword').fill('12345')
    await page.locator('xpath=//*[@id="logInModal"]/div/div/div[3]/button[2]').click()
    await expect(page.getByText('We believe performance needs to be validated ')).toBeVisible();
    await expect(page.locator('id=nava')).toBeVisible()
    await page.waitForTimeout(5000);
    });