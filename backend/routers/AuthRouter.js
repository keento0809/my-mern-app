const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  if (req.body.email) {
    res.status(200).json({ msg: "login done" });
  } else {
    res.status(400).json({ error: "Invalid login" });
  }
});

router.post("/signup", (req, res) => {
  if (req.body.email) {
    res.status(200).json({ msg: "login done" });
  } else {
    res.status(400).json({ error: "Invalid login" });
  }
});

module.exports = router;
