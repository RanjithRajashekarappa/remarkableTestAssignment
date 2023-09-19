import { defineConfig } from 'cypress'

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      reporterEnabled: 'mochawesome',
      mochawesomeReporterOptions: {
        reportDir: 'cypress/screenshots',
        quiet: false,
        overwrite: false,
        html: false,
        json: true,
        embeddedScreenshots: true,
        inlineAssets: true
      }
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      sitUrl: '',
      devUrl: '',
      prodUrl: 'https://reMarkable.com',
      stage: 'prod',
      productName: 'reMarkable 2'
    },
    screenshotOnRunFailure: true,
    chromeWebSecurity: false,
    defaultCommandTimeout: 15000,
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js'
  }
})
