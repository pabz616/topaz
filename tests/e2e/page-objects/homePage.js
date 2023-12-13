//HOME PAGE

const { expect } = require('@playwright/test');
const baseURL = require('../../test-data/data')

exports.HomePage = class HomePage {
    
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page;
        
        //MAIN NAVIGATION RAIL
        this.shopByCategoryButton = page.getByRole('button', { hasText: 'Shop by Category' })
        this.homeButton = page.locator("span.title", {hasText: 'Home' })        
        this.specialsButton =  page.locator("span.title", {hasText: 'Special' })
        this.blogButton =  page.locator("span.title", {hasText: 'Blog' })
        this.megaMenu = page.locator("span.title", {hasText: 'Mega Menu' })
        this.addOns = page.locator("span.title", {hasText: 'Add Ons' })
        this.myAccountMenu = page.locator(':nth-match(:text("My account"), 2)')

        //MY ACCOUNT DROPDOWN
        this.registerLink = page.locator("span.title", {hasText: 'Register' })
        this.loginLink = page.locator("span.title", {hasText: 'Login' })
        this.logoutLink = page.locator(':nth-match(:text("Logout"), 2)')
        this.logoutContinueButton = page.locator('(//a[contains(@class,"btn-primary")])[2]')         

        //MENU NAV LINKS
        this.desktopLink = page.locator("a[title=Desktop]")

        //TODO - MOVE THESE TO PRODUCT DETAILS PAGE OBJECTS, REFACTOR TESTS THAT USE THIS
        this.palmTreoProLink = page.locator("div.carousel-item.active > img[title='Palm Treo Pro']")
        this.addToCart = page.locator("#container button[title='Add to Cart']")
        this.viewCart = page.locator("a.btn.btn-primary.btn-block",{hasText: 'View Cart'})

        this.searchResults = page.locator("td.text-left", {hasText: 'Palm Treo Pro'})
        this.searchResultQty = page.locator("div[class$='flex-nowrap'] > input")

        //BANNER
        this.bannerAd = page.locator(':nth-match(:class("d-block w-100"), 3)')
    }

    async search (term) {
        await this.megaMenu.hover()
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

    async clickBannerAd(){
        await expect(this.bannerAd).toBeVisible()
        await this.bannerAdapter.click()
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
        await this.logoutLink.click()

        //TODO: UI Check for this page
        await this.logoutContinueButton.click()
        // await expect(this.page).toHaveURL(baseURL+'?route=common/home')
    }

}

