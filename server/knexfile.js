require("dotenv").config();

module.exports = {
  production: {
    client: process.env.DB_CLIENT,
    connection: {
      database: process.env.POSTGRES_DB,
      user: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./src/db/migrations",
    },
  },
};
