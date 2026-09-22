# Test info

- Name: keyboard
- Location: D:\Assessment\tests\KeyboardActions.spec.ts:3:5

# Error details

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://demoqa.com/text-box", waiting until "load"

    at D:\Assessment\tests\KeyboardActions.spec.ts:5:14
```

# Page snapshot

```yaml
- img "adplus-dvertising"
- iframe
- banner:
  - link:
    - /url: https://demoqa.com
    - img
- img
- text: Elements
- img
- list:
  - listitem:
    - img
    - text: Text Box
  - listitem:
    - img
    - text: Check Box
  - listitem:
    - img
    - text: Radio Button
  - listitem:
    - img
    - text: Web Tables
  - listitem:
    - img
    - text: Buttons
  - listitem:
    - img
    - text: Links
  - listitem:
    - img
    - text: Broken Links - Images
  - listitem:
    - img
    - text: Upload and Download
  - listitem:
    - img
    - text: Dynamic Properties
- img
- text: Forms
- img
- img
- text: Alerts, Frame & Windows
- img
- img
- text: Widgets
- img
- img
- text: Interactions
- img
- img
- text: Book Store Application
- img
- iframe
- heading "Text Box" [level=1]
- text: Full Name
- textbox "Full Name"
- text: Email
- textbox "name@example.com"
- text: Current Address
- textbox "Current Address"
- text: Permanent Address
- textbox
- button "Submit"
- img "Build PlayWright tests with AI"
- iframe
- contentinfo: © 2013-2020 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test';
   2 |
   3 | test('keyboard', async ({ page }) => {
   4 |  
>  5 |   await page.goto('https://demoqa.com/text-box');
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
   6 |   await  page.waitForTimeout(5000)
   7 |   await page.getByRole('textbox', { name: 'Current Address' }).click();
   8 |   await page.getByRole('textbox', { name: 'Current Address' }).fill('Chennai Mepz');
   9 |
  10 |   await page.getByRole('textbox', { name: 'Current Address' }).press('Control+A') 
  11 |   await page.getByRole('textbox', { name: 'Current Address' }).press('Control+C')
  12 |   await page.locator('#permanentAddress').click();
  13 |   await page.locator('#permanentAddress').press('Control+V')
  14 |   await page.screenshot({path:'tests/Screenshots/'+Date.now()+'Copy_paste_screenshot.png'})
  15 |   // await page.keyboard.down('Tab')  //To press
  16 |   // await page.keyboard.up('Tab')    //To release
  17 |   await page.getByRole('button', { name: 'Submit' }).click();
  18 | });
```