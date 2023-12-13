// E2E Checkout Flow

const { test, expect } = require('@playwright/test');
const { baseURL} = require('../test-data/data')
const {HomePage} = require('./page-objects/homePage')
const {ProductDetailsPage} = require('./page-objects/productDetailsPage')


test.describe('Open site and perform a search', () => {
    //TODO - PURCHASE FROM HOME PAGE - PROMO (BANNER)
    test.skip('PURCHASE FROM HOME PAGE - PROMO (BANNER)', async ({page}) => {
        const onHomePage = new HomePage(page);
        const onPDP = new ProductDetailsPage(page)

        await page.goto(baseURL);
        await onHomePage.clickBannerAd()
        await onPDP.clickAddToCart()
        //checkout flow incomplete .. bug - size required for a camera??
    });

    //TODO - PURCHASE FROM HOME PAGE - PROMO 2 (BELOW BANNER)
    test('#name', async ({page}) => {});
    //TODO - PURCHASE FROM HOME PAGE - PROMO 3 (BRAND)
    test('#name', async ({page}) => {});
    //TODO - PURCHASE FROM HOME PAGE - TRENDING CATEGORIES
    test('#name', async ({page}) => {});
    //TODO - PURCHASE FROM HOME PAGE - PROMO 4 (HP 25 HEADPHONES)
    test('#name', async ({page}) => {});
    //TODO - PURCHASE FROM HOME PAGE - TOP PRODUCTS
    test('#name', async ({page}) => {});
    //TODO - PURCHASE FROM HOME PAGE - DISCOUNT PROMO
    test('#name', async ({page}) => {});
    //TODO - PURCHASE FROM HOME PAGE - TOP COLLECTION - POPULAR
    test('#name', async ({page}) => {});
    //TODO - PURCHASE FROM HOME PAGE - TOP COLLECTION - LATEST
    test('#name', async ({page}) => {});
    //TODO - PURCHASE FROM HOME PAGE - TOP COLLECTION - BEST SELLER
    test('#name', async ({page}) => {});
    //TODO - PURCHASE FROM HOME PAGE - SHOP BY BRAND
    test('#name', async ({page}) => {});
    //TODO - PURCHASE FROM HOME PAGE - PROMO 5
    test('#name', async ({page}) => {});
    //TODO - PURCHASE FROM CATEGORY MENU
    test('#name', async ({page}) => {});
    //TODO - PURCHASE FROM SEARCH RESULTS
    test('#name', async ({page}) => {});
    //TODO - PURCHASE FROM MEGA MENU
    test('#name', async ({page}) => {});
})