const bcrypt = require("bcrypt");

const compareHash = async (password, userPassword) => {
  return await bcrypt.compare(password, userPassword);
};

module.exports = compareHash;
