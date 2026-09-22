// AutomationPracticeForm.locator.ts
import { Page, Locator } from '@playwright/test';

export class AutomationPracticeFormLocators {
  readonly heading: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly email: Locator;
  readonly genderMale: Locator;
  readonly mobile: Locator;
  readonly dobInput: Locator;
  readonly dobYear: Locator;
  readonly dobMonth: Locator;
  readonly dobDay: (day: string) => Locator;
  readonly subjectsInput: Locator;
  readonly hobbiesMusic: Locator;
  readonly hobbiesSports: Locator;
  readonly uploadPictureInput: Locator;
  readonly address: Locator;
  readonly state: Locator;
  readonly stateOption: (state: string) => Locator;
  readonly city: Locator;
  readonly cityOption: (city: string) => Locator;
  readonly submitBtn: Locator;
  readonly resultModal: Locator;
  readonly resultTable: Locator;

  constructor(public readonly page: Page) {
    this.heading = page.getByRole('heading', { name: 'Student Registration Form' });
    this.firstName = page.getByRole('textbox', { name: 'First Name' });
    this.lastName = page.getByRole('textbox', { name: 'Last Name' });
    this.email = page.getByRole('textbox', { name: 'name@example.com' });
    this.genderMale =  page.getByText('Male', { exact: true })
    //getByText('Male' );
    // locator('#gender-radio-1');
    // getByLabel('Male').first();
    // locator('//input[@type="radio" and @name="gender" and @value="Male"]')
    this.mobile = page.getByRole('textbox', { name: 'Mobile Number' });
    this.dobInput = page.locator('#dateOfBirthInput');
    this.dobYear = page.locator('.react-datepicker__year-select');
    this.dobMonth = page.locator('.react-datepicker__month-select');
    this.dobDay = (day: string) =>
      page.locator(`.react-datepicker__day--0${day.padStart(2, '0')}:not(.react-datepicker__day--outside-month)`);
    this.subjectsInput = page.locator('#subjectsInput');
    this.hobbiesMusic =  page.getByText('Music')
    this.hobbiesSports = page.getByText('Sports')
    this.uploadPictureInput = page.locator('input#uploadPicture');
    this.address = page.getByRole('textbox', { name: 'Current Address' });
    this.state = page.locator('#state');
    this.stateOption = (state: string) => page.getByText(state, { exact: true });
    this.city = page.locator('#city');
    this.cityOption = (city: string) => page.getByText(city, { exact: true });
    this.submitBtn = page.getByRole('button', { name: 'Submit' });
    this.resultModal = page.getByText('Thanks for submitting the form');
    this.resultTable = page.locator('tbody');
  }
}
