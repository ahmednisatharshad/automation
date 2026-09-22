import { WebTablesLocators } from "../../pages/demoqatestcase4";
import { Page, test } from '@playwright/test';

export class WebTablesSteps {
  readonly page: Page;
  readonly locators: WebTablesLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new WebTablesLocators(page);
  }

  async openPage() {
    // Get URL from test config metadata , { timeout: 60000 }
    const url = test.info().config.metadata.baseUrls.testcaseurl;
    await this.page.goto(url, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });

    // Wait for the URL to be fully loaded (exact URL or pattern)
    // await this.page.waitForURL(url);

    // Scroll to the React table (rows container) after page load
    await this.locators.rows.first().scrollIntoViewIfNeeded();
  }

  async openAddForm() {
    await this.locators.addButton.click();
  }

  async fillForm(
    firstName: string,
    lastName: string,
    email: string,
    age: string,
    salary: string,
    department: string
  ) {
    await this.locators.firstNameInput.fill(firstName);
    await this.locators.lastNameInput.fill(lastName);
    await this.locators.emailInput.fill(email);
    await this.locators.ageInput.fill(age);
    await this.locators.salaryInput.fill(salary);
    await this.locators.departmentInput.fill(department);

    // Wait for 3 seconds after filling the form
    // await this.page.waitForTimeout(3000);
    console.log('Form details are filled')
  }

  async closeForm() {
    await this.locators.closeButton.click();
    console.log('Clicked close arrow and the details are not saved')
  }

  async isEntryPresent(firstName: string, lastName: string): Promise<boolean> {
    const rowCount = await this.locators.rows.count();
    for (let i = 0; i < rowCount; i++) {
      const row = this.locators.rows.nth(i);
      const rowText = await row.innerText();
      if (rowText.includes(firstName) && rowText.includes(lastName)) {
        return true;
      }
    }
    return false;
  }
}
