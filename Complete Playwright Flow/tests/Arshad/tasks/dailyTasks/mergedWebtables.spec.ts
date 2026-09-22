import { test } from '@playwright/test';
import { MergedTableSteps } from '../../../steps/mergedWebtables.step';
//16.07.2025
test.describe('Merged WebTable Tests', () => {

  test('Shopping Table - Verify total', async ({ page }) => {
    const baseUrls = test.info().config.metadata.baseUrls;
    await page.goto(baseUrls.shopping, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });

    const steps = new MergedTableSteps(page);
    await steps.verifyTotalCalculation();
  });

  test('Simple Table - Print Email for "Koushik"', async ({ page }) => {
    const baseUrls = test.info().config.metadata.baseUrls;
    await page.goto(baseUrls.simple, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });

    const steps = new MergedTableSteps(page);
    await steps.printEmailByFirstName('Koushik');
  });

  test('Simple Table - Tick checkbox for "Yashwanth"', async ({ page }) => {
    const baseUrls = test.info().config.metadata.baseUrls;
    await page.goto(baseUrls.simple, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });

    const steps = new MergedTableSteps(page);
    await steps.checkCheckboxByFirstName('Yashwanth');
  });

  test('Simple Table - Print row data for last name "Man"', async ({ page }) => {
    const baseUrls = test.info().config.metadata.baseUrls;
    await page.goto(baseUrls.simple, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });

    const steps = new MergedTableSteps(page);
    await steps.printRowByLastName('Man');
  });

  test('Dessert Table - Sorting Verification', async ({ page }) => {
    const baseUrls = test.info().config.metadata.baseUrls;
    await page.goto(baseUrls.desserts, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });

    const steps = new MergedTableSteps(page);
    await steps.captureOriginalDessertData();

    console.log('Ascending:');
    await steps.validateSorting();

    console.log('Descending:');
    await steps.validateSorting();

    console.log('Unsorted:');
    await steps.validateSorting();
  });
});
