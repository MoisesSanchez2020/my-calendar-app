// In pages/api/events.js
import dbConnect from '../../utils/dbConnect'; // You'll create this next


export default async function handler(req, res) {
  await dbConnect();

  switch (req.method) {
    case 'GET':
      // Get all events
      const events = await Event.find({});
      res.status(200).json({ success: true, data: events });
      break;
    case 'POST':
      // Create a new event
      const event = await Event.create(req.body);
      res.status(201).json({ success: true, data: event });
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
