import {expect, test} from '@playwright/test'
import { readTestDataFromExcel } from '../POM/ReadExcel';
import { Signup} from '../POM/Signup'

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

  test('Data driven-Excel', async ({ page }) => {
    for (const data of testDataList) {
    const profile = new Signup(page)
    await profile.homePage()
    await profile.profileCreation(data['emailid'],data['firstname'],data['lastname'],data['DOB'])
    }
})