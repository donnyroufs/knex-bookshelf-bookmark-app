const express = require("express");
const Controller = require("./Category.controller");
const categoryModel = require("./Category.model");
const passport = require("passport");

const categoryController = new Controller(categoryModel);

const router = express.Router();

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  categoryController.create
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  categoryController.destroy
);

module.exports = router;
