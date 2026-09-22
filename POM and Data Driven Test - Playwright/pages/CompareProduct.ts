import { Page, Locator } from '@playwright/test';

export class ProductCompareLocators {
  readonly page: Page;

  readonly homeLink: Locator;
  readonly compareLink: Locator;

  readonly noItemsText: Locator;
  readonly appleProductLink: Locator;
  readonly appleCompareButton: Locator;
  readonly appleSuccessText: Locator;
  readonly ipodProductLink: Locator;
  readonly ipodCompareButton: Locator;
  readonly ipodSuccessText: Locator;
  readonly compareTableCell: Locator;
  readonly productComparisonText: Locator;
  readonly appleCompareTableCell: Locator;
  readonly ipodCompareTableCell: Locator;

  constructor(page: Page) {
    this.page = page;
    
    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.compareLink = page.getByRole('link', { name: 'Compare', exact: true });

    this.noItemsText = page.getByText('You have not chosen any');
    this.appleProductLink = page.getByRole('link', { name: 'Apple Cinema 30" Apple Cinema 30" Apple Cinema 30"', exact: true });
    this.appleCompareButton = page.getByLabel('3 / 24', { exact: true }).getByRole('button', { name: '' });
    this.appleSuccessText = page.getByText('Success: You have added Apple');
    this.ipodProductLink = page.getByRole('link', { name: 'iPod Nano iPod Nano iPod Nano' });
    this.ipodCompareButton = page.getByLabel('4 / 24', { exact: true }).getByRole('button', { name: '' });
    this.ipodSuccessText = page.getByText('Success: You have added iPod');
    this.compareTableCell = page.getByRole('cell', { name: 'Product Details' });
    this.productComparisonText = page.getByText('Product Comparison Product');
    this.appleCompareTableCell = page.locator('td').filter({ hasText: 'Apple Cinema 30"' });
    this.ipodCompareTableCell = page.locator('td').filter({ hasText: 'iPod Nano' });
  }
}
