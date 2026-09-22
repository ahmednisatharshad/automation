import { Locator, Page } from '@playwright/test';

export class MenuLocators {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  heading(): Locator {
    return this.page.getByRole('heading', { name: 'Menu' });
  }

  mainItem1(): Locator {
    return this.page.getByRole('link', { name: 'Main Item 1' });
  }

  mainItem2(): Locator {
    return this.page.getByRole('link', { name: 'Main Item 2' });
  }

  mainItem3(): Locator {
    return this.page.getByRole('link', { name: 'Main Item 3' });
  }

  subItem(index: number): Locator {
    return this.page.getByRole('link', { name: 'Sub Item' }).nth(index);
  }

  subSubList(): Locator {
    return this.page.getByRole('link', { name: 'SUB SUB LIST »' })
  }

  subSubItem1(): Locator {
    return this.page.getByRole('link', { name: 'Sub Sub Item 1' });
  }

  subSubItem2(): Locator {
    return this.page.getByRole('link', { name: 'Sub Sub Item 2' });
  }
}
