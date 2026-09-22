import { test, expect } from '@playwright/test';
import { DemoTaskSteps } from '../../../steps/demoHomepage.step';
//18.07.2025
test('Selenium Training Registration Flow with Form Submission', async ({ page }) => {
  const baseUrl = test.info().config.metadata.baseUrls.demourl;
  await page.goto(baseUrl, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });

  const steps = new DemoTaskSteps(page);

  await expect(page).toHaveTitle(/Tools QA - Selenium Training/i);
  await steps.verifyCourseTitleVisible();
  await steps.clickGoToRegistration();
  await steps.verifyRegistrationTextVisible();
  await steps.fillRegistrationForm();
  await steps.submitFormAndVerifyError();

  await steps.navigateToHomeAndVerify();

  //await steps.takeScreenshot('after_returning_home.png');

  // await steps.verifyRedirectUrl('https://demo.toolsqa.com/selenium-training/thank-you');
});
