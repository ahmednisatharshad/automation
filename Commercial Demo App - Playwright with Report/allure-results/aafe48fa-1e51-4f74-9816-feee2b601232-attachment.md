# Test info

- Name: Appointment for Neeraj to consult Eye >> Data driven-Excel
- Location: D:\Assessment\tests\Question_one.spec.ts:20:7

# Error details

```
Error: "context" and "page" fixtures are not supported in "afterAll" since they are created on a per-test basis.
If you would like to reuse a single page between tests, create context manually with browser.newContext(). See https://aka.ms/playwright/reuse-page for details.
If you would like to configure your page before each test, do that in beforeEach hook instead.
```

# Test source

```ts
   1 | import {expect, test} from '@playwright/test'
   2 | import { readTestDataFromExcel } from '../POM/ReadExcel';
   3 | import { DoctorAppointment } from '../POM/DoctorAppointment'
   4 |
   5 | let testDataList: string[][];
   6 | test.beforeAll(() => {
   7 |     const filePath = 'appointment.xlsx';
   8 |     const sheetName = 'Sheet1';
   9 |   
  10 |     // Read test data from Excel
  11 |     testDataList = readTestDataFromExcel(filePath, sheetName);
  12 |     console.log(testDataList)
  13 |   })
  14 |   
  15 |   test.afterAll(({ page }) => {
  16 |     page.close();
  17 |   })
  18 |   test.describe('Appointment for Neeraj to consult Eye', () => {
  19 |
> 20 |   test('Data driven-Excel', async ({ page }) => {
     |       ^ Error: "context" and "page" fixtures are not supported in "afterAll" since they are created on a per-test basis.
  21 |     for (const data of testDataList) {
  22 |       const Appointment = new DoctorAppointment(page);
  23 |       await Appointment.homePage()
  24 |       await Appointment.appointment(data['specialist'], data['location'],data['emailid'],data['firstname'],data['lastname'],data['DOB'])
  25 |       await page.waitForTimeout(1000)
  26 |     }
  27 |   })
  28 | }
  29 | )
```