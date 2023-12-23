describe('Alerts', () => {
    it.skip('Alert', () => {
    cy.visit('https://demoqa.com/alerts')
         //cy.get('#alertButton').click();
    cy.clickbutton('#alertButton')
    cy.on('window:alert',(t)=> {
    expect(t).to.contains('You clicked a button')
        })
    })
})