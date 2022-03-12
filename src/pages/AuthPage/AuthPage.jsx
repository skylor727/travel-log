import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../pages/LoginForm/LoginForm";

export default function AuthPage({ setUser, routeChange }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <main>
      <h1>Login</h1>
      {showLogin ? (
        <LoginForm setUser={setUser} routeChange={routeChange} />
      ) : (
        <SignUpForm setUser={setUser} routeChange={routeChange} />
      )}

      <Typography>{showLogin ? "New User?" : "Returning User?"} </Typography>
      <Button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign Up" : "Log In"}
      </Button>
    </main>
  );
}
