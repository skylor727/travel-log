const uploadFile = require("../../config/s3");

const upload = async (req, res) => {
  const description = req.body.description;
  const result = await uploadFile(req.file);
  const data = {
    description,
    result: result.Location,
  };
  res.send(data);
};

module.exports = { upload };
