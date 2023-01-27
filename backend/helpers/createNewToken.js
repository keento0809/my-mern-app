const jwt = require("jsonwebtoken");

const createNewToken = async (email) => {
  // set options
  const payload = { email };
  const option = { expiresIn: 3600000 };
  // issue new token
  const newToken = await jwt.sign(payload, process.env.SECRET_KEY, option);
  return { newToken, hashedPassword };
};

module.exports = { createNewToken };
