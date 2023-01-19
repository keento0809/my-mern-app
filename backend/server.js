require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const ItemRoutes = require("./routers/ItemRouter");
const AuthRoutes = require("./routers/AuthRouter");
const UserRoutes = require("./routers/UserRouter");
const port =
  process.env.NODE_ENV === "development"
    ? process.env.PORT_LOCAL
    : process.env.PORT;
connectDB();

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.use("/items", ItemRoutes);
app.use("/auth", AuthRoutes);
app.use("/user", UserRoutes);
app.get("/", (req, res) => {
  res.send("Server is running.");
});
app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
