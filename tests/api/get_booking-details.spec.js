const { test, expect } = require('@playwright/test');
const { apiURL } = require('../test-data/data');
const { faker } = require('@faker-js/faker')

const bookingId = faker.string.numeric(1)
//RESTFUL BOOKER - GET ALL BOOKING IDS
test.describe('@api', () => {
    test('Get all the booking details', async({ request }) =>{
        const response = await request.get(apiURL+'/booking/');
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    })
    
    test('Get specific booking details', async({ request }) =>{
        const bookingId = faker.string.numeric(1)
        const response = await request.get(apiURL+'/booking/'+bookingId);
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
    
        const responseBody = await response.json();
        expect(responseBody.booking).not.toBeNull()
        expect(responseBody["firstname"]).not.toBeNull()
        expect(responseBody["lastname"]).not.toBeNull()
        expect(responseBody["totalprice"]).not.toBeNaN()
        expect(responseBody["bookingdates"]).not.toBeNull()
    })
    
    test('Get specific booking details by name', async({ request }) =>{
        const response = await request.get(apiURL+'/booking', {
            params: {
                firstname: "Mark",
                lastname: "Jackson"
            },
        })

        const responseBody = await response.json();
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        expect(responseBody.booking).not.toBeNull()
    })
    
    test('Get specific booking details by date', async({ request }) =>{
        const response = await request.get(apiURL+'/booking', {
            params: {
                checkin: "2021-01-15",
                checkout: "2023-03-25"
                },
        })

        const responseBody = await response.json();
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        expect(responseBody.booking).not.toBeNull()
    })
    
    test('Get specific booking details for unpaid deposits', async({ request }) =>{
        const response = await request.get(apiURL+'/booking', {
            params: {
                totalprice: false,
            }
        })

        const responseBody = await response.json();
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        expect(responseBody.booking).not.toBeNull()
    })
})
