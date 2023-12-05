//ACCOUNT LOGIN

const { test, expect } = require('@playwright/test');
const { baseURL,email, pwd, errorMsgCopy, multiLoginCopy, longCharacters, sqlInjection} = require('./test-data/data');
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

    test.only('Submit Account Login', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)
        const MyAccountHeader = page.locator('(//h2[@class="card-header h5"])[1]')

        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_login(email, pwd)
        await expect(MyAccountHeader).toBeVisible()
        await onHomePage.logOut()
    })

    //TODO - NEGATIVE SCENARIOS ARE LIMITED BY THE NUMBER OF LOGIN ATTEMPTS MAKING RUNNING ALL OF THESE TESTS AT ONCE IMPOSSIBLE
    test('Validation Error Shown For Required Fields', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_bad_login('', '')
    })

    test('Validation Error Shown For Multiple Login Attempts', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_bad_login('', '')
    })
    
    test('Validation Error Message Shown For Invalid Login - Mixed Characters', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_bad_login(mixedChar,mixedChar)
    })

    test('Validation Error Message Shown For Invalid Login - Account Not Found', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_bad_login('foo','bar')
    })

    test('Validation Error Message Shown For Short Password', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_bad_login(usn,'pas')
    })

    test('Validation Error Message Shown For Improper Username (Bad Email Address Format)', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)

        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_bad_login('nonemail',pwd)
    })

    test('Validation Error Message Shown For Improper Password (Weak Password)', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)
   
        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_bad_login(usn,'password')
    })

    test('Boundary Test For Login', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)
   
        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_bad_login(longCharacters,longCharacters)
    })

    test('SQL Injection Vulnerability For Password', async ({page}) => {
        //IF THIS TEST FAILS, THAT MEANS NO ERROR WAS SHOWN AND LOGIN WAS SUCCESSFUL - VERY BAD!!
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)
   
        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_bad_login(usn,sqlInjection)
    })

    test('XSS Injection Vulnerability - Simple Script @ Email', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)
        const simpleScript = '<scrip>alert("boo!")</script>'
   
        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_bad_login(simpleScript,pwd)
    })

    test('XSS Injection Vulnerability - Bad Email-1', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)
        const badEmail = 'test+(<script>alert(0)</script>)@example.com'
   
        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_bad_login(badEmail,pwd)
    })

    test('XSS Injection Vulnerability - Bad Email-2', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)
        const badEmail = 'test@example(<script>alert(0)</script>).com'
   
        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_bad_login(badEmail,pwd)
    })

    test('XSS Injection Vulnerability - Simple Script @ Password', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onLoginPage = new LoginPage(page)
        const simpleScript = '<scrip>alert("boo!")</script>'
   
        await page.goto(baseURL);
        await onHomePage.navigateToLoginPage()
        await onLoginPage.submit_bad_login(usn, simpleScript)
    }) 
});