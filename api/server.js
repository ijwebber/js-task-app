require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Connected To Database"));

app.use(express.json());

const todoRouter = require("./routes/todo");
app.use("/todo", todoRouter);

const eventRouter = require("./routes/event");
app.use("/event", eventRouter);

app.listen(8000, () => console.log("Server has started!"));
