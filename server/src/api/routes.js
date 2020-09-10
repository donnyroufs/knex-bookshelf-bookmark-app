const express = require("express");
const userRoutes = require("./user/User.routes");
const authRoutes = require("./auth/Auth.routes");
const categoryRoutes = require("./category/Category.routes");
const bookmarkRoutes = require("./bookmark/Bookmark.routes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.use("/category", categoryRoutes);
router.use("/bookmark", bookmarkRoutes);

module.exports = router;
