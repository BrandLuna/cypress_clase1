// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// cypress/support/commands.js


Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/v1/index.html'); 
    cy.get('#user-name').type(username);                 
    cy.get('#password').type(password);                  
    cy.get('.btn_action').click();                       
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
});



// cypress/support/commands.js

Cypress.Commands.add('loginFixture', (usuarioKey) => {
    // Cargar el fixture solo una vez
    cy.fixture('usuarios').then((usuarios) => {
        const usuario = usuarios[usuarioKey]; // Accede al usuario por clave (usuario1, usuario2, etc.)
        
        // Realizar el login con el usuario
        cy.visit('https://www.saucedemo.com/v1/index.html');
        cy.get('#user-name').type(usuario.username);
        cy.get('#password').type(usuario.password);
        cy.get('.btn_action').click();
    });
});












Cypress.Commands.add('visitInSameTab', (url) => {
    cy.on('window:before:load', (win) =>{
        cy.stub(win, 'open').as('windowOpen').callsFake(() => 
            cy.visit(url))
    })
})

Cypress.Commands.add('nuevaVentanaPrueba', () => {
    cy.on('window:before:load', (win) => {
        // Intercepta `window.open` para capturar la URL del pop-up
        cy.stub(win, 'open').callsFake((url) => {
            cy.wrap(url).as('popupUrl'); // Guarda la URL del pop-up como alias
        });
    });
});


