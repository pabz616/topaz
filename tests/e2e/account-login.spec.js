//ACCOUNT LOGIN

const { test, expect } = require('@playwright/test');
const { baseURL,email, pwd} = require('./test-data/data');
const {HomePage} = require('./page-objects/homePage')
const {LoginPage} = require('./page-objects/loginPage')


test.describe('Navigate to Login', () => {
    test('Account Login UI', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.checkUI()
    })

    test('Submit Account Login', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_login(email, pwd)
    })

    //TODO - Validation Error Shown For Required Fields
    //TODO - Invalid Login - Mixed Characters
    //TODO - Invalid Login - Account Not Found
    //TODO - Short Password
    //TODO - Improper Username (Bad Email Address Format)
    //TODO - Improper Password (Weak Password)
    //TODO - Boundary Test For Login
    //TODO - SQL Injection Vulnerability
    //TODO - XSS Injection Vulnerability
    
});