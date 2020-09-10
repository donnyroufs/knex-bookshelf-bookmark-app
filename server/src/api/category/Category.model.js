const { bookshelf } = require("../../db/Knex");

const CategoryModel = bookshelf.model("Category", {
  tableName: "Category",
  bookmark() {
    return this.hasMany("Bookmark", "category_id");
  },
});

module.exports = CategoryModel;
