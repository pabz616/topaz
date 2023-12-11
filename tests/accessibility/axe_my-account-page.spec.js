//ACCESSIBILITY TESTING - MY ACCOUNT SECTION

const { test, expect } = require('@playwright/test');
const { baseURL, email, pwd}  = require('../test-data/data')
const {HomePage} = require('../e2e/page-objects/homePage')
const {LoginPage} = require('../e2e/page-objects/loginPage')
const AxeBuilder = require('@axe-core/playwright').default

test.describe('@accessibility', () => {
    test('Accessibility Test | My Account - Login', async ({page}) => {
        await page.goto(baseURL+'?route=account/login');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Registration', async ({page}) => {
        await page.goto(baseURL+'?route=account/register');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Forgot Password', async ({page}) => {
        await page.goto(baseURL+'?route=account/forgotten');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Account Info.', async ({page}) => {
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL+'?route=account/login');
        await onLoginPage.submit_login(email, pwd)        

        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Account Info. - Edit', async ({page}) => {
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL+'?route=account/login');
        await onLoginPage.submit_login(email, pwd)             
        await page.goto(baseURL+'?route=account/edit');
        
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Account Info. - Change Password', async ({page}) => {
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL+'?route=account/login');
        await onLoginPage.submit_login(email, pwd)     
        await page.goto(baseURL+'?route=account/password');
        
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Account Info. - Address Book', async ({page}) => {
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL+'?route=account/login');
        await onLoginPage.submit_login(email, pwd)     
        await page.goto(baseURL+'?route=account/address');
        
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Account Info. - Wishlist', async ({page}) => {
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL+'?route=account/login');
        await onLoginPage.submit_login(email, pwd)     
        await page.goto(baseURL+'?route=account/wishlist');
        
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Account Info. - Subscribed Products', async ({page}) => {
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL+'?route=account/login');
        await onLoginPage.submit_login(email, pwd)     
        await page.goto(baseURL+'?route=extension/maza/account/notification/product');
        
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Account Info. - Order History', async ({page}) => {
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL+'?route=account/login');
        await onLoginPage.submit_login(email, pwd)     
        await page.goto(baseURL+'?route=account/order');
        
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Account Info. - Downloads', async ({page}) => {
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL+'?route=account/login');
        await onLoginPage.submit_login(email, pwd)     
        await page.goto(baseURL+'?route=account/download');
        
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Account Info. - Recurring Payments', async ({page}) => {
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL+'?route=account/login');
        await onLoginPage.submit_login(email, pwd)     
        await page.goto(baseURL+'?route=account/recurring');
        
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Account Info. - Reward Points', async ({page}) => {
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL+'?route=account/login');
        await onLoginPage.submit_login(email, pwd)     
        await page.goto(baseURL+'?route=account/reward');
        
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Account Info. - Product Returns', async ({page}) => {
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL+'?route=account/login');
        await onLoginPage.submit_login(email, pwd)     
        await page.goto(baseURL+'?route=account/return');
        
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Account Info. - Transactions', async ({page}) => {
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL+'?route=account/login');
        await onLoginPage.submit_login(email, pwd)     
        await page.goto(baseURL+'?route=account/transaction');
        
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Account Info. - Newsletter Subscriptions', async ({page}) => {
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL+'?route=account/login');
        await onLoginPage.submit_login(email, pwd)     
        await page.goto(baseURL+'?route=account/newsletter');
        
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | My Account - Account Info. - Logout', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL+'?route=account/login');
        await onLoginPage.submit_login(email, pwd)
        await onHomePage.logOut();
        
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

})