// LoginForm.jsx

import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import * as usersService from "../../utilities/users-service";
import { CenterFocusStrong } from "@mui/icons-material";

export default function LoginForm({ setUser, routeChange }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
      routeChange("/trips");
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          flexWrap: "wrap",
          alignContent: "center",
        }}
      >
        <Stack
          style={{ width: "40%" }}
          onSubmit={handleSubmit}
          component="form"
          autoComplete="off"
          spacing={2}
        >
          <TextField
            label="Email"
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />

          <TextField
            label="Password"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <Button
            endIcon={<SendIcon />}
            color="primary"
            variant="contained"
            type="submit"
          >
            LOG IN
          </Button>
        </Stack>
      </Box>
      <p className="error-message">&nbsp;{error}</p>
    </>
  );
}
