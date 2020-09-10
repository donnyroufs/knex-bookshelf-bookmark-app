const Controller = require("../../lib/Controller");
const Auth = require("../../lib/Auth");

class UserController extends Controller {
  constructor(props) {
    super(props);
  }

  async create(req, res, next) {
    try {
      const { email, password, password_confirmation } = req.body;

      if (!email) {
        throw new this.error(400, "Missing email.");
      }

      if (password !== password_confirmation) {
        throw new this.error(400, "Passwords do not match.");
      }

      const hashedPassword = Auth.createHashedPassword(password);

      await this.model
        .forge({
          email,
          password: hashedPassword,
        })
        .save();

      res.sendStatus(201);
    } catch (err) {
      next(err);
    }
  }
}

module.exports = UserController;
