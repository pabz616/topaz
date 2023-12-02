const {expect} = require('@playwright/test');
const { fname,lname, email, tel, pwd} = require('../test-data/data')

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

        //Registration Form - Details
        this.personalDetailsModule = page.locator('(//fieldset)[1]')
        this.firstNameInput = page.locator('#input-firstname')
        this.lastNameInput = page.locator('#input-lastname')
        this.emailInput = page.locator('#input-email')
        this.telephoneInput = page.locator('#input-telephone')
    
        //Registration Form - Password
        this.passwordModule = page.locator('(//fieldset)[2]')
        this.passwordInput = page.locator('#input-password')
        this.confirmPasswordInput = page.locator('#input-confirm')

        //Registration Form - Newsletter Subscription Opt-in
        this.newsletterModule = page.locator('(//fieldset)[3]')
        this.subscribe_Yes = page.locator('#input-newsletter-yes')
        this.subscribe_No = page.locator('#input-newsletter-no')

        //Registration Form - Privacy Policy Agreement
        this.privacyPolicyAgreementLabel = page.locator('//label[@for="input-agree"]');
        this.privacyPolicyAgreementChkBx = page.locator('//input[@id="input-agree"]')
        this.privacyPolicyAgreementLink = page.locator('//a[@class="agree"]')
        this.continueButton = page.locator('//input[@value="Continue"]')

        //Navigation Panel
        this.navColRt = page.locator('//aside[@id="column-right"]')
        this.navColRt_loginLink = page.locator(':nth-match(:text("Login"), 2)')
        this.navColRt_registerLink = page.locator(':nth-match(:text(" Register"), 2)')
        this.navColRt_forgotPwdLink = page.locator('//a[contains(.,"Forgotten Password")]')
        this.navColRt_myAccountLink = page.locator('//a[contains(.,"My Account")]')
        this.navColRt_addressBookLink = page.locator('//a[contains(.,"Address Book")]')
        this.navColRt_WishListLink = page.locator('//a[contains(.,"Wish List")]')
        this.navColRt_orderHistoryLink = page.locator('//a[contains(.,"Order History")]')
        this.navColRt_downloadsLink = page.locator('//a[contains(.,"Downloads")]')
        this.navColRt_recurringPaymentsLink = page.locator('//a[contains(.,"Recurring payments")]')
        this.navColRt_rewardsPointsLink = page.locator('//a[contains(.,"Reward Points")]')
        this.navColRt_returnsLink = page.locator('//a[contains(.,"Returns")]')
        this.navColRt_transactionsLink = page.locator('//a[contains(.,"Transactions")]')
        this.navColRt_newsletterLink = page.locator('//a[contains(.,"Newsletter")]')

        //Error MSg
        this.validationError = page.locator('//div[contains(@class,"alert-danger")]')
        this.inputValidation = page.locator('//div[contains(@class,"text-danger")]')
      
        this.firstNameInputError = page.locator('(//div[contains(@class,"text-danger")])[1]')
        this.lastNameInputError = page.locator('(//div[contains(@class,"text-danger")])[2]')
        this.emailInputError = page.locator('(//div[contains(@class,"text-danger")])[3]')
        this.telephoneInputError = page.locator('(//div[contains(@class,"text-danger")])[4]')
        this.passwordInputError = page.locator('(//div[contains(@class,"text-danger")])[5]')

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
        await expect(this.firstNameInput).toBeVisible()
        await expect(this.firstNameInput).toBeEditable()
        await expect(this.firstNameInput).toBeEmpty()

        await expect(this.lastNameInput).toBeVisible()
        await expect(this.lastNameInput).toBeEditable()
        await expect(this.lastNameInput).toBeEmpty()

        await expect(this.emailInput).toBeVisible()
        await expect(this.emailInput).toBeEditable()
        await expect(this.emailInput).toBeEmpty()

        await expect(this.telephoneInput).toBeVisible()
        await expect(this.passwordInput).toBeEditable()
        await expect(this.emailInput).toBeEmpty()

        await expect(this.confirmPasswordInput).toBeVisible()
        await expect(this.confirmPasswordInput).toBeEditable()
        await expect(this.confirmPasswordInput).toBeEmpty()

        await expect(this.subscribe_Yes).toBeVisible()
        await expect(this.subscribe_Yes).not.toBeChecked()

        await expect(this.subscribe_No).toBeVisible()
        await expect(this.subscribe_No).toBeChecked() //default value
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

        //CHECK THE REGISTRATION FORM - RIGHT-HAND SIDE NAV PANEL
        await expect(this.navColRt).toBeVisible()

        await expect(this.navColRt_loginLink).toBeVisible()
        await expect(this.navColRt_loginLink).not.toBeDisabled()

        await expect(this.navColRt_registerLink).toBeVisible()
        await expect(this.navColRt_registerLink).not.toBeDisabled()
        
        await expect(this.navColRt_forgotPwdLink).toBeVisible()
        await expect(this.navColRt_forgotPwdLink).not.toBeDisabled()
        
        await expect(this.navColRt_myAccountLink).toBeVisible()
        await expect(this.navColRt_myAccountLink).not.toBeDisabled()
        
        await expect(this.navColRt_addressBookLink).toBeVisible()
        await expect(this.navColRt_addressBookLink).not.toBeDisabled()
        
        await expect(this.navColRt_WishListLink).toBeVisible()
        await expect(this.navColRt_WishListLink).not.toBeDisabled()
        
        await expect(this.navColRt_orderHistoryLink).toBeVisible()
        await expect(this.navColRt_orderHistoryLink).not.toBeDisabled()
        
        await expect(this.navColRt_downloadsLink).toBeVisible()
        await expect(this.navColRt_downloadsLink).not.toBeDisabled()
        
        await expect(this.navColRt_recurringPaymentsLink).toBeVisible()
        await expect(this.navColRt_recurringPaymentsLink).not.toBeDisabled()
        
        await expect(this.navColRt_rewardsPointsLink).toBeVisible()
        await expect(this.navColRt_rewardsPointsLink).not.toBeDisabled()
        
        await expect(this.navColRt_returnsLink).toBeVisible()
        await expect(this.navColRt_returnsLink).not.toBeDisabled()
        
        await expect(this.navColRt_transactionsLink).toBeVisible()
        await expect(this.navColRt_transactionsLink).not.toBeDisabled()
        
        await expect(this.navColRt_newsletterLink).toBeVisible()
        await expect(this.navColRt_newsletterLink).not.toBeDisabled()
    }

    //ACTIONS
    async submitRegistrationForm () {
          await this.firstNameInput.fill(fname)
          await this.lastNameInput.fill(lname)
          await this.emailInput.fill(email)
          await this.telephoneInput.fill(tel)
          await this.passwordInput.fill(pwd)
          await this.confirmPasswordInput.fill(pwd)
        //   await this.subscribe_Yes.click()
          await this.privacyPolicyAgreementLabel.click()
          await this.continueButton.click()
    }

}