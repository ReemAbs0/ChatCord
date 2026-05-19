import "../styles/ChannelSidebar.css";
import { useNavigate } from "react-router-dom";

export default function ChannelSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any authentication tokens or user data here
    // For example: localStorage.removeItem("authToken");

    // Redirect to login page
    navigate("/");
  };
  return (
    <div className="channel-sidebar d-flex flex-column">
      {/* Header */}
      <div className="server-header px-3 py-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5 className="mb-0 fw-semibold text-white">Design Community</h5>

            <small className="text-secondary">1,284 Members</small>
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

          <div className="channel-item active-channel">
            <i className="bi bi-hash me-2"></i>
            general-chat
          </div>

          <div className="channel-item">
            <i className="bi bi-hash me-2"></i>
            gaming
          </div>

          <div className="channel-item">
            <i className="bi bi-folder me-2"></i>
            resources
          </div>
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
      <div className="user-footer p-2 d-flex align-items-center">
        <img
          src="https://i.pravatar.cc/40?img=5"
          alt="profile"
          className="rounded-circle"
          width="40"
          height="40"
        />

        <div className="ms-2 flex-grow-1">
          <div className="text-white small fw-semibold">CreativePro</div>

          <small className="text-secondary">#1337</small>
        </div>

        <div className="d-flex align-items-center sidebar-actions">
          <i className="bi bi-mic-fill sidebar-action-icon"></i>

          <i className="bi bi-headphones sidebar-action-icon"></i>

          <div className="sidebar-action-icon" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
