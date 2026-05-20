import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    identity: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      alert("Login successful 🚀");
      navigate("/chat");
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>Email or Phone Number</label>
      <input
        type="text"
        name="identity"
        value={formData.identity}
        onChange={handleChange}
        className="input-style"
      />

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        className="input-style"
      />

      <div className="forgot">
        <Link to="/forgot-password">Forgot your password?</Link>
      </div>

      <button type="submit" disabled={loading} className="btn-primary">
        {loading ? "Logging in..." : "Log In"}
      </button>

      <p className="footer text-secondary">
        Need an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
