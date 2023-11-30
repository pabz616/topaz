const {expect} = require('@playwright/test');

exports.AccountRegistrationPage = class AccountRegistrationPage {
    
    /**
   * @param {import('@playwright/test').Page} page
   */

    //LOCATORS
    constructor(page) {
        this.page = page;

        //Breadcrumbs
        this.homeBrCr = page.locator('(//li[@class="breadcrumb-item"])[1]')
        this.accountBrCr = page.locator('(//li[@class="breadcrumb-item"])[2]')
        this.registerBrCr = page.locator('//li[@class="breadcrumb-item active"]')

        //Page Title & Subtitle
        this.pageTitle = page.locator('//h1[contains(@class,"page-title h3")]')
        this.pageSubtitleLink = page.locator('//p/a')

        //Registration Form
        this.personalDetailsModule = page.locator('(//fieldset)[1]')
        this.passwordModule = page.locator('(//fieldset)[2]')
        this.newsletterModule = page.locator('(//fieldset)[3]')
        this.privacyPolicyAgreementLabel = page.locator('//label[@for="input-agree"]');
        this.privacyPolicyAgreementChkBx = page.locator('//input[@id="input-agree"]')
        this.privacyPolicyAgreementLink = page.locator('//a[@class="agree"]')
        this.continueButton = page.locator('//input[@value="Continue"]')
    }

    async checkUI() {
        //CHECK THE BREADCRUMBS
        await expect(this.homeBrCr).toBeVisible()
        await expect(this.homeBrCr).toBeEnabled()
        //
        await expect(this.accountBrCr).toBeVisible()
        await expect(this.accountBrCr).toHaveText('Account')
        await expect(this.accountBrCr).toBeEnabled()
        //
        await expect(this.registerBrCr).toBeVisible()
        await expect(this.registerBrCr).toHaveText('Register')
        await expect(this.registerBrCr).toBeEnabled()

        //CHECK THE TITLE & SUBTITLE
        await expect(this.page).toHaveTitle('Register Account')
        await expect(this.pageTitle).toBeVisible()
        await expect(this.pageTitle).toHaveText('Register Account')
        await expect(this.pageSubtitleLink).toBeVisible()
        await expect(this.pageSubtitleLink).toContainText('login page') //testing that user can login from here

        //CHECK THE REGISTRATION FORM MODULES
        await expect(this.personalDetailsModule).toBeVisible()
        await expect(this.personalDetailsModule).toContainText('Your Personal Details')
        //
        await expect(this.passwordModule).toBeVisible()
        await expect(this.passwordModule).toContainText('Your Password')
        //
        await expect(this.newsletterModule).toBeVisible()
        await expect(this.newsletterModule).toContainText('Newsletter')
        //
        await expect(this.privacyPolicyAgreementLabel).toBeVisible()
        await expect(this.privacyPolicyAgreementLink).not.toBeDisabled()
        await expect(this.privacyPolicyAgreementChkBx).toBeVisible()
        await expect(this.privacyPolicyAgreementChkBx).not.toBeChecked()
        //
        await expect(this.continueButton).toBeVisible()
        await expect(this.continueButton).toHaveValue('Continue')
        await expect(this.continueButton).not.toBeDisabled()
    }

    //ACTIONS
    async submitRegistrationForm () {
        await this.menuTitle.hover()
        await this.desktopLink.click()
        await this.palmTreoProLink.click()
        await this.addToCart.click();
        await this.viewCart.click()    
    }

}