const User = require("../models/User");
const bcrypt = require("bcrypt");
const jsnWebTok = require("jsonwebtoken");

//[HttPost]
exports.access = async (req, res) => {
  const { username, password } = req.body;
  let user = new User({
    username,
    password,
  });

  try {
    let userExist = await User.findOne({ username: req.body.username });

    if (userExist) {
      const validPassword = await bcrypt.compare(
        req.body.password,
        userExist.password
      );

      if (validPassword) {
        const tokenKey = process.env.TOK_KEY;
        const token = jsnWebTok.sign({ _id: userExist._id, username: userExist.username }, tokenKey);

        res.send(token);
      } else {
        res.status(400).send("Invalid Username or password 1");
      }
    } else {
      res.status(400).send("Invalid Username or password 2");
    }
  } catch (err) {
    res.status(500).send(err.message);
    console.log("Error: " + err.message);
  }
};
