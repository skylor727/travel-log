const uploadFile = require("../../config/upload-file");

module.exports = {
  upload,
};

async function upload(req, res) {
  try {
    if (req.file) {
      const photoURL = await uploadFile(req.file);
      res.json(photoURL);
    } else {
      throw new Error("Must select a file");
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
}
