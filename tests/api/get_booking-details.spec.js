const { test, expect } = require('@playwright/test');
const { apiURL } = require('../test-data/data');

//RESTFUL BOOKER - GET ALL BOOKING IDS
test.describe('@api', () => {
    test('Get all the booking details', async({ request }) =>{
        const response = await request.get(apiURL+'/booking/4');
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    
        console.log(await response.json());
    })
    
    test('Get specific booking details', async({ request }) =>{
        const response = await request.get(apiURL+'/booking/2');
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    
        const responseBody = await response.json();
        console.log(responseBody)
        expect(responseBody.booking).not.toBeNull()
        expect(responseBody["firstname"]).not.toBeNull()
        expect(responseBody["lastname"]).not.toBeNull()
        expect(responseBody["totalprice"]).not.toBeNaN()
        expect(responseBody["bookingdates"]).not.toBeNull()
        // expect(responseBody["bookingdates"]["checkin"]).toEqual('2015-02-23')
        // expect(responseBody["bookingdates"]["checkout"]).toEqual('2018-03-04' )
    })
    
    test('Get specific booking details by name', async({ request }) =>{
        const response = await request.get(apiURL+'/booking', {
            params: {
                firstname: "Mark",
                lastname: "Jackson"
            },
        })
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        console.log(await response.json());
    
        const responseBody = await response.json();
        expect(responseBody.booking).not.toBeNull()
    })
    
    test('Get specific booking details by date', async({ request }) =>{
        const response = await request.get(apiURL+'/booking', {
            params: {
                checkin: "2021-01-15",
                checkout: "2023-03-25"
                },
        })
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    
        console.log(await response.json());
    
        const responseBody = await response.json();
        expect(responseBody.booking).not.toBeNull()
    })
    
    test('Get specific booking details for unpaid deposits', async({ request }) =>{
        const response = await request.get(apiURL+'/booking', {
            params: {
                totalprice: false,
            }
        })
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    
        console.log(await response.json());
    
        const responseBody = await response.json();
        expect(responseBody.booking).not.toBeNull()
    })
})
