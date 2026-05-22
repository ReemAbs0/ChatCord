const Message = require("../models/Message");

const sendMessage = async (req, res) => {
  try {
    const { text, userId, channelId } = req.body;

    const message = await Message.create({
      text,
      user: userId,
      channel: channelId,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    });

    const populatedMessage = await Message.findById(message._id)
      .populate("user")
      .populate("channel");

    res.status(201).json(populatedMessage);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const getMessagesByChannel = async (req, res) => {
  try {
    const { channelId } = req.params;

    const messages = await Message.find({
      channel: channelId,
    })
      .populate("user", "-password")
      .populate("channel");

    res.json(messages);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  sendMessage,
  getMessagesByChannel,
};
