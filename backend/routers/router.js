const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("GET REQ");
});
router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`GET REQ / id: ${id} `);
});
router.post("/", (req, res) => {
  res.send("POST REQ");
});
router.patch("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`UPDATE REQ / id: ${id}`);
});
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`DELETE REQ / id: ${id}`);
});

module.exports = router;
