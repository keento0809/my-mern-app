require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const ItemRoutes = require("./routers/ItemRouter");
const AuthRoutes = require("./routers/AuthRouter");
const port = process.env.PORT || 4000;

// use express
const app = express();

app.use(express.json());
app.use("/items", ItemRoutes);
app.use("/auth", AuthRoutes);

// connect to MongoDB
connectDB();

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
