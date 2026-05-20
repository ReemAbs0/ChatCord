import logo from "../assets/logo.png";
import "../styles/register.css";

const RegisterHeader = () => {
  return (
    <div className="register-header">
      <img
        src={logo}
        alt="ChatCord Logo"
        className="register-logo"
      />

      <h2 className="register-title">
        Create an account
      </h2>
    </div>
  );
};

export default RegisterHeader;