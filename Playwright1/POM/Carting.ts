import { expect, type Locator, type Page } from '@playwright/test';

export class Home {

    readonly page: Page;
    readonly Home: Locator;
    readonly SearchBox: Locator;
    readonly SearchBar: Locator;
    readonly AddProduct: Locator;
    readonly Viewcart: Locator;
    readonly checkout: Locator;

   
    constructor(page) {
      this.page = page;
      this.Home = page.getByRole('link', { name: 'Home' });
      this.SearchBox = page.getByRole('textbox', { name: 'Search For Products' });
      this.SearchBar = page.getByRole('button', { name: 'Search' });
      this.AddProduct = page.locator('div:nth-child(2) > .product-thumb > .product-thumb-top > .product-action > button').first();
      this.Viewcart = page.getByRole('link', { name: 'View Cart ' });
      this.checkout = page.getByRole('link', { name: 'Checkout' });
     }

     async addProductToCart(){
        await this.Home.click()

        await this.SearchBox.click()
        await expect(this.page.getByRole('textbox', { name: 'Search For Products' })).toBeEmpty();
        await this.SearchBox.fill('HTC')
        await this.SearchBar.click()

        await this.AddProduct.click()

        await this.Viewcart.click()

        await expect(this.page.locator('input[name="quantity\\[109306\\]"]')).not.toHaveValue('1')
        await this.checkout.click()
     }
    }