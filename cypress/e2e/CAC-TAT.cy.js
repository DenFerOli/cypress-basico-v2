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

    it('Preencher os campos obrigatórios e envia o formulario', () => {

        var texto = "123 dwdw jejdw widiwdj iwsiwdwd idiwdiw dwdiwd"

        cy.get('#firstName').should('be.visible')
        cy.get('#firstName').type('Denis')
        cy.get('#lastName').type('Fernando')
        cy.get('#email').type('denis@mail.com')
        cy.get('#open-text-area').type(texto, {delay: 100})
        cy.get('button[type="submit"]').click();

        cy.get('.success').should('be.visible');
    });

    // Adicionar um comando após ao outro chama-se encadear

    it('Exibe mensagem de erro ao submeter o formulario com um email com formatação inválida', () => {
        var texto = "123 dwdw jejdw widiwdj iwsiwdwd idiwdiw dwdiwd"

        cy.get('#firstName').should('be.visible')
        cy.get('#firstName').type('Denis')
        cy.get('#lastName').type('Fernando')
        cy.get('#email').type('denismail.com')
        cy.get('#open-text-area').type(texto, {delay: 0})
        cy.get('button[type="submit"]').click();
        cy.get('.error').should('be.visible');

    });


    it('campo telefone continua vazio quando preenchido com valor não numérico', () => {
        cy.get('#phone')
        .type('abdefewfw')
        .should('have.value', '');
    });

    it.only('exibe mensagem de erro quando telefone se torna obrigatório mas não é preenchido antes do envio do formulario', () => {
        cy.get('#firstName').type('Denis');
        cy.get('#lastName').type('Fernando');
        cy.get('#email').type('denis@email.com');
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('dqdq dqdwqdqwd dqwdqdq');
        cy.get('button[type="submit"]').click();
        cy.get('.error').should('be.visible');
    });

    //parei na aula 14
});
