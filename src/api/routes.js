const express = require("express");
const userRoutes = require("./user/User.routes");
const authRoutes = require("./auth/Auth.routes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;
