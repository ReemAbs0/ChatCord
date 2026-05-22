import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import "../styles/ChatArea.css";
import { useState, useEffect } from "react";
import axios from "axios";
import socket from "../socket";

export default function ChatArea({ selectedChannel, channels }) {
  const [messages, setMessages] = useState([]);
  const currentChannel = channels.find(
    (channel) => channel._id === selectedChannel,
  );

  useEffect(() => {
    if (!selectedChannel) return;

    const fetchMessages = async () => {
      const res = await axios.get(
        `http://localhost:5001/api/messages/${selectedChannel}`,
      );

      setMessages(res.data);
    };

    fetchMessages();
  }, [selectedChannel]);

  useEffect(() => {
    socket.on("receive_message", (message) => {
      if (message.channelId !== selectedChannel) return;

      setMessages((prev) => [...prev, message]);
    });

    return () => socket.off("receive_message");
  }, [selectedChannel]);

  useEffect(() => {
    if (selectedChannel) {
      socket.emit("join_channel", selectedChannel);
    }
  }, [selectedChannel]);

  return (
    <div className="chat-area d-flex flex-column">
      <ChatHeader channel={currentChannel} />

      <div className="messages-container flex-grow-1">
        <MessageList messages={messages} />
      </div>

      <MessageInput
        setMessages={setMessages}
        selectedChannel={selectedChannel}
      />
    </div>
  );
}
