import { Page, Locator } from '@playwright/test';

export class LandingPageLocators {
  readonly page: Page;

  readonly pageLogo: Locator;
  readonly allcategoriesDropdown: Locator;
  readonly searchBox: Locator;
  readonly searchButton: Locator;
  readonly compareLink: Locator;
  readonly wishlistLink: Locator;
  readonly cartButton: Locator;
  readonly flyerLink: Locator;
  readonly shopByCategoryButton: Locator;
  readonly homeLink: Locator;
  readonly specialHotLink: Locator;
  readonly blogLink: Locator;
  readonly megaMenuButton: Locator;
  readonly addonsFeaturedButton: Locator;
  readonly myAccountButton: Locator;

  readonly heading50Off: Locator;
  readonly paragraphVariations: Locator;
  readonly shopNowLinkButton1: Locator;
  readonly lumixLink: Locator;
  readonly mpowLink: Locator;
  readonly topTrendingHeading: Locator;
  readonly nextSlideButton: Locator;
  readonly previousSlideButton: Locator;
  readonly toptrendingItems: Locator;
  readonly slideGroups: Locator[];
  readonly hp25Link: Locator;
  readonly topProductsHeading: Locator;
  readonly topProductsItems: Locator;
  readonly latestEarphonesDiv: Locator;
  readonly upto30OffHeading: Locator;
  readonly shopNowLinkButton2: Locator;
  readonly topCollectionHeading: Locator;
  readonly popularLink: Locator;
  readonly latestLink: Locator;
  readonly bestSellerLink: Locator;
  readonly canonLink: Locator;
  readonly htcLink: Locator;
  readonly appleCinemaLink: Locator;
  readonly iPodNanoLink: Locator;
  readonly appleIpadProLink: Locator;
  readonly underAtHeading: Locator;
  readonly nikonD300Label1: Locator;
  readonly nikonD300Label2: Locator;
  readonly fromTheBlogHeading: Locator;
  readonly blogGroups: Locator;
  readonly copyrightText: Locator;
  readonly scrollUpButton: Locator;
  readonly pageTop: Locator;

  readonly cartCloseHeading: Locator;
  readonly cartEmptyText: Locator;
  readonly subTotalCell: Locator;
  readonly currencyCells: Locator;
  readonly totalCell: Locator;
  readonly editCartButton: Locator;
  readonly checkoutButton: Locator;
  readonly closeButton: Locator;

  readonly HTCTouchHD: Locator;
  readonly HTCTouchHDCartButton: Locator;
  readonly viewcartButton: Locator;
  readonly addedProductCell: Locator;
  readonly checkoutLink: Locator;

  readonly mobilesHeading: Locator;
  readonly accessoriesHeading: Locator;
  readonly computersHeading: Locator;
  readonly laptopsHeading: Locator;
  readonly smartWearableHeading: Locator;
  readonly soundSystemHeading: Locator;
  readonly tabletsHeading: Locator;
  readonly mobilesProducts: Locator;
  readonly accessoriesProducts: Locator;
  readonly computersProducts: Locator;
  readonly laptopsProducts: Locator;
  readonly soundSystemProducts: Locator;
  readonly smartWearableProducts: Locator;
  readonly tabletsProducts: Locator;

  readonly breadcrumbSpecialOffers: Locator;
  readonly specialOffersHeading: Locator;
  readonly entriesDiv: Locator;
  readonly productCompareLink: Locator;
  readonly noSpecialOfferText: Locator;
  readonly continueLink: Locator;
  readonly filterDiv: Locator;
  readonly priceFilterText: Locator;
  readonly priceFilterPanel: Locator;
  readonly searchFilterText: Locator;
  readonly searchTextBox: Locator;
  readonly availabilityFilterText: Locator;
  readonly inStockText: Locator;
  readonly discountFilterText: Locator;
  readonly discountPanelText: Locator;
  readonly ratingFilterText: Locator;
  readonly ratingPanelText: Locator;

  readonly topCategoriesHeading: Locator;
  readonly componentsLink: Locator;
  readonly camerasLink: Locator;
  readonly phoneTabletsIpodLink: Locator;
  readonly softwareLink: Locator;
  readonly mp3PlayersLink: Locator;
  readonly laptopsNotebooksLink: Locator;
  readonly desktopsMonitorsLink: Locator;
  readonly printersScannersLink: Locator;
  readonly miceTrackballsLink: Locator;
  readonly fashionAccessoriesLink: Locator;
  readonly beautySaloonLink: Locator;
  readonly autopartsAccessoriesLink: Locator;
  readonly washingMachineLink: Locator;
  readonly gamingConsolesLink: Locator;
  readonly airConditionerLink: Locator;
  readonly webCamerasLink: Locator;



  constructor(page: Page) {
    this.page = page;

    this.pageLogo = page.getByRole('link', { name: 'Poco Electro' });
    this.allcategoriesDropdown = page.getByRole('button', { name: 'All Categories' });
    this.searchBox = page.getByRole('textbox', { name: 'Search For Products' });
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.compareLink = page.getByRole('link', { name: 'Compare', exact: true });
    this.wishlistLink = page.getByRole('link', { name: 'Wishlist', exact: true });
    this.cartButton = page.getByRole('button', { name: '0' });
    this.flyerLink = page.locator('//*[@id="mz-carousel-218380"]/div/div[1]/a/img'); 
    this.shopByCategoryButton = page.getByRole('button', { name: 'Shop by Category' });
    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.specialHotLink = page.getByRole('link', { name: 'Special Hot', exact: true });
    this.blogLink = page.getByRole('link', { name: 'Blog', exact: true });
    this.megaMenuButton = page.getByRole('button', { name: 'Mega Menu' });
    this.addonsFeaturedButton = page.getByRole('button', { name: 'AddOns Featured' });
    this.myAccountButton = page.getByRole('button', { name: 'My account' });

    this.heading50Off = page.getByRole('heading', { name: 'Upto 50% Off on Fully' });
    this.paragraphVariations = page.getByText('Many variations of passages');
    this.shopNowLinkButton1 = page.getByRole('link', { name: 'Shop Now', exact: true })
    this.lumixLink = page.getByRole('link', { name: 'Lumix S Series From Panasonic' });
    this.mpowLink = page.getByRole('link', { name: 'MPOW H12 RC Headphone' });
    this.topTrendingHeading = page.getByRole('heading', { name: 'Top Trending Categories' });
    this.nextSlideButton = page.getByRole('button', { name: 'Next slide' });
    this.previousSlideButton = page.getByRole('button', { name: 'Previous slide' });
    this.toptrendingItems = page.getByText('Desktops Laptops Components Tablets Software Phones & PDAs Cameras MP3 Players', { exact: true });
    this.slideGroups = [
      page.getByRole('group', { name: '1 / 8' }),
      page.getByRole('group', { name: '2 / 8' }),
      page.getByRole('group', { name: '3 / 8' }),
      page.getByRole('group', { name: '4 / 8' }),
      page.getByRole('group', { name: '5 / 8' }),
      page.getByRole('group', { name: '6 / 8' }),
      page.getByRole('group', { name: '7 / 8' }),
      page.getByRole('group', { name: '8 / 8' }),
    ];
    this.hp25Link = page.getByRole('link', { name: 'HP25 headphone' });
    this.topProductsHeading = page.getByRole('heading', { name: 'Top Products' });
    this.topProductsItems = page.getByText('Top Products Add to Cart Add');
    this.latestEarphonesDiv = page.locator('div').filter({ hasText: /^Latest Range of EarphonesSave 10% OffShop Now$/ }).nth(1);
    this.upto30OffHeading = page.getByRole('heading', { name: 'Upto 30% Off on Popular' });
    this.shopNowLinkButton2 = page.locator('#entry_218403').getByRole('link', { name: 'SHOP NOW' })
    this.topCollectionHeading = page.getByRole('heading', { name: 'Top Collection' });
    this.popularLink = page.getByRole('link', { name: 'Popular' });
    this.latestLink = page.getByRole('link', { name: 'Latest' });
    this.bestSellerLink = page.getByRole('link', { name: 'Best seller' });
    this.canonLink = page.getByRole('link', { name: 'Canon EOS 5D Canon EOS 5D' });
    this.htcLink = page.getByLabel('2 / 24', { exact: true }).getByRole('link', { name: 'HTC Touch HD HTC Touch HD HTC' });
    this.appleCinemaLink = page.getByRole('link', { name: 'Apple Cinema 30" Apple Cinema 30" Apple Cinema 30"', exact: true });
    this.iPodNanoLink = page.getByRole('link', { name: 'iPod Nano iPod Nano iPod Nano' });
    this.appleIpadProLink = page.getByRole('link', { name: 'Apple Ipad Pro' });
    this.underAtHeading = page.getByRole('heading', { name: 'Under @' });
    this.nikonD300Label1 = page.getByLabel('1 / 2', { exact: true }).getByRole('link', { name: 'Nikon D300 Nikon D300 Nikon' });
    this.nikonD300Label2 = page.getByLabel('2 / 2', { exact: true }).getByRole('link', { name: 'Nikon D300 Nikon D300 Nikon' });
    this.fromTheBlogHeading = page.getByRole('heading', { name: 'From The Blog' });
    this.blogGroups = page.locator('//div[@class="article-thumb image-top"]');
    this.copyrightText = page.getByText('© LambdaTest - Powered by');
    this.scrollUpButton = page.getByRole('button', { name: '' });
    this.pageTop = page.locator('#entry_217820');

    this.cartCloseHeading = page.getByRole('heading', { name: 'Cart close' });
    this.cartEmptyText = page.getByText('Your shopping cart is empty!');
    this.subTotalCell = page.getByRole('cell', { name: 'Sub-Total:' });
    this.currencyCells = page.getByRole('cell', { name: '$' });
    this.totalCell = page.getByRole('cell', { name: 'Total:', exact: true });
    this.editCartButton = page.getByRole('button', { name: ' Edit cart' });
    this.checkoutButton = page.getByRole('button', { name: ' Checkout' });
    this.closeButton = this.cartCloseHeading.getByLabel('close');

    this.HTCTouchHD = page.getByLabel('2 / 24', { exact: true }).getByRole('link', { name: 'HTC Touch HD HTC Touch HD HTC' })
    this.HTCTouchHDCartButton = page.getByLabel('2 / 24', { exact: true }).getByRole('button', { name: '' });
    this.viewcartButton = page.getByRole('link', { name: 'View Cart ' });
    this.addedProductCell = page.getByRole('cell', { name: 'HTC Touch HD *** Reward' }).getByRole('link');
    this.checkoutLink = page.getByRole('link', { name: 'Checkout' });

    //megamenu
    this.mobilesHeading = page.getByRole('heading', { name: 'Mobiles' });
    this.accessoriesHeading = page.getByRole('heading', { name: 'Accessories' });
    this.computersHeading = page.getByRole('heading', { name: 'Computers' });
    this.laptopsHeading = page.locator('#entry281_216478').getByRole('heading', { name: 'Laptops' });
    this.smartWearableHeading = page.getByRole('heading', { name: 'Smart Wearable' });
    this.soundSystemHeading = page.getByRole('heading', { name: 'Sound System' });
    this.tabletsHeading = page.locator('#entry281_216482').getByRole('heading', { name: 'Tablets' });
    this.mobilesProducts = page.locator('#entry281_216477 div').filter({ hasText: 'Mobiles Apple HTC LG Nokia' }).locator('div');
    this.accessoriesProducts = page.locator('#entry281_216480 div').filter({ hasText: 'Accessories Headphones Memory' }).locator('div');
    this.computersProducts = page.getByText('Computers Desktop Hard disk');
    this.laptopsProducts = page.locator('#entry281_216478 div').filter({ hasText: 'Laptops Apple Macbook Asus HP' }).locator('div');
    this.smartWearableProducts = page.locator('#entry281_216481 div').filter({ hasText: 'Smart Wearable Smart Watch' }).locator('div');
    this.soundSystemProducts = page.getByText('Sound System Bluetooth');
    this.tabletsProducts = page.locator('#entry281_216482 div').filter({ hasText: 'Tablets Apple Ipad' }).locator('div');

    //specialhotoffers
    this.breadcrumbSpecialOffers = page.getByLabel('breadcrumb').getByText('Special Offers');
    this.specialOffersHeading = page.getByRole('heading', { name: 'Special Offers' });
    this.entriesDiv = page.locator('#entry_212490 div');
    this.productCompareLink = page.getByRole('link', { name: 'Product Compare (0)' });
    this.noSpecialOfferText = page.getByText('There are no special offer');
    this.continueLink = page.getByRole('link', { name: 'Continue' });
    this.filterDiv = page.locator('#mz-filter-0 div').filter({ hasText: 'Filter' });
    this.priceFilterText = page.locator('#mz-filter-content-0').getByText('Price');
    this.priceFilterPanel = page.locator('#mz-filter-panel-0-0 div').first();
    this.searchFilterText = page.locator('#mz-filter-content-0').getByText('Search');
    this.searchTextBox = page.locator('#mz-filter-panel-0-2').getByRole('textbox', { name: 'Search' });
    this.availabilityFilterText = page.locator('#mz-filter-content-0').getByText('Availability');
    this.inStockText = page.locator('#mz-filter-panel-0-3').getByText('In stock 0');
    this.discountFilterText = page.locator('#mz-filter-content-0').getByText('Discount');
    this.discountPanelText = page.locator('#mz-filter-panel-0-4').getByText('10% off or more 0 20% off or');
    this.ratingFilterText = page.locator('#mz-filter-content-0').getByText('Rating');
    this.ratingPanelText = page.locator('#mz-filter-panel-0-5').getByText('& up 0 & up 0 & up 0 & up');

    //shopbycategory

    this.topCategoriesHeading = page.getByRole('heading', { name: 'Top categories close' });
    this.componentsLink = page.getByRole('link', { name: 'Components' });
    this.camerasLink = page.getByRole('link', { name: 'Cameras', exact: true });
    this.phoneTabletsIpodLink = page.getByRole('link', { name: 'Phone, Tablets & Ipod' });
    this.softwareLink = page.getByRole('link', { name: 'Software' });
    this.mp3PlayersLink = page.getByRole('link', { name: 'MP3 Players' });
    this.laptopsNotebooksLink = page.getByRole('link', { name: 'Laptops & Notebooks' });
    this.desktopsMonitorsLink = page.getByRole('link', { name: 'Desktops and Monitors' });
    this.printersScannersLink = page.getByRole('link', { name: 'Printers & Scanners' });
    this.miceTrackballsLink = page.getByRole('link', { name: 'Mice and Trackballs' });
    this.fashionAccessoriesLink = page.getByRole('link', { name: 'Fashion and Accessories' });
    this.beautySaloonLink = page.getByRole('link', { name: 'Beauty and Saloon' });
    this.autopartsAccessoriesLink = page.getByRole('link', { name: 'Autoparts and Accessories' });
    this.washingMachineLink = page.getByRole('link', { name: 'Washing machine' });
    this.gamingConsolesLink = page.getByRole('link', { name: 'Gaming consoles' });
    this.airConditionerLink = page.getByRole('link', { name: 'Air conditioner' });
    this.webCamerasLink = page.getByRole('link', { name: 'Web Cameras' });
  }
}
