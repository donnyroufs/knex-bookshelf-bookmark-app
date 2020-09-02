const express = require("express");
const app = require("../../../index");
const Controller = require("./User.controller");

const userController = new Controller(app.db);

const router = express.Router();

router.get("/", userController.index);
router.post("/", userController.create);
router.get("/:id", userController.index);
router.put("/:id", userController.index);
router.delete("/:id", userController.destroy);

module.exports = router;
