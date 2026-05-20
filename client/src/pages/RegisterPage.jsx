import CosmicBackground from "../components/CosmicBackground";
import RegisterHeader from "../components/RegisterHeader";
import RegisterForm from "../components/RegisterForm";
import "../styles/register.css";

export default function RegisterPage() {
  return (
    <>
      <CosmicBackground />

      <div className="register-page">
        <div className="login-card">
          <RegisterHeader />
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
