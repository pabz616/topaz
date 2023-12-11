//ACCESSIBILITY TESTING - SHOP BY MANUFACTURER

const { test, expect } = require('@playwright/test');
const { baseURL }  = require('../test-data/data')
const AxeBuilder = require('@axe-core/playwright').default

test.describe('@accessibility', () => {
    test('Accessibility Test | Shop By Product - Apple', async ({page}) => {
        await page.goto(baseURL+'?route=product/manufacturer/info&manufacturer_id=8');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | Shop By Product - HTC', async ({page}) => {
        await page.goto(baseURL+'?route=product/manufacturer/info&manufacturer_id=5');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | Shop By Product - Canon', async ({page}) => {
        await page.goto(baseURL+'?route=product/manufacturer/info&manufacturer_id=9');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | Shop By Product - Nikon', async ({page}) => {
        await page.goto(baseURL+'?route=product/manufacturer/info&manufacturer_id=11');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })
})