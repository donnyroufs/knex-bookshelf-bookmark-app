const Controller = require("../../lib/Controller");

class BookmarkController extends Controller {
  constructor(props) {
    super(props);
  }

  async index(req, res, next) {
    try {
      const { id: user_id } = req.user;

      const bookmarks = await this.model
        .where({
          user_id: Number(user_id),
        })
        .fetchAll({ withRelated: ["category"] });

      res.status(200).json(bookmarks);
    } catch (err) {
      next(err);
    }
  }

  async create(req, res, next) {
    try {
      const { title, url, categoryId: category_id } = req.body;
      const { id: user_id } = req.user;

      if (!title || !url || !category_id) {
        throw new this.error(400, "Missing title or url.");
      }

      await this.model
        .forge({
          title,
          url,
          user_id: Number(user_id),
          category_id: Number(category_id),
        })
        .save();

      res.sendStatus(201);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = BookmarkController;
