const config = require("../../knexfile");
const knex = require("knex")(config[process.env.NODE_ENV]);
const bookshelf = require("bookshelf")(knex);

module.exports = { bookshelf, knex };
