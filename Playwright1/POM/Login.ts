import { expect, type Locator, type Page } from '@playwright/test';

export class Login {

    readonly page: Page
    // readonly loginLink: string
    readonly usernameInput: string
    readonly passwordInput: string
    readonly loginButton:Locator
   
    constructor(page) {
      this.page = page
    //   this.loginLink="#login2"
      this.usernameInput = '#input-email'
      this.passwordInput = '#input-password'
      this.loginButton = page.getByRole('button', { name: 'Login' })
    }
  
    async gotoLoginPage(){
        await this.page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');
    }
  
    async login(username, password) {
    //  await this.page.waitForSelector(this.loginLink)
    //  await this.page.locator(this.loginLink).click();
     await this.page.waitForSelector(this.usernameInput)
     await this.page.locator(this.usernameInput).fill(username);
     await this.page.waitForSelector(this.passwordInput)     
     await this.page.locator(this.passwordInput).fill(password);
    //  await this.page.waitForSelector(this.loginButton)
     await this.loginButton.click();
     
     
    }
  }