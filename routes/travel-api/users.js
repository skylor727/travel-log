const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/travel-api/users");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

//Post /travel-api/users

router.post("/", usersCtrl.create);

router.post("/login", usersCtrl.login);
// GET /travel-api/users/check-token
router.get("/check-token", ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;
