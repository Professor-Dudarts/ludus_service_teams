const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1200,
    viewportHeight: 800,
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    baseUrl: "http://127.0.0.1:8100/api",
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
