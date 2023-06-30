const express = require("express");
const {
  createEvent,
  joinEvent,
  getEvents,
  getEvent,
  updateEvent,
  deleteEvent
} = require("../controllers/events");

const eventRouter = express.Router();

eventRouter.post("/", createEvent);
eventRouter.get("/", getEvents);
eventRouter.get("/:id", getEvent);
eventRouter.put("/:id",updateEvent)
eventRouter.patch("/:id/join", joinEvent);
eventRouter.delete("/:id",deleteEvent)

module.exports = eventRouter;
