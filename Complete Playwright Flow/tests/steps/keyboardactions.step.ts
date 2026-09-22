import { TextBoxPage } from "../../pages/keyboardactions";
import { expect, Page } from '@playwright/test';
import testData from "../../test-data/textInput.json"

export class TextBoxSteps {
  readonly page: Page;
  readonly textBoxPage: TextBoxPage;

  constructor(page: Page) {
    this.page = page;
    this.textBoxPage = new TextBoxPage(page);
  }

  async fillNameAndEmail(): Promise<void> {
    await this.textBoxPage.fullNameInput.click();
    await this.textBoxPage.fullNameInput.fill(testData.fullName);

    await this.textBoxPage.emailInput.click();
    await this.textBoxPage.emailInput.fill(testData.email);
  }

  async enterAndCopyCurrentAddress(): Promise<void> {
    await this.textBoxPage.currentAddressInput.click();
    await this.textBoxPage.currentAddressInput.fill(testData.currentAddress);

    // Simulate Ctrl+A (select all), then Ctrl+C (copy)
    await this.textBoxPage.currentAddressInput.press('Control+A');
    await this.textBoxPage.currentAddressInput.press('Control+C');
  }

  async pasteToPermanentAddress(): Promise<void> {
    await this.textBoxPage.permanentAddressInput.click();
    await this.textBoxPage.permanentAddressInput.press('Control+V');
  }

  async submitFormWithKeyboardExtras(): Promise<void> {
    //await this.page.screenshot({ path: `tests/Screenshots/${Date.now()}_screenshot.png`, timeout: 60000 });

    // Additional keyboard shortcut examples 
    // await this.page.keyboard.press('Tab');
    // await this.page.keyboard.press('Enter');

    await this.textBoxPage.submitButton.click();
  }
}