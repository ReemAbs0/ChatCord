import { useState } from "react";
import "../styles/register.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    month: "",
    day: "",
    year: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created (simulation) 🚀");
  };

  return (
  <form onSubmit={handleSubmit} className="register-form">

    <label>Email</label>
    <input
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      className="input-style"
    />

    <label>Display Name</label>
    <input
      name="display_name"
      type="text"
      value={formData.display_name}
      onChange={handleChange}
      className="input-style"
    />

    <label>Username</label>
    <input
      name="username"
      type="text"
      value={formData.username}
      onChange={handleChange}
      className="input-style"
    />

    <label>Password</label>
    <input
      name="password"
      type="password"
      value={formData.password}
      onChange={handleChange}
      className="input-style"
    />

    {/* DOB */}
    <div className="dob-container">

      <select name="month" onChange={handleChange} className="select-style">
        <option>Month</option>
        <option>January</option>
        <option>February</option>
        <option>March</option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>

      <select name="day" onChange={handleChange} className="select-style">
        <option>Day</option>
        {Array.from({ length: 31 }, (_, i) => (
          <option key={i}>{i + 1}</option>
        ))}
      </select>

      <select name="year" onChange={handleChange} className="select-style">
        <option>Year</option>
        {Array.from({ length: 47 }, (_, i) => (
          <option key={i}>{2026 - i}</option>
        ))}
      </select>

    </div>

    <button type="submit" className="register-btn">
      Create Account
    </button>

    <p className="register-footer">
      Already have an account?{" "}
      <a href="/">Log in</a>
    </p>

  </form>

);
};

export default RegisterForm;
