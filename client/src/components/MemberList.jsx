import "../styles/MemberList.css";

const onlineUsers = [
  {
    id: 1,
    name: "Jordan Smith",
    status: "Playing Figma",
    avatar: "https://i.pravatar.cc/40?img=11",
    color: "text-danger",
  },
  {
    id: 2,
    name: "Alex Rivera",
    avatar: "https://i.pravatar.cc/40?img=12",
    color: "text-primary",
  },
  {
    id: 3,
    name: "CreativePro",
    avatar: "https://i.pravatar.cc/40?img=13",
    color: "text-light",
    offline: true,
  },
  {
    id: 4,
    name: "Marcus Vane",
    avatar: "https://i.pravatar.cc/40?img=14",
    color: "text-success",
  },
];

const offlineUsers = [
  "Dave Miller",
  "Sarah Chen",
  "Riley Jones",
];

export default function MemberList() {
  return (
    <div className="member-sidebar">

      {/* ONLINE */}
      <div className="member-section">
        <p className="member-title">
          ONLINE — {onlineUsers.length}
        </p>

        {onlineUsers.map((user) => (
          <div key={user.id} className="member-item">

            <div className="position-relative">

              <img
                src={user.avatar}
                alt={user.name}
                className="rounded-circle"
                width="36"
                height="36"
              />

              <span
                className={`status-dot ${
                  user.offline
                    ? "offline-dot"
                    : "online-dot"
                }`}
              ></span>
            </div>

            <div className="ms-2 flex-grow-1">

              <div className={`fw-semibold ${user.color}`}>
                {user.name}
              </div>

              {user.status && (
                <small className="text-secondary">
                  {user.status}
                </small>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* OFFLINE */}
      <div className="member-section mt-4">
        <p className="member-title">
          OFFLINE — {offlineUsers.length}
        </p>

        {offlineUsers.map((user, index) => (
          <div key={index} className="member-item offline-user">

            <img
              src={`https://i.pravatar.cc/40?img=${20 + index}`}
              alt={user}
              className="rounded-circle"
              width="36"
              height="36"
            />

            <span className="ms-2 text-secondary">
              {user}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}