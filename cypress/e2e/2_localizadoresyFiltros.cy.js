describe('Filtros para encontrar Localizadores', () => {
  it('validando filtros para encontrar Localizadores', () => {
    cy.visit('https://letcode.in/buttons')
    cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });

    //Encontrar un boton que este Habilitado
    cy.get('.control > #isDisabled:enabled')
    //Encontrar un boton que este DesHabilitado
    cy.get('.control > #isDisabled:disabled')

    //Encontrar visibles suele pasar que hayan elementos no visibles que tengan el mismo nombre o atributo
    cy.visit('https://letcode.in/dropdowns')
    //cy.intercept({ resourceType: /xhr|fetch/ }, {log: false});
    cy.get('#fruits > option:nth-child(2):not(:visible)')  //:not(:visible) 
    //cy.get('#fruits > option:nth-child(2):visible')


    cy.get('#fruits:visible')
    cy.get('#fruits option:selected')

    cy.visit('https://letcode.in/radio')
    //cy.intercept({ resourceType: /xhr|fetch/ }, {log: false});
    //Encontrar CheckBox que esté seleccionado
    cy.get('[type="checkbox"]:checked')
    cy.get('[type="checkbox"]:not(:checked)')

    //Encontrar empty para decirle que está vacio es decir que no tenga ningun contenido ni hijos
    cy.get('input[type="checkbox"]:empty')
    cy.get('label.checkbox:not(:empty)')
    cy.get('div.field:not(:empty')


    // Seleccionar el primer checkbox y hacer clic
    cy.get('input[type="checkbox"]').eq(0).click()

    // Seleccionar el segundo checkbox y hacer clic
    cy.get('input[type="checkbox"]').eq(1).check()
    cy.get('input[type="checkbox"]').eq(1).uncheck()

    // Seleccionar el primer checkbox y hacer clic
    cy.get('input[type="checkbox"]').first().click()

    // Seleccionar el siguiente checkbox (segundo) y hacer clic Solo funciona con Hermanos del elemento seleccionado
    //cy.get('input[type="checkbox"]').first().next().click()

    //Usando el nth-child para encontrar una posicion en la misma jerarquia
    //Forma incorrecta
    cy.get('input[type="checkbox"]:nth-child(1)')
    //Forma correcta ya que encontramos la posicion 6
    cy.get('.field:nth-child(6) > .checkbox > input')


    // Hace clic en el checkbox dentro del label que contiene "Remember me"
    cy.get('label.checkbox').contains('Remember me'); // Selecciona el checkbox relacionado con el label
    cy.contains('label', 'Remember me').find('input[type="checkbox"]').click();
    cy.contains('Remember me').click(); // Hace clic en el label, seleccionando el checkbox
  })
})

describe.only('Adicionales para Localizadores', () => {
  it('validando Adicionales para Localizadores', () => {
    cy.visit('https://www.demoblaze.com/index.html')
    //fist - last
    cy.get("#tbodyid > div").first()
    cy.get("#tbodyid > div").last()

    //next
    cy.get("#tbodyid > div").first().next(":contains('Nokia')")

    cy.get('#tbodyid > div').first().next()
    cy.get('#tbodyid > div').first().next().next()
    cy.get('#tbodyid > div:nth-child(1)').next()

    cy.get('#tbodyid > div:nth-child(5)').next(':contains("Sony")')
    cy.get("#tbodyid > div").next(':contains("Sony")')
    cy.get('#tbodyid > div:contains("Sony")').next(':contains("Sony")')

    //nextAll
    cy.get("#tbodyid > div").first().nextAll()
    cy.get("#tbodyid > div:nth-child(6)").nextAll(":contains('Sony')")
    cy.get("#tbodyid > div").nextAll(":contains('Sony')")

    //nextUntil
    cy.get("#tbodyid > div").first().nextUntil(":contains('Sony')")
    cy.get("#tbodyid > div:nth-child(7)").nextUntil(":contains('Sony vaio i7')")
    cy.get("#tbodyid > div:nth-child(7)").nextUntil("#tbodyid > div:nth-child(9)")



    //parent
    cy.contains('Samsung galaxy s6').parent()
    cy.contains('Samsung galaxy s6').parent().parent()
    cy.contains('Samsung galaxy s6').parents()

    //parents
    cy.contains('Samsung galaxy s6').parentsUntil('div.col-lg-4')

    //children
    cy.get("#tbodyid").children()
    cy.get("#tbodyid").children(":contains('Sony vaio i7')")

    //siblings
    cy.contains('Samsung galaxy s6').parents('div.col-lg-4').siblings()
    cy.contains('Samsung galaxy s6').parents('div.col-lg-4').siblings(":contains('Sony vaio i7')")
    cy.get("#tbodyid > div:nth-child(7)").siblings(":contains('Sony vaio')")//sus h

    //each
    cy.get('#tbodyid > div').each(($element) => {
      cy.log($element.text())
    });

    //find
    cy.get('#tbodyid > div').find(("h4"))

    //not
    cy.get('#tbodyid > div').not(":contains('Sony vaio i7')")


  })
})