import CosmicBackground from "../components/CosmicBackground";
import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <>
      <CosmicBackground />

      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="login-card p-4 rounded-3">
        <LoginHeader />
        <LoginForm />
        </div>
      </div>
    </>
  );
}