const bcrypt = require("bcryptjs");
const ExtractJwt = require("passport-jwt").ExtractJwt;
const userModel = require("../api/user/User.model");

class Auth {
  static config = {
    salt: 10,
    options: {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.AUTH_SECRET,
    },
  };

  static createHashedPassword(password) {
    const salt = bcrypt.genSaltSync(this.config.salt);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
  }

  static authenticatePassword(password, hashedPassword) {
    return bcrypt.compare(password, hashedPassword);
  }

  static async authenticate(email, password, cb) {
    try {
      const { attributes: user } = await userModel.where({ email }).fetch({
        columns: ["email", "password"],
      });

      if (!user) {
        return cb(null, false, {
          message: "Incorrect email or password.",
        });
      }

      const isValidPassword = await Auth.authenticatePassword(
        password,
        user.password
      );

      if (!isValidPassword) {
        return cb(null, false, {
          message: "Incorrect email or password.",
        });
      }

      delete user.password;

      return cb(
        null,
        {
          user,
        },
        { message: "logged in" }
      );
    } catch (err) {
      return cb(null, false, {
        message: "Incorrect email or password.",
      });
    }
  }
}

module.exports = Auth;
