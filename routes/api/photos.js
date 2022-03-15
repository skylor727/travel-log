const express = require("express");
const router = express.Router();
const photoCtrl = require("../../controllers/api/photos");
const upload = require("multer")();

router.post("/upload", upload.single("photo"), photoCtrl.upload);

module.exports = router;
