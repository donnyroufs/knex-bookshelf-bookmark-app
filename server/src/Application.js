const express = require("express");
const apiRoutes = require("./api/routes");
const { knex } = require("./db/Knex");
const { errorHandler } = require("./lib/ErrorHandler");
const cors = require('cors');

const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const Auth = require("./lib/Auth");

class Application {
  constructor({ constants }) {
    this.app = express();
    this.constants = constants;
    this.db = knex;

    this.init();
  }

  async init() {
    const { port } = this.constants;
    this.setRoutes({ version: 1 });
    this.connectServices({ port });
  }

  connectServices({ port }) {
    this.db
      .raw("select 1+1 as result")
      .then(() => console.log(`Connected to database...`));

    this.app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  }
  setRoutes({ version }) {
    this.app.use(express.json());
    this.app.use(cors());
    this.setAuth();
    this.app.use(`/api/v${version}`, apiRoutes);
    this.app.use(errorHandler);
  }

  setAuth() {
    this.app.use(passport.initialize());

    passport.use(
      new JwtStrategy(Auth.config.options, (user, done) => done(null, user))
    );

    const fields = {
      usernameField: "email",
      passwordField: "password",
    };

    passport.use(new LocalStrategy(fields, Auth.authenticate));
  }
}

module.exports = Application;
