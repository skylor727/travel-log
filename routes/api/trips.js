const express = require("express");
const router = express.Router();
const tripsCtrl = require("../../controllers/api/trips");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", tripsCtrl.index);

router.post("/new", tripsCtrl.create);

router.get("/:id", tripsCtrl.show);

router.delete("/:id", tripsCtrl.delete);

module.exports = router;
