require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
const ItemRoutes = require("./routers/ItemRouter");
const AuthRoutes = require("./routers/AuthRouter");
const UserRoutes = require("./routers/UserRouter");
// const port = 8080;
const port = process.env.PORT;

// use express
const app = express();

app.use(
  cors({
    origin: "https://shoppinglistmernapp.herokuapp.com/",
  })
);
app.use(express.json());
app.use("/items", ItemRoutes);
app.use("/auth", AuthRoutes);
app.use("/user", UserRoutes);

// test
app.get("/", (req, res) => {
  res.send("Hello");
});

// connect to MongoDB
connectDB();

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
