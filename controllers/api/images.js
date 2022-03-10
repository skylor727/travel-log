const uploadFile = require("../../config/s3");

const upload = async (req, res) => {
  try {
    const result = await uploadFile(req.file);
    res.send(result.Location);
  } catch (err) {
    res.send(err);
  }
};

module.exports = { upload };
