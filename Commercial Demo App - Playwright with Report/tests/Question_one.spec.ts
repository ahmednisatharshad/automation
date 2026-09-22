import {expect, test} from '@playwright/test'
import { readTestDataFromExcel } from '../POM/ReadExcel';
import { DoctorAppointment } from '../POM/DoctorAppointment'

let testDataList: string[][];
test.beforeAll(() => {
    const filePath = 'appointment.xlsx';
    const sheetName = 'Sheet1';
  
    // Read test data from Excel
    testDataList = readTestDataFromExcel(filePath, sheetName);
    console.log(testDataList)
  })
  
  test.afterAll(({ page }) => {
    page.close();
  })
  test.describe('Appointment for Neeraj to consult Eye', () => {

  test('Data driven-Excel', async ({ page }) => {
    for (const data of testDataList) {
      const appointment = new DoctorAppointment(page);
      await appointment.homePage()
      await appointment.appointmentPage(data['specialist'], data['location'],data['emailid'],data['firstname'],data['lastname'],data['DOB'])
      await page.waitForTimeout(1000)
    }
  })
}
)