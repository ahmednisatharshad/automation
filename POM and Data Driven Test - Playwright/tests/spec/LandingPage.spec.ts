import { test } from '@playwright/test';
import { LandingPageSteps } from '../steps/Landingpage.step';
import { LoginPageSteps } from '../steps/LoginPage.step';
import * as userData from '../../test-data/loginData.json';
import { OrderRelatedPageSteps } from '../steps/OrderRelated.step';

let Loginsteps: LoginPageSteps;
let OrderRelated: OrderRelatedPageSteps;
let LandingSteps: LandingPageSteps;

test.describe('"Your Store" Landing Page Tests', () => {
  test.slow();
  test.beforeEach(async ({ page }) => {
    LandingSteps = new LandingPageSteps(page);
    Loginsteps = new LoginPageSteps(page);
    OrderRelated = new OrderRelatedPageSteps(page);
    await LandingSteps.navigateToLandingPage();
  });

  //19.08.2025
  test('@US40001_Validate the UI elements of the landing page tab and flyer', async () => {
    await LandingSteps.verifyLandingPageTabs();
    await LandingSteps.verifyLandingPageFlyer();
  });

  //19.08.2025
  test('@US40002_Validate the UI elements of the title search and basket section elements of landing page', async () => {
    await LandingSteps.verifyTitle();
    await LandingSteps.verifyElementsVisible();
  });

  //20.08.2025
  test('@US40003_Validate UI elements of landing page sections- flash adds, top trending categories, top products, middle flyer, top collection, from the blog, copyright text with top page button ', async () => {
    await LandingSteps.validateflyerBelowUIElementsSection();
    await LandingSteps.validateTopTrendingUIElementsSection();
    await LandingSteps.validateRandomProductsAd();
    await LandingSteps.validateTopCollectionsSection();
    await LandingSteps.validateUnderAt99Section();
    await LandingSteps.validateFromTheBlogSection();
    await LandingSteps.validateFooter();
    await LandingSteps.validateScrolltoTop();
  });

//01.09.2025
  test('@US40011_Validate the basket - side bar', async () => {
    await LandingSteps.openCart();
    await LandingSteps.verifyEmptyCartAndSummary();
    await LandingSteps.closeCart();
  });
//02.09.2025
 test('@US40014_Validate the Megamenu dropdown',async({page})=>{
    await LandingSteps.verifyMegamenuDropdown();
 })
//03.09.2025
 test('@US40015_ Validate the "Shop the Category" sidebar in the Landing page', async ({ page }) => {
  await LandingSteps.openShopByCategoryMenu();
  await LandingSteps.verifyTopCategories();
});
//04.09.2025
 test('@US40017_Validate the "Special Hot" Page from the Landing page', async ({ page }) => {
  await LandingSteps.openSpecialOffers();
  await LandingSteps.verifySpecialOffersPage();
});
});
  
 
 