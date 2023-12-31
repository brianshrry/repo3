describe('Delete Booking API Test', () => {
    it('should delete a booking', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://restful-booker.herokuapp.com/booking/1',
        headers: {
          'Content-Type': 'application/json',
        },
      })
    });
  });
  // there's no place to get the cookie for this webpage,
  // so this is likely the reason the test fails in cypress