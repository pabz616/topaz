//PRODUCT SEARCH SCENARIOS

const { expect } = require('@playwright/test');
const { baseURL} = require('../test-data/data');

exports.HomePage = class HomePage {
    
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page;
        
        //MAIN NAVIGATION RAIL
        this.menuTitle = page.locator("span.title", {hasText: 'Mega Menu' })
        this.logoutLink = page.locator(':nth-match(:text("Logout"), 2)')
        this.logoutContinueButton = page.locator('(//a[contains(@class,"btn-primary")])[2]]'),
        this.myAccountMenu = page.locator(':nth-match(:text("My account"), 2)')

        //MY ACCOUNT DROPDOWN
        this.registerLink = page.locator("span.title", {hasText: 'Register' })
        this.loginLink = page.locator("span.title", {hasText: 'Login' })         

        //MENU NAV LINKS
        this.desktopLink = page.locator("a[title=Desktop]")

        //TODO - MOVE THESE TO PRODUCT DETAILS PAGE OBJECTS, REFACTOR TESTS THAT USE THIS
        this.palmTreoProLink = page.locator("div.carousel-item.active > img[title='Palm Treo Pro']")
        this.addToCart = page.locator("#container button[title='Add to Cart']")
        this.viewCart = page.locator("a.btn.btn-primary.btn-block",{hasText: 'View Cart'})

        this.searchResults = page.locator("td.text-left", {hasText: 'Palm Treo Pro'})
        this.searchResultQty = page.locator("div[class$='flex-nowrap'] > input")
    }

    async search (term) {
        await this.menuTitle.hover()
        await this.desktopLink.click()
        await this.palmTreoProLink.click()
        await this.addToCart.click();
        await this.viewCart.click()
        await expect(this.searchResults).toBeVisible()
        await expect(this.searchResultQty).toHaveValue("1")
    }

    async navigateToLoginPage() {
        await this.myAccountMenu.hover()
        await expect(this.loginLink).toBeVisible()
        await this.loginLink.click()
        await expect(this.page).toHaveURL(baseURL+'?route=account/login')
    }

    async navigateToRegistrationPage() {
        await this.myAccountMenu.hover()
        await expect(this.registerLink).toBeVisible()
        await this.registerLink.click()
        await expect(this.page).toHaveURL(baseURL+'?route=account/register')
    }

    async logOut(){
        await this.myAccountMenu.hover()
        await expect(this.logoutLink).toBeVisible()
        await this.loginLink.click()
        await expect(this.page).toHaveURL(baseURL+'?route=account/logout')

        //TODO: UI Check for this page
        await this.logoutContinueButton.click()
        await expect(this.page).toHaveURL(baseURL+'?route=common/home')
    }

}

