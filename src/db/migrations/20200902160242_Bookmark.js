const { references } = require("../utils");
/**
 * @param {import('knex')} knex
 */

exports.up = function (knex) {
  return knex.schema.createTable("Bookmark", (table) => {
    table.increments().notNullable();
    table.string("title");
    table.string("url");
    table.timestamps(false, true);

    references(table, "User", true, "user");
    references(table, "Category", true, "category");
  });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists("Bookmark");
};
