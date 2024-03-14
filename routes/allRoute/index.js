const express = require("express");
const router = express.Router();
const AuthRoutes = require("./auth.router.js");
const MessageRoutes = require("./message.route.js");
const UserRoutes = require("./user.route.js");
router.use("/auth", AuthRoutes);
router.use("/message", MessageRoutes);
router.use("/user", UserRoutes);
module.exports = router;
