import { Page, expect } from '@playwright/test';
import { SeleniumTrainingPage } from '../../pages/demoHomepage';
import registrationData from  '../../test-data/registrationData.json'

export class DemoTaskSteps {
  readonly page: Page;
  readonly seleniumPage: SeleniumTrainingPage;

  constructor(page: Page) {
    this.page = page;
    this.seleniumPage = new SeleniumTrainingPage(page);
  }

  async verifyCourseTitleVisible() {
    await expect(this.seleniumPage.courseTitle).toBeVisible();
  }

  async clickGoToRegistration() {
    await this.seleniumPage.goToRegistrationLink.click();
  }

  async verifyRegistrationTextVisible() {
    await expect(this.seleniumPage.registrationText).toBeVisible();
  }

  async fillRegistrationForm() {
    const data = registrationData;

    await this.seleniumPage.firstNameInput.fill(data.firstName);
    await this.seleniumPage.lastNameInput.fill(data.lastName);
    await this.seleniumPage.emailInput.fill(data.email);
    await this.seleniumPage.mobileInput.fill(data.mobile);
    await this.seleniumPage.countryDropdown.selectOption(data.country);
    await this.seleniumPage.cityInput.fill(data.city);
    await this.seleniumPage.messageInput.fill(data.message);
    await this.seleniumPage.captchaInput.fill(data.captcha);
  }

  async submitFormAndVerifyError() {
    await this.seleniumPage.sendButton.click();
    await this.page.waitForTimeout(3000);
    await expect(this.seleniumPage.verificationError).toBeVisible();
  }

  async takeScreenshot(path: string) {
    await this.page.screenshot({ path: `tests/Screenshots/${Date.now()}_form.png` });
  }

   async verifyRedirectUrl(expectedUrl: string) {
    await expect(this.page).toHaveURL(expectedUrl);
    await expect(this.page).toHaveURL(/thank-you/); // regex for partial match
  }

    async navigateToHomeAndVerify() {
  await this.seleniumPage.homeLink.click();
  await this.page.waitForLoadState('load');

  const currentUrl = this.page.url();
  console.log('Redirected to:', currentUrl);

  await expect(this.page).toHaveURL('https://www.toolsqa.com/');
}
}
