const express = require("express");
const Controller = require("./Bookmark.controller");
const bookmarkModel = require("./Bookmark.model");
const passport = require("passport");

const bookmarkController = new Controller(bookmarkModel);

const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  bookmarkController.index
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  bookmarkController.create
);

router.delete(
  "/:id",
  // passport.authenticate("jwt", { session: false }),
  bookmarkController.destroy
);

module.exports = router;
