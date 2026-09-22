import {expect,type Locator,type Page } from '@playwright/test';

export class Signup{
    readonly page: Page;
    readonly signupbutton : Locator
    readonly email: Locator;
    readonly first_name: Locator;
    readonly last_name: Locator;
    readonly dateofbirth: Locator;
    readonly gender: Locator;
    readonly continue_bar: Locator;


    constructor(page: Page) {
        this.page = page;
        this.signupbutton = 
        this.email = page.locator('#email');
        this.first_name = page.locator('#firstName');
        this.last_name = page.locator('#lastName');
        this.dateofbirth = page.locator('#react-aria4302536241-:r7:');
        this.gender = page.locator('#male');
        this.continue_bar = page.locator('[data-test="submit-button"]');
        
    }
     // Method to navigate to the Zocdoc
     async homePage() {
        await this.page.goto('https://www.zocdoc.com/');
        const title = await this.page.title();
        expect(title).toContain('Zocdoc'); 
     //Creation of Profile
        await this.signupbutton.click();
    }

    async profileCreation(
        emailid: string,
        firstname: string,
        lastname: string,
        DOB: string
    ){
// Action for filling in the first name
await this.first_name.click();
await this.first_name.fill(firstname);

// Action for filling in the last name
await this.last_name.click();
await this.last_name.fill(lastname);

// Action for filling in the email
await this.email.click();
await this.email.fill(emailid);

// Action for filling in the date of birth
await this.dateofbirth.click();
await this.dateofbirth.fill(DOB);

// Action for selecting the gender
await this.gender.click();

// Action for clicking the continue button
await this.continue_bar.click();

 // Take a screenshot for reference
 await this.page.screenshot({
    path: 'tests/Screenshots/' + Date.now() + 'Status_screenshot.png',
    fullPage: true
});
    }
}

