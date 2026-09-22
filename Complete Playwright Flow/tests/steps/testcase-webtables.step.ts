import { Page, test, expect } from '@playwright/test';
import { DemoqaWebTable } from '../../pages/Testcase-webtables';
import entryData from '../../test-data/entriesData.json';

export class DemoqaWebTablesStep {
    readonly page: Page;
    readonly webtable: DemoqaWebTable;

    constructor(page: Page) {
        this.page = page;
        this.webtable = new DemoqaWebTable(page);
    }

    async gotoUrl() {
        // Get URL from test config metadata
    const url = test.info().config.metadata.baseUrls.testcaseurl;
    await this.page.goto(url, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        })

    // Wait for the URL to be fully loaded (exact URL or pattern)
    //await this.page.waitForURL(url);
     
    }

    async addFields() {
        for (const entry of entryData) {
            await this.webtable.addButton.scrollIntoViewIfNeeded();
            await this.webtable.addButton.click();

            await this.webtable.firstName.fill(entry.firstName);
            await this.webtable.lastName.fill(entry.lastName);
            await this.webtable.emailId.fill(entry.email);
            await this.webtable.age.fill(entry.age);
            await this.webtable.salary.fill(entry.salary);
            await this.webtable.department.fill(entry.department);

            await this.webtable.submitButton.click();
        }
    }

    async modifyEntries() {
        const matchingRow = this.webtable.row.filter({
            has: this.page.locator('.rt-td').nth(0),
            hasText: /^kavipriya/i
        });

        const editButton = matchingRow.locator('//span[@title="Edit"]');
        await editButton.scrollIntoViewIfNeeded();
        await editButton.click();

        await this.webtable.salary.fill("32000");
        await this.webtable.department.fill("Testing");
        await this.webtable.submitButton.click();

        await expect(matchingRow.locator('.rt-td').nth(4)).toHaveText("32000");
        await expect(matchingRow.locator('.rt-td').nth(5)).toHaveText("Testing");
    }

    // Updated: Fill form but close (cancel) instead of submitting
    async addFieldsButCancel() {
        for (const entry of entryData) {
            await this.webtable.addButton.scrollIntoViewIfNeeded();
            await this.webtable.addButton.click();

            await this.webtable.firstName.fill(entry.firstName);
            await this.webtable.lastName.fill(entry.lastName);
            await this.webtable.emailId.fill(entry.email);
            await this.webtable.age.fill(entry.age);
            await this.webtable.salary.fill(entry.salary);
            await this.webtable.department.fill(entry.department);

            // Instead of submit, click Close button
            await this.webtable.closeButton.click();
            await this.page.waitForTimeout(1000);
        }
    }
    //Verifies that none of the entries in entryData are present in the web table.
   
  async verifyEntriesNotPresent() {
    for (const entry of entryData) {
      const matchingRow = this.webtable.row.filter({
        hasText: entry.firstName,
      });
      await expect(matchingRow).toHaveCount(0);
    }
  }
    
}
