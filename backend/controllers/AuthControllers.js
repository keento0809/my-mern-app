const { validationResult } = require("express-validator");
const User = require("../models/UserModels");
const users = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { email, password } = req.body;

  const loginUser = await User.findOne({ email });
  const hashComparison = await bcrypt.compare(password, loginUser.password);

  const payload = { email };
  const option = { expiresIn: 3600000 };
  const newToken = await jwt.sign(payload, process.env.SECRET_KEY, option);

  if (loginUser && hashComparison) {
    res.json({
      _id: loginUser.id,
      email: loginUser.email,
      token: newToken,
    });
  } else {
    res.status(400).json({ error: "Invalid credentials" });
  }
};

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  // validate errors
  // utilize validationResult
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();
  if (hasErrors) {
    return res.status(400).json({ errors: errors.array() });
  }

  // check existing users
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({
      error: "This user has already existed.",
    });
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  // issue token
  const payload = { email };
  const option = { expiresIn: 3600000 };
  const newToken = await jwt.sign(payload, process.env.SECRET_KEY, option);

  // Add new user to DB
  const newUser = await User.create({
    username,
    email,
    password: hashed,
  });

  if (newUser) {
    res.status(200).json({
      _id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      token: newToken,
    });
    users.push(newUser);
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

module.exports = {
  signup,
  login,
};
