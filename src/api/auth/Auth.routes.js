const express = require("express");
const Controller = require("./Auth.controller");
const userModel = require("../user/User.model");
const { MagicError } = require("../../lib/ErrorHandler");
const router = express.Router();

const authController = new Controller(userModel, MagicError);

router.post("/login", authController.login);

module.exports = router;
