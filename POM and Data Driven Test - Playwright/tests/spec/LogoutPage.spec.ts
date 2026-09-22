import { test } from '@playwright/test';
import { LogoutLocators } from '../../pages/LogoutPage';
import { LogoutSteps } from '../steps/LogoutPage.step';
import { LoginPageSteps } from '../steps/LoginPage.step';
import * as userData from '../../test-data/loginData.json';

let loginsteps: LoginPageSteps;

//26.08.2025
test.describe('Account Logout Flow', () => {
  test('@US40009_Verify Logout and Validate the logout page', async ({ page }) => {
    loginsteps = new LoginPageSteps(page);
    const logoutLocatorsPage = new LogoutLocators(page);
    const logoutSteps = new LogoutSteps(logoutLocatorsPage);

    await loginsteps.navigateToLoginPage();
    const user = userData.credential1;
    await loginsteps.login({ email: user.email, password: user.password });
    
    await logoutSteps.logout();
    await logoutSteps.verifyLogout();
  });
});
