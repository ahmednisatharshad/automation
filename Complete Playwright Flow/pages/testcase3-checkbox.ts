// locators/checkbox.locators.ts
import { Page } from '@playwright/test';

//Using Locator Getter Methods
export class CheckboxLocators {
  constructor(public page: Page) {}

  homeLogo = () => this.page.locator('svg').first();
  checkBoxItem = () => this.page.getByText('Check Box');
  pageHeading = () => this.page.getByRole('heading', { name: 'Check Box' });
  expandAllBtn = () => this.page.getByRole('button', { name: 'Expand all' });

  commandCheckbox = () =>
    this.page.locator('label', { hasText: 'Commands' }).getByRole('img').first();

  angularCheckbox = () =>
    this.page.locator('label', { hasText: 'Angular' }).getByRole('img').first();

  privateCheckbox = () =>
    this.page.locator('label', { hasText: 'Private' }).getByRole('img').first();

  generalCheckbox = () =>
    this.page.locator('label', { hasText: 'General' }).getByRole('img').first();

  wordFileCheckbox = () =>
    this.page.locator('label', { hasText: 'Word File.doc' }).getByRole('img').first();

  collapseNode = () => this.page.locator('.rct-collapse').first();
  selectedText = () => this.page.locator('#result');
}
