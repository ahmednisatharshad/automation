import { Locator, Page } from '@playwright/test';

export class SidebarLocators {
  readonly filterHeader: Locator;
  readonly priceFilterLabel: Locator;
  readonly minPriceSpinButton: Locator;
  readonly toText: Locator;
  readonly maxPriceSpinButton: Locator;
  readonly manufacturerLabel: Locator;
  readonly manufacturerApple: Locator;
  readonly manufacturerCanon: Locator;
  readonly manufacturerHP: Locator;
  readonly manufacturerHTC: Locator;
  readonly seeMoreLink: Locator;
  readonly subCategoryText: Locator;
  readonly macSubcategory: Locator;
  readonly pcSubcategory: Locator;
  readonly searchLabel: Locator;
  readonly searchTextbox: Locator;
  readonly showText: Locator;
  readonly showDropdown: Locator;
  readonly productCompareLink: Locator;
  readonly sortByText: Locator;
  readonly sortDropdown: Locator;
  readonly paginationNext: Locator;
  readonly paginationLast: Locator;
  readonly footerText: Locator;
  readonly scrollTopButton: Locator;

  readonly relatedProductLinkTexts: string[];

  constructor(page: Page) {
    this.filterHeader = page.locator('#mz-filter-0 div').filter({ hasText: 'Filter' });
    this.priceFilterLabel = page.locator('#mz-filter-content-0').getByText('Price');
    this.minPriceSpinButton = page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Minimum Price' });
    this.toText = page.locator('#mz-filter-panel-0-0').getByText('to');
    this.maxPriceSpinButton = page.locator('#mz-filter-panel-0-0').getByRole('spinbutton', { name: 'Maximum Price' });

    this.manufacturerLabel = page.locator('#mz-filter-content-0').getByText('Manufacturer');
    this.manufacturerApple = page.locator('#mz-filter-panel-0-1').getByText('Apple 42');
    this.manufacturerCanon = page.locator('#mz-filter-panel-0-1').getByText('Canon 10');
    this.manufacturerHP = page.locator('#mz-filter-panel-0-1').getByText('Hewlett-Packard 10');
    this.manufacturerHTC = page.locator('#mz-filter-panel-0-1').getByText('HTC 8');
    this.seeMoreLink = page.locator('#mz-filter-panel-0-1').getByRole('link', { name: 'See more' });

    this.subCategoryText = page.getByText('Sub category');
    this.macSubcategory = page.getByText('Mac', { exact: true });
    this.pcSubcategory = page.getByText('PC', { exact: true });

    this.searchLabel = page.locator('#mz-filter-content-0').getByText('Search');
    this.searchTextbox = page.locator('#mz-filter-panel-0-3').getByRole('textbox', { name: 'Search' });

    this.showText = page.locator('#entry_212402').getByText('Show:');
    this.showDropdown = page.locator('#input-limit-212402');
    this.productCompareLink = page.getByRole('link', { name: 'Product Compare (0)' });
    this.sortByText = page.locator('#entry_212403').getByText('Sort By:');
    this.sortDropdown = page.locator('#input-sort-212403');

    this.paginationNext = page.getByRole('link', { name: '>' , exact: true });
    this.paginationLast = page.getByRole('link', { name: '>|' });

    this.footerText = page.getByText('© LambdaTest - Powered by');
    this.scrollTopButton = page.getByRole('button', { name: '' });

    this.relatedProductLinkTexts = [
      'HTC Touch HD HTC Touch HD HTC',
      'Palm Treo Pro Palm Treo Pro',
      'Canon EOS 5D Canon EOS 5D',
      'Nikon D300 Nikon D300 Nikon',
      'iPod Touch iPod Touch iPod',
      'Samsung SyncMaster 941BW Samsung SyncMaster 941BW Samsung SyncMaster 941BW',
      'iPod Shuffle iPod Shuffle',
      'iPod Nano iPod Nano iPod Nano',
      'iPhone iPhone iPhone iPhone',
      'iMac iMac iMac iMac',
      'Apple Cinema 30&quot; Apple',
      'MacBook MacBook MacBook',
      'MacBook Air MacBook Air',
      'MacBook Pro MacBook Pro',
      'Sony VAIO Sony VAIO Sony VAIO',
    ];
  }
}
