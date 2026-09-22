// login.spec.ts
import { test } from '@playwright/test';
import { LoginPageSteps } from '../../../steps/BookStore/testcase-login.step';
//07.08.2025
test('User registers an account', async ({ page }) => {
  const loginSteps = new LoginPageSteps(page);

  // Registration
await loginSteps.gotoLoginPage();
await loginSteps.goToRegistration();
await loginSteps.fillRegistrationForm('Ben', 'Stokes', 'Stokesy', 'Captain@10');
await loginSteps.fillRecaptchaWithRetries('Ben', 'Stokes', 'Stokesy', 'Captain@10');
// await loginSteps.submitRegisterDialogHandler();
});

test('User logs in existing account', async ({ page }) => {
  const loginSteps = new LoginPageSteps(page);
  // Login
  await loginSteps.gotoLoginPage();
  await loginSteps.verifyLoginPageVisible();
  await loginSteps.login('Stokesy', 'Captain@100');
  await loginSteps.verifyLoggedIn();
});
