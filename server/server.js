const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");
const foodRoute = require("./routes/foodRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());
app.use("/api/food", foodRoute);
app.use("/api/user", userRoute);
app.use("/api/order", orderRoute);

app.get("/", (req, res) => {
  res.send("Food API Running...");
});





const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});