// PRODUCT SEARCH

const { test, expect } = require('@playwright/test');
const { LambdaSite, productName, productNumber, brand, products} = require('./test-data/data');
const {LambdaHomePage} = require('./page-objects/homePage')


test.describe('Open site and perform a search', () => {
    test(`Search for existing product by name`, async ({page}) => {
        const onLambdaSite = new LambdaHomePage(page);
        await page.goto(LambdaSite);
        await onLambdaSite.search(productName)
    });

    test('Search for random product', async ({page}) => {
        const onLambdaSite = new LambdaHomePage(page);
        const errorMsg = page.locator('//p[contains(.,"There is no product")]')

        await page.goto(LambdaSite);
        await onLambdaSite.search(products)
        await expect(errorMsg).toBeVisible
    });

    test(`Search by product brand`, async ({page}) => {
        const onLambdaSite = new LambdaHomePage(page);
        await page.goto(LambdaSite);
        await onLambdaSite.search(brand)
    });

    test(`Search by product number`, async ({page}) => {
        const onLambdaSite = new LambdaHomePage(page);
        await page.goto(LambdaSite);
        await onLambdaSite.search(productNumber)
    });

    test('Search by product color', async ({page}) => {
        const onLambdaSite = new LambdaHomePage(page);
        const errorMsg = page.locator('//p[contains(.,"There is no product")]')

        await page.goto(LambdaSite);
        await onLambdaSite.search('blue')
        await expect(errorMsg).toBeVisible
    });

    test('JS injection - testing for XSS', async ({page}) => {
        const onLambdaSite = new LambdaHomePage(page);
        const dialog = page.locator('//dialog[@id="errDialog]') //subjective locator - an HTML dialog

        await page.goto(LambdaSite);
        await onLambdaSite.search('<img src=x onerror=alert(‘boo’)>');
        await expect(dialog).not.toBeVisible
    });
})