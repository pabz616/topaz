//ACCESSIBILITY TESTING - HOME PAGE | SHOP BY CATEGORY

const { test, expect } = require('@playwright/test');
const { baseURL }  = require('../test-data/data')
const AxeBuilder = require('@axe-core/playwright').default
 

test.describe('@accessibility', () => {
    test('Accessibility Test | Shop By Category - Components PDP', async ({page}) => {
        await page.goto(baseURL+'?route=product/category&path=25');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | Shop By Category - Cameras PDP', async ({page}) => {
        await page.goto(baseURL+'?route=product/category&path=33');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | Shop By Category - Phone, Tablets, & IPod PDP', async ({page}) => {
        await page.goto(baseURL+'?route=product/category&path=57');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | Shop By Category - Software PDP', async ({page}) => {
        await page.goto(baseURL+'?route=product/category&path=17');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | Shop By Category - MP3 Players', async ({page}) => {
        await page.goto(baseURL+'?route=product/category&path=34');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | Shop By Category - Laptops & Notebooks PDP', async ({page}) => {
        await page.goto(baseURL+'?route=product/category&path=18');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | Shop By Category - Desktops & Monitors PDP', async ({page}) => {
        await page.goto(baseURL+'?route=product/category&path=28');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | Shop By Category - Printers & Scanners PDP', async ({page}) => {
        await page.goto(baseURL+'?route=product/category&path=30');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test('Accessibility Test | Shop By Category - Mice & Trackballs PDP', async ({page}) => {
        await page.goto(baseURL+'?route=product/category&path=29');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })

    test.skip('Accessibility Test | Shop By Category - Fashion & Accessories PDP', async ({page}) => {})

    test.skip('Accessibility Test | Shop By Category - Beauty & Saloon PDP', async ({page}) => {})

    test.skip('Accessibility Test | Shop By Category - Autoparts & Accessories PDP', async ({page}) => {})

    test.skip('Accessibility Test | Shop By Category - Washing Machine PDP', async ({page}) => {})

    test.skip('Accessibility Test | Shop By Category - Gaming Consoles PDP', async ({page}) => {})

    test.skip('Accessibility Test | Shop By Category - Air Conditioner PDP', async ({page}) => {})

    test('Accessibility Test | Shop By Category - Web Cameras PDP', async ({page}) => {
        await page.goto(baseURL+'?route=product/category&path=32');
        const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 
        expect(accessibilityScanResults.violations).toEqual([]);
    })
})