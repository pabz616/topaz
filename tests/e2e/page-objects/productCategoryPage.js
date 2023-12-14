//PRODUCT CATEGORY PAGE

const { expect } = require('@playwright/test');

exports.ProductCategoryPage = class ProductCategoryPage {
    
    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page) {
        this.page = page;

        //BREAD CRUMBS
        //FILTER MODULE
        //MANUFACTURER MODULE
        //SEARCH MODULE
        //COLOR SWATCH MODULE
        //AVAILABILITY MODULE
        //SIZE MODULE
        //DISCOUNT MODULE
        //RATINGS MODULE
        //NAVIGATION MODULE
        //PRODUCT DESCRIPTIONS MODULE
        //DISPLAY MODULE (LAYOUT CHANGES & SORTING)
        
        //PRODUCT GRID
        this.product1Image = page.locator('(//div[contains(@class,"product-thumb")])[2]')
        this.product1Name = page.locator('(//h4[@class="title"])[1]')
        this.product1Price = page.locator('(//div[@class="price"])[1]')
    
    }

    async checkUI(){}

    async selectFirstProduct(){
        await expect(this.product1Image).toBeVisible()
        await expect(this.product1Name).toBeVisible()
        await expect(this.product1Price).toBeVisible()

        await this.product1Image.click()
    }

    async filterProduct(){}
    async selectManufacturer(){}
    async selectColor(){}
    async selectAvailability(){}
    async selectSize(){}
    async selectRating(){}
    async applyDiscount(){}
    async displayByAmount(){}
    async compareProduct(){}

    //SORT OPTION
    async sortByBestSeller(){}
    async sortByNameAtoZ(){}
    async sortByNameZtoA(){}
    async sortByPrice(){}
    async sortByRating(){}
    async selectAnotherCategory(Category){}
    async searchProduct(){}



}