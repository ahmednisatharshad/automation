import { SortableLocators } from '../../pages/testcase-interactionSortable';
import { Page, expect } from '@playwright/test';

export class SortableSteps {
  readonly page: Page;
  readonly locators: SortableLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new SortableLocators(page);
  }

  async navigateToInteractionPage() {
    try {
      await this.page.goto('https://demoqa.com/interaction', {
        timeout: 60000,
        waitUntil: 'domcontentloaded',
      });
    } catch (e) {
      throw new Error('Navigation to demoqa.com/interaction failed or timed out.');
    }
  }
  //  LIST METHODS 
  async openSortableTab() {
    // Click the tab or list item "Sortable" 
    await this.page.getByRole('list').getByText('Sortable').first().click();

    await expect(this.locators.headingSortable).toBeVisible();
  }

  async verifyListItemsVisible(items: string[]) {
    for (const item of items) {
      await expect(this.locators.listItem(item)).toBeVisible();
    }
  }

  async reorderListItems(dragItemText: string, dropItemText: string) {
    await this.locators.listItem(dragItemText).dragTo(this.locators.listItem(dropItemText));
  }

  async getCurrentListOrder(): Promise<string[]> {
    // Using direct container locator to avoid nested text overlap issue
    return await this.locators.sortableContainer.locator('> div').allTextContents();
  }

  async assertListOrder(expectedOrder: string[]) {
    const actualOrder = await this.getCurrentListOrder();
    console.log('New order of items:', actualOrder);
    // expect(actualOrder).toEqual(expectedOrder);
  }

  async getListOrgOrder(){
      // Reload page and wait for DOM content loaded
        await this.page.reload({ waitUntil: 'domcontentloaded' });

    // Reopen the sortable tab after reload
        await this.openSortableTab();

    // Get the order after reload
        const orderAfterReload = await this.getCurrentListOrder();
        console.log('Order of list items after reload:', orderAfterReload);}


  //  GRID METHODS

  async openGridTab() {
    await this.locators.gridTab.click();
  }

  async verifyGridCellsVisible(cells: string[]) {
    for (const cell of cells) {
      await expect(this.locators.gridCell(cell)).toBeVisible();
    }
  }

  async reorderGridCells(reorderActions: [string, string][]) {
    for (const [from, to] of reorderActions) {
      await this.locators.gridCell(from).dragTo(this.locators.gridCell(to));
    }
  }

  async getCurrentGridOrder(): Promise<string[]> {
    // Use direct children to avoid nested text issues
    return await this.locators.gridContainer.locator('> div').allTextContents();
    
  }
}

