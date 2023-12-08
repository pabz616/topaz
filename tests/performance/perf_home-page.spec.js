//PERFORMANCE TEST
//Src: https://ray.run/blog/measuring-website-performance-with-playwright-tests

//TO USE ACCROSS THE DIFFERENT SECTIONS, APPEND THE BASE URL WITH THE SPECIFIC SECTION

const { test, expect } = require('@playwright/test');
const { baseURL }  = require('../test-data/data')

test.describe('@Performance', () =>{
    let slowness = 10000 // time in milliseconds

    //Navigation and Resource Timing API
    test('Measure navigation and resource timing', async ({ page }) => {
        await page.goto(baseURL);
        const performanceTiming = await page.evaluate(() => performance.getEntriesByType('navigation')[0]);
        
        // console.log('Performance Timing:', performanceTiming);
        expect(performanceTiming.duration).toBeLessThan(slowness)
        expect(performanceTiming.renderBlockingStatus).toBe('non-blocking')
      });

      //Paint Timing API (first-paint and first-contentful-paint)
      test('Measure paint timing', async ({ page }) => {
        await page.goto(baseURL);
        const paintMetrics = await page.evaluate(() => performance.getEntriesByType('paint'));
        // console.log('Paint Metrics:', paintMetrics);
      });

      //Largest Contentful Paint API (largest-contentful-paint)
      test('Measure largest contentful paint', async ({ page }) => {
        await page.goto(baseURL);
        const lcpObserver = new PerformanceObserver((entryList) => {
          const lcp = entryList.getEntries()[0];
          console.log('LCP:', lcp);
        });
        lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
      });

      //Layout Instability API (layout-shift)
      test('Measure layout shift', async ({ page }) => {
        await page.goto(baseURL);
        const clsObserver = new PerformanceObserver((entryList) => {
          const cls = entryList.getEntries()[0];
          console.log('CLS:', cls);
        });
        clsObserver.observe({ type: 'layout-shift', buffered: true });
      });

      //Long API Task
      test('Measure long tasks', async ({ page }) => {
        await page.goto(baseURL);
        const longTaskObserver = new PerformanceObserver((entryList) => {
          const longTasks = entryList.getEntries();
          console.log('Long Tasks:', longTasks);
        });
        longTaskObserver.observe({ type: 'longtask' });
      });
})