const { validationResult } = require("express-validator");
const User = require("../models/UserModels");
const createNewToken = require("../helpers/auth/createNewToken");
const createNewHash = require("../helpers/auth/createNewHash");
const compareHash = require("../helpers/auth/compareHash");

const login = async (req, res) => {
  const { email, password } = req.body;
  const loginUser = await User.findOne({ email });
  const hashComparison = await compareHash(password, loginUser.password);
  const newToken = await createNewToken(email);
  if (loginUser && hashComparison) {
    res.json({
      _id: loginUser.id,
      username: loginUser.username,
      email: loginUser.email,
      token: newToken,
    });
  } else {
    res.status(400).json({ error: "Invalid credentials" });
  }
};

const signup = async (req, res) => {
  const result = validationResult(req);
  const hasErrors = !result.isEmpty();
  if (hasErrors) {
    return res.status(400).json({ errors: errors.array() });
  }
  // check existing users
  const { username, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({
      error: "This user has already existed.",
    });
  }
  const hashedPassword = await createNewHash(password);
  const newToken = await createNewToken(email);
  // Add new user to DB
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
  });
  if (newUser) {
    res.status(200).json({
      _id: newUser.id,
      username: newUser.username,
      email: newUser.email,
      token: newToken,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

module.exports = {
  signup,
  login,
};
