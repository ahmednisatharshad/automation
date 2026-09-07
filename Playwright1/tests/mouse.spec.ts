import { test, expect } from '@playwright/test';

test('test1@sanity', async ({ page }) => {
  await page.goto('https://vinothqaacademy.com/mouse-event/');

  //doubleclick
  await page.getByRole('button', { name: 'Double Click Me' }).dblclick();
  await expect(page.locator('#demo')).toContainText('Double Click Action is Performed');

  //rightclick
  await page.getByRole('button', { name: 'Right Click Me' }).click({ button: 'right'})
})
  //hover
  test('test2@regression', async ({ page }) => {
    await page.goto('https://www.guvi.in/');
    await page.getByText('LIVE Classes', { exact: true }).hover();
    const element=await page.getByRole('link', { name: 'Automation & Testing Program' })
    // await element.hover();


  //draganddown
    await page.goto('https://demo.automationtesting.in/Static.html');
    const pic1=await page.locator('#node')
    const pic2=await page.locator('#angular')

    
    const area=await page.locator('#droparea')
    await pic1.dragTo(area)
    await page.screenshot({path:'tests/Screenshots/'+Date.now()+'dragdown_screenshot.png', fullPage:true})
  })
    //scrollandview
    test("test3",async ({page})=>{
      await page.waitForTimeout(3000)
      await page.goto("https://www.countries-ofthe-world.com/flags-of-the-world.html")
  
      await page.waitForSelector(":nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img")
      await page.locator(":nth-child(1) > tbody > :nth-child(86) > :nth-child(1) > img").scrollIntoViewIfNeeded({timeout:5000})
  
  })

