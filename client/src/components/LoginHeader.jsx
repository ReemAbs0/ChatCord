import "../styles/login.css";
import logo from "../assets/logo.png";

const LoginHeader = () => {
  return (
    <div className=" login-header text-center">
      <div>
        <img src={logo} alt="ChatCord Logo" className="login-logo" />
      </div>
      <h2 className="title">Welcome back!</h2>
      <p className="subtitle">We're so excited to see you again!</p>
    </div>
  );
};

export default LoginHeader;
