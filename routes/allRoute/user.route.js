const express = require("express");

const protectRoute = require("../../middleware/protectRoute.js");
const { GetUserController } = require("../../controller/user.controller.js");

const router = express.Router();

router.get("/", protectRoute, GetUserController);
module.exports = router;
