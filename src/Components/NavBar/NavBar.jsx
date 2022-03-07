import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  return (
    <nav>
      <Link to="orders">Order History</Link>
      &nbsp; | &nbsp;
      <Link to="orders/new">New Order</Link>
      &nbsp; | &nbsp;
    
      {user && (
        <Link onClick={handleLogOut} to="logout">
          Logout
        </Link>
      )}
      &nbsp; | &nbsp;
      <span>Welcome {user.name}</span>
    </nav>
  );
}
