import { test } from '@playwright/test';
import { LandingPageSteps } from '../steps/Landingpage.step';
import { LoginPageSteps } from '../steps/LoginPage.step';
import * as userData from '../../test-data/loginData.json';
import { OrderRelatedPageSteps } from '../steps/OrderRelated.step';
let Loginsteps: LoginPageSteps;
let OrderRelated: OrderRelatedPageSteps;
let LandingSteps: LandingPageSteps;

//01.09.2025
  test('@US40012_Validate the order for a product and verify in checkout', async ({page}) => {
    const user = userData.credential1; 
    LandingSteps = new LandingPageSteps(page);
    Loginsteps = new LoginPageSteps(page);
    OrderRelated = new OrderRelatedPageSteps(page);
    await Loginsteps.navigateToLoginPage();
    await Loginsteps.login({ email: user.email, password: user.password });
    await OrderRelated.addProductToCartAndCheckout();
    await OrderRelated.verifyItemAndProceedToCheckout();
  });
//05.09.2025
 test('@US40019_Validate the Apple cinema page', async ({page}) => {
    const user = userData.credential1; 
    LandingSteps = new LandingPageSteps(page);
    Loginsteps = new LoginPageSteps(page);
    OrderRelated = new OrderRelatedPageSteps(page);
    await LandingSteps.navigateToLandingPage();
    await OrderRelated.openAppleCinemaProduct();
    await OrderRelated.verifyProductPageElements();
  });
//08.09.2025
test('@US40020_Validate the product page review sections functionality', async ({ page }) => {
  LandingSteps = new LandingPageSteps(page);
  const review = new OrderRelatedPageSteps(page);
  await LandingSteps.navigateToLandingPage();
  await review.navigateToProduct();
  await review.selectRating();
  await review.fillReview('Arshad', 'iPod is working fine and but connectivity is slow');
  await review.submitReview();
  await review.verifyThankYouMessage();
})
