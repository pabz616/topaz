//API SECURITY TESTS - SQL INJECTION - GET REQUEST


const { test, expect } = require('@playwright/test');
const { apiURL, sqlInjection } = require('../test-data/data');

test.describe('@api @security', () => {
    let msg = 'Your api is safe from SQL injection vulnerability'
    
    test('Check for SQL Injection Vulnerability - GET Request', async({ request }) =>{
        const response = await request.get(apiURL+'?/booking/404'+sqlInjection);
        expect(response.ok()).toBeTruthy();

        if('error' in response.body){
            msg = 'Maybe your API is vulnerable to SQL injection vulnerability which allows the retrieval of hidden data'
        }

        expect(response.body).not.toContain('error');
        console.log(msg)
    })
})