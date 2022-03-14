const express = require("express");
const router = express.Router();
const tripsCtrl = require("../../controllers/api/trips");
const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.get("/", tripsCtrl.index);

router.post("/new", tripsCtrl.create);

router.delete("/:id", tripsCtrl.delete);

router.post("/:id", tripsCtrl.update);

router.get("/:id", tripsCtrl.show);

module.exports = router;
