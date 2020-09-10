require("dotenv/config");

const Application = require("./src/Application");

const app = new Application({
  constants: {
    port: process.env.PORT || 5000,
    authSecret: process.env.AUTH_SECRET,
  },
});

module.exports = app;
