import { Page, Locator } from '@playwright/test';

export class DemoQALocators {
  readonly page: Page;
  readonly // DemoQA TestCase1 locators
  readonly grid: Locator;
  readonly editButtonRecord1: Locator;
  readonly ageInput: Locator;
  readonly departmentInput: Locator;
  readonly submitButton: Locator;

  // Parameterized locators
  tableCellWithText: (text: string) => Locator;
  rowWithValues: (age: string, department: string) => Locator;

  // DemoQA TestCase2 locators
  readonly addButton: Locator;
  readonly searchBox: Locator;
  readonly submitBtn2: Locator; // To avoid name clash
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly ageInput2: Locator;
  readonly salaryInput: Locator;
  readonly departmentInput2: Locator;
  readonly deleteIcon: Locator;
  readonly webtablegrid: Locator;
  readonly webtableEntries: Locator;
  readonly toScroll: Locator;

  constructor(page: Page) {
    this.page = page;

    // TestCase1
    this.grid = page.getByRole('grid');
    this.editButtonRecord1 = page.locator('#edit-record-1');
    this.ageInput = page.getByRole('textbox', { name: 'Age' });
    this.departmentInput = page.getByRole('textbox', { name: 'Department' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });

    this.tableCellWithText = (text: string) => page.locator('.rt-td', { hasText: text });
    this.rowWithValues = (age: string, department: string) =>
      page.locator('.rt-tr-group').filter({
        has: page.locator('.rt-td', { hasText: age }),
      }).filter({
        has: page.locator('.rt-td', { hasText: department }),
      });

    // TestCase2 (WebTables)
    this.addButton = page.getByRole('button', { name: 'Add' });
    this.searchBox = page.getByRole('textbox', { name: 'Type to search' });
    this.submitBtn2 = page.getByRole('button', { name: 'Submit' }); // renamed to submitBtn2
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.emailInput = page.getByRole('textbox', { name: 'name@example.com' });
    this.ageInput2 = page.getByRole('textbox', { name: 'Age' }); // completely separate references
    this.salaryInput = page.getByRole('textbox', { name: 'Salary' });
    this.departmentInput2 = page.getByRole('textbox', { name: 'Department' });
    this.deleteIcon = page.locator('[title="Delete"]');
    this.webtablegrid = page.getByRole('grid');
    this.webtableEntries = page.locator('[class="rt-tr-group"]');
    this.toScroll = page.getByTitle('Ad.Plus Advertising');
  }
}
