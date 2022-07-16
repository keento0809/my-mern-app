const User = require("../models/UserModels");

const getUser = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });
  user && res.status(200).json({ msg: "success" });
};

module.exports = {
  getUser,
};
