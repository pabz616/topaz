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
        this.addToCartButton = page.locator(':nth-match(:title("Add to Cart"), 2)')

        //PRODUCT DESCRIPTION
        //PRODUCT REVIEWS
        //PRODUCT FAQs
    }

    async checkUI(){}
    async viewAnotherProduct(){}
    async addToFavorites(){}
    async clickAddToCart(){}
    async clickBuyNow(){}
    async viewSizeChart(){}
    async clickPopup(){}
    async clickAskQuestion(){}
    async viewProductDescription(){}
    async viewProductReviews(){}
    async writeAReview(){}
    async viewProductCustom(){}
    async viewFAQs(){}
}