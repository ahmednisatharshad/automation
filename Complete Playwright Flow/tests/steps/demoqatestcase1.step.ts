import { expect } from '@playwright/test';
import { DemoQATestCase1Locators } from '../../pages/demoqatestcase1';


export class DemoQATestCase1Steps {
  private locators: DemoQATestCase1Locators;

  constructor(locators: DemoQATestCase1Locators) {
    this.locators = locators;
  }

  // async validateInitialValues(expectedAge: string, expectedDepartment: string) {
  //   await expect(this.locators.grid).toContainText(expectedAge);
  //   await expect(this.locators.grid).toContainText(expectedDepartment);
  // }

//Parameterized 
async validateInitialValues(expectedAge: string, expectedDepartment: string) {
  console.log(`Validating initial values: Age = ${expectedAge}, Department = ${expectedDepartment}`);
  const row = this.locators.rowWithValues(expectedAge, expectedDepartment);
  await expect(row).toBeVisible();
  console.log('Initial values are visible in the UI.');
}

async updateAge(newAge: string) {
  console.log(`Updating age to: ${newAge}`);
  await this.locators.editButtonRecord1.click();
  console.log('Clicked edit button for record 1');
  await this.locators.ageInput.fill(newAge);
  console.log(`Filled age input with new age: ${newAge}`);
  await this.locators.submitButton.click();
  console.log('Submitted the updated age form');
}

async updateDepartment(newDepartment: string) {
  console.log(`Updating department to: ${newDepartment}`);
  await this.locators.editButtonRecord1.click();
  console.log('Clicked edit button for record 1');
  await this.locators.departmentInput.fill(newDepartment);
  console.log(`Filled department input with new department: ${newDepartment}`);
  await this.locators.submitButton.click();
  console.log('Submitted the updated department form');
}

async validateUpdatedValues(age: string, department: string) {
  console.log(`Validating updated values: Age = ${age}, Department = ${department}`);
  await expect(this.locators.grid).toContainText(age);
  await expect(this.locators.grid).toContainText(department);
  console.log('Updated values are present in the UI grid');
}
}