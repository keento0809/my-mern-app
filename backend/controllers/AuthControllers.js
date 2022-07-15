const { validationResult } = require("express-validator");
const User = require("../models/UserModels");
const users = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {};

const signup = async (req, res) => {
  const { email, password } = req.body;

  // validate errors
  // utilize validationResult
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();
  if (hasErrors) {
    return res.status(400).json({ errors: errors.array() });
  }

  // check existing users
  const existingUser = await User.findOne({ email });
  console.log(existingUser);
  // const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({
      error: "This user has already existed.",
    });
    // throw new Error("This user has already existed.")
  }

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashed = await bcrypt.hash(password, salt);

  // issue token
  const payload = {
    email,
  };
  const option = {
    expiresIn: 3600000,
  };

  const newToken = await jwt.sign(payload, process.env.SECRET_KEY, option);

  // Add new user to DB
  const newUser = await User.create({
    email,
    password: hashed,
  });

  if (newUser) {
    res.status(200).json({
      _id: newUser.id,
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
};
