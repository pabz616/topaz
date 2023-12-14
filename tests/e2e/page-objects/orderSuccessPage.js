//ORDER SUCCESS PAGE

const { expect } = require('@playwright/test');

exports.OrderSuccessPage = class OrderSuccessPage {
    
    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page) {
        this.page = page;

        //BREAD CRUMBS
        //ORDER CONFIRMATION MESSAGE
  
        //ACTIONS
        this.continueButton = page.locator('(//a[contains(@class,"btn-primary")])[2]')
    }

    async checkUI(){}

    async completePurchaseWorkflow(){
        await this.continueButton.click()
    }
}