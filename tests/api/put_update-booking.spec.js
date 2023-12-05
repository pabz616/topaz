const { test, expect } = require('@playwright/test');
const { apiURL } = require('../test-data/data');

//RESTFUL BOOKER - UPDATE A BOOKING
var token 

test.describe('@api', () => {
    test('Update a booking', async({ request }) =>{
        //CREATE AUTH TOKEN
        const response = await request.post(apiURL+'/auth', {
            data: {
                "username": "admin",
                "password": "password123"
            }
        })
        expect(response.ok()).toBeTruthy()
        expect(response.status()).toBe(200)
    
        const responseBody = await response.json()
        token = responseBody.token
    
        //UPDATE RECORD
        const updateRequest = await request.put(apiURL+'/booking/2', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`,
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
    
        expect(updateRequest.ok()).toBeTruthy();
        expect(updateRequest.status()).toBe(200);
        
        const updatedResponseBody = await updateRequest.json()
        expect(updatedResponseBody).toHaveProperty("firstname", "Jim");
        expect(updatedResponseBody).toHaveProperty("lastname", "Brown");
        expect(updatedResponseBody).toHaveProperty("totalprice", 111);
        expect(updatedResponseBody).toHaveProperty("depositpaid", true);
    })
});