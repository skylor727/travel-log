import "./App.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import Auth from "../AuthPage/AuthPage";
import NavBar from "../../Components/NavBar/NavBar";
import Home from "../../pages/Home/Home";

export default function App() {
  const navigate = useNavigate();

  const routeChange = () => {
    let path = `/`;
    navigate(path);
  };

  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} routeChange={routeChange} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Auth setUser={setUser} routeChange={routeChange} />}
        />
      </Routes>
    </main>
  );
}
