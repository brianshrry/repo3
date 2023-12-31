describe('Create Booking API Test', () => {
  it('should create a booking', () => {
    cy.request({
      method: 'POST',
      url: 'https://restful-booker.herokuapp.com/booking',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        "firstname": "John",
        "lastname": "Doe",
        "totalprice": 100,
        "depositpaid": true,
        "bookingdates": {
          "checkin": "2023-01-01",
          "checkout": "2023-01-10"
        },
        "additionalneeds": "Breakfast"
      },
    }).then((response) => {
      // Perform assertions on the response
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property('bookingid');
    });
  });
});