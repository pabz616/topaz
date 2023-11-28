// Sample proof of concept

const { test } = require('@playwright/test');
const { LambdaSite, term} = require('../e2e/test-data/data');
const {LambdaHomePage} = require('../e2e/page-objects/examplePage')

test.describe('Open site and perform a search', () => {
    test(`Search the text ${term}`, async ({page}) => {
        const onLambdaSite = new LambdaHomePage(page);
        await page.goto(LambdaSite);
        await onLambdaSite.search(term)
    });
})