const express = require("express");
const router = express.Router();
const { signup } = require("../controllers/AuthControllers");

router.post("/login", (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400);
    throw Error("Invalid login");
  } else {
    res.status(200).json({ msg: "login success" });
  }
});

router.post("/signup", signup);

module.exports = router;
