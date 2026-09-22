import { expect, Page } from '@playwright/test';
import { AutoCompleteLocators } from '../../pages/testcase-autocomplete';
import testData from '../../test-data/autocomplete-data.json'; 

export class AutoCompleteSteps {
  readonly page: Page;
  readonly locators: AutoCompleteLocators;
  readonly testData = testData; 

  constructor(page: Page) {
    this.page = page;
    this.locators = new AutoCompleteLocators(page);
  }

  async navigateToAutoCompletePage() {
    await this.page.goto('https://demoqa.com/auto-complete', {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });
    //The error "page.goto: Test timeout of 30000ms exceeded" typically means that the Playwright test 
    // did not complete the page navigation within the default 30 seconds time limit.This timeout can occur due to reasons
    //such as slow page loading, network delays, redirects, or backend response times.
    // await this.page.waitForLoadState('load');
    // await this.locators.widgetsHeading().click();
    // await this.locators.autoCompleteOption().click();
  }

  async verifyPageHeader() {
    await expect(this.locators.pageHeader()).toContainText('Auto Complete');
  }

  async verifyPlaceholders() {
    await expect(this.locators.multipleInputPlaceholder()).toContainText('Type multiple color names');
    await expect(this.locators.singleInputPlaceholder()).toContainText('Type single color name');
  }

  async selectOptionByText(inputSelector: string, optionText: string) {
    const inputField = this.page.locator(inputSelector);
    await inputField.fill(optionText.slice(0, 2)); 

    await this.page.waitForSelector('.auto-complete__menu-list'); // wait for dropdown options

    const options = await this.page.$$('.auto-complete__option');

    for (const option of options) {
      const text = await option.textContent();
      if (text?.trim() === optionText) {
        await option.click();
        break;
      }
    }
  }

  async selectMultipleColors(colors: string[]) {
    await this.locators.multipleValueContainer().click();
    for (const color of colors) {
      await this.selectOptionByText('#autoCompleteMultipleInput', color);
    }
  }

  async verifyMultipleSelectedColors(colors: string[]) {
    for (const color of colors) {
      await expect(this.locators.selectedTagByText(color)).toBeVisible();
    }

    const selectedText = await this.locators.multipleValueContainer().innerText();
    colors.forEach(color => {
      expect(selectedText).toContain(color);
    });
  }

  async selectSingleColor(color: string) {
    await this.locators.singleValueContainer().click();
    await this.selectOptionByText('#autoCompleteSingleInput', color);
  }

  async verifySingleSelectedColor(color: string) {
    await expect(this.locators.selectedTagByText(color)).toBeVisible();

    const inputValue = await this.locators.singleInputField().inputValue();
    expect(inputValue).toBe(color);
  }

  //getting inpt from json 
  async selectColorsFromJson() {
    await this.selectMultipleColors(this.testData.multipleColors);
   // await this.verifyMultipleSelectedColors(this.testData.multipleColors);

    await this.selectSingleColor(this.testData.singleColor);
    // await this.verifySingleSelectedColor(this.testData.singleColor);
  }
}
