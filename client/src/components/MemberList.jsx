import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/MemberList.css";
import socket from "../socket";

export default function MemberList() {
  const [users, setUsers] = useState([]);
  const [onlineIds, setOnlineIds] = useState([]);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get("http://localhost:5001/api/users");

        setUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();
  }, []);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) return;
    socket.emit("user_online", user.id);

    socket.on("update_users", (ids) => {
      setOnlineIds(ids);
    });

    return () => {
      socket.off("update_users");
    };
  }, []);

  const onlineUsers = users.filter((u) => onlineIds.includes(u._id));

  const offlineUsers = users.filter((u) => !onlineIds.includes(u._id));

  return (
    <div className="member-sidebar">
      {/* ONLINE */}
      <div className="member-section">
        <p className="member-title">ONLINE — {onlineUsers.length}</p>

        {onlineUsers.map((user) => (
          <div key={user._id} className="member-item">
            <div className="position-relative">
              <img
                src={
                  user?.avatar ||
                  `https://api.dicebear.com/7.x/identicon/svg?seed=${user?.username}`
                }
                className="rounded-circle"
                width="36"
                height="36"
              />

              <span className="status-dot online-dot" />
            </div>

            <div className="ms-2">
              <div className="fw-semibold text-light">{user.displayName}</div>

              <small className="text-secondary">
                {user.status === "online" ? "Online" : ""}
              </small>
            </div>
          </div>
        ))}
      </div>

      {/* OFFLINE */}
      <div className="member-section mt-4">
        <p className="member-title">OFFLINE — {offlineUsers.length}</p>

        {offlineUsers.map((user) => (
          <div key={user._id} className="member-item offline-user">
            <img
              src={
                user?.avatar ||
                `https://api.dicebear.com/7.x/identicon/svg?seed=${user?.username}`
              }
              className="rounded-circle"
              width="36"
              height="36"
            />

            <span className="ms-2 text-secondary">{user.displayName}</span>

            <span className="status-dot offline-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
