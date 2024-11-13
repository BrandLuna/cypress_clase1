describe('ACCIONES Y ASERCIONES', () => {
    beforeEach(() => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.visit('https://letcode.in/test')
    });

    it('Validando Acciones y Aserciones', () => {
        cy.contains('Edit').click()
        cy.url().should('include', '/edit')  //Asercion parcial de url
        cy.url().should('eq', 'https://letcode.in/edit') //Asercion exactamente igual a la url

        cy.get('.control').should('have.length', 6)
        cy.get('#fullName').should('have.id', 'fullName')
        cy.get('#fullName').should('have.attr', 'placeholder', 'Enter first & last name')
        cy.go('back')

        cy.contains('All in One').click()
        cy.url().should('include', '/forms')
        cy.log('Validando el input de FistName')
        cy.get('#firstname').should('exist')
        cy.get('#firstname').should('be.enabled')
        cy.get('#firstname').should('be.visible')
        cy.get('#firstname').type('Juan').should('have.value', 'Juan')
        cy.get("#lasttname").type("prueba");
        cy.log('Ingresando el valor de Email')
        cy.get('#email').clear().type('JuanPerez@qateamperu.com')
        cy.get(':nth-child(2) > :nth-child(2) > .field > .control > .select > select').as('CodigoPais')
        cy.get('@CodigoPais').select('51').should('have.value', '51')
        cy.get('#Phno').type("998371838");
        cy.get('#Addl1').type("address 1 ejemplo");
        cy.get('#Addl2').type("address 2 ejemplo");
         cy.get('#postalcode').type("2628")
        cy.get(':nth-child(2) > :nth-child(2) > .field > .control > .select > select').find('option:selected').should('have.text', 'Peru (+51)')
        cy.get('#male').should('be.not.checked')
        cy.get('#male').check().should('be.checked')
        cy.get('#Date').type('2024-11-06')
        cy.get('.checkbox > input').check();
        cy.get('.control > .button').click();
    });
 
});
