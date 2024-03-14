const express = require("express");
const {
  SendMessageController,
  GetMessagesController,
} = require("../../controller/message.controller.js");
const protectRoute = require("../../middleware/protectRoute.js");

const router = express.Router();

router.get("/:id", protectRoute, GetMessagesController);
router.post("/send/:id", protectRoute, SendMessageController);
module.exports = router;
