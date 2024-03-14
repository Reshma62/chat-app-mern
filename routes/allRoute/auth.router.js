const express = require("express");
const {
  SignUpController,
  LoginController,
  LogOutController,
} = require("../../controller/auth.controller.js");
const router = express.Router();
router.post("/login", LoginController);
router.post("/signup", SignUpController);
router.post("/logout", LogOutController);
module.exports = router;
