/**
 * @param {import('knex')} knex
 */

exports.up = function (knex) {
  return knex.schema.table("Category", (table) => {
    table.string("name").notNullable().unique().alter();
  });
};

exports.down = function (knex) {
  return knex.schema.table("Category", (table) => {
    table.string("name").alter();
  });
};
