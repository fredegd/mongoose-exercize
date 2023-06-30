const Event = require("../models/event");

const createEvent = async (req, res) => {
  try {
    const {
      body: { name, description, location, organizer },
    } = req;

    const event = await Event.create({
      name,
      description,
      location,
      organizer,
    });
    res.status(201).json(event);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
//
//
//
//
const getEvents = async (req,res)=>{
  try{
  const events = await Event.find({}); 
  res.json(events); 
  }
  catch(err){
    res.status(500).send(err.message)
  }
}

//
//
//
//
//
const getEvent = async (req, res)=>{
  try{
    const {
      params:{id},
    }=req;
    const event = await Event.findById(id).populate("organizer","name email phoneNumber") 
  res.json(event)
  }
  catch(err){
    res.status(500).send(err.message)
  }
}
// //
// //
// //
// //
// //
// //
// //
// //
const updateEvent = async (req, res) => {
  try {
    const {body,params:{id},
        }=req;
    const events = await Event.findByIdAndUpdate(id, body,{new:true});//new:true returns the new updates
    res.status(201).json(events);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
   }
   };
// //
// //
// //
const joinEvent = async (req, res) => {
  try {
    const {
      body: { userId },
      params: { id },
    } = req;

    // const event = await Event.findById(id);
    // event.attendees = [...event.attendees,eventId]
    //    event.save()

    const event = await Event.findById(id)

    event.attendees = [...event.attendees, userId]

    event.save()

    res.status(201).json(event);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};
//
//
//
// //
// //
const deleteEvent = async (req, res) => {
  try {
    const { params:{id},
        }=req;
    const events = await Event.findByIdAndDelete(id);
    res.status(201).json(events);
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message);
  }
};

module.exports = {
  createEvent,
  getEvents,
  getEvent,
  joinEvent,
  updateEvent,
  deleteEvent
};
