import {expect, test} from '@playwright/test'
import * as path from 'path';
import * as fs from 'fs';
import * as os from 'os';

test.describe('Upload test',()=>{
  test.beforeAll(async () => {
    // Create test files in a temp directory
    const testDir = path.join(__dirname, '../temp');
    if (!fs.existsSync(testDir)) {
      fs.mkdirSync(testDir, { recursive: true });
    }
    fs.writeFileSync(path.join(testDir, 'listeners.txt'), 'test content for listeners file');
    fs.writeFileSync(path.join(testDir, 'real listeners.txt'), 'test content for real listeners file');
  });

  test("Multiple Files ",async ({page})=>{
    const testDir = path.join(__dirname, '../temp');
    
    await page.goto("https://demo.automationtesting.in/FileUpload.html")
    await page.waitForSelector('#input-4', { timeout: 10000 })

    await page.locator('#input-4').setInputFiles([
      path.join(testDir, 'listeners.txt'),
      path.join(testDir, 'real listeners.txt')
    ])

    // await expect( page.getByTitle('listeners.txt')).toHaveText('listeners.txt')
    // await expect( page.getByTitle('real listeners.txt')).toHaveText('real listeners.txt')

    await page.waitForTimeout(3000)

    // //Remove the files
    await page.locator('#input-4').setInputFiles([])
    // await page.waitForTimeout(3000)
    // await expect(await page.locator('#fileList li:nth-child(1)')).toHaveText('No Files Selected')

  })

  test('Single Upload', async ({ page }) =>{
    const testDir = path.join(__dirname, '../temp');
    
    await page.goto('http://the-internet.herokuapp.com/upload', { waitUntil: 'networkidle' });
    await page.waitForTimeout(3000)
    await page.locator('#file-upload').click();
    await page.locator('#file-upload').setInputFiles(path.join(testDir, 'listeners.txt'));
    // await expect(page.locator('#file-upload')).toHaveValue('C:\\fakepath\\Document.rtf');
    await page.getByRole('button', { name: 'Upload' }).click();
  })
})
