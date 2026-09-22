import test, { expect, Page } from '@playwright/test';
import { SidebarLocators } from '../../pages/TopTrendingCategoriesPage';

export class SidebarSteps {
  readonly locators: SidebarLocators;
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    this.locators = new SidebarLocators(page);
  }

  async navigateToLandingPage() {
    const url = test.info().config.metadata.baseUrls.ecommerce;
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    console.log('Navigated to Landing page:', url);
  }
  
  async verifySidebarFilters() {
    await expect(this.locators.filterHeader).toBeVisible();
    await expect(this.locators.priceFilterLabel).toBeVisible();
    await expect(this.locators.minPriceSpinButton).toBeVisible();
    await expect(this.locators.toText).toBeVisible();
    await expect(this.locators.maxPriceSpinButton).toBeVisible();

    await expect(this.locators.manufacturerLabel).toBeVisible();
    await expect(this.locators.manufacturerApple).toBeVisible();
    await expect(this.locators.manufacturerCanon).toBeVisible();
    await expect(this.locators.manufacturerHP).toBeVisible();
    await expect(this.locators.manufacturerHTC).toBeVisible();
    await expect(this.locators.seeMoreLink).toBeVisible();

  // await expect(this.locators.subCategoryText).toBeVisible();
  // await expect(this.locators.macSubcategory).toBeVisible();
  // await expect(this.locators.pcSubcategory).toBeVisible();

    await expect(this.locators.searchLabel).toBeVisible();
    await expect(this.locators.searchTextbox).toBeVisible();

    await expect(this.locators.showText).toBeVisible();
    await expect(this.locators.showDropdown).toBeVisible();
    await expect(this.locators.productCompareLink).toBeVisible();
    await expect(this.locators.sortByText).toBeVisible();
    await expect(this.locators.sortDropdown).toBeVisible();

    await this.locators.paginationNext.scrollIntoViewIfNeeded();
    await expect(this.locators.paginationNext).toBeVisible();
    await expect(this.locators.paginationLast).toBeVisible();

    await expect(this.locators.footerText).toBeVisible();
    await expect(this.locators.scrollTopButton).toBeVisible();
  }

  async verifyRelatedProducts() {
    for (const productText of this.locators.relatedProductLinkTexts) {
      await expect(this.page.getByRole('link', { name: productText })).toBeVisible();
    }
  }
}
