//ACCESSIBILITY TESTING - BLOG

const { test, expect } = require('@playwright/test');
const { baseURL }  = require('../test-data/data')
const AxeBuilder = require('@axe-core/playwright').default

test.describe('@accessibility', () => {
    test('Accessibility Test | Shop By Category - Components PDP', async ({page}) => {
        await page.goto(baseURL+'?route=extension/maza/blog/home');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })
})