
export const TableLocators = {
  table: '#table',
  activeCell: '#table td.active',
  // row: (rowIndex: number) => `#table tr:nth-child(${rowIndex + 1})`,
  cell: (rowIndex: number, colIndex: number) => `#table tr:nth-child(${rowIndex + 1}) td:nth-child(${colIndex + 1})`
};





















import { Locator, Page } from '@playwright/test';

export class TextBoxPage {
  readonly page: Page;

  readonly table: Locator;
  readonly tableRows: Locator;

  constructor(page: Page) {
    this.page = page;
    this.table = page.locator('table#table > tbody');
    this.tableRows = this.table.locator('tr');
  }
}