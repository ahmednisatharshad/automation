import { Page, Locator } from '@playwright/test';

export class DemoQATestCase1Locators {
  readonly page: Page;
  readonly grid: Locator;
  readonly editButtonRecord1: Locator;
  readonly ageInput: Locator;
  readonly departmentInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.grid = page.getByRole('grid');
    this.editButtonRecord1 = page.locator('#edit-record-1');
    this.ageInput = page.getByRole('textbox', { name: 'Age' });
    this.departmentInput = page.getByRole('textbox', { name: 'Department' });
    this.submitButton = page.getByRole('button', { name: 'Submit' });
  }


  // Parameterized locator – any table cell with matching text
  tableCellWithText = (text: string): Locator =>
    this.page.locator('.rt-td', { hasText: text });

  // Parameterized locator – row that contains both age and department
  rowWithValues = (age: string, department: string): Locator =>
    this.page.locator('.rt-tr-group').filter({
      has: this.page.locator('.rt-td', { hasText: age }),
    }).filter({
      has: this.page.locator('.rt-td', { hasText: department }),
    });
}