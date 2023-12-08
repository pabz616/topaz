const { test, expect } = require('@playwright/test');
const { apiURL } = require('../test-data/data');
const { faker } = require('@faker-js/faker')
const {DateTime } = require  ('luxon')
const bookingDetails = require('../test-data/booking-details');

//RESTFUL BOOKER - POST W. IMPORTED JSON FILE

test.describe('@api', () => {
    test('Should be able to create a booking', async ({ request }) => {
        const response = await request.post(apiURL+'/booking', {
            data:bookingDetails
        });
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        
        const responseBody = await response.json()
        expect(responseBody.booking).toHaveProperty("firstname", "Jim");
        expect(responseBody.booking).toHaveProperty("lastname", "Brown");
        expect(responseBody.booking).toHaveProperty("totalprice", 111);
        expect(responseBody.booking).toHaveProperty("depositpaid", true);
    });
    
    //RESTFUL BOOKER - POST USING FAKER LIBRARY
    test('Should be able to create a booking w. dynamic data', async ({ request }) => {
        const randomFirstName = faker.person.firstName()
        const randomLastName = faker.person.lastName()
        const randomPrice = faker.string.numeric(4)
        const currentDate = DateTime.now().toFormat('yyyy-MM-dd')
        const inFiveDays = DateTime.now().plus({ days: 5 }).toFormat('yyyy-MM-dd')
        const response = await request.post(apiURL+'/booking', {
            data: {
                "firstname": randomFirstName,
                "lastname": randomLastName,
                "totalprice": randomPrice,
                "depositpaid": true,
                "bookingdates": {
                    "checkin": currentDate,
                    "checkout": inFiveDays
                },
                "additionalneeds": "Breakfast"
            }
        });

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        
        const responseBody = await response.json()
        expect(responseBody.booking).toHaveProperty("firstname",randomFirstName);
        expect(responseBody.booking).toHaveProperty("lastname", randomLastName);
    });
})

