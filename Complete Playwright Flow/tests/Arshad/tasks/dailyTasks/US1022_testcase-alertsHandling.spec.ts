import { test } from '@playwright/test';
import { AlertsPage } from '../../../../pages/testcase-alertsHandling';
import { AlertsSteps } from '../../../steps/testcase-alertsHandling.step';

//29.07.2025
test('US1022 - Validate and Verify all the alert buttons and text ,respective popups  (without beforeEach)', async ({ page }) => {
  const alertsPage = new AlertsPage(page);
  const steps = new AlertsSteps(alertsPage);

  // Navigate once
  await steps.navigateToAlertsPage();

  // Run each test step one by one
  await steps.handleSimpleAlert();
  await steps.handleTimerAlert();
  await steps.handleConfirmAccept();
  await steps.handleConfirmDismiss();
  await steps.handlePromptAccept('Hello');
  await steps.handlePromptDismiss();
});

// test.describe('US1022 - Validate and Verify all the alert buttons and text ,respective popups ', () => {
//   let alertsPage: AlertsPage;
//   let steps: AlertsSteps;

//   test.beforeEach(async ({ page }) => {
//     alertsPage = new AlertsPage(page);
//     steps = new AlertsSteps(alertsPage);
//     await steps.navigateToAlertsPage();
//   });

//   test('Simple alert', async () => {
//     await steps.handleSimpleAlert();
//   });

//   test('Timer alert after ~5 seconds', async () => {
//     await steps.handleTimerAlert();
//   });

//   test('Confirm alert - accept', async () => {
//     await steps.handleConfirmAccept();
//   });

//   test('Confirm alert - dismiss', async () => {
//     await steps.handleConfirmDismiss();
//   });

//   test('Prompt alert - accept with input', async () => {
//     await steps.handlePromptAccept('Hello');
//   });

//   test('Prompt alert - dismiss with input', async () => {
//     await steps.handlePromptDismiss();
//   });
// });
