describe('Prueba Login con Comandos Personalizados', () => {

    it('Login con usuario 1', () => {
        
        cy.login('standard_user', 'secret_sauce')
        
    });
});

describe.only('Prueba Login con Fixture y Comandos Personalizados', () => {
    it('Login con datos de usuario desde fixture', () => {
        // Usar el comando personalizado para hacer login con usuario1
        cy.loginFixture('usuario1');
        
        // Verificar que el login fue exitoso
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    });

    it('Login con otro usuario desde fixture', () => {
        // Usar el comando personalizado para hacer login con usuario2
        cy.loginFixture('usuario2');
        
        // Verificar que el login fue exitoso
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    });
});
