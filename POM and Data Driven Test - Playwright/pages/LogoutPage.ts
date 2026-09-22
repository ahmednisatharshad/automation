import { Page, Locator } from '@playwright/test';

export class LogoutLocators {
  readonly page: Page;
  readonly logoutLink: Locator;
  readonly logoutHeading: Locator;
  readonly logoutMsg: Locator;
  readonly cartMsg: Locator;

  constructor(page: Page) {
    this.page = page;
    this.logoutLink = page.getByRole('link', { name: ' Logout' });
    this.logoutHeading = page.getByRole('heading', { name: ' Account Logout' });
    this.logoutMsg = page.getByText('You have been logged off your');
    this.cartMsg = page.getByText('Your shopping cart has been');
  }
}
