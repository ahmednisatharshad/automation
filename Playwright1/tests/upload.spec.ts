import {expect, test} from '@playwright/test'

test.describe('Upload test',()=>{
test("Multiple Files ",async ({page})=>{

    await page.goto("https://demo.automationtesting.in/FileUpload.html")
    await page.waitForSelector('#input-4')

    await page.locator('#input-4').setInputFiles(['c:/Users/htcuser_1/Downloads/listeners.txt','c:/Users/htcuser_1/Downloads/real listeners.txt'])

    // await expect( page.getByTitle('listeners.txt')).toHaveText('listeners.txt')
    // await expect( page.getByTitle('real listeners.txt')).toHaveText('real listeners.txt')

    await page.waitForTimeout(3000)

    // //Remove the files
    await page.locator('#input-4').setInputFiles([])
    // await page.waitForTimeout(3000)
    // await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

})

test('Single Upload', async ({ page }) =>{
    await page.goto('http://the-internet.herokuapp.com/upload');
    await page.waitForTimeout(3000)
    await page.locator('#file-upload').click();
    await page.locator('#file-upload').setInputFiles('c:/Users/htcuser_1/Downloads/listeners.txt');
    // await expect(page.locator('#file-upload')).toHaveValue('C:\\fakepath\\Document.rtf');
    await page.getByRole('button', { name: 'Upload' }).click();
})
})