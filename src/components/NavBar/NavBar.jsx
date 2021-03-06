import { Link } from "react-router-dom";
import { useState } from "react";
import * as userService from "../../utilities/users-service";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";



export default function NavBar({ user, setUser, routeChange }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
    routeChange("/");
  }
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
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
              {user ? (
                [
                  <MenuItem
                    component={Link}
                    key="1"
                    to={"/trips"}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">Trips</Typography>
                  </MenuItem>,
                  <MenuItem
                    key="2"
                    component={Link}
                    to={"/trips/new"}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography textAlign="center">New Trip</Typography>
                  </MenuItem>,
                  <MenuItem
                    key="3"
                    component={Link}
                    to={"/"}
                    onClick={() => {
                      handleCloseNavMenu();
                      handleLogOut();
                    }}
                  >
                    <Typography textAlign="center">Log Out</Typography>
                  </MenuItem>,
                ]
              ) : (
                <MenuItem
                  component={Link}
                  to={"/login"}
                  onClick={handleCloseNavMenu}
                >
                  <Typography textAlign="center">Login</Typography>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Button
            component={Link}
            to={"/"}
            onClick={handleCloseNavMenu}
            sx={{ color: "white" }}
          >
            <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
              Trip Log
            </Typography>
          </Button>

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
                sx={{
                  my: 2,
                  color: "white",
                  display: { xs: "none", md: "flex" },
                }}
              >
                Log Out
              </Button>
            </>
          ) : (
            <Button
              component={Link}
              to={"/login"}
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: { xs: "none", md: "flex", alignSelf: "flex-end" },
              }}
            >
              Log In
            </Button>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
