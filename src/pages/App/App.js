import "./App.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import Auth from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Home from "../../pages/Home/Home";
import Trips from "../../pages/Trips/Trips";
import NewTrip from "../../pages/NewTrip/NewTrip";
import PhotoTest from "../../pages/PhotoTest/PhotoTest";

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
        <Route path="/trips" element={<Trips />} />
        <Route path="/trips/new" element={<NewTrip />} />
        <Route path="/photos/test" element={<PhotoTest />} />
      </Routes>
    </main>
  );
}
