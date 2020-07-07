const express = require("express");
const router = express.Router();
const Event = require("../models/event");

// Getting all events
router.get("/", async (req, res) => {
  console.log("req.body.event");
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Getting a event
router.get("/:id", getEvent, (req, res) => {
  res.send(res.event);
});

// Creating a event
router.post("/", async (req, res) => {
  const event = new Event({
    event: req.body.event,
  });

  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Updating a event
router.patch("/:id", getEvent, async (req, res) => {
  if (req.body.event != null) {
    res.event.event = req.body.event;
  }
  if (req.body.status != null) {
    res.event.status = req.body.status;
  }
  try {
    const updatedEvent = await res.event.save();
    res.json(updatedEvent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Deleteing a event
router.delete("/:id", getEvent, async (req, res) => {
  try {
    await res.event.remove();
    res.json({ message: "Deleted Event" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getEvent(req, res, next) {
  let event;
  try {
    event = await Event.findById(req.params.id);
    if (event == null) {
      return res.status(404).json({ message: "Cannot find event" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.event = event;
  next();
}

module.exports = router;
