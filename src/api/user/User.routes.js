const express = require("express");
const Controller = require("./User.controller");
const userModel = require("./User.model");
const passport = require("passport");

const userController = new Controller(userModel);

const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  userController.index
);

router.post("/", userController.create);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  userController.destroy
);

module.exports = router;
