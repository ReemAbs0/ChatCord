import CosmicBackground from "../components/CosmicBackground";
import RegisterHeader from "../components/RegisterHeader";
import RegisterForm from "../components/RegisterForm";

export default function RegisterPage() {
  return (
    <>
      <CosmicBackground />

      <div className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <div className="login-card p-4 rounded-3">
          <RegisterHeader />
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
