require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const Routes = require("./routers/router");
const port = process.env.PORT || 4000;

// init express
const app = express();

app.use(express.json());
app.use("/items", Routes);

// connect to MongoDB
connectDB();

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
