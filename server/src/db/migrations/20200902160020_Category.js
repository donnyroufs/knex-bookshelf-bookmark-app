/**
 * @param {import('knex')} knex
 */

exports.up = function (knex) {
  return knex.schema.createTable("Category", (table) => {
    table.increments().notNullable();
    table.string("name");
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("Category");
};
