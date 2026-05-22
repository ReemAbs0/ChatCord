const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    day: {
      type: Number,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    avatar: {
      type: String,
      default: "https://i.pravatar.cc/150?u=default",
    },
  },
  status: {
    type: String,
    enum: ["online", "offline"],
    default: "offline",
  },
});

module.exports = mongoose.model("User", userSchema);
