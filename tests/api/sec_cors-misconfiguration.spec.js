

const { test, expect } = require('@playwright/test');
const { apiURL } = require('../test-data/data');

test.describe('@api @security', () => {
    //BASIC ORIGIN REFLECTION TEST
    //If this test fails then it means that maybe any domain can access resources or sensitive information from your domain'

    test('API Security - Check Vulnerability w. Basic Origin Reflection ', async({ request }) =>{
        const response = await request.get(apiURL);
        expect(response.headers['Access-Control-Allow-Origin']).not.toEqual('malicious_origin')
        expect(response.headers['Access-Control-Allow-Credentials']).toBe(undefined)
    })

    //TRUSTED NULL ORIGIN TEST
    //If this test fails then it means that maybe any domain can access resources or sensitive information from your domain by passing "Origin" as "null"

    test('API Security - Check Vulnerability w. Trusted Null Origin', async({ request }) =>{
        const response = await request.get(apiURL);
        expect(response.headers['Access-Control-Allow-Origin']).not.toEqual('null')
        expect(response.headers['Access-Control-Allow-Credentials']).toBe(undefined)
    })

    //TRUSTED UNAUTHORIZED SUBDOMAIN TEST
    test('API Security - Check Vulnerability w. Trusted Insecure Protocols', async({ request }) =>{
        const response = await request.get(apiURL);
        expect(response.headers['Access-Control-Allow-Origin']).not.toEqual('/admin')
        expect(response.headers['Access-Control-Allow-Credentials']).toBe(undefined)
    })

})


