//API SECURITY TESTS - SQL INJECTION - POST REQUEST

const { test, expect } = require('@playwright/test');
const { apiURL, sqlInjection } = require('../test-data/data');
const bookingDetails = require('../test-data/booking-details');

test.describe('@api @security', () => {
    let msg = 'Your api is safe from SQL injection vulnerability'
    
    test('Check for SQL Injection Vulnerability - POST Request', async ({ request }) => {
        const response = await request.post(apiURL+'?'+sqlInjection, {
            data:bookingDetails
        });

        expect(response.body).not.toContain('error');
        console.log(msg)     
    });
   
})