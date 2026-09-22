// steps/checkbox.steps.ts
import { test, expect, Page } from '@playwright/test';
import { CheckboxLocators } from '../../pages/testcase-checkbox';

export class CheckboxActions {
  private locators: CheckboxLocators;

  constructor(private page: Page) {
    this.locators = new CheckboxLocators(page);
  }

  async openPage() {
    const url = test.info().config.metadata.baseUrls.testcase3url;
    await this.locators.page.goto(url, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });
  }

  async navigateToCheckboxMenu() {
    await this.locators.homeLogo().click();
    await this.locators.checkBoxItem().click();
    await expect(this.locators.pageHeading()).toBeVisible();
  }

  async expandAllOptions() {
    await this.locators.expandAllBtn().click();
  }

  async selectCheckboxItems() {
    await this.locators.commandCheckbox().check();
    await this.locators.angularCheckbox().check();
    await this.locators.privateCheckbox().check();
    await this.locators.generalCheckbox().check();
    await this.locators.wordFileCheckbox().check();
  }

  async collapseNodes() {
    await this.locators.collapseNode().click();
  }

  async verifySelectedItems() {
    await expect(this.locators.selectedText()).toContainText(
      'You have selected :commandsangularprivategeneralwordFile'
    );
  }
}
