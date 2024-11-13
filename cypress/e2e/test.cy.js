describe('Locators', () => {
    it('Validando_Localizadores', () => {
        cy.visit('https://www.demoblaze.com/index.html')

        //---------------Tarea-------------------------------------


        //***Seleccionamos todos los enlaces <div>
        cy.get('div')

        //***Seleccionamos por ID
        //cy.get('#navbar-example')
        cy.get('#example-video').should('not.be.visible')

        //***Seleccionamos por Clase 
        cy.get('.list-group-item')

        //***Seleccionamos por Atributo y valor 
        cy.get('[data-target="#exampleModal"]')

        //***Seleccionamos por Atributo y Tag name 
        cy.get('button[type="button"]')

        //***Seleccionamos por Hijos por Tag Name o atributos [hijo de <> con ID ]--revisar
        //cy.get('#signin2 > li')
        //cy.get('#product > div')

        //***Por tag name -->todos los <div> que son hijos de un <div> con la clase carousel-inner:
        cy.get('.carousel-inner > div')

        //***Por atributo -->todos los <a> que son hijos de un <div> con la clase list-group
        cy.get('.list-group > a')
        //cy.get('.list-group > ol')
        //cy.get('#itemc > li')
        //cy.get('.modal-content > button')

        //***Seleccionamos todos los elementos hermanos de un elemento, lograado con .siblings() 
        //cy.get('.card ~ div')
        //cy.get('#example-video ~ div')
        cy.get('h4 ~ p')
        //cy.get('#nava ~ a')
        //cy.get('.carousel-inner ~ div')

        cy.get('.carousel-inner').siblings()
        //.siblings() // Obtiene todos los hermanos
        //.first() // Selecciona el primer hermano
        //.click() // Hace click

        //***Seleccionamos elementos que comienza “inicio del valor de un atributo”
        cy.get('[id^="recipient-name"]').should('not.be.visible')
        cy.get('[id^="recipient-email"]').should('not.be.visible')

        //***Seleccionamos elementos que termina “final del valor de un atributo”
        cy.get('[id$="-email"]').should('not.be.visible')

        //***Seleccionamos elementos que NO tengan algún atributo
        cy.get(':not([disabled])')
        cy.get(':not([enable])')

        //***Buscar por texto
        cy.contains('Home').click()

        //***Buscar por texto y atributo
        //cy.contains('button[data-target="#logInModal"]', 'Log in').click()
        cy.contains('button[data-dismiss="modal"]', 'Close').should('not.be.visible')



        //---------------Por mejorar e nvestigar -------------------------------------

        cy.get('input') //--Me da Error

        //Home
        //cy.contains('Home').click()

        //Contact
        //cy.get(':nth-child(2) > .nav-link').click()

        //Abaut Us
        cy.get(':nth-child(3) > .nav-link').click()

        //Cerrar Video -- Aún no lo logro
        cy.get('#example-video')

        cy.get('.vjs-big-play-button').click()
        cy.get('#videoModal > div > div > div.modal-header > button').click()

        //Para hacer visible un elemento .should('not.be.visible')

        //cy.get('#videoModal > .modal-dialog > .modal-content > .modal-footer > .btn').contains('Close')
        //cy.get('#videoModal > .modal-dialog > .modal-content > .modal-header > .close > span')


        // PLay Video  -- Aún no lo logro


        //Cart
        //cy.get('#cartur').click()

        //Phones
        //Escoger un Celular
        //cy.contains('Phones').click()
        //cy.get(':nth-child(4) > .card > :nth-child(1) > .card-img-top').click()
        //cy.get('.col-sm-12 > .btn').click()

        //Cart
        //Consultar el carrito
        //cy.get('#cartur').click()

        //Orden de compra
        //cy.get('.col-lg-1 > .btn').click()

        //Cerrar formulario--No lo he logrado
        //cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary')


        //Laptops
        //cy.contains('Laptops').click()

        //Monitores
        //cy.contains('Monitors').click()

        //Cart
        //cy.contains('Cart').click()

        //Log in
        //cy.get('#login2').click()

        //Sing up
        //cy.get('#signin2').click()





    });


});