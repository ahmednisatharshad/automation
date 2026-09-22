import { test } from '@playwright/test';
import { AutoCompleteSteps } from '../../../steps/testcase-autocomplete.step';
//30.07.2025
test('US1025 - Auto Complete widget test on demoqa.com with dynamic option selection', async ({ page }) => {
  const autoComplete = new AutoCompleteSteps(page);

  await autoComplete.navigateToAutoCompletePage();
  await autoComplete.verifyPageHeader();
  await autoComplete.verifyPlaceholders();

  //main funtionality
  await autoComplete.selectColorsFromJson();
});
