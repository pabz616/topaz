// PRODUCT SEARCH

const { test, expect } = require('@playwright/test');
const { baseURL, productName, productNumber, brand, products} = require('./test-data/data');
const {HomePage} = require('./page-objects/homePage')


test.describe('Open site and perform a search', () => {
    test('Search for existing product by name', async ({page}) => {
        const onHomePage = new HomePage(page);
        const LambdaSite = baseURL
        await page.goto(LambdaSite);
        await onHomePage.search(productName)
    });

    test('Search for random product', async ({page}) => {
        const onHomePage = new HomePage(page);
        const LambdaSite = baseURL
        const errorMsg = page.locator('//p[contains(.,"There is no product")]')

        await page.goto(LambdaSite);
        await onHomePage.search(products)
        await expect(errorMsg).toBeVisible
    });

    test('Search by product brand', async ({page}) => {
        const onHomePage = new HomePage(page);
        const LambdaSite = baseURL
        await page.goto(LambdaSite);
        await onHomePage.search(brand)
    });

    test('Search by product number', async ({page}) => {
        const onHomePage = new HomePage(page);
        const LambdaSite = baseURL
        await page.goto(LambdaSite);
        await onHomePage.search(productNumber)
    });

    test('Search by product color', async ({page}) => {
        const onHomePage = new HomePage(page);
        const LambdaSite = baseURL
        const errorMsg = page.locator('//p[contains(.,"There is no product")]')

        await page.goto(LambdaSite);
        await onHomePage.search('blue')
        await expect(errorMsg).toBeVisible
    });

    test('JS injection - testing for XSS', async ({page}) => {
        const onHomePage = new HomePage(page);
        const LambdaSite = baseURL
        const dialog = page.locator('//dialog[@id="errDialog]') //subjective locator - an HTML dialog

        await page.goto(LambdaSite);
        await onHomePage.search('<img src=x onerror=alert(‘boo’)>');
        await expect(dialog).not.toBeVisible
    });
})