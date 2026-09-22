import { Page, Locator } from '@playwright/test';

export class AccountLocators {
  readonly page: Page;

  // Sections
  readonly headingMyAccount: Locator;
  readonly headingMyOrders: Locator;
  readonly headingAffiliate: Locator;

  // Account Links
  readonly editAccount: Locator;
  readonly changePassword: Locator;
  readonly modifyAddress: Locator;
  readonly modifyWishlist: Locator;
  readonly subscribeNewsletter: Locator;

  // Orders Links
  readonly viewOrderHistory: Locator;
  readonly downloads: Locator;
  readonly rewardPoints: Locator;
  readonly returnRequests: Locator;
  readonly transactions: Locator;
  readonly recurringPayments: Locator;

  // Affiliate Links
  readonly registerAffiliate: Locator;

  constructor(page: Page) {
    this.page = page;

    // Main Sections
    this.headingMyAccount = page.getByRole('heading', { name: 'My Account' });
    this.headingMyOrders = page.getByRole('heading', { name: 'My Orders' });
    this.headingAffiliate = page.getByRole('heading', { name: 'My Affiliate Account' });

    // Account Section
    this.editAccount = page.getByRole('link', { name: ' Edit your account' });
    this.changePassword = page.getByRole('link', { name: ' Change your password' });
    this.modifyAddress = page.getByRole('link', { name: ' Modify your address book' });
    this.modifyWishlist = page.getByRole('link', { name: ' Modify your wish list' });
    this.subscribeNewsletter = page.getByRole('link', { name: ' Subscribe / unsubscribe to' });

    // Orders Section
    this.viewOrderHistory = page.getByRole('link', { name: ' View your order history' });
    this.downloads = page.locator('#content div').filter({ hasText: 'Downloads' }).nth(3);
    this.rewardPoints = page.getByRole('link', { name: ' Your Reward Points' });
    this.returnRequests = page.getByRole('link', { name: ' View your return requests' });
    this.transactions = page.getByRole('link', { name: ' Your Transactions' });
    this.recurringPayments = page.locator('#content div').filter({ hasText: 'Recurring payments' }).nth(3);

    // Affiliate Section
    this.registerAffiliate = page.getByRole('link', { name: ' Register for an affiliate' });
  }
}
