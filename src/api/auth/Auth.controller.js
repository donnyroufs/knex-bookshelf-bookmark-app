const passport = require("passport");
const jwt = require("jsonwebtoken");

class AuthController {
  constructor(model, error) {
    this.model = model;
    this.error = error;

    this.login = this.login.bind(this);
  }

  async login(req, res) {
    passport.authenticate("local", { session: false }, (err, user) => {
      if (err || !user) {
        return res.status(500).json(err);
      }

      req.login(user, { session: false }, (err) => {
        if (err) {
          res.send(err);
        }
        const token = jwt.sign(user, process.env.AUTH_SECRET, {
          expiresIn: "1h",
        });

        return res.json({ user, token });
      });
    })(req, res);
  }
}

module.exports = AuthController;
