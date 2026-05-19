import { Container } from "react-bootstrap";
import logo from "../assets/logo.png";

const RegisterHeader = () => {
  return (
    <Container className="text-center mb-4">
      {/* Icon */}
      <div>
        <img
          src={logo}
          alt="ChatCord Logo"
          style={{ width: "100px", height: "100px" }}
        />
      </div>

      {/* Title */}
      <h2 className="fw-bold text-light">Create an account</h2>
    </Container>
  );
};

export default RegisterHeader;
