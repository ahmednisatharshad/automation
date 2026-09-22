import { Page, Locator, Dialog } from '@playwright/test';

export class AlertsPage {
  readonly page: Page;
  
  readonly alertsFrameWindowsHeading: Locator;
  readonly alertsMenu: Locator;

  readonly alertButton: Locator;
  readonly timerAlertButton: Locator;
  readonly confirmButton: Locator;
  readonly promptButton: Locator;
  readonly alertsPageHeading: Locator;
  readonly alertResultText: Locator;

  constructor(page: Page) {
    this.page = page;

    this.alertsFrameWindowsHeading = page.getByRole('heading', { name: 'Alerts, Frame & Windows' });
    this.alertsMenu = page.getByText('Alerts', { exact: true });

    this.alertButton = page.locator('#alertButton');
    this.timerAlertButton = page.locator('#timerAlertButton');
    this.confirmButton = page.locator('#confirmButton');
    this.promptButton = page.locator('#promtButton'); 

    this.alertsPageHeading = page.getByRole('heading', { name: 'Alerts' });
    this.alertResultText = page.locator('#confirmResult, #promptResult'); 
    // confirmResult and promptResult both show text after confirm/prompt
  }

  async goto() {
    await this.page.goto('https://demoqa.com/alerts', {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });
  }

  async clickAlertsFrameWindowsHeading() {
    await this.alertsFrameWindowsHeading.click();
  }

  async clickAlertsMenu() {
    await this.alertsMenu.click();
  }

  async isAlertsPageVisible() {
    await this.alertsPageHeading.waitFor({ state: 'visible' });
  }

  async clickAlertButton() {
    await this.alertButton.click();
  }

  async clickTimerAlertButton() {
    await this.timerAlertButton.click();
  }

  async clickConfirmButton() {
    await this.confirmButton.click();
  }

  async clickPromptButton() {
    await this.promptButton.click();
  }

  async getResultText() {
    return this.alertResultText.textContent();
  }
}
