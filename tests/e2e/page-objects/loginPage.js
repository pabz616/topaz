const {expect} = require('@playwright/test');

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

        //Login Form
        this.emailInput = page.locator('#input-email')
        this.passwordInput = page.locator('input-password')
        this.loginButton = page.locator('//input[@value="Login"]')   
    }

    //ACTIONS
    async checkUI (t) {
        //TODO: this
        
        //BReadcrumbs
        //New Customer Module
        //Login Module
        //Navigation Module
    }

    async submit_login (email, pwd) {
        this.emailInput.fill(email)
        this.passwordInput.fill(pwd)
        this.loginButton.click()

        //TODO: this  
    }

}