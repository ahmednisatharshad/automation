# Test info

- Name: Appointment for Neeraj to consult Eye >> Data driven-Excel
- Location: D:\Assessment\tests\Question_one.spec.ts:20:7

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.zocdoc.com/", waiting until "load"

    at DoctorAppointment.homePage (D:\Assessment\POM\DoctorAppointment.ts:48:25)
    at D:\Assessment\tests\Question_one.spec.ts:23:25
```

# Page snapshot

```yaml
- iframe
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
>  48 |         await this.page.goto('https://www.zocdoc.com/');
      |                         ^ Error: page.goto: Test timeout of 30000ms exceeded.
   49 |         const title = await this.page.title();
   50 |         expect(title).toContain('Zocdoc'); 
   51 |     }
   52 |
   53 |     // Method to book an appointment with validations
   54 |     async appointment(
   55 |         specialist: string,
   56 |         location: string,
   57 |         emailid: string,
   58 |         firstname: string,
   59 |         lastname: string,
   60 |         DOB: string
   61 |     ) {
   62 |         // Fill in the specialist search box
   63 |         await this.specialist_searchBox.click();
   64 |         await this.specialist_searchBox.fill(specialist);
   65 |
   66 |         // Fill in the location search box
   67 |         await this.locationbox.click();
   68 |         await this.locationbox.fill(location);
   69 |         
   70 |         //Selecting Insurance Type
   71 |         await this.insurance_planbox.click();
   72 |         await this.insuranceplan.click();
   73 |
   74 |         // Click on the search button
   75 |         await this.SearchBar.click();
   76 |
   77 |         // Validate doctor name
   78 |         const selectedDoctorName = await this.doctorName.innerText();
   79 |         expect(selectedDoctorName).toBe('Dr. Neeraj Bindal, OD'); 
   80 |
   81 |         // Interact with care types
   82 |         await this.typeofcare1.click();
   83 |         await this.typeofcare2.click();
   84 |
   85 |         // Select appointment date and time
   86 |         await this.Neerajappointmentdate.click();
   87 |         await this.Neerajappointmenttime.click();
   88 |
   89 |         // Fill in patient details
   90 |         await this.email.fill(emailid);
   91 |         await this.first_name.fill(firstname);
   92 |         await this.last_name.fill(lastname);
   93 |         await this.dateofbirth.fill(DOB);
   94 |
   95 |         // Select gender and click continue
   96 |         await this.gender.click();
   97 |         await this.continue_bar.click()
   98 |
   99 |         // Screenshot
  100 |         await this.page.screenshot({
  101 |             path: 'tests/Screenshots/' + Date.now() + '_Appointmentpage_screenshot.png',
  102 |             fullPage: true
  103 |         });
  104 |     }
  105 | }
```