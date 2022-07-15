const { validationResult } = require("express-validator");
const { users } = require("../db");
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
  let existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    return res.status(400).json({
      error: "This user has already existed.",
    });
  }

  // hash password
  const hashed = await bcrypt.hash(password, 10);
  // I'll replace this to database
  users.push({
    email,
    password: hashed,
  });

  // issue token
  const payload = {
    email,
  };

  const option = {
    expiresIn: 3600000,
  };

  const token = await jwt.sign(payload, process.env.SECRET_KEY, option);
};
