
Cypress._.times(5, () => {
    it('Teste lodash', () => {
        cy.visit('src/privacy.html');
        cy.contains('Talking About Testing').should('be.visible')
    });
})