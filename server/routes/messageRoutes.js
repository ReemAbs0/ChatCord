const express = require("express");
const router = express.Router();

const MessageController = require("../controllers/messageController");

router.post("/", MessageController.sendMessage);
router.get("/:channelId", MessageController.getMessagesByChannel);

module.exports = router;
