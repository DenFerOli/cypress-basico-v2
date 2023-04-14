describe('testa a pagina da politica de privacidade de forma independente', () => {
    beforeEach(() => {
        cy.visit('src/privacy.html');
    });

    it('testa a pagina da politica de privacidade de forma independente', () => {
        cy.contains('Talking About Testing').should('be.visible')
    });
});