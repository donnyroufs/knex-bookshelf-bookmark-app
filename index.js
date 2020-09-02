require("dotenv/config");

const Application = require("./src/Application");

const app = new Application({
  constants: {
    port: process.env.PORT || 5000,
  },
});

app.init();

module.exports = app;
