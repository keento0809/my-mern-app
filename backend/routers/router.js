const express = require("express");
const {
  getAllItem,
  getOneItem,
  postItem,
} = require("../controllers/controllers");
const router = express.Router();

router.get("/", getAllItem);
router.get("/:id", getOneItem);
router.post("/", postItem);
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`UPDATE REQ / id: ${id}`);
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`DELETE REQ / id: ${id}`);
});

module.exports = router;
