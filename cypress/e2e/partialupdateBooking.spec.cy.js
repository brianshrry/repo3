describe('Partial Update Booking API Test', () => {
    it('should partially update a booking', () => {
      cy.request({
        method: 'PATCH',
        url: 'https://restful-booker.herokuapp.com/booking/:id',
        headers: {
          'Content-Type': 'application/json',
        },
        body: {
            "firstname" : "James",
            "lastname": "Doe"
        }
      })
    });
  });
  // there's no place to get the cookie for this webpage,
  // so this is likely the reason the test fails in cypress