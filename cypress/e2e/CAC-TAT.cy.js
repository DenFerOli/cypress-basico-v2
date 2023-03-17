describe('', () => {
    beforeEach(() => {
        cy.visit('src/index.html');
    });

    // Aula

    it('Verificar titulo da aplicação', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    });

    // Aula
    // .should()

});