const express = require("express");
const router = express.Router();
const { getUser } = require("../controllers/UserController");
const checkUser = require("../middleware/CheckUser");

router.get("/", checkUser, getUser);

module.exports = router;
