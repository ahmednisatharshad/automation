import { Page, Locator } from '@playwright/test';

export class WebTablesLocators {
  readonly page: Page;
  readonly addButton: Locator;
  readonly searchBox: Locator;
  readonly submitButton: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly ageInput: Locator;
  readonly salaryInput: Locator;
  readonly departmentInput: Locator;
  readonly deleteIcon: Locator;
  readonly webtablegrid: Locator;
  readonly webtableEntries: Locator;
  readonly toScroll: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.searchBox = page.getByRole('textbox', { name: 'Type to search' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.emailInput = page.getByRole('textbox', { name: 'name@example.com' });
    this.ageInput = page.getByRole('textbox', { name: 'Age' });
    this.salaryInput = page.getByRole('textbox', { name: 'Salary' });
    this.departmentInput = page.getByRole('textbox', { name: 'Department' });
    this.deleteIcon = page.locator('[title="Delete"]'); 
    this.webtablegrid = page.getByRole('grid')
    this.webtableEntries = page.locator('[class="rt-tr-group"]')
    this.toScroll = page.getByTitle('Ad.Plus Advertising')
  }
}
