import "./App.css";
import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import Auth from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Home from "../Home/Home";
import Trips from "../Trips/Trips";
import NewTrip from "../NewTrip/NewTrip";
import TripDetail from "../../pages/TripDetail/TripDetail";

export default function App() {
  const navigate = useNavigate();

  //Function to easily change routes
  const routeChange = (path) => {
    navigate(path);
  };

  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} routeChange={routeChange} />
      {/* Routes to show if not logged in */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={<Auth setUser={setUser} routeChange={routeChange} />}
        />
        {/* Routes to show if user is logged in */}
        {user && (
          <>
            <Route path="/trips" element={<Trips user={user} />} />
            <Route path="/trips/new" element={<NewTrip user={user} />} />
            {/* Route to trip with specific ID */}
            <Route
              path="/trips/:id"
              element={<TripDetail routeChange={routeChange} user={user} />}
            />
          </>
        )}
      </Routes>
    </main>
  );
}
