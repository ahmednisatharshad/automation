
import { test } from '@playwright/test';
import { DemoQATestCase1Locators } from '../../../../pages/demoqatestcase1';
import { DemoQATestCase1Steps } from '../../../steps/demoqatestcase1.step';
//21.07.2025
test('US1004 - Web Tables: Update Age and Department', async ({ page }) => {

  const baseUrl = test.info().config.metadata.baseUrls.testcaseurl;
  await page.goto(baseUrl, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });

  const locators = new DemoQATestCase1Locators(page);
  const steps = new DemoQATestCase1Steps(locators);
// Accessing the first row data and validates it
  await test.step('Step 1: Validate initial values - Age: 39, Department: Insurance', async () => {
    await steps.validateInitialValues('39', 'Insurance');
  });
//Updating both Age and Department
  await test.step('Step 2: Update Age from 39 to 35', async () => {
    await steps.updateAge('35');
  });

  await test.step('Step 3: Update Department from Insurance to Bank', async () => {
    await steps.updateDepartment('Bank');
  });
//Validating changed data
  await test.step('Step 4: Validate updated values - Age: 35, Department: Bank', async () => {
    await steps.validateUpdatedValues('35', 'Bank');
  });
});
