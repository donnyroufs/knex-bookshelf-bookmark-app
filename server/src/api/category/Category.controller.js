const Controller = require("../../lib/Controller");

class CategoryController extends Controller {
  constructor(props) {
    super(props);
  }

  async create(req, res, next) {
    try {
      const { name } = req.body;

      if (!name) {
        throw new this.error(400, "Missing category name.");
      }

      await this.model
        .forge({
          name,
        })
        .save();

      res.sendStatus(201);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = CategoryController;
