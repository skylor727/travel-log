const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const logger = require("morgan");

//Always require and config near the top
require("dotenv").config();
// Connect to DB AFTER dotenv is configured
require("./config/database");
const app = express();

//Have to invoke to configure
app.use(logger("dev"));
app.use(express.json());
app.use(favicon(path.join(__dirname, "build", "favicon.ico")));
app.use(express.static(path.join(__dirname, "build")));

//Middleware to verify token and assign user object to req object
app.use(require("./config/checkToken"));

//API ROUTES HERE
app.use("/api/users", require("./routes/api/users"));
//'Catch All Route'
app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "build", "index.html"))
);

//Listening for HTTP requests on a certain port
const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Express App running on port ${port}`));
