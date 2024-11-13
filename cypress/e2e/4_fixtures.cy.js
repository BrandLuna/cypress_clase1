
describe('Prueba Login con Fixture usando as', () => {
  before(() => {
    // Carga los datos del fixture antes de cada prueba
    cy.fixture('usuarios').as('usuariosData');
  });

  it('Prueba Login con Fixture usando as', function () {
    // Usa los datos cargados del fixture
    cy.visit('https://www.saucedemo.com/v1/index.html');

    // Accede a los datos del usuario desde el fixture
    cy.get('#user-name').type(this.usuariosData.usuario1.username);
    cy.get('#password').type(this.usuariosData.usuario1.password);
    cy.get('.btn_action').click();

    // Verificación de la URL después del login
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    cy.go('back');
  });
});
describe('Prueba Login con todos los usuarios usando as', () => {
  before(() => {
    // Carga los datos del fixture antes de cada prueba
    cy.fixture('usuarios').as('usuariosData');
  });

  it('Login con todos los usuarios', function () {
    // Itera sobre cada usuario en el fixture
    Object.values(this.usuariosData).forEach((usuario) => {
      // Visita la página de login antes de cada intento de login
      cy.visit('https://www.saucedemo.com/v1/index.html');
      
      // Usa los datos de cada usuario en la prueba
      cy.get('#user-name').type(usuario.username);
      cy.get('#password').type(usuario.password);
      cy.get('.btn_action').click();

      // Verificación de la URL después del login
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
      cy.go('back'); // Regresa a la página de login para el siguiente usuario
    });
  });
});



describe('Prueba Login con Fixture usando then', () => {
  before(function () {
    // Cargar el fixture antes de cada prueba
    cy.fixture('usuarios').then((user) => {
      this.user = user;
    });
  });

  it('Login con datos de usuario desde fixture', function () {
    cy.visit('https://www.saucedemo.com/v1/index.html');

    // Usar los datos de fixture
    cy.get('#user-name').type(this.user.usuario1.username);
    cy.get('#password').type(this.user.usuario1.password);
    cy.get('.btn_action').click();
    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
  });
});

describe('Prueba Login con Fixture usando then', () => {
  before(function () {
    // Cargar el fixture antes de cada prueba y asignarlo a `usuarios`
    cy.fixture('usuarios').then((usuarios) => {
      this.usuarios = usuarios;
    });
  });

  it('Login con todos los usuarios desde fixture', function () {
    // Itera sobre cada usuario en el fixture
    Object.values(this.usuarios).forEach((usuario) => {
      // Usa `then` en cada iteración para manejar las promesas de Cypress
      cy.visit('https://www.saucedemo.com/v1/index.html').then(() => {
        // Usar los datos de cada usuario en la prueba
        cy.get('#user-name').type(usuario.username);
        cy.get('#password').type(usuario.password);
        cy.get('.btn_action').click();

        // Verificación de la URL después del login
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
        cy.go('back'); // Regresa a la página de login para el siguiente usuario
      });
    });
  });
});



//npm install cypress-csv --save-dev
//require('cypress-csv')


//Con Fixture sin llaves
describe('Login un usuario con JSON fixture', () => {
  beforeEach(() => {
    // Cargar los usuarios del fixture
    cy.fixture('usuarios2.json').as('usuarios');
  });

  it('Login un usuario con JSON fixture', function () {
    const usuario = this.usuarios[0]; // Usando el primer usuario

    cy.visit('https://www.saucedemo.com/v1/index.html');
    cy.get('#user-name').type(usuario.username);
    cy.get('#password').type(usuario.password);
    cy.get('.btn_action').click();

    cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
  });
});


describe('Login todos los usuarios con JSON fixture', () => {
  beforeEach(() => {
    // Cargar el fixture con todos los usuarios
    cy.fixture('usuarios2.json').as('usuarios');
    cy.visit('https://www.saucedemo.com/v1/index.html');
  });

  it('Login todos los usuarios con JSON fixture', function () {
    // Iterar sobre cada usuario en el fixture
    this.usuarios.forEach((usuario) => {
      cy.log(`Logging in with username: ${usuario.username}`);

      // Realizar login
      cy.get('#user-name').clear().type(usuario.username);
      cy.get('#password').clear().type(usuario.password);
      cy.get('.btn_action').click();

      // Verificar que se haya cargado la página de inventario
      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
      cy.get('.bm-burger-button').click();
      cy.get('#logout_sidebar_link').click();
      cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');

    });
  });
});







describe('Login un usuario con TXT fixture', () => {
  beforeEach(() => {
    // Cargar el archivo TXT como fixture y obtener el primer usuario
    cy.fixture('usuarios.txt').then((data) => {
      // Convertir el archivo TXT en líneas
      const lines = data.trim().split('\n');
      // Tomar solo la primera línea y dividirla en username y password
      const [username, password] = lines[0].split(',');
      // Guardar el usuario como alias
      cy.wrap({ username: username.trim(), password: password.trim() }).as('usuario');
    });
  });

  it('Login un usuario con TXT fixture', function () {
    // Acceder al alias del usuario
    cy.get('@usuario').then((usuario) => {
      cy.visit('https://www.saucedemo.com/v1/index.html');
      cy.get('#user-name').type(usuario.username);
      cy.get('#password').type(usuario.password);
      cy.get('.btn_action').click();

      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    });
  });
});

describe('Login con todos los usuarios con TXT fixture', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
  });

  it('Login con todos los usuarios con TXT fixture', () => {
    // Cargar el archivo txt como fixture
    cy.fixture('usuarios.txt').then((data) => {
      // Convertir cada línea del archivo en un objeto usuario
      const usuarios = data.split('\n').map((line) => {
        const [username, password] = line.split(',');
        return { username: username.trim(), password: password.trim() };
      });

      // Iterar sobre cada usuario
      usuarios.forEach((usuario) => {
        cy.log(`Logging in with username: ${usuario.username}`);

        // Realizar login
        cy.get('#user-name').clear().type(usuario.username);
        cy.get('#password').clear().type(usuario.password);
        cy.get('.btn_action').click();

        // Verificar que se haya cargado la página de inventario
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');

        // Opcional: cerrar sesión antes de pasar al siguiente usuario
        cy.get('.bm-burger-button').click();
        cy.get('#logout_sidebar_link').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');
      });
    });
  });
});














describe('Login un usuario con CSV fixture', () => {
  beforeEach(() => {
    // Cargar el archivo CSV como fixture y obtener el primer usuario
    cy.fixture('usuarios.csv').then((data) => {
      // Convertir el archivo CSV en líneas y quitar la primera (encabezado)
      const lines = data.trim().split('\n').slice(1);
      // Tomar solo el primer usuario y dividirlo en username y password
      const [username, password] = lines[2].split(',');
      // Guardar el usuario como alias
      cy.wrap({ username: username.trim(), password: password.trim() }).as('usuario');
    });
  });

  it('Login un usuario con CSV fixture', function () {
    // Acceder al alias del usuario
    cy.get('@usuario').then((usuario) => {
      cy.visit('https://www.saucedemo.com/v1/index.html');
      cy.get('#user-name').type(usuario.username);
      cy.get('#password').type(usuario.password);
      cy.get('.btn_action').click();

      cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');
    });
  });
});

describe('Login con todos los usuarios con CSV fixture', () => {
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
  });

  it('Login con todos los usuarios con CSV fixture', () => {
    // Cargar el archivo CSV como fixture
    cy.fixture('usuarios.csv').then((data) => {
      // Dividir el contenido en líneas y quitar la primera línea (encabezado)
      const lines = data.trim().split('\n').slice(1);
      // Convertir cada línea en un objeto usuario
      const usuarios = lines.map((line) => {
        const [username, password] = line.split(',');
        return { username: username.trim(), password: password.trim() };
      });

      // Iterar sobre cada usuario
      usuarios.forEach((usuario) => {
        cy.log(`Logging in with username: ${usuario.username}`);
        // Realizar login
        cy.get('#user-name').clear().type(usuario.username);
        cy.get('#password').clear().type(usuario.password);
        cy.get('.btn_action').click();
        // Verificar que se haya cargado la página de inventario
        cy.url().should('eq', 'https://www.saucedemo.com/v1/inventory.html');

        cy.get('.bm-burger-button').click();
        cy.get('#logout_sidebar_link').click();
        cy.url().should('eq', 'https://www.saucedemo.com/v1/index.html');
      });
    });
  });
});




