//HOME PAGE

const { expect } = require('@playwright/test');
const baseURL = require('../../test-data/data')

exports.HomePage = class HomePage {
    
    /**
   * @param {import('@playwright/test').Page} page
   */

    constructor(page) {
        this.page = page;
        
        //UPPER NAVIGATION RAIL 
        this.siteIcon = page.locator('#')
        this.categoriesDropdown = page.locator('(//button[@class="btn dropdown-toggle"])[1]')
        this.allCategories = page.locator('(//a[@data-category_id="0"])[1]')
        this.category_Desktops = page.locator('(//a[@data-category_id="20"])[1]')
        this.category_Laptops = page.locator('(//a[@data-category_id="18"])[1]')
        this.category_Components = page.locator('(//a[@data-category_id="25"])[1]')
        this.category_Tablets = page.locator('(//a[@data-category_id="57"])[1]')
        this.category_Software = page.locator('(//a[@data-category_id="17"])[1]')
        this.category_PDA = page.locator('(//a[@data-category_id="24"])[1]')
        this.category_Cameras = page.locator('(//a[@data-category_id="33"])[1]')
        this.category_MP3 = page.locator('(//a[@data-category_id="34"])[1]')

        this.searchModule = page.locator('//div[@data-id="217822"]')
        this.searchInput = page.locator('//input[@name="search"]')
        this.compareItems = page.locator('//div[@data-id="217823"]')
        this.favoriteItems = page.locator('//div[@data-id="217824"]')
        this.goToCart = page.locator('//div[@data-id="217825"]')

        //MAIN NAVIGATION RAIL
        this.sbcButton = page.locator('(//a[@aria-label="Shop by Category"])[2]')
        this.sbcElement = page.locator('//div[@id="entry_217832"]')

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

        //BANNERS
        this.bannerAd = page.locator('//div[@id="entry_213239"]')

        this.bannerAd2 = page.locator('//div[@id="entry_213246"]')
        this.bannnerAd2Button = page.locator('(//a[contains(@class,"btn-outline-primary")])[1]')
    }

    async enterSearchTerm (term){
        
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

    async clickShopByCategoryMenu() {
        await expect(this.sbcElement).toBeVisible()
        // await expect(this.sbcElement).toHaveCSS('aria-label', 'Shop by Category')
        
        await expect(this.sbcButton).toBeVisible()
        await this.sbcButton.click()
    }

    async clickBannerAd(){
        await expect(this.bannerAd).toBeVisible()
        await this.bannerAd.click()
    }

    async clickSecondBannerAd(){
        await this.expect(this.bannerAd2).toBeVisible()
        await this.expect(this.bannerAd2Button).toBeVisible()
        await this.expect(this.bannerAd2Button).toBeEnabled()
        await this.bannerAd2.click()
    }

    async navigateToCart(){
        await this.goToCart.click()       
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

