const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.header("authToken");
  if (!token) {
    return res.status(400).json({
      errors: {
        msg: "No token found",
      },
    });
  }

  try {
    let currentUser = await JWT.verify(token, process.env.SECRET_KEY);
    req.body.token = token;
    req.body.email = currentUser.email;
    next();
  } catch (error) {
    return res.status(400).json({
      errors: {
        msg: "Invalid token",
      },
    });
  }
};
