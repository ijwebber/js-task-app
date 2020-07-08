const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  time: {
    type: { Number, Number },
    required: false,
  },
});

module.exports = mongoose.model("Event", eventSchema);
