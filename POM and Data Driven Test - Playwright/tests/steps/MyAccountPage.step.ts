import { expect, Page } from '@playwright/test';
import { AccountLocators } from '../../pages/MyAccountPage';

export class AccountSteps {
  readonly locatorsPage: AccountLocators;
  private page: Page;

  constructor(page: Page) {
      this.page = page;
      this.locatorsPage = new AccountLocators(page);
    }

  async verifyAccountSection() {
 
    await this.locatorsPage.headingMyAccount.scrollIntoViewIfNeeded();
    await expect(this.locatorsPage.headingMyAccount).toBeVisible();

    await expect(this.locatorsPage.editAccount).toBeVisible();
    await expect(this.locatorsPage.changePassword).toBeVisible();
    await expect(this.locatorsPage.modifyAddress).toBeVisible();
    await expect(this.locatorsPage.modifyWishlist).toBeVisible();
    await expect(this.locatorsPage.subscribeNewsletter).toBeVisible();
  }

  async verifyOrdersSection() {

    await this.locatorsPage.headingMyOrders.scrollIntoViewIfNeeded();
    await expect(this.locatorsPage.headingMyOrders).toBeVisible();

    await expect(this.locatorsPage.viewOrderHistory).toBeVisible();
    await expect(this.locatorsPage.downloads).toBeVisible();
    await expect(this.locatorsPage.rewardPoints).toBeVisible();
    await expect(this.locatorsPage.returnRequests).toBeVisible();
    await expect(this.locatorsPage.transactions).toBeVisible();
    await expect(this.locatorsPage.recurringPayments).toBeVisible();
  }

  async verifyAffiliateSection() {
    
    await this.locatorsPage.headingAffiliate.scrollIntoViewIfNeeded();
    await expect(this.locatorsPage.headingAffiliate).toBeVisible();


    await expect(this.locatorsPage.registerAffiliate).toBeVisible();
  }
}
