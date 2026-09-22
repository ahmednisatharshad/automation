import { Locator, Page } from '@playwright/test';

export class TextBoxPage {
  readonly page: Page;

  readonly fullNameInput: Locator;
  readonly emailInput: Locator;
  readonly currentAddressInput: Locator;
  readonly permanentAddressInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;

  //in built locators
    this.fullNameInput = page.getByRole('textbox', { name: 'Full Name' });
    this.emailInput = page.getByRole('textbox', { name: 'name@example.com' });

    this.currentAddressInput = page.getByRole('textbox', { name: 'Current Address' });
    this.permanentAddressInput = page.locator('#permanentAddress');
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }

}
