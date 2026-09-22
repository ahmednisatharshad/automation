// bookspage.locator.ts
import { Page, Locator } from '@playwright/test';

export class BooksPageLocators {
    readonly page: Page;
    readonly searchBox: Locator;
    readonly searchButton: Locator;
    readonly columnImage: Locator;
    readonly columnTitle: Locator;
    readonly columnAuthor: Locator;
    readonly columnPublisher: Locator;
    readonly bookRows: Locator;
    readonly rowsPerPageDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchBox = page.getByRole('textbox', { name: 'Type to search' });
        this.searchButton = page.locator('#basic-addon2');
        this.columnImage = page.getByText('Image', { exact: true });
        this.columnTitle = page.getByText('Title');
        this.columnAuthor = page.getByText('Author');
        this.columnPublisher = page.getByText('Publisher');
        this.bookRows = page.locator('div.rt-tr-group');
        this.rowsPerPageDropdown = page.getByLabel('rows per page');
    }
}
