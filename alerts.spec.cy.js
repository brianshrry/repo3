describe("demo qa", () => {
    beforeEach(() => {
        cy.intercept("GET", "https://demoqa.com/alerts").as("getAlerts"); // intercept get request
    });
    it("passes", () => {
        cy.visit("https://demoqa.com/alerts");
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents cypress from
            // failing the test
            return false
        })
        cy.get('#alertButton').then(($btn) => {
            if ($btn.hasClass("primary")) {
                cy.click();
            }
        });
        cy.get('#timerAlertButton').click();
        cy.get('#confirmButton').click();
        cy.wait('@getAlerts');
    });
});