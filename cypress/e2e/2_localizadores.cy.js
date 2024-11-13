describe('Locators', () => {

    it('Validando_Localizadores', () => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.visit('https://www.saucedemo.com/v1/index.html')
        // Lozalizar por tagname
        cy.get('input')
        // Localizar por id #
        cy.get('#user-name')
        // Localizar por clase (class) .
        cy.get('.btn_action')
        // Localizar por Atributo(attribute)
        cy.get('[placeholder="Password"]')

        //Combinar Localizadores
        cy.get('.btn_action[value="LOGIN"]')
        // Buscar Hijos por tagname y atributos
        cy.get('form > .btn_action[value="LOGIN"]')
        //Todos los elementos que son hermanos de un elemento ~
        cy.get('input~input')
        // Elemento con id que comienza con "user- 
        cy.get('[id^=user]')
        // Elemento con id que termina con "-name 
        cy.get('[id$=name]')
        // Elemento con id que comienza con "user-" y termina con "-name 
        cy.get('[id^=user-][id$=e]')
        //Todos los elementos que NO tengan algun [atributo].
        cy.get('input:not(.btn_action)')
        cy.get('input')
        //Instalar Plugin Xpath
        //npm install -D cypress-xpath
        cy.xpath('//*[@id="login-button"]')
    });
    it('Locators_por_texto', () => {
        cy.visit('https://www.saucedemo.com/v1/inventory.html')
        cy.contains('.inventory_item_name', 'Sauce Labs Backpack')
        cy.get('[class="btn_primary btn_inventory"]').contains('ADD TO CART')
    });
});




