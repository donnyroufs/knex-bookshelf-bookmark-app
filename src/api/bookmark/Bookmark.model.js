const { bookshelf } = require("../../db/Knex");

const BookmarkModel = bookshelf.model("Bookmark", {
  tableName: "Bookmark",
  hidden: ["category_id", "user_id"],
  user() {
    return this.belongsTo("User", "user_id");
  },
  category() {
    return this.belongsTo("Category", "category_id");
  },
});

module.exports = BookmarkModel;
