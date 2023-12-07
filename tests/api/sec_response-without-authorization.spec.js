//API SECURITY TESTS - AUTHENTICATION

const { test, expect } = require('@playwright/test');
const { apiURL } = require('../test-data/data');

test.describe('@api @security', () => {
    test('Partial update of a booking record without a token', async({ request }) =>{
        const partialUpdateRequest = await request.patch(apiURL+'/booking/1', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
            data: {
                "firstname": "Sim",
                "lastname": "Son",
                "totalprice": 333,
                "depositpaid": false
                }
            });
    
        expect(partialUpdateRequest.status()).not.toBe(200);
        //EXPECT 401, 403. IF THIS FAILS, API IS VULNERABLE TO BROKEN AUTHENTICATION
    })

    test('Update a booking without a token', async({ request }) =>{
        const updateRequest = await request.put(apiURL+'/booking/2', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                },
            data: {
                "firstname": "Jim",
                "lastname": "Brown",
                "totalprice": 111,
                "depositpaid": true,
                "bookingdates": {
                "checkin": "2023-06-01",
                "checkout": "2023-06-15"
                },
                "additionalneeds": "Breakfast"
                },
            });
    
            expect(updateRequest.status()).not.toBe(200);
            //EXPECT 401, 403. IF THIS FAILS, API IS VULNERABLE TO BROKEN AUTHENTICATION
    })

    test('Delete a record without a token', async({ request }) =>{
        const deleteRequest = await request.delete(apiURL+'/booking/1', {
            headers: {
                'Content-Type': 'application/json'
                }
            });
    
        expect(deleteRequest.status()).not.toBe(200);
        //EXPECT 401, 403. IF THIS FAILS, API IS VULNERABLE TO BROKEN AUTHENTICATION
    })
})