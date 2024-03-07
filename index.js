require("dotenv").config();
const morgan = require("morgan");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const server = express();
const path = require("path");

const productRouter = require("./routes/product");

mongoose.set("strictQuery", false);

// database
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("database connect is successfully!");
  } catch (error) {
    console.log(error);
  }
};

// middlewares
server.use(cors());
server.use(morgan());
server.use(express.json());
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use("/products", productRouter.router);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

connectDatabase();

server.listen(process.env.PORT, () => {
  console.log("server is ready port 8080");
});
