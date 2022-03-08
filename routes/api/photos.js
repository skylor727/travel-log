const express = require("express");
const router = express.Router();
const imageCtrl = require('../../controllers/api/images')
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

router.post("/", upload.single('image'), imageCtrl.upload);

module.exports = router;
