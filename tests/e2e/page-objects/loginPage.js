const {expect} = require('@playwright/test');
const { baseURL} = require('../test-data/data');

exports.LoginPage = class LoginPage {
    
    /**
   * @param {import('@playwright/test').Page} page
   */

    //LOCATORS
    constructor(page) {
        this.page = page;

        //Breadcrumbs
        this.homeBrCr = page.locator('(//li[@class="breadcrumb-item"])[1]')
        this.accountBrCr = page.locator('(//li[@class="breadcrumb-item"])[2]')
        this.loginBrCr = page.locator('//li[@class="breadcrumb-item active"]')

        //New Customer Module
        this.newCustomerModule = page.locator('(//div[@class="card mb-4"])[1]')

        //Login Form
        this.loginFormModule = page.locator('(//div[@class="card mb-4"])[2]')
        this.loginFormModuleHeader = page.locator('h2').last()
        this.emailInput = page.locator('#input-email')
        this.emailInputLabel = page.locator('//label[@for="input-email"]')
        this.passwordInput = page.locator('#input-password')
        this.passwordInputLabel = page.locator('//label[@for="input-password"]')
        this.loginButton = page.locator('//input[@value="Login"]')
        this.forgotPasswordLink = page.locator('(//a[contains(.,"Forgotten Password")])[1]')

        //Navigation Panel
        this.navigationModule= page.locator('//div[@class="list-group mb-3"]')

        //Error Messages
        this.errorMsg = page.locator('//div[contains(@class,"alert-danger")]')
    }

    //ACTIONS
    async checkUI () {
        //CHECK THE BREADCRUMBS
        await expect(this.homeBrCr).toBeVisible()
        await expect(this.homeBrCr).toBeEnabled()
        //
        await expect(this.accountBrCr).toBeVisible()
        await expect(this.accountBrCr).toHaveText('Account')
        await expect(this.accountBrCr).toBeEnabled()
        //
        await expect(this.loginBrCr).toBeVisible()
        await expect(this.loginBrCr).toHaveText('Login')
        await expect(this.loginBrCr).toBeEnabled()

        //NEW CUSTOMER MODULE
        await expect(this.newCustomerModule).toBeAttached()

        //LOGIN MODULE
        await expect(this.loginFormModule).toBeAttached()
        await expect(this.loginFormModuleHeader).toBeVisible()
        await expect(this.loginFormModuleHeader).toHaveText('Returning Customer')
        //
        await expect(this.emailInputLabel).toBeVisible()
        await expect(this.emailInputLabel).toHaveText('E-Mail Address')
        await expect(this.emailInput).toBeVisible()
        await expect(this.emailInput).toBeEditable()
        await expect(this.emailInput).toBeEmpty()
        //
        await expect(this.passwordInputLabel).toBeVisible()
        await expect(this.passwordInputLabel).toHaveText('Password')
        await expect(this.passwordInput).toBeVisible()
        await expect(this.passwordInput).toBeEditable()
        await expect(this.passwordInput).toBeEmpty()
        //
        await expect(this.loginButton).toBeVisible()
        await expect(this.loginButton).toHaveValue('Login')
        await expect(this.loginButton).toBeEnabled()
        //
        await expect(this.forgotPasswordLink).toBeVisible()

        //NAVIGATION MODULE
        await expect(this.navigationModule).toBeAttached()
    }

    async submit_login (email, pwd) {
        await this.emailInput.fill(email)
        await this.passwordInput.fill(pwd)
        await this.loginButton.click()
        await expect(this.page).toHaveURL(baseURL+'?route=account/account')
    }

    async submit_bad_login (email, pwd) {
        await this.emailInput.fill(email)
        await this.passwordInput.fill(pwd)
        await this.loginButton.click()
        
        //NO REDIRECTION
        await expect(this.page).toHaveURL(baseURL+'?route=account/login')
        await expect(this.errorMsg).toBeVisible()
    }

}