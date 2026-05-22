const Channel = require("../models/Channel");

const createChannel = async (req, res) => {
  try {
    const channel = await Channel.create({
      name: req.body.name,
    });

    res.status(201).json(channel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getChannels = async (req, res) => {
  const channels = await Channel.find();
  res.json(channels);
};

module.exports = {
  createChannel,
  getChannels,
};
