import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../pages/LoginForm/LoginForm";

export default function AuthPage({ setUser, routeChange }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <h1>Login</h1>
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign Up" : "Log In"}
      </button>
      {showLogin ? (
        <LoginForm setUser={setUser} routeChange={routeChange} />
      ) : (
        <SignUpForm setUser={setUser} routeChange={routeChange} />
      )}
    </main>
  );
}
