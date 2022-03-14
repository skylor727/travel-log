const uploadFile = require("../../config/s3");

const upload = async (req, res) => {
  try {
    const result = await uploadFile(req.file);
    console.log(result);
    res.send(result.Location);
  } catch (err) {
    res.send(err);
  }
};

module.exports = { upload };
