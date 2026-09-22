import {expect, test} from '@playwright/test'
import { readTestDataFromExcel } from '../POM/ReadExcel';
import { Login} from '../POM/AppointmentsManagement'

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
    test.slow()
    for (const data of testDataList) {
    const loginpage = new Login(page)
    await loginpage.homePage()
    await loginpage.loginPage(data['emailid'])
    await loginpage.teardown()
    
    }
})