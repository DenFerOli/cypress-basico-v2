/// <reference types="Cypress" />




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

    it('exibe mensagem de erro quando telefone se torna obrigatório mas não é preenchido antes do envio do formulario', () => {
        cy.get('#firstName').type('Denis');
        cy.get('#lastName').type('Fernando');
        cy.get('#email').type('denis@email.com');
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('dqdq dqdwqdqwd dqwdqdq');
        cy.get('button[type="submit"]').click();
        cy.get('.error').should('be.visible');
    });

    it('Preenche e limpa os campos nome, sobrenome, email e telefone', () => {
        cy.get('#firstName').type('Denis').should('have.value', 'Denis');
        cy.get('#lastName').type('Fernando').should('have.value', 'Fernando');
        cy.get('#email').type('denis@email.com').should('have.value', 'denis@email.com');
        cy.get('#phone-checkbox').check();
        cy.get('#phone').type('4399998888').should('have.value', '4399998888')

        cy.get('#firstName').clear().should('have.value', '');
        cy.get('#lastName').clear().should('have.value', '');
        cy.get('#email').clear().should('have.value', '');
        cy.get('#phone-checkbox').check();
        cy.get('#phone').clear().should('have.value', '');  

    });

    // Verificar se a mensagem de erro aparece

    it('Exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', () => {
        cy.get('button[type="submit"]').click();
        cy.get('.error').should('be.visible');
    });

    // Comandos customizados

    it('Comandos customizados', () => {
        cy.fillMandatoryFieldsAndSubmit()
    });

    // cy.contains
    it('alterar o button para o cy.contains', () => {
        cy.get('#firstName').type('Denis');
        cy.get('#lastName').type('Fernando');
        cy.get('#email').type('denis@email.com');
        cy.contains('button', 'Enviar').click()
    });
    
    // cy.('select').select()

    it('Selecionar checkboxes', () => {

        cy.get('select')
        .select('YouTube')
        .should('have.value', 'youtube');
        cy.get('select')
        .select('Blog')
        .should('have.value', 'blog'); // seleciona pelo texto do select - Atenção para maiusculo
        cy.get('select')
        .select('youtube')
        .should('have.value', 'youtube'); // seleciona pelo value do select
        cy.get('select')
        .select(3)
        .should('have.value', 'mentoria'); // seleciona pela posição do array
    });

    // Opções de seleão suspensa

    it('Seleciona um produto (Mentoria) por seu valor (value)', () => {
        cy.get('#product')
        .select('mentoria')
        .should('have.value', 'mentoria')
    });

    it('seleciona um produto (Blog) por seu indice', () => {
        cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
    });

    it('marca o tipo de atendimento "Feedback"', () => {
        cy.get('input[type="radio"][value="feedback"]')
        .check()
        .should('have.value', 'feedback')
    });

    it('marca cada tipo de atendimento', () => {
        cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(($radio) => {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
    });

    it('marca ambos checkboxes, depois desmarca o ultimo', () => {
        cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')
    });

    it('exibe mensagem de erro quando telefone se torna obrigatório mas não é preenchido antes do envio do formulario', () => {
        cy.get('#firstName').type('Denis');
        cy.get('#lastName').type('Fernando');
        cy.get('#email').type('denis@email.com');
        cy.get('#phone-checkbox').check()
        cy.get('#open-text-area').type('dqdq dqdwqdqwd dqwdqdq');
        cy.get('button[type="submit"]').click();
        cy.get('.error').should('be.visible');
    });

    // Fazendo upload de arquivos

    it('seleciona um arquivo da pasta fixtures', () => {
        cy.get('input[type="file"]#file-upload')
        .should('not.have.value')
        .selectFile('cypress/fixtures/example.json')
        .should(($input) => {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    });

    // simulando drag and drop

    it('seleciona um arquivo simulando um drag-and0drop', () => {
        cy.get('input[type="file"]#file-upload')
        .should('not.have.value')
        .selectFile('cypress/fixtures/example.json', {action: 'drag-drop'})
        .should(($input) => {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    });

    it('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', () => {
        cy.fixture('example.json').as('sampleFile')
        cy.get('input[type="file"]')
        .selectFile('@sampleFile')
        .should(($input) => {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    });

    // Abrir outras abas no navegador

    it('verifica que a politica de privacidade abre em outra aba sem a necessidade de um clique', () => {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    });

    it('acessa a pagina da politica de privacidade removendo o target e então clicando no link', () => {
        cy.get('#privacy a')
        .invoke('removeAttr', 'target')
        .click()

        cy.contains('Talking About Testing').should('be.visible')
    });

    // 36 - Simular o viewport de um dispositivo movel

    //"cy:open:mobile": "cypress open --config viewportWidth=410 viewportHeight=860",

    //-----------------------------------------------------------------------------------------------------

    // 39 Documentação do projeto

    // arquivo documentacaoProj.md

    //-----------------------------------------------------------------------------------------------------
    
    // 41, 42, 43, 44- Integração continua

    // desgraça

    //---------------------------------------------------------------------------------------------------

    //46 - .clock() e .tick()
    // clock congela o relogio do navegador
    // tick avança no tempo do relogio do navegador
    
    it('Exibe a mensagem por 3 segundos', () => {
        var texto = "123 dwdw jejdw widiwdj iwsiwdwd idiwdiw dwdiwd"
        cy.clock() // congela
        

        cy.get('#firstName').should('be.visible')
        cy.get('#firstName').type('Denis')
        cy.get('#lastName').type('Fernando')
        cy.get('#email').type('denis@mail.com')
        cy.get('#open-text-area').type(texto)
        cy.get('button[type="submit"]').click();

        cy.get('.success').should('be.visible');

        cy.tick(3000)
        cy.get('.success').should('not.be.visible');
    });

    // 47, 48- Lodash
    // Lodash é um biblioteca do javascript

    Cypress._.times(5, () => {
        it('teste lodash 5 x', () => {
            cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
        });
        
    })

    // 49, 50 - Invoke() - show e hide

    it('Exibe e esconde as mensagens de erro e sucesso usando invoke', () => {
        cy.get('.success')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Mensagem enviada com sucesso.')
        .invoke('hide')
        .should('not.be.visible')
        cy.get('.error')
        .should('not.be.visible')
        .invoke('show')
        .should('be.visible')
        .and('contain', 'Valide os campos obrigatórios!')
        .invoke('hide')
        .should('not.be.visible')
    });
    
    // 51, 52 - Invoke(val)

    it('preenche a area de texto usando o comando invoke', () => {
        const longText2 = Cypress._.repeat('0123456789', 20)
        cy.get('#open-text-area')
        .invoke('val', longText2)
        .should('have.value', longText2)
    });

    // 53, 54 - .request()

    it('Faz uma requisição http', () => {
        cy.request('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
        .should((response) => {
            const { status, statusText, body } = response
            expect(status).to.equal(200)
            expect(statusText).to.equal('OK')
            expect(body).to.include('CAC TAT')
        })
    });

    //parei na aula 38 --------------------------------------------------------------------

});
