//API SECURITY TESTS - SECURITY HEADERS
//'This request checks for the security headers in the response',
//link:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers"

const { test, expect } = require('@playwright/test');
const { apiURL } = require('../test-data/data');

test.describe('@api @security', () => {
    test('API Security - Check for Content-Security-Policy Header', async({ request }) =>{
        const response = await request.get(apiURL);
  
        //allowed for a demo site, replace with not.toBe(undefined) for real sites
        expect(response.headers['Content-Security-Policy']).toBe(undefined) 
    })

    test.skip('API Security - Check for X-Frame-Options Header', async({ request }) =>{
        const response = await request.get(apiURL);
  
        //unskip if applicable for the application
        expect(response.headers['X-Frame-Options']).toEqual('DENY') 
    })

    test.skip('API Security - Check for Strict-Transport-Security Header', async({ request }) =>{
        const response = await request.get(apiURL);
  
        //unskip if applicable for the application
        expect(response.headers['Strict-Transport-Security']).toContain('max-age') 
    })

    test.skip('API Security - Check for X-XSS-Protection Header', async({ request }) =>{
        const response = await request.get(apiURL);
  
        //unskip if applicable for the application
        expect(response.headers['X-XSS-Protection']).not.toEqual(undefined) 
    })
})