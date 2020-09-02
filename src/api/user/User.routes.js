const express = require("express");
const Controller = require("./User.controller");
const userModel = require("./User.model");

const userController = new Controller(userModel);

const router = express.Router();

router.get("/", userController.index);
router.post("/", userController.create);
router.get("/:id", userController.show);
router.put("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
