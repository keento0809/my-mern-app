const express = require("express");
const {
  getAllItem,
  getOneItem,
  postItem,
  updateItem,
  deleteItem,
  reset,
} = require("../controllers/ItemControllers");
const router = express.Router();

router.get("/", getAllItem);
router.get("/:id", getOneItem);
router.post("/", postItem);
router.patch("/:id", updateItem);
// test
router.delete("/", reset);
router.delete("/:id", deleteItem);

module.exports = router;
