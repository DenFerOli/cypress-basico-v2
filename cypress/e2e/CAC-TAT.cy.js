describe('', () => {
    beforeEach(() => {
        cy.visit('src/index.html');
    });

    // Aula 01

    it('Verificar titulo da aplicação', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    });

    // .should()

    // Aula 02

    it('Preencher os campos obrigatórios', () => {
        
    });

});