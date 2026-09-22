import { expect, Page } from '@playwright/test';
import { MergedTablePage } from '../../pages/mergedWebtables';

export class MergedTableSteps {
  readonly page: Page;
  readonly table: MergedTablePage;
  originalDessertData: string[] = [];

  constructor(page: Page) {
    this.page = page;
    this.table = new MergedTablePage(page);
  }

  async verifyTotalCalculation(): Promise<void> {
  const rowCount = await this.table.tableRows.count();
  let total = 0;

  console.log('\n Shopping Table - Body Contents:\n');

  for (let i = 0; i < rowCount; i++) {
    const row = this.table.tableRows.nth(i);
    const cells = await row.locator('td').allTextContents();

    // Print full text of the row
    console.log(`Row ${i + 1}: ${cells.join(' | ')}`);

    // Add for total calculation (last cell is amount)
    const lastCell = cells[cells.length - 1]; // Get last column value
    total += Number(lastCell);
  }

  const footerTotal = await this.table.tableFooter.locator('td').last().textContent();

  console.log(`\n Displayed Total (Footer): ${footerTotal}`);
  console.log(` Calculated Total: ${total}\n`);

  // Compare total
  expect(Number(footerTotal)).toBe(total);
}


  // WebTable 2 – Print email for first name
  async printEmailByFirstName(firstName: string): Promise<void> {
    const rowCount = await this.table.simpleTableRows.count();

    for (let i = 0; i < rowCount; i++) {
      const row = this.table.simpleTableRows.nth(i);
      const firstCell = await row.locator('td').nth(0).textContent();

      if ((firstCell || '').trim() === firstName) {
        const email = await row.locator('td').nth(2).textContent();
        console.log(`Email for ${firstName}: ${email?.trim()}`);
        return;
      }
    }

    console.log(`No row found for first name: ${firstName}`);
  }

  //  WebTable 2 – Tick checkbox by First Name
  async checkCheckboxByFirstName(firstName: string): Promise<void> {
    const rowCount = await this.table.simpleTableRows.count();

    for (let i = 0; i < rowCount; i++) {
      const row = this.table.simpleTableRows.nth(i);
      const firstCell = await row.locator('td').nth(0).textContent();

      if ((firstCell || '').trim() === firstName) {
        const checkbox = row.locator('input[type="checkbox"]');
        await checkbox.check();
        //scroll if needed
        console.log(`Checked checkbox for ${firstName}`);
        return;
      }
    }

    console.log(`No checkbox found for first name: ${firstName}`);
  }

  //  WebTable 2 – Print full row by last name
  async printRowByLastName(lastName: string): Promise<void> {
    const rowCount = await this.table.simpleTableRows.count();

    for (let i = 0; i < rowCount; i++) {
      const row = this.table.simpleTableRows.nth(i);
      const lastNameCell = await row.locator('td').nth(1).textContent();

      if ((lastNameCell || '').trim() === lastName) {
        const cells = await row.locator('td').allTextContents();
        console.log(`Row for last name "${lastName}": ${cells.join(' | ')}`);
        return;
      }
    }
    console.log(`No row found for last name: ${lastName}`);
  }

  //  WebTable 3 – Dessert Sorting Tests
  async captureOriginalDessertData(): Promise<void> {
    this.originalDessertData = await this.table.dessertRows.allTextContents();
    // console.log("Original Desserts:", this.originalDessertData);
  }

  async clickDessertHeader(): Promise<void> {
    await this.table.dessertHeader.click();
  }

  async validateSorting(): Promise<void> {
    await this.clickDessertHeader();
    const sort = await this.table.dessertHeader.getAttribute("aria-sort");
    const currentData = await this.table.dessertRows.allTextContents();

    if (sort === "ascending") {
      const expected = [...this.originalDessertData].sort();
      console.log("Expecting Ascending:", currentData);
      expect(currentData).toEqual(expected);
    } else if (sort === "descending") {
      const expected = [...this.originalDessertData].sort((a, b) => b.localeCompare(a));
      console.log("Expecting Descending:", currentData);
      expect(currentData).toEqual(expected);
    } else {
      console.log("Expecting Unsorted:", currentData);
    }
  }
}
