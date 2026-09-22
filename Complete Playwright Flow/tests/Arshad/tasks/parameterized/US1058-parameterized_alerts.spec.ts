import { test } from '@playwright/test';
import { AlertsPage } from '../../../../pages/testcase-alertsHandling';
import { AlertsSteps } from '../../../steps/testcase-alertsHandling.step';

type AlertScenario = {
  name: string;
  run: (steps: AlertsSteps) => Promise<void>;
};

const alertScenarios: AlertScenario[] = [
  {
    name: 'Simple Alert',
    run: async (steps: AlertsSteps) => {
      await steps.handleSimpleAlert();
    }
  },
  {
    name: 'Timer Alert',
    run: async (steps: AlertsSteps) => {
      await steps.handleTimerAlert();
    }
  },
  {
    name: 'Confirm Alert',
    run: async (steps: AlertsSteps) => {
      await steps.handleConfirmAccept();
      await steps.handleConfirmDismiss();
    }
  },
  {
    name: 'Prompt Alert',
    run: async (steps: AlertsSteps) => {
      await steps.handlePromptAccept('Hello');
      await steps.handlePromptDismiss();
    }
  }
];

// Loop through each scenario to create parameterized tests
for (const scenario of alertScenarios) {
  test(`US1058 - Validate: ${scenario.name}`, async ({ page }) => {
    const alertsPage = new AlertsPage(page);
    const steps = new AlertsSteps(alertsPage);

     await steps.navigateToAlertsPage(); // Common setup
    await scenario.run(steps); // Scenario-specific steps
  });
}
