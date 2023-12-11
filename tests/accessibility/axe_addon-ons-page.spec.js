//ACCESSIBILITY TESTING - ADD ONS SECTION

const { test, expect } = require('@playwright/test');
const { baseURL }  = require('../test-data/data')
const AxeBuilder = require('@axe-core/playwright').default

test.describe('@accessibility', () => {
    test('Accessibility Test | Add Ons - Modules', async ({page}) => {
        await page.goto(baseURL+'?route=extension/maza/page&page_id=10');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | Add Ons - Designs', async ({page}) => {
        await page.goto(baseURL+'?route=extension/maza/page&page_id=11');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | Add Ons - Widgets', async ({page}) => {
        await page.goto(baseURL+'?route=extension/maza/page&page_id=9');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })
})