import { Link } from "react-router-dom";
import { useState } from "react";
import Auth from "../../pages/AuthPage/AuthPage";
import * as userService from "../../utilities/users-service";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const pages = ["Home", "Trips", "New trip"];

export default function NavBar({ user, setUser, routeChange }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    routeChange("/");
  }
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Button
            component={Link}
            to={"/"}
            onClick={handleCloseNavMenu}
            sx={{ color: "white" }}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              Trip Log
            </Typography>
          </Button>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            Trip Log
          </Typography>
          {user ? (
            <>
              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                <Button
                  component={Link}
                  to={"/trips"}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Trips
                </Button>
                <Button
                  component={Link}
                  to={"/trips/new"}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  New Trip
                </Button>
              </Box>
              <Button
                component={Link}
                to={"/"}
                onClick={() => {
                  handleLogOut();
                  handleCloseNavMenu();
                }}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Log Out
              </Button>
            </>
          ) : (
            <Button
              component={Link}
              to={"/login"}
              onClick={() => {
                handleLogOut();
                handleCloseNavMenu();
              }}
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Log In
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
    // <nav>
    //   {user ? (
    //     <>
    //       <span>Welcome {user.name}</span> &nbsp; | &nbsp;
    //       <Link to="/">Home</Link>
    //       &nbsp; | &nbsp;
    //       <Link to="/trips">Trips </Link>
    //       &nbsp; | &nbsp;
    //       <Link to="/trips/new">New Trip</Link>
    //       &nbsp; | &nbsp;
    //       <Link to="/" onClick={handleLogOut}>
    //         Logout
    //       </Link>
    //     </>
    //   ) : (
    //     <Link to="/login">Login </Link>
    //   )}
    // </nav>
  );
}
