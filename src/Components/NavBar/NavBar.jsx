import { Link } from "react-router-dom";
import Auth from "../../pages/AuthPage/AuthPage";
import * as userService from "../../utilities/users-service";

export default function NavBar({ user, setUser, routeChange }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    routeChange();
  }

  return (
    <nav>
      {user ? (
        <>
          <a onClick={handleLogOut} >
            Logout
          </a>{" "}
          &nbsp; | &nbsp;
          <span>Welcome {user.name}</span>{" "}
        </>
      ) : (
        <Link to="/login">Login </Link>
      )}
    </nav>
  );
}
