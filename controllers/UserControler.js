const User = require("../models/User");
const bcrypt = require("bcrypt");
const jsnWebTok = require("jsonwebtoken");
// joi info (https://ichi.pro/es/joi-para-nodo-exploracion-de-la-validacion-del-esquema-de-objetos-de-javascript-88911385598735)

//[HttPost]
exports.create = async (req, res) => {
  const { username, password } = req.body;
  let user = new User({
    username,
    password,
  });

  try {
    let userExist = await User.findOne({ username: req.body.username });

    if (userExist) return res.status(400).send("User already exist");

    const validatePass = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, validatePass);

    await user.save();

    const tokenKey = process.env.TOK_KEY;
    const token = jsnWebTok.sign(
      { _id: userExist._id, username: userExist.username },
      tokenKey
    );

    res.send(token);
  } catch {
    res.status(500).send(err.message);
    console.log("Error: " + err.message);
  }
};

exports.list = async (req, res) => {
  const users = await User.find();
  res.json(users);
};
