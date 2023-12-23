describe("demo qa 1", () => {
    beforeEach(() => {
        cy.intercept("GET", "https://demoqa.com/frames").as("getAlerts"); // intercept get request
    });
    it("passes", () => {
        cy.visit("https://demoqa.com/frames");
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents cypress from
            // failing the test
            return false
        });
        // testing that certain frames exist
        cy.get('.row').should('exist');
        cy.get('#framesWrapper > :nth-child(1)').should('exist');
        cy.get('#frame1').should('exist');
        // testing left panel dropdown menus
        cy.get('.left-pannel').should('exist');
        // elements dropdown
        cy.get(':nth-child(1) > .group-header > .header-wrapper > .header-right > .icon > svg').click();
        cy.get(':nth-child(1) > .group-header > .header-wrapper > .header-right > .icon > svg').click();
        // forms dropdown
        cy.get(':nth-child(2) > .group-header > .header-wrapper > .header-right > .icon > svg').click();
        cy.get(':nth-child(2) > .group-header > .header-wrapper > .header-right > .icon > svg').click();
        // alerts, frames, & windows dropdown
        cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-right > .icon > svg').click();
        cy.get(':nth-child(3) > .group-header > .header-wrapper > .header-right > .icon > svg').click();
        // widgets dropdown
        cy.get(':nth-child(4) > .group-header > .header-wrapper > .header-right > .icon > svg').click();
        cy.get(':nth-child(4) > .group-header > .header-wrapper > .header-right > .icon > svg').click();
        // interactions dropdown
        cy.get(':nth-child(5) > .group-header > .header-wrapper > .header-right > .icon > svg').click();
        cy.get(':nth-child(5) > .group-header > .header-wrapper > .header-right > .icon > svg').click();
        // book store application dropdown
        cy.get(':nth-child(6) > .group-header > .header-wrapper > .header-right > .icon > svg').click();
        cy.get(':nth-child(6) > .group-header > .header-wrapper > .header-right > .icon > svg').click();
    });
});