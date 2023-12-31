describe('Update Booking API Test', () => {
    it('should update a booking', () => {
      cy.request({
        method: 'PUT',
        url: 'https://restful-booker.herokuapp.com/booking/:id',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
          "firstname": "Jose",
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
        expect(response.status).to.equal(200);
        expect(response.body).to.have.property('firstname', 'Jose');
      });
    });
  });

  // there's no place to get the cookie for this webpage,
  // so this is likely the reason the test fails in cypress