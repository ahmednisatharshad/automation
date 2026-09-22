import { expect, type Locator, type Page } from '@playwright/test';

export class DoctorAppointment {
    readonly page: Page;
    readonly specialist_searchBox: Locator;
    readonly locationbox: Locator;
    readonly insurance_planbox: Locator;
    readonly insuranceplan: Locator;
    readonly SearchBar: Locator;
    readonly typeofcare1: Locator;
    readonly typeofcare2: Locator;
    readonly Neerajappointmentdate: Locator;
    readonly Neerajappointmenttime: Locator;
    readonly email: Locator;
    readonly first_name: Locator;
    readonly last_name: Locator;
    readonly dateofbirth: Locator;
    readonly gender: Locator;
    readonly continue_bar: Locator;
    readonly doctorName: Locator;
    readonly bookingConfirmationMessage: Locator;

    // Constructor to initialize page elements
    constructor(page: Page) {
        this.page = page;
        this.specialist_searchBox = page.getByPlaceholder('Condition, procedure, doctor...');
        this.locationbox = page.getByPlaceholder('City, state, or zip code');
        this.insurance_planbox = page.getByPlaceholder('Insurance carrier and plan');
        this.insuranceplan = page.getByRole('button', { name: 'iam-paying-for-myself-link' });
        this.SearchBar = page.getByRole('button', { name: 'Search' });
        this.typeofcare1 = page.getByText('EyeProblem');
        this.typeofcare2 = page.getByText('EyelidProblem');
        this.Neerajappointmentdate = page.locator('doctor-thumb > .date-thumb-top > .Friday-action > button');
        this.Neerajappointmenttime = page.locator('doctor-thumb > .timestamp-thumb-top > .2025-04-25T11:00:00-04:00-action > button');
        this.email = page.locator('#email');
        this.first_name = page.locator('#firstName');
        this.last_name = page.locator('#lastName');
        this.dateofbirth = page.locator('#react-aria4302536241-:r7:');
        this.gender = page.locator('#male');
        this.continue_bar = page.locator('[data-test="submit-button"]');
        this.doctorName = page.locator('#doctor-name');
        this.bookingConfirmationMessage = page.locator('#booking-confirmation-message'); 
    }

    // Method to navigate to the Zocdoc login page
    async homePage() {
        await this.page.goto('https://www.zocdoc.com/');
        const title = await this.page.title();
        expect(title).toContain('Zocdoc'); 
    }

    // Method to book an appointment with validations
    async appointment(
        specialist: string,
        location: string,
        emailid: string,
        firstname: string,
        lastname: string,
        DOB: string
    ) {
        // Fill in the specialist search box
        await this.specialist_searchBox.click();
        await this.specialist_searchBox.fill(specialist);

        // Fill in the location search box
        await this.locationbox.click();
        await this.locationbox.fill(location);
        
        // Validate location 
        const locationText = await this.locationbox.inputValue();
        expect(locationText).toBe("Washington D.C., DC");
        
        //Selecting Insurance Type
        await this.insurance_planbox.click();
        await this.insuranceplan.click();

        // Click on the search button
        await this.SearchBar.click();

        // Validate doctor name
        const selectedDoctorName = await this.doctorName.innerText();
        expect(selectedDoctorName).toBe('Dr. Neeraj Bindal, OD'); 

        // Interact with care types
        await this.typeofcare1.click();
        await this.typeofcare2.click();

        // Select appointment date and time
        await this.Neerajappointmentdate.click();
        await this.Neerajappointmenttime.click();

        // Fill in patient details
        await this.email.fill(emailid);
        await this.first_name.fill(firstname);
        await this.last_name.fill(lastname);
        await this.dateofbirth.fill(DOB);

        // Select gender and click continue
        await this.gender.click();
        await this.continue_bar.click();

        // Screenshot
        await this.page.screenshot({
            path: 'tests/Screenshots/' + Date.now() + '_Appointmentpage_screenshot.png',
            fullPage: true
        });
    }
}