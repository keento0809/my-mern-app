const express = require("express");
const mongoose = require("mongoose");
const port = process.env.PORT || 4000;
// activate express
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mssg: "home" });
});

app.get("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Your ID is ${id}!`);
});

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
