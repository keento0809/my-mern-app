const User = require("../models/UserModels");

const getUser = async (req, res) => {
  const { email, token } = req.body;
  const user = await User.findOne({ email });
  user &&
    res.status(200).json({
      _id: user.id,
      username: user.username,
      email: user.email,
      token: token,
    });
  !user && res.status(400).json({ error: "Failed to get user." });
};

module.exports = {
  getUser,
};
