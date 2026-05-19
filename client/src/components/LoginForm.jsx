import { useState } from "react";
import { Form, Button, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    identity: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // تحديث الحقول
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit
  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);

    // simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Authentication system simulation: login successful 🚀");
      navigate("/chat");
    }, 1500);
  };

  const navigate = useNavigate();
  return (
    <Form
      onSubmit={handleSubmit}
      className="w-100"
      style={{ maxWidth: "420px" }}
    >
      {/* Email / Phone */}
      <Form.Group className="mb-3">
        <Form.Label className="text-light text-uppercase small">
          Email or Phone Number
        </Form.Label>

        <Form.Control
          type="text"
          name="identity"
          value={formData.identity}
          onChange={handleChange}
          placeholder="Enter email or phone"
        />
      </Form.Group>

      {/* Password */}
      <Form.Group className="mb-2">
        <Form.Label className="text-light text-uppercase small">
          Password
        </Form.Label>

        <Form.Control
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />
      </Form.Group>

      {/* Forgot password */}
      <div className="text-end mb-3">
        <a href="#" className="text-primary small text-decoration-none">
          Forgot your password?
        </a>
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        variant="primary"
        className="w-100 d-flex justify-content-center align-items-center"
        disabled={loading}
      >
        {loading ? (
          <>
            <Spinner animation="border" size="sm" className="me-2" />
            Logging in...
          </>
        ) : (
          "Log In"
        )}
      </Button>

      {/* Footer */}
      <p className="text-center text-secondary mt-3 small">
        Need an account?{" "}
        <Link to="/register" className="text-primary">
          Register
        </Link>
      </p>
    </Form>
  );
};

export default LoginForm;
