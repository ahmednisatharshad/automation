# Test info

- Name: Appointment for Neeraj to consult Eye >> Data driven-Excel
- Location: D:\Assessment\tests\Question_one.spec.ts:20:7

# Error details

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Condition, procedure, doctor...')

    at DoctorAppointment.appointment (D:\Assessment\POM\DoctorAppointment.ts:61:41)
    at D:\Assessment\tests\Question_one.spec.ts:24:25
```

# Test source

```ts
   1 | import { expect, type Locator, type Page } from '@playwright/test';
   2 |
   3 | export class DoctorAppointment {
   4 |     readonly page: Page;
   5 |     readonly specialist_searchBox: Locator;
   6 |     readonly locationbox: Locator;
   7 |     readonly insurance_planbox: Locator;
   8 |     readonly insuranceplan: Locator;
   9 |     readonly SearchBar: Locator;
   10 |     readonly typeofcare1: Locator;
   11 |     readonly typeofcare2: Locator;
   12 |     readonly Neerajappointmentdate: Locator;
   13 |     readonly Neerajappointmenttime: Locator;
   14 |     readonly email: Locator;
   15 |     readonly first_name: Locator;
   16 |     readonly last_name: Locator;
   17 |     readonly dateofbirth: Locator;
   18 |     readonly gender: Locator;
   19 |     readonly continue_bar: Locator;
   20 |     readonly doctorName: Locator;
   21 |     readonly bookingConfirmationMessage: Locator;
   22 |
   23 |     // Constructor to initialize page elements
   24 |     constructor(page: Page) {
   25 |         this.page = page;
   26 |         this.specialist_searchBox = page.getByPlaceholder('Condition, procedure, doctor...');
   27 |         this.locationbox = page.getByPlaceholder('City, state, or zip code');
   28 |         this.insurance_planbox = page.getByPlaceholder('Insurance carrier and plan');
   29 |         this.insuranceplan = page.getByRole('button', { name: 'iam-paying-for-myself-link' });
   30 |         this.SearchBar = page.getByRole('button', { name: 'Search' });
   31 |         this.typeofcare1 = page.getByText('EyeProblem');
   32 |         this.typeofcare2 = page.getByText('EyelidProblem');
   33 |         this.Neerajappointmentdate = page.locator('doctor-thumb > .date-thumb-top > .Friday-action > button');
   34 |         this.Neerajappointmenttime = page.locator('doctor-thumb > .timestamp-thumb-top > .2025-04-25T11:00:00-04:00-action > button');
   35 |         this.email = page.locator('#email');
   36 |         this.first_name = page.locator('#firstName');
   37 |         this.last_name = page.locator('#lastName');
   38 |         this.dateofbirth = page.locator('#react-aria4302536241-:r7:');
   39 |         this.gender = page.locator('#male');
   40 |         this.continue_bar = page.locator('[data-test="submit-button"]');
   41 |         this.doctorName = page.locator('#doctor-name');
   42 |         this.bookingConfirmationMessage = page.locator('#booking-confirmation-message'); 
   43 |     }
   44 |  
   45 |     
   46 |     // Method to navigate to the Zocdoc login page
   47 |     async homePage() {
   48 |         await this.page.goto('https://www.zocdoc.com/');
   49 |     }
   50 |
   51 |     // Method to book an appointment with validations
   52 |     async appointment(
   53 |         specialist: string,
   54 |         location: string,
   55 |         emailid: string,
   56 |         firstname: string,
   57 |         lastname: string,
   58 |         DOB: string
   59 |     ) {
   60 |         // Fill in the specialist search box
>  61 |         await this.specialist_searchBox.click();
      |                                         ^ Error: locator.click: Test timeout of 30000ms exceeded.
   62 |         await this.specialist_searchBox.fill(specialist);
   63 |
   64 |         // Fill in the location search box
   65 |         await this.locationbox.click();
   66 |         await this.locationbox.fill(location);
   67 |         
   68 |         //Selecting Insurance Type
   69 |         await this.insurance_planbox.click();
   70 |         await this.insuranceplan.click();
   71 |
   72 |         // Click on the search button
   73 |         await this.SearchBar.click();
   74 |
   75 |         // Validate doctor name
   76 |         const selectedDoctorName = await this.doctorName.innerText();
   77 |         expect(selectedDoctorName).toBe('Dr. Neeraj Bindal, OD'); 
   78 |
   79 |         // Interact with care types
   80 |         await this.typeofcare1.click();
   81 |         await this.typeofcare2.click();
   82 |
   83 |         // Select appointment date and time
   84 |         await this.Neerajappointmentdate.click();
   85 |         await this.Neerajappointmenttime.click();
   86 |
   87 |         // Fill in patient details
   88 |         await this.email.fill(emailid);
   89 |         await this.first_name.fill(firstname);
   90 |         await this.last_name.fill(lastname);
   91 |         await this.dateofbirth.fill(DOB);
   92 |
   93 |         // Select gender and click continue
   94 |         await this.gender.click();
   95 |         await this.continue_bar.click()
   96 |
   97 |         // Screenshot
   98 |         await this.page.screenshot({
   99 |             path: 'tests/Screenshots/' + Date.now() + '_Appointmentpage_screenshot.png',
  100 |             fullPage: true
  101 |         });
  102 |     }
  103 | }
```