import { Page, Locator } from '@playwright/test';

export class DemoQANavigationLocators {
  readonly page: Page;
  readonly body: Locator;
  readonly homeIcon: Locator;
  readonly webTablesMenu: Locator;
  readonly elementsExpandBtn: Locator;
  readonly alertsFrameWindowsMenu: Locator;
  readonly alertsMenu: Locator;
  readonly formsExpandBtn: Locator;
  readonly practiceFormMenu: Locator;

  constructor(page: Page) {
    this.page = page;
    this.body = page.locator('body');
    this.homeIcon = page.locator('svg').first();
    this.webTablesMenu = page.getByText('Web Tables');
    this.elementsExpandBtn = page.locator('span').filter({ hasText: 'Elements' }).locator('div').first();
    this.alertsFrameWindowsMenu = page.getByText('Alerts, Frame & Windows');
    this.alertsMenu = page.getByText('Alerts', { exact: true });
    this.formsExpandBtn = page.locator('span').filter({ hasText: 'Forms' }).locator('div').first();
    this.practiceFormMenu = page.getByText('Practice Form');
  }
}
