context("GET ping health check", () => {
  it("pings health check", () => {
    cy.request("GET", "https://restful-booker.herokuapp.com/ping").then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.results).length.to.be.greaterThan(1)
    })
  })
})
