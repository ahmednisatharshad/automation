
import {test,expect} from '@playwright/test'

test('Date Picker Demo',async ({page})=>{

   await page.goto("https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/datepicker-dialog/")



   //Date picker 
   const month_year="April 2024"
   const date="30"

   await page.getByRole('button', { name: 'Choose Date' }).click();

   while(true){
    const currentYear=await page.locator('id=id-grid-label').textContent()
    if(currentYear==month_year){
        break
    }
    await page.getByRole('button', { name: 'previous month' }).click();
   }

   //date selection using loop
   const dates=await page.$$('//tbody//tr//td')
   for(const dt of dates){
    	if(await dt.textContent()==date){
            console.log("Hello")
            await dt.click()
            break
        }
   }




})

