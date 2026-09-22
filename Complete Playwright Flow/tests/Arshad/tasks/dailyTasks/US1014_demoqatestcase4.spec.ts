import { test, expect } from '@playwright/test';
import { WebTablesSteps } from '../../../steps/demoqatestcase4.step';

//24.07.2025
test('US1014 - Verify entry is NOT added when form is closed without submitting', async ({ page }) => {
  const webTables = new WebTablesSteps(page);

  await webTables.openPage();

  await webTables.openAddForm();

  const firstName = 'Rahul';
  const lastName = 'AR';
  await webTables.fillForm(firstName, lastName, 'rahul@yahoo.in', '26', '54000', 'Govt');

  await webTables.closeForm();

  const entryExists = await webTables.isEntryPresent(firstName, lastName);
  expect(entryExists).toBe(false);
});
