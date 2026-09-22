import { test } from '@playwright/test';
import { DemoQATestCase1Locators } from '../../../../pages/demoqatestcase1';
import { DemoQATestCase1Steps } from '../../../steps/demoqatestcase1.step';

import { AlertsPage } from '../../../../pages/testcase-alertsHandling';
import { AlertsSteps } from '../../../steps/testcase-alertsHandling.step';

import { StudentFormSteps } from '../../../steps/testcase-registrationform.step';

import { DemoQANavigationSteps } from '../../../steps/testcase-integration2.step';
    
    

//12.08.2024
test('US1050_IT- Integration: WebTable + Alerts + Student Form', async ({ page }) => {
const pageNavigation1 = new DemoQANavigationSteps(page);
  /* ---------- 1. WEB TABLE ---------- */
  const tableLocators = new DemoQATestCase1Locators(page);
  const webTableSteps = new DemoQATestCase1Steps(tableLocators);
  

  const webTableUrl = test.info().config.metadata.baseUrls.testcaseurl;
  await page.goto(webTableUrl, { timeout: 60000, waitUntil: 'domcontentloaded' });

  await test.step('Web Table - validate and update', async () => {
    await webTableSteps.validateInitialValues('39', 'Insurance');
    await webTableSteps.updateAge('35');
    await webTableSteps.updateDepartment('Bank');
    await webTableSteps.validateUpdatedValues('35', 'Bank');
    await pageNavigation1.goToAlertsPage();
  });

  /* ---------- 2. ALERTS ---------- */
  const alertsPage = new AlertsPage(page);
  const alertsSteps = new AlertsSteps(alertsPage);
  

  await test.step('Alerts - handle all', async () => {
    
    await alertsSteps.handleSimpleAlert();
    await alertsSteps.handleTimerAlert();
    await alertsSteps.handleConfirmAccept();
    await alertsSteps.handleConfirmDismiss();
    await alertsSteps.handlePromptAccept('Hello');
    await alertsSteps.handlePromptDismiss();
    await pageNavigation1.goToPracticeForm();
  });

  /* ---------- 3. STUDENT FORM ---------- */
  const studentFormSteps = new StudentFormSteps(page);

  await test.step('Student Form - fill and validate', async () => {
    await studentFormSteps.fillForm();
    await studentFormSteps.assertSubmission();
  });
});
