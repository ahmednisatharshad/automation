import { expect, type Locator, type Page } from '@playwright/test';

export class Login {
    readonly page: Page;
    readonly loginbutton: Locator;
    readonly patientlogin: Locator;
    readonly emailbox: Locator;
    readonly continuebar: Locator;
    readonly profilebar: Locator;
    readonly appointmentsbar: Locator;
    readonly logout: Locator;

    // Constructor to initialize page elements
    constructor(page: Page) {
        this.page = page;

        // Locators for various elements
        this.loginbutton = page.locator('button[type="loginbutton"]'); // Login button
        this.patientlogin = page.locator('#Patients-label'); // Patient login option
        this.emailbox = page.locator('#email'); // Email input field
        this.continuebar = page.locator('[data-test="submit-button"]'); // Continue button
        this.profilebar = page.locator('[data-test="username"]'); // Profile section
        this.appointmentsbar = page.locator('#past-appointments'); // Appointments section
        this.logout = page.locator('#sign-out-label'); // Logout option
    }

    // Method to navigate to the Zocdoc login page
    async homePage() {
        await this.page.goto('https://www.zocdoc.com/'); // Navigate to homepage


        const title = await this.page.title();
        expect(title).toContain('Zocdoc'); 
        console.log('Successfully navigated to Zocdoc homepage.');
    }

    // Method to perform login and navigate through different sections
    async loginPage(email: string) {
        // Click the login button
        await this.loginbutton.click();
        console.log('Login button clicked.');

        //  Select patient login option
        await this.patientlogin.click();
        console.log('Patient login option selected.');

        //  Fill in the email address
        await this.emailbox.fill(email);
        console.log(`Email entered into email box.`);

        // Click the continue button
        await this.continuebar.click();
        console.log('Continue button clicked.');

        const profileVisible = await this.profilebar.isVisible();
        expect(profileVisible).toBeTruthy(); // Validation: Profile section should be visible
        console.log('Profile section is visible.');

        //  Navigate to the appointments section
        await this.appointmentsbar.click();
        console.log('Appointments section accessed.');

        //  Take a screenshot 
        await this.page.screenshot({
            path: 'tests/Screenshots/' + Date.now() + 'Appointmentlist_screenshot.png',
            fullPage: true
        });
        console.log('Screenshot taken for appointments section.');

        // Step 7: Logout
        await this.logout.click();
        console.log('Logout button clicked.');
    }

    // Teardown method to ensure logout functionality
    async teardown() {
        
        await this.logout.click();

        const isLoggedOut = await this.page.locator('#Patients-label').isVisible();
        expect(isLoggedOut).toBeTruthy(); 
        console.log('User successfully logged out.');
    }
}