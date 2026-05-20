import CosmicBackground from "../components/CosmicBackground";
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";
import "../styles/login.css"

export default function LoginPage() {
  return (
    <>
      <CosmicBackground />

      <div className="login-page">
        <div className="login-card">
        <LoginHeader />
        <LoginForm />
        </div>
      </div>
    </>
  );
}