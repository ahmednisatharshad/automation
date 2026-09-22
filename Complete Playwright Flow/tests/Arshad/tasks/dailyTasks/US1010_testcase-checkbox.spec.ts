// tests/checkbox.spec.ts
import { test } from '@playwright/test';
import { CheckboxActions } from '../../../steps/testcase-checkbox.step';


//23.07.2025
test('US1010 - Verify checkbox selection using metadata URL', async ({ page }) => {
  const checkbox = new CheckboxActions(page);

  await checkbox.openPage();                   // Loads URL from metadata
  await checkbox.navigateToCheckboxMenu();     // Clicks on "Check Box"
  await checkbox.expandAllOptions();           // Expands all
  await checkbox.selectCheckboxItems();        // Selects checkboxes
  await checkbox.collapseNodes();              // Collapses tree
  await checkbox.verifySelectedItems();        // Validates result text
});


