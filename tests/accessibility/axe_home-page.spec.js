//ACCESSIBILITY TESTING - HOME PAGE

const { test, expect } = require('@playwright/test');
const { baseURL }  = require('../test-data/data')
const AxeBuilder = require('@axe-core/playwright').default

test.describe('@accessibility', () => {
    test('Accessibility Test | Home Page', async ({page}) => {
        await page.goto(baseURL);
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]); 
    })
})