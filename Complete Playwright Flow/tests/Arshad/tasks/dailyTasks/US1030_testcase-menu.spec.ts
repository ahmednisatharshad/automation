import { test } from '@playwright/test';
import { MenuSteps } from '../../../steps/testcase-menu.step';
//31.07.2025
test.describe('Validate and verify the Menu - @US1030', () => {
test('Menu UI test', async ({ page }) => {
  const menu = new MenuSteps(page);

  await menu.navigate();

  await menu.checkThreeMenuVisibility();
});
test('Menu Functional test', async ({ page }) => {
  const menu = new MenuSteps(page);

  await menu.navigate();

  await menu.checkMenuAccessibility();
});
})