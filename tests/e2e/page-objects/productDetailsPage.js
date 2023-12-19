//PRODUCT DETAILS PAGE

const { expect } = require('@playwright/test');

exports.ProductDetailsPage = class ProductDetailsPage {
    
    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page) {
        this.page = page;

        //BANNER AD
        //BREAD CRUMBS
        //PRODUCT DETAILS - IMAGE RAIL .. features other products of the same brand
        //PRODUCT DETAILS - MAIN IMAGE
        //PRODUCT DETAILS
        this.buyNowButton = page.locator('//button[contains(@class,"btn-buynow")]')
        this.addToCartButton = page.locator('(//button[@title="Add to Cart"])[2]')

        //PRODUCT DESCRIPTION
        //PRODUCT REVIEWS
        //PRODUCT FAQs
    }

    async checkUI(){}

    async viewAnotherProduct(){}
    async addToFavorites(){}
    
    async clickAddToCart(){
        await expect(this.addToCartButton).toBeVisible()
        await this.addToCartButton.click()
    }
    
    async clickBuyNow(){
        await expect(this.buyNowButton).toBeVisible()
        await expect(this.buyNowButton).not.toBeDisabled()
        await this.buyNowButton.click()
    }

    async viewSizeChart(){}
    async clickPopup(){}
    async clickAskQuestion(){}
    async viewProductDescription(){}
    async viewProductReviews(){}
    async writeAReview(){}
    async viewProductCustom(){}
    async viewFAQs(){}
}