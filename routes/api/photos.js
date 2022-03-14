const express = require("express");
const router = express.Router();
const imageCtrl = require("../../controllers/api/images");
const upload = require("multer")();

router.post("/upload", upload.single("photo"), imageCtrl.upload);

module.exports = router;
