import { expect } from '@playwright/test';
import { LogoutLocators } from '../../pages/LogoutPage';

export class LogoutSteps {
  readonly locatorsPage: LogoutLocators;

  constructor(locatorsPage: LogoutLocators) {
    this.locatorsPage = locatorsPage;
  }

  async logout() {

    await this.locatorsPage.logoutLink.click()
  }

  async verifyLogout(){
    await expect(this.locatorsPage.logoutHeading).toBeVisible();
    await expect(this.locatorsPage.logoutMsg).toBeVisible();
    await expect(this.locatorsPage.cartMsg).toBeVisible();
  }
}
