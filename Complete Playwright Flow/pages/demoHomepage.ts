import { Locator, Page } from '@playwright/test';

export class SeleniumTrainingPage {
  readonly page: Page;

  readonly courseTitle: Locator;
  readonly goToRegistrationLink: Locator;
  readonly registrationText: Locator;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly emailInput: Locator;
  readonly mobileInput: Locator;
  readonly countryDropdown: Locator;
  readonly cityInput: Locator;
  readonly messageInput: Locator;
  readonly captchaInput: Locator;
  readonly sendButton: Locator;
  readonly verificationError: Locator;
  readonly homeLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.courseTitle = page.getByText('Selenium Certification Training | Enroll Now | Study Online');
    this.goToRegistrationLink = page.getByRole('link', { name: 'Go To Registration' });
    this.registrationText = page.getByText('To register for Paid Training');
    this.firstNameInput = page.getByRole('textbox', { name: 'First Name (required)' });
    this.lastNameInput = page.getByRole('textbox', { name: 'Last Name' });
    this.emailInput = page.getByRole('textbox', { name: 'Email (required)' });
    this.mobileInput = page.getByRole('textbox', { name: 'Mobile (required)' });
    this.countryDropdown = page.getByLabel('Country (required)');
    this.cityInput = page.getByRole('textbox', { name: 'City (required)' });
    this.messageInput = page.getByRole('textbox', { name: 'Your Message (required)' });
    this.captchaInput = page.getByRole('textbox', { name: 'Input this code' });
    this.sendButton = page.getByRole('button', { name: 'Send' });
    this.verificationError = page.getByText('Sorry ! Unable to verify that');
    this.homeLink = page.getByRole('link', { name: 'Home' });
  }
}
