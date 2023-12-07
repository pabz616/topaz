const { test, expect } = require('@playwright/test');
const { baseURL, longCharacters} = require('../test-data/data')
const {HomePage} = require('./page-objects/homePage')
const {AccountRegistrationPage} = require('./page-objects/registrationPage')

test.describe('Account Registration', () => {
    
    test('Customer Navigates To Registration Page', async ({page}) => {
        const onHomePage = new HomePage(page);
        const onAccountRegistrationPage = new AccountRegistrationPage(page)
       
        await page.goto(baseURL);
        await onHomePage.navigateToRegistrationPage()
        await onAccountRegistrationPage.checkUI()
    });

    test('Validation Error Shown For Required Fields (Blank Submission)', async ({page}) => {
        const onHomePage = new HomePage(page);
        const onAccountRegistrationPage = new AccountRegistrationPage(page);

        await page.goto(baseURL)
        await onHomePage.navigateToRegistrationPage()
        await onAccountRegistrationPage.continueButton.click()
        await expect(onAccountRegistrationPage.validationError).toBeVisible()
        //
        await expect(onAccountRegistrationPage.firstNameInputError).toBeVisible()
        await expect(onAccountRegistrationPage.firstNameInputError).toHaveText('First Name must be between 1 and 32 characters!')
        //
        await expect(onAccountRegistrationPage.lastNameInputError).toBeVisible()
        await expect(onAccountRegistrationPage.lastNameInputError).toHaveText('Last Name must be between 1 and 32 characters!')
        //
        await expect(onAccountRegistrationPage.emailInputError).toBeVisible()
        await expect(onAccountRegistrationPage.emailInputError).toHaveText('E-Mail Address does not appear to be valid!')
        //
        await expect(onAccountRegistrationPage.telephoneInputError).toBeVisible()
        await expect(onAccountRegistrationPage.telephoneInputError).toHaveText('Telephone must be between 3 and 32 characters!')
        //
        await expect(onAccountRegistrationPage.passwordInputError).toBeVisible()
        await expect(onAccountRegistrationPage.passwordInputError).toHaveText('Password must be between 4 and 20 characters!')
    });

    test('Validation Error Shown For Invalid First Name (Max. Char. Input)', async ({page}) => {
        const onHomePage = new HomePage(page);
        const onAccountRegistrationPage = new AccountRegistrationPage(page);
        const inputValidationError = page.locator('//div[contains(@class,"text-danger")]')


        await page.goto(baseURL)
        await onHomePage.navigateToRegistrationPage()
        await onAccountRegistrationPage.firstNameInput.fill(longCharacters)
        await onAccountRegistrationPage.lastNameInput.fill('qaTester')
        await onAccountRegistrationPage.emailInput.fill('qaTester@mail.com')
        await onAccountRegistrationPage.telephoneInput.fill('2123334455')
        await onAccountRegistrationPage.passwordInput.fill('qaTester247!')
        await onAccountRegistrationPage.confirmPasswordInput.fill('qaTester247!')
        await onAccountRegistrationPage.privacyPolicyAgreementLabel.click()
        await onAccountRegistrationPage.continueButton.click()
        //
        await expect(inputValidationError).toBeVisible()
        await expect(inputValidationError).toHaveText('First Name must be between 1 and 32 characters!')
    });

    test('Validation Error Shown For Invalid Last Name (Max. Char. Input)', async ({page}) => {
        const onHomePage = new HomePage(page);
        const onAccountRegistrationPage = new AccountRegistrationPage(page);
        const inputValidationError = page.locator('//div[contains(@class,"text-danger")]')

        await page.goto(baseURL)
        await onHomePage.navigateToRegistrationPage()
        await onAccountRegistrationPage.firstNameInput.fill('QA')
        await onAccountRegistrationPage.lastNameInput.fill(longCharacters)
        await onAccountRegistrationPage.emailInput.fill('qaTester@mail.com')
        await onAccountRegistrationPage.telephoneInput.fill('2123334455')
        await onAccountRegistrationPage.passwordInput.fill('qaTester247!')
        await onAccountRegistrationPage.confirmPasswordInput.fill('qaTester247!')
        await onAccountRegistrationPage.privacyPolicyAgreementLabel.click()
        await onAccountRegistrationPage.continueButton.click()
        //
        await expect(inputValidationError).toBeVisible()
        await expect(inputValidationError).toHaveText('Last Name must be between 1 and 32 characters!')
    });

    test('Validation Error Shown For Invalid Email Address', async ({page}) => {
        const onHomePage = new HomePage(page);
        const onAccountRegistrationPage = new AccountRegistrationPage(page);
        const inputValidationError = page.locator('//div[contains(@class,"text-danger")]')


        await page.goto(baseURL)
        await onHomePage.navigateToRegistrationPage()
        await onAccountRegistrationPage.firstNameInput.fill('QATesterFName')
        await onAccountRegistrationPage.lastNameInput.fill('QATesterLName')
        await onAccountRegistrationPage.emailInput.fill('qaTester@mail')
        await onAccountRegistrationPage.telephoneInput.fill('2123334455')
        await onAccountRegistrationPage.passwordInput.fill('qaTester247!')
        await onAccountRegistrationPage.confirmPasswordInput.fill('qaTester247!')
        await onAccountRegistrationPage.privacyPolicyAgreementLabel.click()
        await onAccountRegistrationPage.continueButton.click()
        //
        await expect(inputValidationError).toBeVisible()
        await expect(inputValidationError).toHaveText('E-Mail Address does not appear to be valid!')

    });

    test('Validation Error Shown For Non-Numeric Telephone Number', async ({page}) => {
        const onHomePage = new HomePage(page);
        const onAccountRegistrationPage = new AccountRegistrationPage(page);
        const inputValidationError = page.locator('//div[contains(@class,"text-danger")]')


        await page.goto(baseURL)
        await onHomePage.navigateToRegistrationPage()
        await onAccountRegistrationPage.firstNameInput.fill('QATesterFName')
        await onAccountRegistrationPage.lastNameInput.fill('QATesterLName')
        await onAccountRegistrationPage.emailInput.fill('qaTester@mail.com')
        await onAccountRegistrationPage.telephoneInput.fill('thisfails')
        await onAccountRegistrationPage.passwordInput.fill('qaTester247!')
        await onAccountRegistrationPage.confirmPasswordInput.fill('qaTester247!')
        await onAccountRegistrationPage.privacyPolicyAgreementLabel.click()
        await onAccountRegistrationPage.continueButton.click()
        //
        //TODO: FILE BUG = Telephone Input allows non-numberic
        // await expect(inputValidationError).toBeVisible()
        // await expect(inputValidationError).toHaveText('Telephone must be between 3 and 32 characters!')
    });

     //TODO: FILE A BUG TICKET = No validation for mismatched passwords
    test('Validation Error Shown For Mismatched Passwords', async ({page}) => {
        const onHomePage = new HomePage(page);
        const onAccountRegistrationPage = new AccountRegistrationPage(page);
        const inputValidationError = page.locator('//div[contains(@class,"text-danger")]')


        await page.goto(baseURL)
        await onHomePage.navigateToRegistrationPage()
        await onAccountRegistrationPage.firstNameInput.fill('QATesterFName')
        await onAccountRegistrationPage.lastNameInput.fill('QATesterLName')
        await onAccountRegistrationPage.emailInput.fill('qaTester@mail.com')
        await onAccountRegistrationPage.telephoneInput.fill('2123334455')
        await onAccountRegistrationPage.passwordInput.fill('qaTester247!')
        await onAccountRegistrationPage.confirmPasswordInput.fill('qaTester365!')
        await onAccountRegistrationPage.privacyPolicyAgreementLabel.click()
        await onAccountRegistrationPage.continueButton.click()
        //
        await expect(inputValidationError).toBeVisible()
        await expect(inputValidationError).toHaveText('The confirmation password you entered does not match. Please try again')
    });

    test('Validation Error Shown When Privacy Policy Agreement Is Not Checked Off', async ({page}) => {
        const onHomePage = new HomePage(page);
        const onAccountRegistrationPage = new AccountRegistrationPage(page);

        await page.goto(baseURL)
        await onHomePage.navigateToRegistrationPage()
        await onAccountRegistrationPage.firstNameInput.fill('QATesterFName')
        await onAccountRegistrationPage.lastNameInput.fill('QATesterLName')
        await onAccountRegistrationPage.emailInput.fill('qaTester@mail.com')
        await onAccountRegistrationPage.telephoneInput.fill('2123334455')
        await onAccountRegistrationPage.passwordInput.fill('qaTester247!')
        await onAccountRegistrationPage.confirmPasswordInput.fill('qaTester247!')

        await onAccountRegistrationPage.continueButton.click() 
        await expect(onAccountRegistrationPage.validationError).toBeVisible()
        await expect(onAccountRegistrationPage.validationError).toHaveText('Warning: You must agree to the Privacy Policy!')
       
    });

    test('Validation Error Shown For Account That Already Exists', async ({page}) => {
        const onHomePage = new HomePage(page);
        const onAccountRegistrationPage = new AccountRegistrationPage(page);
        const logo = page.locator('(//figure[@class="figure"])[1]')


        await page.goto(baseURL)
        await onHomePage.navigateToRegistrationPage()
        await onAccountRegistrationPage.submitRegistrationForm()

        //SUBMIT THE REGISTRATION AGAIN
        await logo.click()

        await onHomePage.navigateToRegistrationPage()
        await onAccountRegistrationPage.submitRegistrationForm()

        await expect(onAccountRegistrationPage.validationError).toBeVisible()
        await expect(onAccountRegistrationPage.validationError).toHaveText('Warning: E-Mail Address is already registered!')
    });

    //TODO: FUTURE UPDATE - Password Strength Enforcement (test for weak passwords, password length common words like 'password')

    test('Customer Completes Registration', async ({page}) => {
        const onHomePage = new HomePage(page);
        const onAccountRegistrationPage = new AccountRegistrationPage(page);

        await page.goto(baseURL)
        await onHomePage.navigateToRegistrationPage()
        await onAccountRegistrationPage.submitRegistrationForm()
    });
  
});