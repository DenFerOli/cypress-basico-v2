/// <reference types="Cypress" />
// Intelisense

describe('', () => {
    beforeEach(() => {
        cy.visit('src/index.html');
    });

    // Aula 01

    it('Verificar titulo da aplicação', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    });

    //it é o test case

    // .should()

    // Aula 02

    it('Preencher os campos obrigatórios', () => {
        cy.get('#firstName').should('be.visible')
        cy.get('#firstName').type('Denis')
        cy.get('#firstName').type('Fernando')
        cy.get('#email').type('denis@mail.com')
        cy.get('#open-text-area').type('123 Testando som 123')
        cy.get('button[type="submit"]').click()
    });

    // Adicionar um comando após ao outro chama-se encadear
    // Aula 03

    it('', () => {
        
    });

});