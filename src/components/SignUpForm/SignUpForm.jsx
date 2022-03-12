import { Component } from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { signUp } from "../../utilities/users-service";
export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmation: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const formData = { ...this.state };
      delete formData.confirm;
      delete formData.error;
      //The promise returned by the sign up server method, will resolve to the user object included in the payload of the JSON WEB TOKEN (JWT)
      const user = await signUp(formData);
      this.props.setUser(user);
      this.props.routeChange("/trips");
    } catch {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };
  //We must override the render method
  //The render method is the equivalent to a function-based component

  render() {
    const disable = this.state.password !== this.state.confirm;
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
            onSubmit={this.handleSubmit}
            component="form"
            autoComplete="off"
            spacing={2}
          >
            <TextField
              label="Name"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />

            <TextField
              label="Email"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />

            <TextField
              label="password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />

            <TextField
              label="Confirm Password"
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <Button
              endIcon={<SendIcon />}
              color="primary"
              variant="contained"
              type="submit"
              type="submit"
              disabled={disable}
            >
              SIGN UP
            </Button>
          </Stack>
        </Box>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </>
    );
  }
}
