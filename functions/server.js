require("dotenv").config();
const functions = require("firebase-functions");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected To Database"));

app.use(
  cors()
);
app.use(express.json());

const todoRouter = require("./routes/todo");
app.use("/todo", todoRouter);

exports.api = functions.https.onRequest(app);
