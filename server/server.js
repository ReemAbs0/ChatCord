const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;

const mongoose = require("mongoose");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(express.json());

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/ChatCord")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
const userRoutes = require("./routes/UserRoutes");
app.use("/api/users", userRoutes);

const messageRoutes = require("./routes/MessageRoutes");
app.use("/api/messages", messageRoutes);

const channelRoutes = require("./routes/channelRoutes");
app.use("/api/channels", channelRoutes);

// Socket.IO setup
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});
let onlineUsers = new Map();
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // join channel room
  socket.on("join_channel", (channelId) => {
    socket.join(channelId);
  });

  // send message
  socket.on("send_message", (data) => {
    io.to(data.channelId).emit("receive_message", data);
  });

  socket.on("user_online", (userId) => {
    onlineUsers.set(userId, socket.id);

    io.emit("update_users", Array.from(onlineUsers.keys()));
  });

  socket.on("disconnect", () => {
    for (let [userId, socketId] of onlineUsers) {
      if (socketId === socket.id) {
        onlineUsers.delete(userId);
        break;
      }
    }

    io.emit("update_users", Array.from(onlineUsers.keys()));
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
