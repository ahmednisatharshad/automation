import { test,expect, Page } from '@playwright/test';
import { RegisterPageLocators } from '../../pages/RegisterPage';

export class RegisterSteps {
  private locators: RegisterPageLocators;
  private page: Page;
  

  constructor(page: Page) {
    this.page = page;
    this.locators = new RegisterPageLocators(page);
  }
  
  private readonly longPassword = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';

  
  async navigateToRegisterPage() {
     const url = test.info().config.metadata.baseUrls.ecommerce; 
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    await this.locators.myaccountText.hover();
    await this.locators.registerText.click();
    await expect(this.locators.registerHeading).toBeVisible();
  }

   async validateRegisterHeaderAndMenuLinksVisible() {
    
    await expect(this.locators.loginLink).toBeVisible();
    await expect(this.locators.registerLink).toBeVisible();
    await expect(this.locators.forgottenPasswordLink).toBeVisible();
    await expect(this.locators.myAccountLink).toBeVisible();
    await expect(this.locators.addressBookLink).toBeVisible();
    await expect(this.locators.wishListLink).toBeVisible();
    await expect(this.locators.orderHistoryLink).toBeVisible();
    await expect(this.locators.downloadsLink).toBeVisible();
    await expect(this.locators.recurringPaymentsLink).toBeVisible();
    await expect(this.locators.rewardPointsLink).toBeVisible();
    await expect(this.locators.returnsLink).toBeVisible();
    await expect(this.locators.transactionsLink).toBeVisible();
    await expect(this.locators.newsletterLink).toBeVisible();
    await expect(this.locators.registerHeading).toBeVisible();
    await expect(this.locators.alreadyHaveAccountText).toBeVisible();
  }

  async validateRegistrationFormElementsVisible() {
    
    await expect(this.locators.firstNameInput).toBeVisible();
    await expect(this.locators.lastNameInput).toBeVisible();
    await expect(this.locators.emailInput).toBeVisible();
    await expect(this.locators.phoneInput).toBeVisible();
    await expect(this.locators.passwordInput).toBeVisible();
    await expect(this.locators.passwordConfirmInput).toBeVisible();
    await expect(this.locators.agreeCheckboxText).toBeVisible();
    await expect(this.locators.continueButton).toBeVisible();
}

  async fillRegistrationForm(user: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
  }) {
await this.locators.firstNameInput.fill(user.firstName);

await this.locators.lastNameInput.fill(user.lastName);

await this.locators.emailInput.fill(user.email);

await this.locators.phoneInput.fill(user.phone);

await this.locators.passwordInput.fill(user.password);

await this.locators.passwordConfirmInput.fill(user.password);

await this.locators.agreeCheckboxText.click();

  }

  async submitRegistration() {
    await this.locators.continueButton.click();
  }

  async verifyRegistrationSuccess() {
    await expect(this.locators.successHeading).toBeVisible();
    await expect(this.locators.successText).toBeVisible();
  }

  async validatePasswordTooShort() {
  await this.locators.firstNameInput.fill('Shane');
  await this.locators.lastNameInput.fill('Warne');
  await this.locators.emailInput.fill('shane.warne@gmail.com');
  await this.locators.phoneInput.fill('7953597633');
  await this.locators.passwordInput.fill('aa');
  await this.locators.passwordConfirmInput.fill('aa');
  await this.locators.agreeCheckboxText.click();
  await this.locators.continueButton.click();
  await expect(this.locators.passwordErrorMessage).toBeVisible();
}

async validatePasswordTooLong() {
  
  await this.locators.firstNameInput.fill('Shane');
  await this.locators.lastNameInput.fill('Warne');
  await this.locators.emailInput.fill('shane.warne@gmail.com');
  await this.locators.phoneInput.fill('7953597633');
  await this.locators.passwordInput.fill(this.longPassword);
  await this.locators.passwordConfirmInput.fill(this.longPassword);
  await this.locators.agreeCheckboxText.click();
  await this.locators.continueButton.click();
  await expect(this.locators.passwordErrorMessage).toBeVisible();
}

async validatePasswordMismatch() {
  const mismatchpass = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbb'
  await this.locators.firstNameInput.fill('Shane');
  await this.locators.lastNameInput.fill('Warne');
  await this.locators.emailInput.fill('shane.warne@gmail.com');
  await this.locators.phoneInput.fill('7953597633');
  await this.locators.passwordInput.fill(this.longPassword);
  await this.locators.passwordConfirmInput.fill(mismatchpass);
  await this.locators.agreeCheckboxText.click();
  await this.locators.continueButton.click();
  await expect(this.locators.passwordConfirmErrorMessage).toBeVisible();
}

async validateEmailMissingAtSymbol() {

  await this.locators.firstNameInput.fill('Jane');
  await this.locators.lastNameInput.fill('Doe');
  await this.locators.emailInput.fill('janedoeexample.com');  // missing '@'
  await this.locators.passwordInput.fill('Pass@123');
  await this.locators.passwordConfirmInput.fill('Pass@123');
  await this.locators.agreeCheckboxText.click();
  await this.locators.agreeCheckboxText.click();
  await this.locators.continueButton.click();
  await expect(this.locators.emailErrorMessage).toBeVisible();
}

async validateEmailMissingDotCom() {
  await this.locators.firstNameInput.fill('Jane');
  await this.locators.lastNameInput.fill('Doe');
  await this.locators.emailInput.fill('jane.doe@example');  // missing '.com'
  await this.locators.passwordInput.fill('Pass@123');
  await this.locators.passwordConfirmInput.fill('Pass@123');
  await this.locators.agreeCheckboxText.click();
  await this.locators.continueButton.click();
  await expect(this.locators.emailErrorMessage).toBeVisible();
}

async validateEmailStartsWithAt() {
  await this.locators.firstNameInput.fill('Jane');
  await this.locators.lastNameInput.fill('Doe');
  await this.locators.emailInput.fill('@janedoe@example.com');  // starts with '@'
  await this.locators.passwordInput.fill('Pass@123');
  await this.locators.passwordConfirmInput.fill('Pass@123');
  await this.locators.agreeCheckboxText.click();
  await this.locators.continueButton.click();
  //await expect(this.locators.emailErrorMessage).toBeVisible();
}

async validateEmailEndsWithAt() {
  await this.locators.firstNameInput.fill('Jane');
  await this.locators.lastNameInput.fill('Doe');
  await this.locators.emailInput.fill('janedoe@.com@');  // ends with '@'
  await this.locators.passwordInput.fill('Pass@123');
  await this.locators.passwordConfirmInput.fill('Pass@123');
  await this.locators.agreeCheckboxText.click();
  await this.locators.continueButton.click();
  //await expect(this.locators.emailErrorMessage).toBeVisible();
}
}
