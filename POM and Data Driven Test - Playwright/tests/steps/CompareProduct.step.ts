import { expect, Page, test} from '@playwright/test';
import { ProductCompareLocators } from '../../pages/CompareProduct';

export class ProductCompareSteps {
  readonly page: Page;
  readonly locators: ProductCompareLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new ProductCompareLocators(page);
  }

   async navigateToLandingPage() {
    const url = test.info().config.metadata.baseUrls.ecommerce;
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    console.log('Navigated to Landing page:', url);
  }

  async openComparePage() {
    await this.locators.compareLink.click();
  }

  async verifyNoItemsMessage() {
    await expect(this.locators.noItemsText).toBeVisible();
  }

  async returnToHome() {
    await this.locators.homeLink.click();
  }

  async addAppleToCompare() {
    await this.page.waitForTimeout(3000);
    await this.locators.appleProductLink.hover();
    await this.locators.appleCompareButton.click();
    await expect(this.locators.appleSuccessText).toBeVisible();
    await this.page.waitForTimeout(3000);
  }

  async addIpodToCompare() {
    await this.locators.ipodProductLink.hover();
    await this.locators.ipodCompareButton.click();
    await expect(this.locators.ipodSuccessText).toBeVisible();
    await this.page.waitForTimeout(3000);
  }

  async openComparePageAndVerify() {
    await this.page.waitForTimeout(1000);
    await this.locators.compareLink.click();
    await expect(this.locators.compareTableCell).toBeVisible();
    await expect(this.locators.productComparisonText).toBeVisible();
    await expect(this.locators.appleCompareTableCell).toBeVisible();
    await expect(this.locators.ipodCompareTableCell).toBeVisible();
  }
}
