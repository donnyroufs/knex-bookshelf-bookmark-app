const express = require("express");
const apiRoutes = require("./api/routes");
const knex = require("./db/Knex");

class Application {
  constructor({ constants }) {
    this.app = express();
    this.constants = constants;
    this.db = knex;
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
    this.app.use(`/api/v${version}`, apiRoutes);
  }
}

module.exports = Application;
