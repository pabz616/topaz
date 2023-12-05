const { test, expect } = require('@playwright/test');
const { apiURL } = require('../test-data/data');

//RESTFUL BOOKER - DELETE A BOOKING
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
        const deleteRequest = await request.delete(apiURL+'/booking/1', {
            headers: {
                'Content-Type': 'application/json',
                'Cookie': `token=${token}`,
                }
            });
    
        expect(deleteRequest.status()).toEqual(201);
        expect(deleteRequest.statusText()).toBe('Created');
    })
})
