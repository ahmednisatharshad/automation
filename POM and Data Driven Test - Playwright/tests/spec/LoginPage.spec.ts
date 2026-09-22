import { test } from '@playwright/test';
import { LoginPageSteps } from '../steps/LoginPage.step';
import * as userData from '../../test-data/loginData.json';

let steps: LoginPageSteps;
//22.08.2025
  test('@US40006_Validate the UI elements of the login page through my account section', async ({ page }) => {
     steps = new LoginPageSteps(page);
    await steps.navigateToLoginPage();
    await steps.validateLoginPageElements();
    await steps.validateLoginHeaderAndMenuLinksVisible();
  });

//04.09.2025
test.describe('@US40018_Verify the positive and negative scenario for the login credentials', () => {
  test.beforeEach(async ({ page }) => {
    steps = new LoginPageSteps(page);
    await steps.navigateToLoginPage();
  });

  test('Validating the "Valid" Credentials', async () => {
    const user = userData.credential1; 
    await steps.login({ email: user.email, password: user.password });
    await steps.verifyMyAccountSections();
    console.log('Account is logged in successfully')
  });

  test('Validating the "Invalid" Credentials - Username invalid', async () => {
    const user = userData.credential2; 
    await steps.login({ email: user.email, password: user.password });
    await steps.verifyInvalidLogin();
    console.log('Invalid Username is entered')
  });

   test('Validating the "Invalid" Credentials - Password invalid', async () => {
    const user = userData.credential3; 
    await steps.login({ email: user.email, password: user.password });
    await steps.verifyInvalidLogin();
    console.log('Invalid Password is entered')
  });

});
