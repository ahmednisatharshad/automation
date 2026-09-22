import { Locator, Page } from '@playwright/test';

export class SortableLocators {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get sortableTab() {
    return this.page.getByText('Sortable');
  }

  get headingSortable() {
    return this.page.getByRole('heading', { name: 'Sortable' });
  }

  get listContainer() {
    return this.page.getByLabel('List');
  }

  // For list mode
  get sortableContainer() {
    return this.page.locator('#sortableContainer');
  }

  listItem(text: string): Locator {
    return this.listContainer.getByText(text);
  }

  // === ADD THESE FOR GRID MODE ===

  get gridTab() {
    return this.page.getByRole('tab', { name: 'Grid' });
  }

  get gridContainer() {
    return this.page.getByLabel('Grid');
  }
  gridCell(text: string): Locator {
    return this.gridContainer.getByText(text);
  }
}
