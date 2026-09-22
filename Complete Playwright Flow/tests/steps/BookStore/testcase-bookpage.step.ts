// bookspage.steps.ts
import { expect } from '@playwright/test';
import { BooksPageLocators } from '../../../pages/BookStore/testcase-bookpage';

export class BooksPageSteps {
    private locators: BooksPageLocators;

    constructor(locators: BooksPageLocators) {
        this.locators = locators;
    }

    async navigate() {
        await this.locators.page.goto('https://demoqa.com/books', {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });
    }

    async verifyInitialElementsVisible() {
 console.log('Checking visibility of search box...');
    await expect(this.locators.searchBox).toBeVisible();

    console.log('Checking visibility of search button...');
    await expect(this.locators.searchButton).toBeVisible();

    console.log('Checking visibility of Image column header...');
    await expect(this.locators.columnImage).toBeVisible();

    console.log('Checking visibility of Title column header...');
    await expect(this.locators.columnTitle).toBeVisible();

    console.log('Checking visibility of Author column header...');
    await expect(this.locators.columnAuthor).toBeVisible();

    console.log('Checking visibility of Publisher column header...');
    await expect(this.locators.columnPublisher).toBeVisible();

    console.log('Checking visibility of rows per page dropdown...');
    await expect(this.locators.rowsPerPageDropdown).toBeVisible();

    console.log('Verified: All initial elements are visible.');
    }

    async countBookRows(expected: number) {
        await this.locators.rowsPerPageDropdown.scrollIntoViewIfNeeded();
        await expect(this.locators.bookRows).toHaveCount(expected);

         if (expected === 10) {
        console.log('Initial rows are 10');
        await this.locators.page.waitForTimeout(4000);
    }
        
    }

    async changeRowsPerPage(value: string) {
        await this.locators.rowsPerPageDropdown.selectOption(value); 
        await this.locators.rowsPerPageDropdown.scrollIntoViewIfNeeded();
        console.log('Now rows are 20');
    }
}
