import { Locator, Page } from '@playwright/test';

export class MergedTablePage {
  readonly page: Page;

  // Shopping Table Locators
  readonly shoppingTable: Locator;
  readonly tableBody: Locator;
  readonly tableFooter: Locator;
  readonly tableRows: Locator;
  readonly tableTotal: Locator;

  // Simple Table Locators
  readonly simpleTable: Locator;
  readonly simpleTableBody: Locator;
  readonly simpleTableRows: Locator;

  // Material Table Locators
  readonly matTable: Locator;
  readonly dessertHeader: Locator;
  readonly dessertRows: Locator;

  constructor(page: Page) {
    this.page = page;

    // Shopping Table
    this.shoppingTable = page.locator('#shopping');
    this.tableBody = page.locator('//table[@id="shopping"]/tbody') //chained locator (parent child)
    this.tableFooter = page.locator('//table[@id="shopping" and @name="listtable"]/tfoot'); //chained locator (using and)
    this.tableRows = page.locator('//table[@id="shopping"]/tbody/tr'); //chained locator
    this.tableTotal = this.tableFooter.locator('td');

    // Simple Table
    this.simpleTableBody = page.locator('#simpletable tbody');   //chained locator
    this.simpleTableRows = page.locator('#simpletable tbody tr')  //chained locator

    // Material Table
    this.matTable = page.locator('table.mat-sort.table');   //css locator
    this.dessertHeader = page.locator("th[mat-sort-header='name']");    //css locator(attribute with value)
    this.dessertRows = page.locator("//table[contains(@class,'mat-sort table')]/tr/td[1]"); //chained locator
  }
}
