import "../styles/chatArea.css";
import { useState } from "react";
import axios from "axios";
import socket from "../socket";

export default function MessageInput({ setMessages, selectedChannel }) {
  const [message, setMessage] = useState("");

  const sendMessage = async () => {
    const clean = message.trim();

    if (!clean) return;

    const currentUser = JSON.parse(localStorage.getItem("user"));

    if (!currentUser) return;

    const newMessage = {
      text: clean,
      user: currentUser,
      channelId: selectedChannel,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    try {

      const res = await axios.post("http://localhost:5001/api/messages", {
        text: clean,
        userId: currentUser.id,
        channelId: selectedChannel,
      });

      // setMessages((prev) => [...prev, res.data]);

      socket.emit("send_message", newMessage);

      setMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="message-input-wrapper p-4">
      <div className="message-input d-flex align-items-center">
        <button className="input-btn">
          <i className="bi bi-plus-circle-fill"></i>
        </button>

        <input
          type="text"
          className="form-control border-0 bg-transparent text-light chat-search"
          placeholder="Message #general-chat"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              sendMessage();
            }
          }}
        />

        <div className="d-flex gap-3 text-secondary">
          <i className="bi bi-gift input-icon"></i>
          <i className="bi bi-file-earmark-play input-icon"></i>
          <i className="bi bi-emoji-smile input-icon"></i>
        </div>
      </div>
    </div>
  );
}
