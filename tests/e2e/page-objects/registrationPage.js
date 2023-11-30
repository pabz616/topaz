const {expect} = require('@playwright/test');

exports.RegistrationPage = class RegistrationPage {
    
    /**
   * @param {import('@playwright/test').Page} page
   */

    //LOCATORS
    constructor(page) {
        this.page = page;
        this.x = page.locator("span.title", {hasText: 'Mega Menu' })
        this.y = page.locator('//xpath')
        this.z = page.locator('#id')
    }

    //ACTIONS
    async action (term) {
        await this.menuTitle.hover()
        await this.desktopLink.click()
        await this.palmTreoProLink.click()
        await this.addToCart.click();
        await this.viewCart.click()
    
    //ASSERTIONS
        await expect(this.searchResults).toBeVisible()
        await expect(this.searchResultQty).toHaveValue("1")
    }

}