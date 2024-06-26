const { defineConfig } = require('cypress');

module.exports = defineConfig({
    projectId: "95motk", // Correct location for the projectId
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
            // Implement node event listeners here
        },
        supportFile: false // Set supportFile to false if not using it
    }
});

