// models/eventModel.js
import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
  // ... other fields as needed
});

const Event = mongoose.model('Event', eventSchema);
export default Event;
