import { test } from '@playwright/test';
import { WebTablesLocators } from '../../../../pages/demoqatestcase2';
import { WebTablesSteps } from '../../../steps/demoqatestcase2.step';
import testData from '../../../../test-data/testcase2Data.json';
//22.07.2025
test('US1008 - Web Tables: Add, Count, Search & Delete Entry', async ({ page }) => {
  const locators = new WebTablesLocators(page);
  const steps = new WebTablesSteps(locators);

  await test.step('Step 1: Open Web Tables Page', async () => {
    await steps.openPage();
  });

  await test.step('Step 2: Insert 4 new records into the web table', async () => {
    await steps.addMultipleRecords(testData);
    console.log('4 entries are added.')
  });

  await test.step('Step 3: Count the total number of entries', async () => {
    await steps.countRecords();
  });

  await test.step('Step 4: Search inserted entry "Arshad"', async () => {
    await steps.searchRecord('Arshad');
    await steps.expectRecordVisible('Arshad');
    console.log('Arshad was searched and showing on table.')
  });

  await test.step('Step 5: Delete the searched entry "Arshad" and Verify "Arshad" is no longer in the table', async () => {
    await steps.deleteSearchedRecord();
    await steps.expectRecordNotVisible('Arshad');
    console.log('Arshad was removed and not showing on table.')
  });


});
