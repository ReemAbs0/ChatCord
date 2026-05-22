import { useEffect, useRef } from "react";

export default function MessageList({ messages }) {
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-grow-1 overflow-auto p-3">
      {messages.map((message) => (
        <div key={message.id || message._id} className="d-flex gap-3 mb-4 p-2">
          <img
            src={
              message.user?.avatar ||
              `https://api.dicebear.com/7.x/identicon/svg?seed=${message.user?.username}`
            }
            width="40"
            height="40"
            className="rounded-circle"
          />

          <div>
            <div>
              <b className="text-white">{message.user?.displayName}</b>{" "}
              <small className="text-secondary">{message.time}</small>
            </div>

            <p className="mb-0 text-light">{message.text}</p>
          </div>
        </div>
      ))}

      <div ref={bottomRef} />
    </div>
  );
}
