import { Link } from "react-router-dom";
import Auth from "../../pages/AuthPage/AuthPage";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      {user ? (
        <>
          <Link onClick={handleLogOut} to="logout">
            Logout
          </Link>{" "}
          &nbsp; | &nbsp;
          <span>Welcome {user.name}</span>{" "}
        </>
      ) : (
        <Link to="/login">Login </Link>
      )}
    </nav>
  );
}
