require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Routes = require("./routers/router");
const port = process.env.PORT || 4000;
// activate express
const app = express();

app.use(express.json());
app.use("/", Routes);

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
