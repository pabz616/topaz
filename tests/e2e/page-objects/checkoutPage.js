//CHECKOUT PAGE

const { expect } = require('@playwright/test');

exports.CheckoutPage = class CheckoutPage {
    
    /**
    * @param {import('@playwright/test').Page} page
    */

    constructor(page) {
        this.page = page;

        //BREADCRUMBS

        //ACCOUNT ACTIONS
        this.login = page.locator('//label[@for="input-account-login"]')
        this.emailInput = page.locator('#input-login-email')
        this.passwordInput = page.locator('#input-login-password')
        this.loginButton = page.locator('#button-login')

        //BILLING INFORMATION - EXISTING ADDRESS
        this.useExistingAddress = page.locator('//label[@for="input-payment-address-existing"]')
        this.existingAddressElement = page.locator('//select[@name="address_id"]')
        this.billingSameAsShippingCheckBox = page.locator('//label[@for="input-shipping-address-same"]')

        //BILLING INFORMATION - NEW ADDRESS
        this.useNewAddress = page.locator('//label[@for="input-payment-address-new"]')
    
        this.registerAccount = page.locator('//label[@for="input-account-register"]')
        this.guestCheckout = page.locator('//label[@for="input-account-guest"]')

        //PERSONAL DETAILS FORM
        //BILLING ADDRESS FORM
        //PREFERRED PAYMENT
        //PREFERRED SHIPPING
        //PURCHASE DETAILS
        this.continueButton = page.locator('//button[@id="button-save"]')
        this.orderComments = page.locator('#input-comment')
        
        //COUPON INPUT
        //COMMENTS INPUT
        //LEGAL & NEWSLETTER OPT-IN
        this.termsAndConditionsCheckbox = page.locator('//label[@for="input-agree"]')
    }

    async checkUI(){}

    async loginAsReturnCustomer(email, pass){
        await expect(this.login).toBeVisible()
        await this.login.click()

        await this.emailInput.fill(email)
        await this.passwordInput.fill(pass)
        await this.loginButton.click()

        await expect(this.useExistingAddress).toBeVisible()
        await expect(this.useNewAddress).toBeVisible()

        await this.useExistingAddress.click()
        await expect(this.existingAddressElement).toBeVisible()
        await expect(this.billingSameAsShippingCheckBox).toBeChecked()
    }

    async registerAccount(){}
    async guestCheckout(){}

    async selectPreferredPaymentMethod(){}
    async selectPreferredShippingMethod(){}
    async applyCouponCode(){}
    
    async addComment(){
        await expect(this.orderComments).toBeVisible()
        await expect(this.orderComments).toBeEmpty()
        await this.orderComments.fill('This is a really cool site to test on')
        await this.page.keyboard.press('Tab')
    }

    async acceptTermsAndConditions(){
        await expect(this.termsAndConditionsCheckbox).toBeVisible()
        await this.termsAndConditionsCheckbox.click()
    }

    async continueWithPurchase(){
        await expect(this.continueButton).toBeVisible()
        await expect(this.continueButton).not.toBeDisabled()

        await this.continueButton.click()
    }
}