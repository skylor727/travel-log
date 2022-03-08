const uploadFile = require("../../config/s3");

const upload = async (req, res) => {;
  const description = req.body.description;
  const result = await uploadFile(req.file);
  console.log(result);
  console.log(description);
  res.send("OK");
};

module.exports = { upload };
