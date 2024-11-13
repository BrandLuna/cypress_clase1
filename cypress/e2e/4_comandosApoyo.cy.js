describe('COMANDOS DE APOYO', () => {
    it('Ejemplo', () => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });

        //viewport
        //cy.viewport('iphone-x', 'landscape')
        //cy.viewport(1920, 1080)
        cy.visit('https://letcode.in/test')
        //cy.viewport('ipad-2', 'portrait')  //landscape-horizontal portrait-vertical

        cy.contains('All in One').click()

        //title
        cy.title().should('eq', 'LetCode - Testing Hub');

        //reload
        cy.reload()

        //wait
        //cy.wait(10000)

        //Alias
        cy.get('form > div[class="columns container"] > div > div > div > input').as('InputFormulario')
        cy.get('@InputFormulario').eq(0)
        cy.get('@InputFormulario').eq(1)
        //cy.scrollTo(0, '100%')
        cy.get('form > div[class="columns container"] > div[class="column is-half"]').as('FormularioLetCode')
        cy.get('@FormularioLetCode').eq(0).find('input')

        //scrollIntoView
        //cy.get('#email').scrollIntoView()

        //cy.scrollTo()
        //cy.scrollTo(0, '50%')  //top - bottom - (500-1000) - (0, '50%')

        //cy.screenshot()
        //cy.get('#email').screenshot('Formulario Vacio')
        //cy.screenshot('Formulario Vacio')        
        //cy.screenshot('pagina-completa', { capture: 'fullPage' });
    });


    it('Verificar que el botón abra una nueva pestaña', () => {
        cy.visit('https://qaplayground.dev/apps/new-tab/')

        //invoke()
        cy.get('#open').invoke('removeAttr', 'target').click()
        cy.get('div > h1').should('have.text', 'Welcome to the new page!')

        //go
        //cy.go('back')  //go(-1)
        //cy.go('forward')  //go(1)
    });

});

describe.only('CARGA Y DESCARGA DE ARCHIVOS', () => {
    it("AGREGAR ARCHIVO", () => {
        cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
        cy.visit("https://qaplayground.dev/apps/upload/")
        cy.get('.btn-green-outline').selectFile("C:/Users/Brand/OneDrive/Desktop/22.png")
        cy.wait(2000);
    });
    it('DESCARGAR ARCHIVO', () => {
        cy.visit('https://qaplayground.dev/apps/download/');
        cy.get('#file').click();

        const filePath = 'cypress/downloads/sample.pdf';
        // Verificar que el archivo existe y tiene contenido
        cy.readFile(filePath, { timeout: 10000 }).should('exist');
    });
});
