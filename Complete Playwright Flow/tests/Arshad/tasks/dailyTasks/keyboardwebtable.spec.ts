import { test } from '@playwright/test';
import { TableNavigator } from '../../../steps/keyboardwebtable.step';
//17.07.2025
test('Edit 100th cell', async ({ page }) => {
 
  const baseUrls = test.info().config.metadata.baseUrls;
  await page.goto(baseUrls.keyboardwebtables, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });

  const navigator = new TableNavigator(page, 10, 10);

  // Edit last cell (row 9, col 9) to "Great"
  await navigator.editCell(9, 9, 'Great');

   console.log('Url not working');

});

test('Print all cells', async ({ page }) => {
  
  
  const baseUrls = test.info().config.metadata.baseUrls;
  await page.goto(baseUrls.keyboardwebtables, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });

  const navigator = new TableNavigator(page, 10, 10);

  // Print all cells using keyboard navigation and active cell
  await navigator.printAllCells();

  console.log('Url not working');
});
