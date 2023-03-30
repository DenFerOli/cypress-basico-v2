/// <reference types="Cypress" />

const { lorem } = require("faker/lib/locales/cz");

// Intelisense e autocomplete

describe('', () => {

    // Pré condição
    beforeEach(() => {
        cy.visit('src/index.html');
    });

    // Aula 08

    it('Verificar titulo da aplicação', () => {
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    });

    //it é o test case

    it.only('Preencher os campos obrigatórios e envia o formulario', () => {

        var texto = "123 dwdw jejdw widiwdj iwsiwdwd idiwdiw dwdiwd"

        cy.get('#firstName').should('be.visible')
        cy.get('#firstName').type('Denis')
        cy.get('#lastName').type('Fernando')
        cy.get('#email').type('denis@mail.com')
        cy.get('#open-text-area').type(texto)
        cy.get('button[type="submit"]').click();

        cy.get('.success').should('be.visible');
    });

    // Adicionar um comando após ao outro chama-se encadear

    it('', () => {
        
    });

    //parei na aula 10
});
