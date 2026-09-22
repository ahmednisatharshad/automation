import { type Page, type Locator } from '@playwright/test';

export class DemoqaWebTable {
    readonly page: Page;
    readonly addButton: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly emailId: Locator;
    readonly age: Locator;
    readonly salary: Locator;
    readonly department: Locator;
    readonly submitButton: Locator;
    readonly closeButton: Locator;    // Added close button locator
    readonly row: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addButton = page.getByRole("button", { name: "Add" });
        this.firstName = page.getByPlaceholder("First Name");
        this.lastName = page.getByPlaceholder("Last Name");
        this.emailId = page.getByPlaceholder("name@example.com");
        this.age = page.getByPlaceholder("Age");
        this.salary = page.getByPlaceholder("Salary");
        this.department = page.getByPlaceholder("Department");
        this.submitButton = page.getByRole("button", { name: "Submit" });
        this.closeButton = page.getByRole("button", { name: "Close" });  
        this.row = page.locator('div[role="rowgroup"] div[role="row"]');
    }
}
