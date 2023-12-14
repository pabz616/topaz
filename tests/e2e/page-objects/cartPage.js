//CART PAGE

const { expect } = require('@playwright/test');

exports.CartPage = class CartPage {
    
    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page) {
        this.page = page;

        //BREAD CRUMBS
        //CART SUMMARY
        //CART ACTIONS
        this.continueShoppingButton = page.locator('(//a[contains(@class,"btn-secondary")])[2]')
        this.checkoutButton = page.locator('//a[contains(.,"Checkout")]')
        //CART DETAILS
    }

    async checkUI(){}
    async applyCouponCode(){}
    async viewShippingAndTaxesEstimate(){}
    async applyGiftCertificate(){}
    async continueShopping(){}
    
    async proceedToCheckout(){
        await this.checkoutButton.click()
    }
}