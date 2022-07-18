const express = require("express");
const {
  getAllItem,
  getUserItem,
  getOneItem,
  postItem,
  postUserItem,
  updateItem,
  deleteItem,
  reset,
} = require("../controllers/ItemControllers");
const router = express.Router();

router.get("/", getAllItem);
router.get("/:userId", getUserItem);
router.get("/:id", getOneItem);
router.post("/", postItem);
router.post("/:userId", postUserItem);
router.patch("/:id", updateItem);
// test
router.delete("/", reset);
router.delete("/:id", deleteItem);

module.exports = router;
