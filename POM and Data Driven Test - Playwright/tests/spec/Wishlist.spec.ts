import { test } from '@playwright/test';
import { WishlistSteps } from '../steps/Wishlist.step';
import { LoginPageSteps } from '../steps/LoginPage.step';
import * as userData from '../../test-data/loginData.json';

let loginsteps: LoginPageSteps;
//2.9.2025
test('@US40013_Validate the wishlist by adding 2 items', async ({ page }) => {
  const steps = new WishlistSteps(page);
  loginsteps = new LoginPageSteps(page);
  
    
 await loginsteps.navigateToLoginPage();
 const user = userData.credential1;
  await loginsteps.login({ email: user.email, password: user.password });
  await steps.navigateToHome();
  await steps.addCanonToWishlist();
  await steps.addHTCToWishlist();
  await steps.openWishlistAndVerify();
});
