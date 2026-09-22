import{test, expect} from '@playwright/test'

test('simple Alert demo', async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog',async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain('I am a JS Alert')
        await dialog.accept()
        
    })
    await page.click("//button[text()='Click for JS Alert']")
    await page.waitForTimeout(5000)
})

test('Confirmation Alert',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('I am a JS Confirm')
        //await dialog.accept()

        await dialog.dismiss()


    })
    await page.click("//button[text()='Click for JS Confirm']")
    //await expect(page.locator('#result')).toHaveText('You clicked: Ok')
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel') 
    await page.waitForTimeout(5000)

})
test('Prompt Alert',async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')

        expect(dialog.message()).toContain('I am a JS prompt')

        await dialog.accept('Vanakkam')
    })

    await page.click("//button[text()='Click for JS Prompt']")

    await expect(page.locator('#result')).toHaveText('You entered: Vanakkam')

    await page.waitForTimeout(5000)
})