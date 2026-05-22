import "../styles/ChannelSidebar.css";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ChannelSidebar({
  channels,
  selectedChannel,
  setSelectedChannel,
}) {
  const [users, setUsers] = useState([]);
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
  return (
    <div className="channel-sidebar d-flex flex-column">
      {/* Header */}
      <div className="server-header px-3 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-0 fw-semibold text-white">Design Community</h5>

            <small className="text-secondary">{users.length} Members</small>
          </div>

          <i className="bi bi-chevron-down text-secondary"></i>
        </div>
      </div>

      {/* Scrollable Content */}
      <div className="flex-grow-1 overflow-auto px-2">
        {/* Information */}
        <div className="mt-3">
          <p className="channel-title">INFORMATION</p>

          <div className="channel-item">
            <i className="bi bi-megaphone me-2"></i>
            announcements
          </div>

          <div className="channel-item">
            <i className="bi bi-bank me-2"></i>
            rules
          </div>
        </div>

        {/* Text Channels */}
        <div className="mt-4">
          <p className="channel-title">TEXT CHANNELS</p>

          {channels.map((channel) => (
            <div
              key={channel._id}
              className={`channel-item ${
                selectedChannel === channel._id ? "active-channel" : ""
              }`}
              onClick={() => setSelectedChannel(channel._id)}
            >
              <i className="bi bi-hash me-2"></i>
              {channel.name}
            </div>
          ))}
        </div>

        {/* Voice Channels */}
        <div className="mt-4">
          <p className="channel-title">VOICE CHANNELS</p>

          <div className="channel-item">
            <i className="bi bi-mic me-2"></i>
            Lounge
          </div>

          <div className="channel-item">
            <i className="bi bi-broadcast me-2"></i>
            Stream Room
          </div>
        </div>
      </div>

      {/* Footer User */}
    </div>
  );
}
