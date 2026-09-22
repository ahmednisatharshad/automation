import { expect, Page } from '@playwright/test';
import { MenuLocators } from '../../pages/testcase-menu';

export class MenuSteps {
  readonly page: Page;
  readonly locators: MenuLocators;

  constructor(page: Page) {
    this.page = page;
    this.locators = new MenuLocators(page);
  }

  

  async navigate() {
    // Navigate to the menu page
    await this.page.goto('https://demoqa.com/menu', {
            timeout: 60000,
            waitUntil: 'domcontentloaded',
        });
  }

  async checkThreeMenuVisibility() {
    // Verify headings and main menu items are visible
    await expect(this.locators.heading()).toBeVisible();
       console.log('The Heading "Menu" is visible ')
    await expect(this.locators.mainItem1()).toBeVisible();
       console.log('"Menu 1" is visible ')
    await expect(this.locators.mainItem2()).toBeVisible();
       console.log('"Menu 2" is visible ')
    await expect(this.locators.mainItem3()).toBeVisible();
       console.log('"Menu 3" is visible ')

const MENU_1 = "Main Item 1";
const MENU_2 = "Main Item 2";
const MENU_3 = "Main Item 3";


// Assert the menu text matches expected constant value
    await expect(this.locators.mainItem1()).toHaveText(MENU_1);
    console.log(`Verified text for "${MENU_1}"`);

    await expect(this.locators.mainItem2()).toHaveText(MENU_2);
    console.log(`Verified text for "${MENU_2}"`);

    await expect(this.locators.mainItem3()).toHaveText(MENU_3);
    console.log(`Verified text for "${MENU_3}"`);

    const actualText1 = await this.locators.mainItem1().innerText();
if (actualText1 !== MENU_1) {
  throw new Error(`Text mismatch! Expected "${MENU_1}", but got "${actualText1}"`);}

  const actualText2 = await this.locators.mainItem1().innerText();
if (actualText2 !== MENU_1) {
  throw new Error(`Text mismatch! Expected "${MENU_1}", but got "${actualText2}"`);}

  const actualText3 = await this.locators.mainItem1().innerText();
if (actualText3 !== MENU_1) {
  throw new Error(`Text mismatch! Expected "${MENU_1}", but got "${actualText3}"`);}
  }

  async checkMenuAccessibility() {
    await expect(this.locators.mainItem1()).toBeEnabled();
      console.log('"Menu 1" is enabled (expected state - empty).'); 

    await expect(this.locators.mainItem3()).toBeEnabled();
      console.log('"Menu 3" is enabled (expected state - empty).');
    


    await this.locators.mainItem2().hover();

    // Click first 'Sub Item' under 'Main Item 2'
    await this.locators.subItem(0).click();

    // Hover again to reveal sub menu
    await this.locators.mainItem2().hover();

    // Click second 'Sub Item'
    await this.locators.subItem(1).click();

    // Hover 'Main Item 2' and then sub-sub-list to reveal deeper items
    await this.locators.mainItem2().hover();
    await this.page.waitForTimeout(500);
    await this.locators.subSubList().hover();
    await this.locators.subSubItem1().click();

    
    await this.locators.mainItem2().hover();
     await this.page.waitForTimeout(500);
    await this.locators.subSubList().hover();
    await this.locators.subSubItem2().click();
       console.log('Menu 2 options are accessable. ')
  }
}
