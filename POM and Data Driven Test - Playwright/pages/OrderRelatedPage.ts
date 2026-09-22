import { Page, Locator } from '@playwright/test';

export class OrderRelatedLocators {
  readonly page: Page;

  readonly homeLink: Locator;
  readonly HTCTouchHD: Locator;
  readonly HTCTouchHDCartButton: Locator;
  readonly viewcartButton: Locator;
  readonly addedProductCell: Locator;
  readonly checkoutLink: Locator;

  //ApplePage
   readonly AppleproductLink: Locator;
  readonly softwareText: Locator;
  readonly productHeading: Locator;
  readonly productCodeText: Locator;
  readonly brandText: Locator;
  readonly viewedText: Locator;
  readonly rewardPointsText: Locator;
  readonly availabilityText: Locator;
  readonly appleBrandLink: Locator;
  readonly dollarHeading: Locator;
  readonly sizeText: Locator;
  readonly compareBtn: Locator;
  readonly addToCartBtn: Locator;
  readonly buyNowBtn: Locator;
  readonly sizeChartText: Locator;
  readonly minimumText: Locator;
  readonly tagsText: Locator;
  readonly onlinePaymentHeading: Locator;
  readonly easyReturnHeading: Locator;
  readonly serviceHeading: Locator;
  readonly reviewsText: Locator;
  readonly writeReviewBtn: Locator;
  readonly productParagraph: Locator;
  readonly descriptionTab: Locator;
  readonly specificationTab: Locator;
  readonly reviewsTab: Locator;
  readonly customTab: Locator;
  readonly relatedProductsHeading: Locator;
  readonly faqHeading: Locator;

  
  readonly ipodproductLink: Locator;
  readonly ratingStar: Locator;
  readonly nameInput: Locator;
  readonly reviewInput: Locator;
  readonly writeReviewButton: Locator;
  readonly thankYouMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.homeLink = page.getByRole('link', { name: 'Home' });
    this.HTCTouchHD = page.getByLabel('2 / 24', { exact: true }).getByRole('link', { name: 'HTC Touch HD HTC Touch HD HTC' })
    this.HTCTouchHDCartButton = page.getByLabel('2 / 24', { exact: true }).getByRole('button', { name: '' });
    this.viewcartButton = page.getByRole('link', { name: 'View Cart ' });
    this.addedProductCell = page.getByRole('cell', { name: 'HTC Touch HD *** Reward' }).getByRole('link');
    this.checkoutLink = page.getByRole('link', { name: 'Checkout' });

    //Appleproduct
    this.AppleproductLink = page.getByRole('link', { name: 'Apple Cinema 30" Apple Cinema 30" Apple Cinema 30"', exact: true });
    this.softwareText = page.getByText('Software Apple Cinema 30"');
    this.productHeading = page.getByRole('link', { name: 'Apple Cinema 30"' }).nth(1);
    this.productCodeText = page.getByText('Product Code: Product');
    this.brandText = page.getByText('Brand: Apple');
    this.viewedText = page.getByText('Viewed: 95396');
    this.rewardPointsText = page.getByText('Reward Points: 100');
    this.availabilityText = page.getByText('Availability:');
    this.appleBrandLink = page.locator('#entry_216827').getByRole('link', { name: 'Apple' });
    this.dollarHeading = page.getByRole('heading', { name: '$' });
    this.sizeText = page.getByText('Size --- Please Select --- Medium (-$28.80) Large (+$18.00) 10 or more $107.');
    this.compareBtn = page.getByRole('button', { name: ' Compare this Product' });
    this.addToCartBtn = page.getByRole('button', { name: 'Add to Cart' });
    this.buyNowBtn = page.getByRole('button', { name: 'Buy now' });
    this.sizeChartText = page.getByText('Size chart Popup Ask Question');
    this.minimumText = page.getByText('This product has a minimum');
    this.tagsText = page.getByText('Tags: Apple Cinema');
    this.onlinePaymentHeading = page.getByRole('heading', { name: 'Online payment' });
    this.easyReturnHeading = page.getByRole('heading', { name: 'Easy Return' });
    this.serviceHeading = page.getByRole('heading', { name: '24x7 Service' });
    this.reviewsText = page.getByText('/50 reviews 5 4 3 2 1 0 Write a review Write Review');
    this.writeReviewBtn = page.getByRole('button', { name: 'Write Review' });
    this.productParagraph = page.getByRole('paragraph').filter({ hasText: 'The 30-inch Apple Cinema HD' });
    this.descriptionTab = page.getByRole('tab', { name: 'Description' });
    this.specificationTab = page.getByRole('tab', { name: 'Specification' });
    this.reviewsTab = page.getByRole('tab', { name: 'Reviews' });
    this.customTab = page.getByRole('tab', { name: 'Custom' });
    this.relatedProductsHeading = page.getByRole('heading', { name: 'Related Products' });
    this.faqHeading = page.getByRole('heading', { name: 'FAQ (Frequently Asked' });
  
    this.ipodproductLink = page.getByRole('link', { name: 'iPod Nano iPod Nano iPod Nano' });
    this.ratingStar = page.getByText('4', { exact: true });
    this.nameInput = page.locator('input[aria-label="Your Name"]');
    this.reviewInput = page.locator('textarea[aria-label="Your Review"]');
    this.writeReviewButton = page.locator('button:has-text("Write Review")');
    this.thankYouMessage = page.locator('text=Thank you for your review. It');
  }
  }

