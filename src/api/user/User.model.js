const { bookshelf } = require("../../db/Knex");

const UserModel = bookshelf.model("User", {
  tableName: "User",
  bookmarks() {
    return this.hasMany(Bookmarks);
  },
});

module.exports = UserModel;
