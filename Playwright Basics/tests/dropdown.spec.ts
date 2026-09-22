import{test,expect} from'@playwright/test'
test('Single dropdown',async ({page})=>{
    await page.goto("https://www.letskodeit.com/practice")
    await page.locator('#carselect').selectOption({value:"honda"})
    //or
    // await page.locator('#carselect').selectOption({index:1})

    //assertions
    const options=await page.locator('#carselect option');
    await expect(options).toHaveCount(3)

    const listofopt=await page.$$('#carselect option')
    await expect(listofopt.length).toBe(3);

    // const content=await page.locator('#carselect').textContent(); 
    // await expect(content?.includes('Benz')).toBeTruthy();


    //By using looping statements also we can check the dropdown list contains the content
    const textContent=await page.$$('#carselect');
    let status=false;
    for(const option of textContent){
        let value= await option.textContent()
        if(value?.includes('Honda')){
            status=true
            break
        }
    }
    expect(status).toBeTruthy();


test('Multiple dropdown', async({page})=>{
    await page.goto('https://www.letskodeit.com/practice')
    
    const pack=await page.$$('#multiple-select-example option')
    await expect(pack.length).toBe(3);

    // check the presence of value in dropdowm
    const list=await page.locator('#multiple-select-example').textContent()
    await expect(list?.includes('Apple')).toBeTruthy();
    await expect(list?.includes('grapes')).toBeFalsy();

    //Using loop checking wheather the dropdown contains the value or not
    const textContent=await page.$$('#multiple-select-example')
    let status=false
    for(const option of textContent){
        let value=await option.textContent()
        if(value?.includes('Peach')){
            status=true
            break;
        }
    }
    expect(status).toBeTruthy();


    //selecting multiple options in the dropdown
    await page.selectOption('#multiple-select-example',['Apple','Orange','Peach']);
    await page.selectOption('#multiple-select-example',[{label:'Apple'},{label:'Orange'},{label:'Peach'}])
    await page.waitForTimeout(2000)
})

 test('Bootstrap Dropdown', async({page})=>{
        await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
        await page.locator('#select2-billing_country-container').click()
        await page.locator('//input[@class="select2-search__field"]').fill('Libya');
        await page.locator('//span[@dir="ltr"]/span[1]/input').press('Enter');
        const result=await page.locator('#select2-billing_country-container').textContent()
        expect(result).toBe('Libya');
    
        const optionslist= await page.$$("#billing_country option");
        for(const text of optionslist){
            const fulloptions=await text.textContent();
            console.log(fulloptions);
        }  
    })

  test('Autosuggest dropdown', async({page})=>{
    await page.goto('https://www.wikipedia.org/')
    await page.locator("//input[@id='searchInput']").fill("bangalore");
    await page.waitForSelector("//div[@class='suggestions-dropdown']")
    const fromCityOptions=await page.$$("//div[@class='suggestions-dropdown']")

    for(const option of fromCityOptions){
        const value=await option.textContent()
        // console.log(value)
        if(value?.includes(' Medical College and Research Institute')){
            await option.click()
            break
        }
       }
       await page.waitForTimeout(3000)
  })  

//   test('DropDown', async({page})=>{
//     await page.goto("https://www.redbus.in/")

//    await page.locator('#src').fill('chennai')
//    const srcoption= await page.$$("//div[@role='button']/ul")
//    for(let option of srcoption){
//     const jobTitle=await option.textContent()
//     console.log(jobTitle)
//     if(jobTitle?.includes('Sholinganallur')){
//         await option.click()
//         break
//     }
//    }

//    await page.locator('#dest').fill('bangalore')
//    const destoption= await page.$$("//div[@role='button']/ul")
//    for(let option of srcoption){
//     const jobTitle=await option.textContent()
//     console.log(jobTitle)
//     if(jobTitle?.includes('Bellandur')){
//         await option.click()
//         break
//     }
//    }

  })