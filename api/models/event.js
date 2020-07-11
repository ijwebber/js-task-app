const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  time: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Event", eventSchema);
