import { expect, Page } from '@playwright/test';
import { LoginPageLocators } from '../../../pages/BookStore/testcase-login';

export class LoginPageSteps {
  private maxRecaptchaRetries = 3;

  constructor(private page: Page) {}

  async gotoLoginPage() {
    try {
      await this.page.goto('https://demoqa.com/login', {
        timeout: 60000,
        waitUntil: 'domcontentloaded',
      });
    } catch (e) {
      throw new Error('Navigation to demoqa.com/login failed or timed out.');
    }
  }

  async goToRegistration() {
    await this.page.locator(LoginPageLocators.newUserButton).click();
    await expect(this.page.locator(LoginPageLocators.headerRegister)).toBeVisible();
    await expect(this.page.locator(LoginPageLocators.headerRegisterBookStore)).toBeVisible();
  }

  async fillRegistrationForm(first: string, last: string, user: string, pw: string) {
    await this.page.locator(LoginPageLocators.firstNameInput).fill(first);
    await this.page.locator(LoginPageLocators.lastNameInput).fill(last);
    await this.page.locator(LoginPageLocators.registerUsernameInput).fill(user);
    await this.page.locator(LoginPageLocators.registerPasswordInput).fill(pw);
  }

 
  async fillRecaptchaWithRetries(first: string, last: string, user: string, pw: string) {
    let attempts = 0;

    while (attempts < this.maxRecaptchaRetries) {
      try {
        const frame = await this.page.frameLocator(LoginPageLocators.recaptchaIframe);
        await frame.locator(LoginPageLocators.recaptchaCheckbox).check({ timeout: 5000 });
        // Successfully clicked
        this.page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
        await this.page.locator(LoginPageLocators.registerButton).click();
        return;
      } catch (error) {
        attempts++;
        console.warn(`Attempt ${attempts} to click reCAPTCHA failed: ${error}`);

        if (attempts < this.maxRecaptchaRetries) {
          console.log('Reloading page and retrying registration...');
          this.page.goto('https://demoqa.com/login', { waitUntil: 'domcontentloaded', timeout: 60000 })
          //await this.page.reload({timeout: 60000, waitUntil: 'domcontentloaded' })
          // Go to registration page again and refill registration form
          await this.goToRegistration();
          await this.fillRegistrationForm(first, last, user, pw);
        } else {
          console.log('Failed to check reCAPTCHA after multiple attempts');
        }
      }
    }
  }

  // async submitRegisterDialogHandler() {
  //   this.page.once('dialog', dialog => dialog.dismiss().catch(() => {}));
  //   await this.page.locator(LoginPageLocators.registerButton).click(); 
  // }

  async verifyLoginPageVisible() {
    await expect(this.page.locator(LoginPageLocators.headerLogin)).toBeVisible();
    await expect(this.page.locator(LoginPageLocators.welcomeText)).toBeVisible();
  }

  async login(username: string, password: string) {
    await this.page.locator(LoginPageLocators.usernameInput).fill(username);
    await this.page.locator(LoginPageLocators.passwordInput).fill(password);
    await this.page.locator(LoginPageLocators.loginButton).click();
  }

  async verifyLoggedIn() {
    await expect(this.page.locator(LoginPageLocators.loggedUserText)).toBeVisible();
  }
}
