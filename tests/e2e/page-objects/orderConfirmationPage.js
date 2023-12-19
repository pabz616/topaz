//ORDER CONFIRMATION

const { expect } = require('@playwright/test');

exports.OrderConfirmationPage = class OrderConfirmationPage {
    
    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page) {
        this.page = page;

        //BREAD CRUMBS
        //ORDER CONFIRMATION MODULE
        //PAYMENT ADDRESS MODULE
        //SHIPPING ADDRESS MODULE
        //SHIPPING METHOD MODULE
        //ACTIONS
        this.editPurchaseOrderButton = page.locator('(//a[contains(@class,"btn-secondary")])[2]')
        this.confirmPurchaseOrderButton = page.locator('#button-confirm')
    }

    async checkUI(){}
    async editPurchaseOrder(){}

    async confirmPurchaseOrder(){
        await this.confirmPurchaseOrderButton.click()
    }
}