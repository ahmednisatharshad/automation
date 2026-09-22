import { Page } from '@playwright/test';
import { DemoQANavigationLocators } from '../../pages/demoqa-navigations';
export class DemoQANavigationSteps {
  readonly locators: DemoQANavigationLocators;

  constructor(page: Page) {
    this.locators = new DemoQANavigationLocators(page);
  }

  async goToAlertsPage() {
    await this.locators.elementsExpandBtn.click();
    await this.locators.alertsFrameWindowsMenu.click();
    await this.locators.alertsMenu.click();
  }

  async goToPracticeForm() {
    await this.locators.alertsFrameWindowsMenu.click(); // Collapse if needed
    await this.locators.formsExpandBtn.click();
    await this.locators.practiceFormMenu.click();
  }
}
