const express = require("express");
const {
  getAllItem,
  getUserItem,
  postUserItem,
  updateItem,
  deleteItem,
  reset,
} = require("../controllers/ItemControllers");
const router = express.Router();

router.get("/", getAllItem);
router.get("/:userId", getUserItem);
router.post("/:userId", postUserItem);
router.patch("/:id", updateItem);
router.delete("/", reset);
router.delete("/:id", deleteItem);

module.exports = router;
