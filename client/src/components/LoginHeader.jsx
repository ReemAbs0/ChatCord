import { Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const LoginHeader = () => {
  return (
    <Container className="text-center mb-4">
      {/* Icon */}
      <div>
        {/* <i className="bi bi-rocket-takeoff" style={{ fontSize: "48px" }}></i> */}
        <img src={logo} alt="ChatCord Logo" style={{ width: "100px", height: "100px" }} />
      </div>

      {/* Title */}
      <h2 className="fw-bold text-light">Welcome back!</h2>

      {/* Subtitle */}
      <p className="text-secondary">
        We're so excited to see you again!
      </p>
    </Container>
  );
};

export default LoginHeader;