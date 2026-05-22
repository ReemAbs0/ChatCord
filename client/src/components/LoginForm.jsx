import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.css";
import axios from "axios";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/login",
        {
          email: formData.email,
          password: formData.password,
        },
      );

      alert(response.data.message);
      console.log(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/chat");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <label>Email</label>
      <input
        type="text"
        name="email"
        value={formData.email}
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

      <button type="submit" className="btn-primary">
        Log In
      </button>

      <p className="footer text-secondary">
        Need an account? <Link to="/register">Register</Link>
      </p>
    </form>
  );
};

export default LoginForm;
