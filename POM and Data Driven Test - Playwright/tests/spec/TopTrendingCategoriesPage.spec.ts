import { test, expect, Page, BrowserContext } from '@playwright/test';
import { LoginPageSteps } from '../steps/LoginPage.step';
import { SidebarSteps } from '../steps/TopTrendingCategoriesPage.step';
import * as userData from '../../test-data/loginData.json';

const pageConfigurations = [
  {
    groupName: '1 / 8',
    heading: 'Desktops',
    imageName: 'Desktops',
    breadcrumbText: 'Desktops',
    descriptionText: 'Lorem ipsum dolor sit amet,',
    subLinks: ['PC (75)', 'Mac (75)'],
  },
  {
    groupName: '2 / 8',
    heading: 'Laptops',
    imageName: 'Laptops',
    breadcrumbText: 'Laptops',
    descriptionText: 'Shop Laptop feature only the',
  },
  {
    groupName: '3 / 8',
    heading: 'Components',
    imageName: 'Components',
    breadcrumbText: 'Components',
    descriptionText: 'Lorem ipsum dolor sit amet,',
  },
  {
    groupName: '4 / 8',
    heading: 'Tablets',
    imageName: 'Tablets',
    breadcrumbText: 'Tablets',
    descriptionText: 'Lorem ipsum dolor sit amet,',
  },
  {
    groupName: '5 / 8',
    heading: 'Software',
    imageName: 'Software',
    breadcrumbText: 'Software',
    descriptionText: 'Lorem ipsum dolor sit amet,',
  },
  {
    groupName: '6 / 8',
    heading: 'Phones & PDAs',
    imageName: 'Phones & PDAs',
    breadcrumbText: 'Phones & PDAs',
    descriptionText: 'Lorem ipsum dolor sit amet,',
  },
  {
    groupName: '7 / 8',
    heading: 'Cameras',
    imageName: 'Cameras',
    breadcrumbText: 'Cameras',
    descriptionText: 'Lorem ipsum dolor sit amet,',
  },
  {
    groupName: '8 / 8',
    heading: 'MP3 Players',
    imageName: 'MP3 Players',
    breadcrumbText: 'MP3 Players',
    descriptionText: 'Lorem ipsum dolor sit amet,',
  },
];

test.describe('@US40010_Verify the Top Trending Category products page elemets and Sidebar', () => {
  let context: BrowserContext;
  let page: Page;
  let steps: SidebarSteps;
  let loginsteps: LoginPageSteps;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();

    loginsteps = new LoginPageSteps(page);

    // Login once
    await loginsteps.navigateToLoginPage();
    const user = userData.credential1;
    await loginsteps.login({ email: user.email, password: user.password });

    await page.waitForLoadState('networkidle'); // wait till login finishes
    steps = new SidebarSteps(page);
  });

  for (const config of pageConfigurations) {
    test(`Validate page group ${config.groupName}`, async () => {
      // Navigate to landing page
      await steps.navigateToLandingPage();
      await page.waitForLoadState('domcontentloaded');

      // Navigate to category
      await page.getByRole('group', { name: config.groupName }).getByRole('link').click();
      await page.waitForLoadState('networkidle');

      // Verify heading
      await expect(page.getByRole('heading', { name: config.heading })).toBeVisible();

      // Verify image
      if (config.imageName) {
        await expect(page.getByRole('img', { name: config.imageName })).toBeVisible();
      }

      // Verify breadcrumb
      if (config.breadcrumbText) {
        await expect(page.getByLabel('breadcrumb').getByText(config.breadcrumbText)).toBeVisible();
      }

      // Verify description
      if (config.descriptionText) {
        await expect(page.getByText(config.descriptionText)).toBeVisible();
      }

      // Verify subLinks
      if (config.subLinks) {
        for (const sublink of config.subLinks) {
          await expect(page.getByRole('link', { name: sublink, exact: true })).toBeVisible();
        }
      }

      // Common checks
      await steps.verifySidebarFilters();
      await steps.verifyRelatedProducts();

      // Navigate back for next iteration
      await page.goBack();
      await page.waitForLoadState('domcontentloaded');
    });
  }

  test.afterAll(async () => {
    await context.close();
  });


  // test('without login',async({page})=>{
  //     const steps = new SidebarSteps(page);
  //     await steps.navigateToLandingPage();
  //     await page.getByRole('link').filter({ hasText: 'Windows' }).click();
  //      await steps.verifySidebarFilters();
  // })
});
