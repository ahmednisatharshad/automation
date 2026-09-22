import { test, expect, Page } from '@playwright/test';
import { OrderRelatedLocators } from '../../pages/OrderRelatedPage';

export class OrderRelatedPageSteps {
  private locators: OrderRelatedLocators;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.locators = new OrderRelatedLocators(page);
  }

async addProductToCartAndCheckout() {
    await this.locators.homeLink.click();
    await this.locators.HTCTouchHD.hover();
    await this.locators.HTCTouchHDCartButton.click();
    await this.locators.viewcartButton.click();
  }

  async verifyItemAndProceedToCheckout() {
    await expect(this.locators.addedProductCell).toBeVisible();
    await this.locators.checkoutLink.click();
  }

   async openAppleCinemaProduct() {
    await this.locators.AppleproductLink.click();
  }

  async verifyProductPageElements() {
    await expect(this.locators.softwareText).toBeVisible();
    await expect(this.locators.productHeading).toBeVisible();
    await expect(this.locators.productCodeText).toBeVisible();
    await expect(this.locators.brandText).toBeVisible();
    await expect(this.locators.rewardPointsText).toBeVisible();
    await expect(this.locators.availabilityText).toBeVisible();
    await expect(this.locators.appleBrandLink).toBeVisible();
    await expect(this.locators.dollarHeading).toBeVisible();
    await expect(this.locators.sizeText).toBeVisible();
    await expect(this.locators.compareBtn).toBeVisible();
    await expect(this.locators.addToCartBtn).toBeVisible();
    await expect(this.locators.buyNowBtn).toBeVisible();
    await expect(this.locators.sizeChartText).toBeVisible();
    await expect(this.locators.minimumText).toBeVisible();
    await expect(this.locators.tagsText).toBeVisible();
    await expect(this.locators.onlinePaymentHeading).toBeVisible();
    await expect(this.locators.easyReturnHeading).toBeVisible();
    await expect(this.locators.serviceHeading).toBeVisible();
    await expect(this.locators.reviewsText).toBeVisible();
    await expect(this.locators.writeReviewBtn).toBeVisible();
    await expect(this.locators.productParagraph).toBeVisible();
    await expect(this.locators.descriptionTab).toBeVisible();
    await expect(this.locators.specificationTab).toBeVisible();
    await expect(this.locators.reviewsTab).toBeVisible();
    await expect(this.locators.customTab).toBeVisible();
    await expect(this.locators.relatedProductsHeading).toBeVisible();
    await expect(this.locators.faqHeading).toBeVisible();
  }
   async navigateToProduct() {
    await this.page.waitForTimeout(3000);
    await this.locators.ipodproductLink.click();
  }

  async selectRating() {
    await this.locators.ratingStar.click();
  }

  async fillReview(name: string, review: string) {
    await this.locators.nameInput.fill(name);
    await this.locators.reviewInput.fill(review);
    await this.page.waitForTimeout(3000);
  }

  async submitReview() {
    await this.locators.writeReviewButton.click();
  }

  async verifyThankYouMessage() {
    await expect(this.locators.thankYouMessage).toBeVisible();
  }
  
}