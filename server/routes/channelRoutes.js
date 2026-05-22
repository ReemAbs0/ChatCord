const express = require("express");
const router = express.Router();

const channelController = require("../controllers/ChannelController");

router.post("/", channelController.createChannel);
router.get("/", channelController.getChannels);

module.exports = router;
