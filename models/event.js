const mongoose = require("mongoose")

const eventSchema = new mongoose.Schema({
name:{type: String, required:true},
description:{type: String, required:true},
location:{ type: String, required:true },
organizer:{ type: mongoose.Schema.Types.ObjectId,  ref: "user"},
attendees:[{type: mongoose.Schema.Types.ObjectId, ref: "user"}],
})

const Event = mongoose.model('event',eventSchema)

module.exports = Event

