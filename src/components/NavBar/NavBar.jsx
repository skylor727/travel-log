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
          <span>Welcome {user.name}</span> &nbsp; | &nbsp;
          <Link to="/trips">Trips </Link>
          &nbsp; | &nbsp;
          <Link to="/trips/new">New Trip</Link>
          &nbsp; | &nbsp;
          <Link to='/' onClick={handleLogOut}>Logout</Link>
          &nbsp; | &nbsp;
          <Link to='/photos/test' >test</Link>
        </>
      ) : (
        <Link to="/login">Login </Link>
      )}
    </nav>
  );
}
