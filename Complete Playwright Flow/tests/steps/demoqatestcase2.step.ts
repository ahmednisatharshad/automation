import { WebTablesLocators } from "../../pages/demoqatestcase2";
import { expect, test } from '@playwright/test';

export class WebTablesSteps {
  constructor(private locators: WebTablesLocators) {}

  async openPage() {
    const url = test.info().config.metadata.baseUrls.testcaseurl;
    await this.locators.page.goto(url, {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });
    await this.locators.toScroll.scrollIntoViewIfNeeded();
  }

  async addRecord(record: {
    firstName: string;
    lastName: string;
    email: string;
    age: string;
    salary: string;
    department: string;
  }) {
    await this.locators.addButton.click();
    await this.locators.firstNameInput.fill(record.firstName);
    await this.locators.lastNameInput.fill(record.lastName);
    await this.locators.emailInput.fill(record.email);
    await this.locators.ageInput.fill(record.age);
    await this.locators.salaryInput.fill(record.salary);
    await this.locators.departmentInput.fill(record.department);
    await this.locators.submitButton.click();
  }

  async addMultipleRecords(dataArray: any[]) {
    for (const record of dataArray) {
      await this.addRecord(record);
    }
  }

  async countRecords() {
    const rowCount = await this.locators.webtableEntries.count();
    const entryCount = (rowCount - 3);
    console.log(`Number of rows in the table: ${entryCount}`);
  }


  async searchRecord(name: string) {
    await this.locators.searchBox.fill(name);
  }

  async deleteSearchedRecord() {
    await this.locators.deleteIcon.first().click(); // deletes first visible match
  }

  async expectRecordVisible(name: string) {
    await expect(this.locators.webtablegrid).toContainText(name);
  }

  async expectRecordNotVisible(name: string) {
    await expect(this.locators.webtablegrid).not.toContainText(name);
  }
}
