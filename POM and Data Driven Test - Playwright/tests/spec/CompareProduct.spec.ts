import { test } from '@playwright/test';
import { ProductCompareSteps } from '../steps/CompareProduct.step';

//3.9.2025
test('Add products to compare and verify comparison page', async ({ page }) => {
  const steps = new ProductCompareSteps(page);

  await steps.navigateToLandingPage();

  await steps.openComparePage();
  await steps.verifyNoItemsMessage();

  await steps.returnToHome();

  await steps.addAppleToCompare();
  await steps.addIpodToCompare();

  await steps.openComparePageAndVerify();
});
