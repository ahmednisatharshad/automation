import {expect, test} from '@playwright/test';

test('Web Url', async ({ page }) => {
    await page.goto('https://www.letskodeit.com/practice');
    //expect(page.locator('#bmwradio')).toBeChecked()
    //Radio
   const radio1 = await page.locator('#bmwradio')
   await radio1.check()
   await expect(radio1).toBeChecked();
   const radio2 = await page.locator('#hondaradio')
   await radio2.check()
   await expect(radio2).toBeChecked();
    //check
    await page.locator('#bmwcheck').check();
    await page.locator('#benzcheck').check();
    await page.locator('#hondacheck').check();
    await page.locator('#benzcheck').uncheck();

 // Generic click
 await page.locator('id=hide-textbox').click();
 await page.locator('#displayed-text').waitFor({ state: 'visible', timeout: 10000 });
 await expect(page.locator('#displayed-text')).toBeEnabled();

 // Double click
 await page.getByText('Item').dblclick();

 // Right click
 await page.getByText('Item').click({ button: 'right' });


 await page.waitForTimeout(3000)
 await page.close()
 //expect(await page)
});
