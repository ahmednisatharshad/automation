import { expect, type Locator, type Page } from '@playwright/test';

export class Logout{

    readonly page: Page
    readonly account:Locator
    readonly logoutButton:Locator
   
    constructor(page) {
      this.page = page;
      this.account = page.getByRole('button', { name: ' My account' })
      this.logoutButton = page.getByRole('link', { name: ' Logout' })
    }
  
    async logout() {
     await this.account.click()
     await this.logoutButton.click()
    }
  }