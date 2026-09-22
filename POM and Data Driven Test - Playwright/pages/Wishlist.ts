import { Page, Locator } from '@playwright/test';

export class WishlistLocators {
  readonly page: Page;

  readonly homeLink: Locator;
  readonly canonProductLink: Locator;
  readonly firstHeartButton: Locator;
  readonly successMessageCanon: Locator;
  readonly secondProductLink: Locator;
  readonly secondHeartButton: Locator;
  readonly successMessageHTC: Locator;
  readonly wishlistLink: Locator;
  readonly myWishlistHeading: Locator;
  readonly wishlistTableHeader: Locator;
  readonly htcProductText: Locator;
  readonly canonProductText: Locator;
  readonly continueLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.canonProductLink = page.getByRole('link', { name: 'Canon EOS 5D Canon EOS 5D' });
    this.firstHeartButton = page.getByLabel('1 / 24', { exact: true }).getByRole('button', { name: '' });
    this.successMessageCanon = page.getByText('Success: You have added Canon');
    this.secondProductLink = page.getByLabel('2 / 24', { exact: true }).getByRole('link', { name: 'HTC Touch HD HTC Touch HD HTC' });
    this.secondHeartButton = page.getByLabel('2 / 24', { exact: true }).getByRole('button', { name: '' });
    this.successMessageHTC = page.getByText('Success: You have added HTC');
    this.wishlistLink = page.getByRole('link', { name: 'Wishlist', exact: true });
    this.myWishlistHeading = page.getByRole('heading', { name: 'My Wish List' });
    this.wishlistTableHeader = page.locator('#content div').filter({ hasText: 'Image Product Name Model' });
    this.htcProductText = page.locator('#content').getByText('HTC Touch HD');
    this.canonProductText = page.getByText('Canon EOS 5D');
    this.continueLink = page.getByRole('link', { name: 'Continue' });
  }
}
