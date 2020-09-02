/**
 * @param {import('knex')} knex
 */

exports.up = function (knex) {
  return knex.schema.createTable("User", (table) => {
    table.increments().notNullable();
    table.string("email").notNullable().unique();
    table.string("password", 127).notNullable();
    table.timestamps(false, true);
  });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists("User");
};
