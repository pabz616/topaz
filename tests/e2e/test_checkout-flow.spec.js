// E2E Checkout Flow

const { test, expect } = require('@playwright/test');
const { baseURL, productName, email, pwd} = require('../test-data/data')
const {HomePage} = require('./page-objects/homePage')
const {ProductDetailsPage} = require('./page-objects/productDetailsPage')
const {ShopCategoryPage} = require('./page-objects/shopCategoryPage')
const {ProductCategoryPage} = require('./page-objects/productCategoryPage')
const {CartPage} = require('./page-objects/cartPage')
const {CheckoutPage} = require('./page-objects/checkoutPage')
const {OrderConfirmationPage} = require('./page-objects/orderConfirmationPage')
const {OrderSuccessPage} = require('./page-objects/orderSuccessPage')


test.describe('Open site and perform a search', () => {
    test.beforeEach(async ({page}) =>{
        await page.goto(baseURL);
    })

    test('PURCHASE FROM SEARCH RESULTS', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onPCP = new ProductCategoryPage(page)
        const onPDP = new ProductDetailsPage(page)
        const onCartPage = new CartPage (page)
        const onCheckoutPage = new CheckoutPage(page)
        const onOrderConfirmationPage = new OrderConfirmationPage(page)
        const onOrderSuccessPage = new OrderSuccessPage(page)

        await onHomePage.enterSearchTerm(productName)
        await onPCP.selectFirstProduct()
        await onPDP.clickAddToCart()
        await onHomePage.navigateToCart()
        await onCartPage.proceedToCheckout()
        await onCheckoutPage.loginAsReturnCustomer(email, pwd)
        await onCheckoutPage.addComment()
        await onCheckoutPage.acceptTermsAndConditions()
        await onCheckoutPage.continueWithPurchase()
        await onOrderConfirmationPage.confirmPurchaseOrder()
        await onOrderSuccessPage.completePurchaseWorkflow()

    });

    test('PURCHASE FROM SHOP BY CATEGORY MENU', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onSBCMenu = new ShopCategoryPage(page)
        const onPCP = new ProductCategoryPage(page)
        const onPDP = new ProductDetailsPage(page)
        const onCartPage = new CartPage (page)
        const onCheckoutPage = new CheckoutPage(page)
        const onOrderConfirmationPage = new OrderConfirmationPage(page)
        const onOrderSuccessPage = new OrderSuccessPage(page)

        await onHomePage.clickShopByCategoryMenu()
        await onSBCMenu.clickCategoryItem(2)
        await onPCP.selectFirstProduct()
        await onPDP.clickAddToCart()
        await onHomePage.navigateToCart()
        await onCartPage.proceedToCheckout()
        await onCheckoutPage.loginAsReturnCustomer(email, pwd)
        await onCheckoutPage.addComment()
        await onCheckoutPage.acceptTermsAndConditions()
        await onCheckoutPage.continueWithPurchase()
        await onOrderConfirmationPage.confirmPurchaseOrder()
        await onOrderSuccessPage.completePurchaseWorkflow()
    });

    //TODO - PURCHASE FROM HOME PAGE - PROMO (BANNER) -- has bugs on pdp
    test.skip('PURCHASE FROM HOME PAGE - PROMO (BANNER)', async ({page}) => {
        const onHomePage = new HomePage(page);
        const onPDP = new ProductDetailsPage(page)

        await page.goto(baseURL);
        await onHomePage.clickBannerAd()
        await onPDP.clickAddToCart()
        //checkout flow incomplete .. bug - size required for a camera??
    });

    //TODO - PURCHASE FROM HOME PAGE - PROMO 2 (BELOW BANNER) -- not working!
    test.skip('PURCHASE FROM HOME PAGE - PROMO 2 (Top Load Washing Machine)', async ({page}) => {})  
    
    test('PURCHASE FROM HOME PAGE - PROMO 3 (Categories)', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onPCP = new ProductCategoryPage(page)
        const onPDP = new ProductDetailsPage(page)
        const onCartPage = new CartPage (page)
        const onCheckoutPage = new CheckoutPage(page)
        const onOrderConfirmationPage = new OrderConfirmationPage(page)
        const onOrderSuccessPage = new OrderSuccessPage(page)

        await onHomePage.clickCategoriesAd()
        await onPCP.selectFirstProduct()
        await onPDP.clickAddToCart()
        await onHomePage.navigateToCart()
        await onCartPage.proceedToCheckout()
        await onCheckoutPage.loginAsReturnCustomer(email, pwd)
        await onCheckoutPage.addComment()
        await onCheckoutPage.acceptTermsAndConditions()
        await onCheckoutPage.continueWithPurchase()
        await onOrderConfirmationPage.confirmPurchaseOrder()
        await onOrderSuccessPage.completePurchaseWorkflow()
    })
   
    test('PURCHASE FROM HOME PAGE - TOP TRENDING CATEGORIES', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onPCP = new ProductCategoryPage(page)
        const onPDP = new ProductDetailsPage(page)
        const onCartPage = new CartPage (page)
        const onCheckoutPage = new CheckoutPage(page)
        const onOrderConfirmationPage = new OrderConfirmationPage(page)
        const onOrderSuccessPage = new OrderSuccessPage(page)

        await onHomePage.clickShopByTopTrendingCategoryAd()
        await onPCP.selectFirstProduct()
        await onPDP.clickAddToCart()
        await onHomePage.navigateToCart()
        await onCartPage.proceedToCheckout()
        await onCheckoutPage.loginAsReturnCustomer(email, pwd)
        await onCheckoutPage.addComment()
        await onCheckoutPage.acceptTermsAndConditions()
        await onCheckoutPage.continueWithPurchase()
        await onOrderConfirmationPage.confirmPurchaseOrder()
        await onOrderSuccessPage.completePurchaseWorkflow()
    })

    test('PURCHASE FROM FEATURED CATEGORY - PROMO 4 (HP 25 HEADPHONES)', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onPDP = new ProductDetailsPage(page)
        const onCartPage = new CartPage (page)
        const onCheckoutPage = new CheckoutPage(page)
        const onOrderConfirmationPage = new OrderConfirmationPage(page)
        const onOrderSuccessPage = new OrderSuccessPage(page)

        await onHomePage.clickFeaturedCategoryAd()
        await onPDP.clickAddToCart()
        await onHomePage.navigateToCart()
        await onCartPage.proceedToCheckout()
        await onCheckoutPage.loginAsReturnCustomer(email, pwd)
        await onCheckoutPage.addComment()
        await onCheckoutPage.acceptTermsAndConditions()
        await onCheckoutPage.continueWithPurchase()
        await onOrderConfirmationPage.confirmPurchaseOrder()
        await onOrderSuccessPage.completePurchaseWorkflow()
    })

    test('PURCHASE FROM HOME PAGE - TOP PRODUCTS', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onPDP = new ProductDetailsPage(page)
        const onCartPage = new CartPage (page)
        const onCheckoutPage = new CheckoutPage(page)
        const onOrderConfirmationPage = new OrderConfirmationPage(page)
        const onOrderSuccessPage = new OrderSuccessPage(page)

        await onHomePage.clickTopProductsAd()
        await onPDP.clickAddToCart()
        await onHomePage.navigateToCart()
        await onCartPage.proceedToCheckout()
        await onCheckoutPage.loginAsReturnCustomer(email, pwd)
        await onCheckoutPage.addComment()
        await onCheckoutPage.acceptTermsAndConditions()
        await onCheckoutPage.continueWithPurchase()
        await onOrderConfirmationPage.confirmPurchaseOrder()
        await onOrderSuccessPage.completePurchaseWorkflow()
    })

    //TODO - PURCHASE FROM HOME PAGE - DISCOUNT PROMO -- not working!
    test.skip('PURCHASE FROM HOME PAGE - DISCOUNT PROMO', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onPDP = new ProductDetailsPage(page)
        const onCartPage = new CartPage (page)
        const onCheckoutPage = new CheckoutPage(page)
        const onOrderConfirmationPage = new OrderConfirmationPage(page)
        const onOrderSuccessPage = new OrderSuccessPage(page)

        await onHomePage.clickDiscountPromoAd()
        await onPDP.clickAddToCart()
        await onHomePage.navigateToCart()
        await onCartPage.proceedToCheckout()
        await onCheckoutPage.loginAsReturnCustomer(email, pwd)
        await onCheckoutPage.addComment()
        await onCheckoutPage.acceptTermsAndConditions()
        await onCheckoutPage.continueWithPurchase()
        await onOrderConfirmationPage.confirmPurchaseOrder()
        await onOrderSuccessPage.completePurchaseWorkflow()
    })

    //TODO - PURCHASE FROM HOME PAGE - TOP COLLECTION -- bug on PDP: Selected product requires 'size' attribute erroneously 
    test.skip('PURCHASE FROM HOME PAGE - TOP COLLECTION', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onPDP = new ProductDetailsPage(page)
        const onCartPage = new CartPage (page)
        const onCheckoutPage = new CheckoutPage(page)
        const onOrderConfirmationPage = new OrderConfirmationPage(page)
        const onOrderSuccessPage = new OrderSuccessPage(page)

        await onHomePage.clickTopCollectionAd()
        await onPDP.clickAddToCart()
        await onHomePage.navigateToCart()
        await onCartPage.proceedToCheckout()
        await onCheckoutPage.loginAsReturnCustomer(email, pwd)
        await onCheckoutPage.addComment()
        await onCheckoutPage.acceptTermsAndConditions()
        await onCheckoutPage.continueWithPurchase()
        await onOrderConfirmationPage.confirmPurchaseOrder()
        await onOrderSuccessPage.completePurchaseWorkflow()
    })

    test('PURCHASE FROM HOME PAGE - SHOP BY BRAND', async ({page}) => {
        const onHomePage = new HomePage(page)
        const onPDP = new ProductDetailsPage(page)
        const onCartPage = new CartPage (page)
        const onCheckoutPage = new CheckoutPage(page)
        const onOrderConfirmationPage = new OrderConfirmationPage(page)
        const onOrderSuccessPage = new OrderSuccessPage(page)

        await onHomePage.clickBrandAd()
        await onPDP.clickAddToCart()
        await onHomePage.navigateToCart()
        await onCartPage.proceedToCheckout()
        await onCheckoutPage.loginAsReturnCustomer(email, pwd)
        await onCheckoutPage.addComment()
        await onCheckoutPage.acceptTermsAndConditions()
        await onCheckoutPage.continueWithPurchase()
        await onOrderConfirmationPage.confirmPurchaseOrder()
        await onOrderSuccessPage.completePurchaseWorkflow()
    })

    //TODO - PURCHASE FROM HOME PAGE - PROMO 5
    test.skip('10', async ({page}) => {})

    //TODO - PURCHASE FROM MEGA MENU
    test.skip('11', async ({page}) => {})
})