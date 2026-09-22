// tests/integration/checkbox-autocomplete.spec.ts
import { test } from '@playwright/test';
import { CheckboxAutocompleteIntegration } from '../../../steps/testcase-integration1.step';
//11.08.2025
test('US1046_IT - Integration Test: Checkbox and Autocomplete actions', async ({ page }) => {
  const integrationFlow = new CheckboxAutocompleteIntegration(page);

  console.log('Starting Integration Test');
  await integrationFlow.runIntegrationFlow();
  console.log('Integration Test completed successfully.');
});
