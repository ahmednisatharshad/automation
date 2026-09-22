import { expect, Page, test } from '@playwright/test';
import { LoginPageLocators } from '../../pages/LoginPage';


export class LoginPageSteps {
  private locators: LoginPageLocators;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.locators = new LoginPageLocators(page);
  }

  async navigateToLoginPage() {
    const url = test.info().config.metadata.baseUrls.ecommerce;
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    await this.locators.myAccountText.hover();
    await this.locators.loginText.click();
   
  }

async navigateToLoginPagefromLandingpage() {
    await this.locators.myAccountText.hover();
    await this.locators.loginText.click();
   
  }  
  
 async validateLoginHeaderAndMenuLinksVisible() {
    await expect(this.locators.returningCustomerHeading).toBeVisible();
    await expect(this.locators.loginLink).toBeVisible();
    await expect(this.locators.registerLink).toBeVisible();
    await expect(this.locators.forgottenPasswordmenuLink).toBeVisible();
    await expect(this.locators.myAccountLink).toBeVisible();
    await expect(this.locators.addressBookLink).toBeVisible();
    await expect(this.locators.wishListLink).toBeVisible();
    await expect(this.locators.orderHistoryLink).toBeVisible();
    await expect(this.locators.downloadsLink).toBeVisible();
    await expect(this.locators.recurringPaymentsLink).toBeVisible();
    await expect(this.locators.rewardPointsLink).toBeVisible();
    await expect(this.locators.returnsLink).toBeVisible();
    await expect(this.locators.transactionsLink).toBeVisible();
    await expect(this.locators.newsletterLink).toBeVisible();
   
  }

  async validateLoginPageElements() {
    await expect(this.locators.returningCustomerHeading).toBeVisible();
    await expect(this.locators.returningCustomerText).toBeVisible();
    await expect(this.locators.emailTextbox).toBeVisible();
    await expect(this.locators.passwordTextbox).toBeVisible();
    await expect(this.locators.forgottenPasswordLink).toBeVisible();
    await expect(this.locators.loginButton).toBeVisible();
  }

  async login(credentials: { email: string; password: string }) {
  await this.locators.emailTextbox.fill(credentials.email);
  await this.locators.passwordTextbox.fill(credentials.password);
  await this.locators.loginButton.click();
  }

  async verifyMyAccountSections() {
    await expect(this.locators.myAccountHeading).toBeVisible();
    await expect(this.locators.myOrdersHeading).toBeVisible();
    await expect(this.locators.myAffiliateAccountHeading).toBeVisible();
  }

  async verifyInvalidLogin(){
    await expect(this.locators.invalidText).toBeVisible();
  }
}
