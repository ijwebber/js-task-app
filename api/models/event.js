const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now + 1,
  },
  time: {},
});

module.exports = mongoose.model("Todo", todoSchema);
