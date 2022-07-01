const express = require("express");
const {
  getAllItem,
  getOneItem,
  postItem,
  updateItem,
  deleteItem,
} = require("../controllers/controllers");
const router = express.Router();

router.get("/", getAllItem);
router.get("/:id", getOneItem);
router.post("/", postItem);
router.patch("/:id", updateItem);
router.delete("/:id", deleteItem);

module.exports = router;
