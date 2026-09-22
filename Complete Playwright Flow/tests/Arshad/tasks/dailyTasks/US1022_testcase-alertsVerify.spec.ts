
import { test } from '@playwright/test';
import { openAlertsPage, verifyAlertsPageContent } from '../../../steps/testcase-alertsVerify.step';
//29.07.2025
test('US1022 - Validate and Verify all the alert buttons and text ,respective popups ', async ({ page }) => {
  await openAlertsPage(page);
  await verifyAlertsPageContent(page);
});
