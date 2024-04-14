
const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: "http://localhost:3000",
        viewportWidth: 1280,
        viewportHeight: 720,
        defaultCommandTimeout: 5000,
        reporter: "spec",
        reporterOptions: {
            output: "stdout"
        },
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        supportFile: false, // Set supportFile to false
        projectId: "4767717c-0df6-497c-921b-09db1937980" // Add your project id here
    }
});

