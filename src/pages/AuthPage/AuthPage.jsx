import { useState } from "react";
import SignUpForm from "../../Components/SignUpForm/SignUpForm";
import LoginForm from "../../pages/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <h1>AuthPage</h1>
      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign Up" : "Log In"}
      </button>
      {showLogin ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
    </main>
  );
}
