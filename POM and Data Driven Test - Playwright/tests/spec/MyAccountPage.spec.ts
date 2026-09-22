import { test } from '@playwright/test';
import { LoginPageSteps } from '../steps/LoginPage.step';
import { AccountSteps } from '../steps/MyAccountPage.step';
import * as userData from '../../test-data/loginData.json';

let loginsteps: LoginPageSteps;
let myaccountsteps: AccountSteps;
//26.08.2025
test.describe('Customer Account Page Validation', () => {
  test('@US40008_Validate the elements of My Account Page', async ({ page }) => {
    loginsteps = new LoginPageSteps(page);
    myaccountsteps = new AccountSteps(page);

    await loginsteps.navigateToLoginPage();
    const user = userData.credential1;
    await loginsteps.login({ email: user.email, password: user.password });

    await myaccountsteps.verifyAccountSection();
    await myaccountsteps.verifyOrdersSection();
    await myaccountsteps.verifyAffiliateSection();
  });
});
