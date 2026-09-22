import { test } from '@playwright/test';
import { StudentFormSteps } from '../../../steps/testcase-registrationform.step';
//25.07.2025
test('US1018 - Student practice form - FILLING AND VALIDATION', async ({ page }) => {
  const baseUrls = test.info().config.metadata.baseUrls;
    await page.goto(baseUrls.studentregform, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });
  
  const steps = new StudentFormSteps(page);

  await steps.fillForm();
  await steps.assertSubmission();
});
