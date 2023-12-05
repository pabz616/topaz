const { test, expect } = require('@playwright/test');
const { apiURL } = require('../test-data/data');

//RESTFUL BOOKER - PARTIAL UPDATE FOR A BOOKING
var token 
test.describe('@api', () => {
    test('Partial update of a booking record', async({ request }) =>{
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
        const partialUpdateRequest = await request.patch(apiURL+'/booking/1', {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Cookie': `token=${token}`,
                },
            data: {
                "firstname": "Sim",
                "lastname": "Son",
                "totalprice": 333,
                "depositpaid": false
                }
            });
    
        expect(partialUpdateRequest.ok()).toBeTruthy();
        expect(partialUpdateRequest.status()).toBe(200);
        
        const partialUpdatedResponseBody = await partialUpdateRequest.json()
        expect(partialUpdatedResponseBody).toHaveProperty("firstname", "Sim");
        expect(partialUpdatedResponseBody).toHaveProperty("lastname", "Son");
        expect(partialUpdatedResponseBody).toHaveProperty("totalprice", 333);
        expect(partialUpdatedResponseBody).toHaveProperty("depositpaid", false);
    })
})
