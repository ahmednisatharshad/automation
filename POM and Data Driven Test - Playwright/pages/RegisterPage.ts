import { Page, Locator } from '@playwright/test';

export class RegisterPageLocators {
  readonly page: Page;
  readonly myaccountText : Locator;
  readonly registerText : Locator;

  readonly loginLink: Locator;
  readonly registerLink: Locator;
  readonly forgottenPasswordLink: Locator;
  readonly myAccountLink: Locator;
  readonly addressBookLink: Locator;
  readonly wishListLink: Locator;
  readonly orderHistoryLink: Locator;
  readonly downloadsLink: Locator;
  readonly recurringPaymentsLink: Locator;
  readonly rewardPointsLink: Locator;
  readonly returnsLink: Locator;
  readonly transactionsLink: Locator;
  readonly newsletterLink: Locator;
  readonly alreadyHaveAccountText: Locator;
  
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly passwordInput: Locator;
  readonly passwordConfirmInput: Locator;
  readonly emailInputConfirmation: Locator;
  readonly continueButtonOnConfirmation: Locator;
  readonly agreeCheckboxText: Locator;
  readonly continueButton: Locator;
  readonly registerHeading: Locator;
  readonly successHeading: Locator;
  readonly successText: Locator;
  readonly passwordErrorMessage: Locator;
  readonly passwordConfirmErrorMessage: Locator;
  readonly emailErrorMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    //landing page
    this.myaccountText = page.getByRole('button', { name: ' My account' })
    this.registerText = page.getByRole('link', { name: 'Register' })
    //register page
     this.loginLink = page.getByRole('link', { name: ' Login' });
    this.registerLink = page.getByRole('link', { name: ' Register' });
    this.forgottenPasswordLink = page.getByRole('link', { name: ' Forgotten Password' });
    this.myAccountLink = page.getByRole('link', { name: ' My Account' });
    this.addressBookLink = page.getByRole('link', { name: ' Address Book' });
    this.wishListLink = page.getByRole('link', { name: ' Wish List' });
    this.orderHistoryLink = page.getByRole('link', { name: ' Order History' });
    this.downloadsLink = page.getByRole('link', { name: ' Downloads' });
    this.recurringPaymentsLink = page.getByRole('link', { name: ' Recurring payments' });
    this.rewardPointsLink = page.getByRole('link', { name: ' Reward Points' });
    this.returnsLink = page.getByRole('link', { name: ' Returns' });
    this.transactionsLink = page.getByRole('link', { name: ' Transactions' });
    this.newsletterLink = page.getByRole('link', { name: ' Newsletter' });
    this.registerHeading = page.getByRole('heading', { name: 'Register Account' });
    this.alreadyHaveAccountText = page.getByText('If you already have an');
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name*' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name*' });
    this.emailInput = page.getByRole('textbox', { name: 'E-Mail*' });
    this.phoneInput = page.getByRole('textbox', { name: 'Telephone*' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password*' });
    this.passwordConfirmInput = page.getByRole('textbox', { name: 'Password Confirm*' });
    this.emailInputConfirmation = page.getByRole('textbox', { name: 'E-Mail*' });
    this.continueButtonOnConfirmation = page.getByRole('button', { name: 'Continue' });
    this.agreeCheckboxText = page.getByText('I have read and agree to the');
    this.continueButton = page.getByRole('button', { name: 'Continue' });
    this.successHeading = page.getByRole('heading', { name: ' Your Account Has Been' });
    this.successText = page.getByText('Congratulations! Your new');
    this.passwordErrorMessage = page.getByText('Password must be between 4');
    this.passwordConfirmErrorMessage = page.getByText('Password confirmation does');
    this.emailErrorMessage = page.getByText('E-Mail Address does not');
  }
}
