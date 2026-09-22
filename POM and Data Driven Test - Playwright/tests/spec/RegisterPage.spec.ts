import { test } from '@playwright/test';
import { RegisterSteps } from '../steps/RegisterPage.step';
import * as userData from '../../test-data/registerData.json';

test.describe('Registration Tests Suite', () => {
  let registerSteps: RegisterSteps;

  test.beforeEach(async ({ page }) => {
    registerSteps = new RegisterSteps(page);
    await registerSteps.navigateToRegisterPage();
  });
//21.08.2025
  test('@US40004_Validate the registration flow for the application', async () => {
    await registerSteps.validateRegisterHeaderAndMenuLinksVisible();
    await registerSteps.validateRegistrationFormElementsVisible();
  });
//21.08.2025
  test('@US40005_Verify the registration function for the application', async () => {
    const user = userData.user1;
    await registerSteps.fillRegistrationForm({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phone: user.phone,
      password: user.password,
    });
    await registerSteps.submitRegistration();
    // await registerSteps.verifyRegistrationSuccess();
  });

  const negativeEmailPasswordCases = [
    {
      name: 'Email missing ".com"',
      emailMethod: 'validateEmailMissingDotCom',
    },
    {
      name: 'Email starts with @',
      emailMethod: 'validateEmailStartsWithAt',
    },
    {
      name: 'Email ends with @',
      emailMethod: 'validateEmailEndsWithAt',
    },
    {
      name: 'Password mismatch',
      passwordMethod: 'validatePasswordMismatch',
    },
    {
      name: 'Password too short',
      passwordMethod: 'validatePasswordTooShort',
    },
    {
      name: 'Password too long',
      passwordMethod: 'validatePasswordTooLong',
    },
  ];
//25.08.2025
  test.describe('@US40007_Verify the registration function with negative scenarios - email and password using parameterization', () => {
  negativeEmailPasswordCases.forEach((testCase) => {
    test(
      `Negative scenario: ${testCase.name}`,
      async () => {
        if (testCase.emailMethod) {
          await registerSteps[testCase.emailMethod]();
          console.log('Invalid Email is filled');
        }
        if (testCase.passwordMethod) {
          await registerSteps[testCase.passwordMethod]();
          console.log('Invalid Password is filled');
        }
      }
    );
  });
});
});
