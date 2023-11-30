const { test, expect } = require('@playwright/test');
const { baseURL} = require('./test-data/data');
const {HomePage} = require('./page-objects/homePage')
const {AccountRegistrationPage} = require('./page-objects/registrationPage')

test.describe('Account Registration', () => {
    test('Customer creates an account', async ({page}) => {
        const onHomePage = new HomePage(page);
        const LambdaSite = baseURL
        const onAccountRegistrationPage = new AccountRegistrationPage(page);

        await page.goto(LambdaSite);
        await onHomePage.navigateToRegistrationPage()
        await onAccountRegistrationPage.checkUI()
    });
});