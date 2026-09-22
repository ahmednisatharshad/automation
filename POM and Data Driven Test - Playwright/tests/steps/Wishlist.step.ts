import { expect, Page } from '@playwright/test';
import { WishlistLocators } from '../../pages/Wishlist';

export class WishlistSteps {
  readonly page: Page;
  readonly locators: WishlistLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new WishlistLocators(page);
  }

  async navigateToHome(){
    await this.locators.homeLink.click();
  }
  async addCanonToWishlist() {
    await this.locators.canonProductLink.hover();
    await this.locators.firstHeartButton.click();
    await expect(this.locators.successMessageCanon).toBeVisible();
    await this.page.waitForTimeout(3000);
  }

  async addHTCToWishlist() {
    await this.locators.secondProductLink.hover();
    await this.locators.secondHeartButton.click();
    await expect(this.locators.successMessageHTC).toBeVisible();
    await this.page.waitForTimeout(3000);
  }

  async openWishlistAndVerify() {
    await this.locators.wishlistLink.click();
    await expect(this.locators.myWishlistHeading).toBeVisible();
    await expect(this.locators.wishlistTableHeader).toBeVisible();
    await expect(this.locators.htcProductText).toBeVisible();
    await expect(this.locators.canonProductText).toBeVisible();
    await expect(this.locators.continueLink).toBeVisible();
  }
}
