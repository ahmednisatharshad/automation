import { test } from '@playwright/test';
import { CheckboxAutocompleteIntegration } from '../../../steps/testcase-integration1.step';
import { DemoQATestCase1Locators } from '../../../../pages/demoqatestcase1';
import { DemoQATestCase1Steps } from '../../../steps/demoqatestcase1.step';
import { AlertsPage } from '../../../../pages/testcase-alertsHandling';
import { AlertsSteps } from '../../../steps/testcase-alertsHandling.step';
import { StudentFormSteps } from '../../../steps/testcase-registrationform.step';
import { DemoQANavigationSteps } from '../../../steps/testcase-integration2.step';

const scenarios = [
  {
    id: 'US1046_IT',
    description: 'Integration Test: Checkbox and Autocomplete actions',
    runCheckboxAutocomplete: true,
    runWebTable: false,
    runAlerts: false,
    runStudentForm: false
  },
  {
    id: 'US1050_IT',
    description: 'Integration: WebTable + Alerts + Student Form',
    runCheckboxAutocomplete: false,
    runWebTable: true,
    runAlerts: true,
    runStudentForm: true
  }
];

for (const scenario of scenarios) {
  test.describe(`Integration Scenario: ${scenario.id}`, () => {

    test(`${scenario.id} - ${scenario.description}`, async ({ page }) => {

      // 1. Checkbox + Autocomplete
      if (scenario.runCheckboxAutocomplete) {
        const integrationFlow = new CheckboxAutocompleteIntegration(page);
        await integrationFlow.runIntegrationFlow();
      }

      // 2. Web Table
      if (scenario.runWebTable) {
        const pageNavigation1 = new DemoQANavigationSteps(page);
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
      }

      // 3. Alerts
      if (scenario.runAlerts) {
        const pageNavigation1 = new DemoQANavigationSteps(page);
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
      }

      // 4. Student Form
      if (scenario.runStudentForm) {
        const studentFormSteps = new StudentFormSteps(page);
        await test.step('Student Form - fill and validate', async () => {
          await studentFormSteps.fillForm();
          await studentFormSteps.assertSubmission();
        });
      }
    });

  });
}
