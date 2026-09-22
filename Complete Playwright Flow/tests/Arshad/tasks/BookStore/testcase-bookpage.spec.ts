// books.spec.ts
import { test } from '@playwright/test';
import { BooksPageLocators } from '../../../../pages/BookStore/testcase-bookpage';
import { BooksPageSteps } from '../../../steps/BookStore/testcase-bookpage.step';
//08.08.2025
test('Verify books page loads and count all book rows when rows per page is 10 and 20', async ({ page }) => {
    // Setup objects
    const locators = new BooksPageLocators(page);
    const steps = new BooksPageSteps(locators);

    // Navigate to page
    await steps.navigate();

    // Verify page elements
    await steps.verifyInitialElementsVisible();

    // Count initial rows (should be 10)
    await steps.countBookRows(10);

    // Change rows per page to 20 and verify
    await steps.changeRowsPerPage('20');
    await steps.countBookRows(20);
});
