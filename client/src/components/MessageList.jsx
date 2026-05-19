const messages = [
  {
    id: 1,
    user: "Jordan Smith",
    time: "10:42 AM",
    text: "Has anyone seen the new design system update?",
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    id: 2,
    user: "Alex Rivera",
    time: "11:15 AM",
    text: "Check out this layout I'm working on!",
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    id: 3,
    user: "Marcus Vane",
    time: "11:20 AM",
    text: "The grid spacing looks perfect.",
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

export default function MessageList() {
  return (
    <div className="flex-grow-1 overflow-auto p-3">
      {messages.map((message) => (
        <div
          key={message.id}
          className="d-flex gap-3 mb-4 p-2 rounded hover-message"
        >
          <img
            src={message.avatar}
            alt={message.user}
            className="rounded-circle"
            width="40"
            height="40"
          />

          <div>
            <div className="d-flex align-items-center gap-2">
              <span className="fw-bold">
                {message.user}
              </span>

              <small className="text-secondary">
                {message.time}
              </small>
            </div>

            <p className="mb-0 text-light">
              {message.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}