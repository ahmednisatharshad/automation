import { test, expect, Page } from '@playwright/test';
import { LandingPageLocators } from '../../pages/LandingPage';

export class LandingPageSteps {
  private locators: LandingPageLocators;
  private page: Page;

  constructor(page: Page) {
    this.page = page;
    this.locators = new LandingPageLocators(page);
  }

  async navigateToLandingPage() {
    const url = test.info().config.metadata.baseUrls.ecommerce;
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    console.log('Navigated to Landing page:', url);
  }

  async verifyTitle() {
    await expect(this.page).toHaveTitle('Your Store');
    console.log('Page title verified as "Your Store"');
  }

  async verifyElementsVisible() {
    await expect(this.locators.pageLogo).toBeVisible();
    console.log('Verified visibility of page logo');

    await expect(this.locators.allcategoriesDropdown).toBeVisible();
    console.log('Verified visibility of all categories dropdown');

    await expect(this.locators.searchBox).toBeVisible();
    console.log('Verified visibility of search box');

    await expect(this.locators.searchButton).toBeVisible();
    console.log('Verified visibility of search button');

    await expect(this.locators.compareLink).toBeVisible();
    console.log('Verified visibility of compare link');

    await expect(this.locators.wishlistLink).toBeVisible();
    console.log('Verified visibility of wishlist link');

    await expect(this.locators.cartButton).toBeVisible();
    console.log('Verified visibility of cart button');
  }

  async verifyLandingPageTabs() {
    await expect(this.locators.shopByCategoryButton).toBeVisible();
    console.log('Verified visibility of Shop by Category button');

    await expect(this.locators.homeLink).toBeVisible();
    console.log('Verified visibility of Home link');

    await expect(this.locators.specialHotLink).toBeVisible();
    console.log('Verified visibility of Special Hot link');

    await expect(this.locators.blogLink).toBeVisible();
    console.log('Verified visibility of Blog link');

    await expect(this.locators.megaMenuButton).toBeVisible();
    console.log('Verified visibility of Mega Menu button');

    await expect(this.locators.addonsFeaturedButton).toBeVisible();
    console.log('Verified visibility of AddOns Featured button');

    await expect(this.locators.myAccountButton).toBeVisible();
    console.log('Verified visibility of My Account button');
  }

  async verifyLandingPageFlyer() {
    await expect(this.locators.flyerLink).toBeVisible();
    console.log('Verified visibility of flyer link');
  }

  async validateflyerBelowUIElementsSection() {
    await expect(this.locators.heading50Off).toBeVisible();
    console.log('Verified heading "Upto 50% Off" is visible');
    await expect(this.locators.paragraphVariations).toBeVisible();
    console.log('Verified paragraph variations text is visible');
    await expect(this.locators.shopNowLinkButton1).toBeVisible();
    console.log('Verified "SHOP NOW" Buttom is visible');
    

    await this.locators.lumixLink.scrollIntoViewIfNeeded();
    console.log('Scrolled to Lumix S Series link');
    await expect(this.locators.lumixLink).toBeVisible();
    console.log('Verified Lumix S Series link is visible');
    await expect(this.locators.mpowLink).toBeVisible();
    console.log('Verified MPOW H12 RC Headphone link is visible');
  }

  async validateTopTrendingUIElementsSection() {
    await this.locators.topTrendingHeading.scrollIntoViewIfNeeded();
    console.log('Scrolled to Top Trending Categories heading');

    await expect(this.locators.topTrendingHeading).toBeVisible();
    console.log('Verified Top Trending Categories heading is visible');
    // await expect(this.locators.toptrendingItems).toBeVisible();
    // console.log('Verified top trending items are visible');

  //   for (let i = 0; i < 6; i++) {
  //     await expect(this.locators.slideGroups[i].getByRole('link')).toBeVisible();
  //     console.log(`Verified slide group ${i + 1} link is visible`);
  //   }
  //   await this.locators.slideGroups[6].getByRole('link').hover();
  //   console.log('Hovered over 7th slide group link');
  //   await this.locators.nextSlideButton.click();
  //   console.log('Clicked Next slide button');
  //   await this.locators.nextSlideButton.click();
  //   console.log('Clicked Next slide button again');

  //   for (let i = 6; i < 8; i++) {
  //     await expect(this.locators.slideGroups[i].getByRole('link')).toBeVisible();
  //     console.log(`Verified slide group ${i + 1} link is visible`);
  //   }

  //   await expect(this.locators.previousSlideButton).toBeVisible();
  //   console.log('Verified Previous slide button is visible');
   }

  async validateRandomProductsAd() {
    await this.locators.hp25Link.scrollIntoViewIfNeeded();
    console.log('Scrolled to HP25 headphone link');
    await expect(this.locators.hp25Link).toBeVisible();
    console.log('Verified HP25 headphone link is visible');
    await expect(this.locators.topProductsHeading).toBeVisible();
    console.log('Verified Top Products heading is visible');
    await expect(this.locators.topProductsItems).toBeVisible();
    console.log('Verified Top Products items are visible');
    await expect(this.locators.latestEarphonesDiv).toBeVisible();
    console.log('Verified Latest Range of Earphones section is visible');
    await expect(this.locators.upto30OffHeading).toBeVisible();
    console.log('Verified Upto 30% Off on Popular heading is visible');
    await expect(this.locators.shopNowLinkButton2).toBeVisible();
    console.log('Verified SHOP NOW link is visible');
  }

  async validateTopCollectionsSection() {
    await this.locators.topCollectionHeading.scrollIntoViewIfNeeded();
    console.log('Scrolled to Top Collection heading');
    await expect(this.locators.topCollectionHeading).toBeVisible();
    console.log('Verified Top Collection heading is visible');
    await expect(this.locators.popularLink).toBeVisible();
    console.log('Verified Popular link is visible');
    await expect(this.locators.latestLink).toBeVisible();
    console.log('Verified Latest link is visible');
    await expect(this.locators.bestSellerLink).toBeVisible();
    console.log('Verified Best seller link is visible');

    await expect(this.locators.canonLink).toBeVisible();
    console.log('Verified Canon EOS 5D link is visible');
    await expect(this.locators.htcLink).toBeVisible();
    console.log('Verified HTC Touch HD link is visible');
    await expect(this.locators.appleCinemaLink).toBeVisible();
    console.log('Verified Apple Cinema 30" link is visible');
    await expect(this.locators.iPodNanoLink).toBeVisible();
    console.log('Verified iPod Nano link is visible');
    await expect(this.locators.appleIpadProLink).toBeVisible();
    console.log('Verified Apple Ipad Pro link is visible');
  }

  async validateUnderAt99Section() {
    await this.locators.underAtHeading.scrollIntoViewIfNeeded();
    console.log('Scrolled to Under ₹99 heading');
    await expect(this.locators.underAtHeading).toBeVisible();
    console.log('Verified Under ₹99 heading is visible');
    await expect(this.locators.nikonD300Label1).toBeVisible();
    console.log('Verified Nikon D300 label 1 is visible');
    await expect(this.locators.nikonD300Label2).toBeVisible();
    console.log('Verified Nikon D300 label 2 is visible');
  }

  async validateFromTheBlogSection() {
    await this.locators.fromTheBlogHeading.scrollIntoViewIfNeeded();
    console.log('Scrolled to From The Blog heading');
    await expect(this.locators.fromTheBlogHeading).toBeVisible();
    console.log('Verified From The Blog heading is visible');

    const count = await this.locators.blogGroups.count();
    console.log(`Found ${count} blogs`);

    for (let i = 0; i < count; i++) {
      const element = this.locators.blogGroups.nth(i);
      const visible = await element.isVisible();
      console.log(`Blog ${i + 1} visibility: ${visible}`);
      expect(visible).toBe(true);
    }
  }

  async validateFooter() {
    await this.locators.copyrightText.scrollIntoViewIfNeeded();
    console.log('Scrolled to copyright text');
    await expect(this.locators.copyrightText).toBeVisible();
    console.log('Verified copyright text is visible');
  }

  async validateScrolltoTop() {
    await expect(this.locators.scrollUpButton).toBeVisible();
    console.log('Verified scroll-up button is visible');
    // await this.locators.scrollUpButton.click();
    // console.log('Clicked scroll-up button');
    // await expect(this.locators.pageTop).toBeVisible();
    // console.log('Verified Page Top is visible after scroll up');
  }

  async openCart() {
    await expect(this.locators.cartButton).toBeVisible();
    await this.locators.cartButton.click();
  }

  async verifyEmptyCartAndSummary() {
    await expect(this.locators.cartCloseHeading).toBeVisible();
    await expect(this.locators.cartEmptyText).toBeVisible();
    await expect(this.locators.subTotalCell).toBeVisible();
    await expect(this.locators.currencyCells.first()).toBeVisible();
    await expect(this.locators.totalCell).toBeVisible();
    await expect(this.locators.currencyCells.nth(1)).toBeVisible();
    await expect(this.locators.editCartButton).toBeVisible();
    await expect(this.locators.checkoutButton).toBeVisible();
  }

  async closeCart() {
    await this.locators.closeButton.click();
  }
  async verifyMegamenuDropdown() {
    await this.locators.megaMenuButton.hover();
    await expect(this.locators.mobilesHeading).toBeVisible();
    await expect(this.locators.accessoriesHeading).toBeVisible();
    await expect(this.locators.computersHeading).toBeVisible();
    await expect(this.locators.laptopsHeading).toBeVisible();
    await expect(this.locators.smartWearableHeading).toBeVisible();
    await expect(this.locators.soundSystemHeading).toBeVisible();
    await expect(this.locators.tabletsHeading).toBeVisible();

    await expect(this.locators.mobilesProducts).toBeVisible();
    await expect(this.locators.accessoriesProducts).toBeVisible();
    await expect(this.locators.computersProducts).toBeVisible();
    await expect(this.locators.laptopsProducts).toBeVisible();
    await expect(this.locators.smartWearableProducts).toBeVisible();
    await expect(this.locators.tabletsProducts).toBeVisible();
    await expect(this.locators.soundSystemProducts).toBeVisible();
  }
   async openSpecialOffers() {
    await this.locators.specialHotLink.click();
  }

  async verifySpecialOffersPage() {
    await expect(this.locators.breadcrumbSpecialOffers).toBeVisible();
    await expect(this.locators.specialOffersHeading).toBeVisible();
    await expect(this.locators.entriesDiv).toBeVisible();
    await expect(this.locators.productCompareLink).toBeVisible();
    await expect(this.locators.noSpecialOfferText).toBeVisible();
    await expect(this.locators.continueLink).toBeVisible();

    await expect(this.locators.filterDiv).toBeVisible();
    await expect(this.locators.priceFilterText).toBeVisible();
    await expect(this.locators.priceFilterPanel).toBeVisible();
    await expect(this.locators.searchFilterText).toBeVisible();
    await expect(this.locators.searchTextBox).toBeVisible();
    await expect(this.locators.availabilityFilterText).toBeVisible();
    await expect(this.locators.inStockText).toBeVisible();
    await expect(this.locators.discountFilterText).toBeVisible();
    await expect(this.locators.discountPanelText).toBeVisible();
    await expect(this.locators.ratingFilterText).toBeVisible();
    await expect(this.locators.ratingPanelText).toBeVisible();
  }

   async openShopByCategoryMenu() {
    await this.locators.shopByCategoryButton.click();
  }

  async verifyTopCategories() {
    await expect(this.locators.topCategoriesHeading).toBeVisible();
    await expect(this.locators.componentsLink).toBeVisible();
    await expect(this.locators.camerasLink).toBeVisible();
    await expect(this.locators.phoneTabletsIpodLink).toBeVisible();
    await expect(this.locators.softwareLink).toBeVisible();
    await expect(this.locators.mp3PlayersLink).toBeVisible();
    await expect(this.locators.laptopsNotebooksLink).toBeVisible();
    await expect(this.locators.desktopsMonitorsLink).toBeVisible();
    await expect(this.locators.printersScannersLink).toBeVisible();
    await expect(this.locators.miceTrackballsLink).toBeVisible();
    await expect(this.locators.fashionAccessoriesLink).toBeVisible();
    await expect(this.locators.beautySaloonLink).toBeVisible();
    await expect(this.locators.autopartsAccessoriesLink).toBeVisible();
    await expect(this.locators.washingMachineLink).toBeVisible();
    await expect(this.locators.gamingConsolesLink).toBeVisible();
    await expect(this.locators.airConditionerLink).toBeVisible();
    await expect(this.locators.webCamerasLink).toBeVisible();
  }
  
}
