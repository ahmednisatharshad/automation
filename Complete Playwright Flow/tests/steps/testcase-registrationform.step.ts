import { Page, expect } from '@playwright/test';
import { AutomationPracticeFormLocators } from '../../pages/testcase-registrationform';
import formData from '../../test-data/userData.json';

export class StudentFormSteps {
  readonly locators: AutomationPracticeFormLocators;

  constructor(public readonly page: Page) {
    this.locators = new AutomationPracticeFormLocators(page);
  }

  async fillForm(data = formData) {
    const formLocators = this.locators;
    await formLocators.heading.waitFor({ state: 'visible' });

    await formLocators.firstName.fill(data.firstName);
    await formLocators.lastName.fill(data.lastName);
    await formLocators.email.fill(data.email);
    //await formLocators.email.press('Tab')
    //await this.page.getByText('Male', { exact: true }).click();
    //await this.page.waitForSelector('//input[@value="Male"]',{ timeout: 5000 });

    await formLocators.genderMale.click(),{timeout:30000};

//     const maxRetries = 3;
// for (let i = 0; i < maxRetries; i++) {
//   try {
//     await formLocators.genderMale.click({ timeout: 30000 });
//     break; // Success, exit loop
//   } catch (e) {
//     if (i === maxRetries - 1) throw e; // Rethrow if last try
//     await this.page.waitForTimeout(1000); // Optional: wait before retry
//   }
// }
    
    await formLocators.mobile.fill(data.mobile);

    await formLocators.dobInput.click();
    await formLocators.dobYear.selectOption(data.dob.year);
    await formLocators.dobMonth.selectOption(data.dob.month);
    await formLocators.dobDay(data.dob.day).click();

    await formLocators.subjectsInput.fill(data.subject);
    await this.page.waitForTimeout(3000);
    await formLocators.subjectsInput.press('Enter');

    await formLocators.hobbiesMusic.click();
    await formLocators.hobbiesSports.click();
   
    // await formLocators.uploadPictureInput.setInputFiles(['C:/Users/ahmed.arshad/Downloads/sort.png']);

    await formLocators.address.fill(data.address);

    await formLocators.state.click();
    await formLocators.stateOption(data.state).click();

    await formLocators.city.click();
    await formLocators.cityOption(data.city).click();

    await formLocators.submitBtn.click();
    console.log('Form has been filled with valid data')
  }

  async assertSubmission(data = formData) {
    const formLocators = this.locators;
    await expect(formLocators.resultModal).toBeVisible();

    await expect(formLocators.resultTable).toContainText(`${data.firstName} ${data.lastName}`);
    await expect(formLocators.resultTable).toContainText(data.email);
    await expect(formLocators.resultTable).toContainText(data.gender);
    await expect(formLocators.resultTable).toContainText(data.mobile);
    // await expect(formLocators.resultTable).toContainText(`${parseInt(data.dob.day)} August,${data.dob.year}`);
    await expect(formLocators.resultTable).toContainText(data.subject);
    await expect(formLocators.resultTable).toContainText('Music, Sports');
    await expect(formLocators.resultTable).toContainText(data.picture);
    await expect(formLocators.resultTable).toContainText(data.address);
    await expect(formLocators.resultTable).toContainText(`${data.state} ${data.city}`);
    console.log('All data were verified and filled properly')
  }
}
