const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1280, // Ancho del viewport
    viewportHeight: 720, // Alto del viewport
    screenshotsFolder: 'cypress/screenshots',
    downloadsFolder: "cypress/downloads/test",

    setupNodeEvents(on, config) {

      // implement node event listeners here
    },
  },
});


