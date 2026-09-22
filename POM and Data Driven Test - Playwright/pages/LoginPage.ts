import { Page, Locator } from '@playwright/test';

export class LoginPageLocators {
  readonly page: Page;
  readonly loginText : Locator;

  readonly loginLink: Locator;
  readonly registerLink: Locator;
  readonly forgottenPasswordmenuLink: Locator;
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
  readonly myAccountText: Locator;
  readonly registerHeading: Locator;
  readonly returningCustomerHeading: Locator;
  readonly returningCustomerText: Locator;
  readonly emailTextbox: Locator;
  readonly passwordTextbox: Locator;
  readonly forgottenPasswordLink: Locator;
  readonly loginButton: Locator;
  readonly myAccountHeading: Locator;
  readonly myOrdersHeading: Locator;
  readonly myAffiliateAccountHeading: Locator;
  readonly invalidText: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginText = page.getByRole('link', { name: /Login/i });
    this.myAccountText = page.getByRole('button', { name: /My account/i });
    this.registerHeading = page.getByRole('heading', { name: /Register Account/i });

    this.loginLink = page.getByRole('link', { name: ' Login' });
    this.registerLink = page.getByRole('link', { name: ' Register' });
    this.forgottenPasswordmenuLink = page.getByRole('link', { name: ' Forgotten Password' });
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
    this.returningCustomerHeading = page.getByRole('heading', { name: /Returning Customer/i });
    this.returningCustomerText = page.getByText('I am a returning customer');
    this.emailTextbox = page.getByRole('textbox', { name: 'E-Mail Address' });
    this.passwordTextbox = page.getByRole('textbox', { name: 'Password' });
    this.forgottenPasswordLink = page.getByRole('link', { name: 'Forgotten Password', exact: true });
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.myAccountHeading = page.getByRole('heading', { name: 'My Account' });
    this.myOrdersHeading = page.getByRole('heading', { name: 'My Orders' });
    this.myAffiliateAccountHeading = page.getByRole('heading', { name: 'My Affiliate Account' });
    this.invalidText = page.getByText('Warning: No match for E-Mail');
  }
}
