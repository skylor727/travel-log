const jwt = require("jsonwebtoken");
const User = require("../../models/user");
const bcrypt = require("bcrypt");

createJWT = (user) => {
  return jwt.sign(
    //data payload
    { user },
    process.env.SECRET,
    { expiresIn: "24h" }
  );
};

create = async (req, res) => {
  try {
    //Add user to DB
    const user = await User.create(req.body);
    //token will be a string
    const token = createJWT(user);
    //Serialize a string
    res.json(token);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
};

login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error("Wrong Password");
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
};

const checkToken = (req, res) => {
  console.log(req.user);
  console.log(req.exp);
  res.json(req.exp);
};

module.exports = {
  create,
  login,
  checkToken,
};
