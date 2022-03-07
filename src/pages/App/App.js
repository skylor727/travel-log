import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import Auth from "../AuthPage/AuthPage";
import NewOrder from "../NewOrderPage/NewOrderPage";
import OrderHistory from "../OrderHistoryPage/OrderHistoryPage";
import NavBar from "../../Components/NavBar/NavBar";

export default function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* route components in here */}
            <Route path="/orders/new" element={<NewOrder />} />
            <Route path="/orders" element={<OrderHistory />} />
          </Routes>
        </>
      ) : (
        <Auth setUser={setUser} />
      )}
    </main>
  );
}
