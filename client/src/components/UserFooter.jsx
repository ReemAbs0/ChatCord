import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

export default function UserFooter() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      background: "#1e1f22",
      color: "#fff",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "rgba(52, 47, 47, 0.53)",
      confirmButtonText: "Yes, log out!",
    });

    if (result.isConfirmed) {
      const user = JSON.parse(localStorage.getItem("user"));

      try {
        await axios.post("http://localhost:5001/api/users/logout", {
          userId: user.id,
        });
      } catch (err) {
        console.log(err);
      }

      localStorage.removeItem("user");
      navigate("/login");
    }
  };
  return (
    <div className="user-footer p-2 d-flex align-items-center">
      <img
        src={
          user?.avatar ||
          `https://api.dicebear.com/7.x/identicon/svg?seed=${user?.username}`
        }
        alt="profile"
        className="rounded-circle pl-2 pr-2"
        width="40"
        height="40"
      />

      <div className="ms-2 flex-grow-1">
        <div className="text-white small fw-semibold ">{user?.displayName}</div>

        <small className="text-secondary">{user?.username}</small>
      </div>

      <div className="d-flex align-items-center sidebar-actions">
        <i className="bi bi-mic-fill sidebar-action-icon"></i>

        <i className="bi bi-headphones sidebar-action-icon"></i>

        <div className="sidebar-action-icon" onClick={handleLogout}>
          <i className="bi bi-box-arrow-right"></i>
        </div>
      </div>
    </div>
  );
}
