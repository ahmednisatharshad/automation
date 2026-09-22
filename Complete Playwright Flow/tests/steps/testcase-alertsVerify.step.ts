
import { expect} from '@playwright/test';
import { locators } from '../../pages/testcase-alertsVerify';

export async function openAlertsPage(page) {
   try {
    // Wait only for DOM, fail clearly if navigation doesn't happen
    await page.goto('https://demoqa.com/', { timeout: 30000, waitUntil: 'domcontentloaded' });
  } catch (err) {
    throw new Error('Navigation to demoqa.com failed. Site may be down or unreachable.');
  }
  await page.getByRole(locators.headingAlertsFrameWindows.role, { name: locators.headingAlertsFrameWindows.name }).click();
  await page.getByRole(locators.listItemAlerts.role).filter({ hasText: locators.listItemAlerts.hasText }).click();

   const currentURL = page.url();
  if (!currentURL.includes('/alerts')) {
    throw new Error(`Navigation failed, unexpected URL: ${currentURL}`);
  }
}

export async function verifyAlertsPageContent(page) {
  // Check heading contains 'Alerts'
  await expect(page.getByRole(locators.headingAlerts.role)).toContainText('Alerts');

  // Check alert buttons visibility
  await expect(page.locator(locators.alertButton)).toBeVisible();
  await expect(page.locator(locators.timerAlertButton)).toBeVisible();
  await expect(page.locator(locators.confirmButton)).toBeVisible();
  await expect(page.locator(locators.promptButton)).toBeVisible();
  console.log('Every alert buttons are accesible and visible')

  // Check descriptive texts 
  await expect(page.locator(locators.javascriptAlertsWrapper)).toContainText('Click Button to see alert');
  await expect(page.locator(locators.javascriptAlertsWrapper)).toContainText('On button click, alert will appear after 5 seconds');
  await expect(page.locator(locators.javascriptAlertsWrapper)).toContainText('On button click, confirm box will appear');
  await expect(page.locator(locators.javascriptAlertsWrapper)).toContainText('On button click, prompt box will appear');
  console.log('Every alerts have descriptive as per requirements')
}
