import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import "../styles/ChatArea.css";

export default function ChatArea() {
  return (
    <div className="chat-area d-flex flex-column">
      <ChatHeader />

      <div className="messages-container flex-grow-1">
        <MessageList />
      </div>

      <MessageInput />
    </div>
  );
}