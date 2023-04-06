Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    cy.get('#firstName').type('Denis');
    cy.get('#lastName').type('Fernando');
    cy.get('#email').type('denis@email.com');
    cy.contains('button', 'Enviar').click()
})