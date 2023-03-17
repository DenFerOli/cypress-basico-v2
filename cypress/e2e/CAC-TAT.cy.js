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
        cy.get('#firstName').type('Denis')
        cy.get('#firstName').type('Fernando')
        cy.get('#email').type('denis@mail.com')
        cy.get('#open-text-area').type('123 Testando som 123')
        
    });

});