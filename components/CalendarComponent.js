import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const localizer = momentLocalizer(moment);

const CalendarComponent = () => {
  const [events, setEvents] = useState([
    // Pre-existing events
    {
      start: moment().toDate(),
      end: moment().add(1, "hours").toDate(),
      title: "Add Event",
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: '',
    start: moment().toDate(),
    end: moment().add(1, "hours").toDate(),
  });

  const handleAddEvent = () => {
    if (newEvent.title) {
      const adjustedEvent = {
        ...newEvent,
        end: new Date(newEvent.start.getTime() + 60 * 60 * 1000) // Assuming 1 hour duration
      };
      
      setEvents([...events, adjustedEvent]);
      setNewEvent({ title: '', start: moment().toDate(), end: moment().add(1, "hours").toDate() }); // Reset the form
    }
  };

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="date"
          value={moment(newEvent.start).format('YYYY-MM-DD')}
          onChange={(e) => setNewEvent({ ...newEvent, start: new Date(e.target.value) })}
        />
        <input
          type="time"
          value={moment(newEvent.start).format('HH:mm')}
          onChange={(e) => {
            const time = e.target.value.split(':');
            const newStart = new Date(newEvent.start);
            newStart.setHours(parseInt(time[0], 10), parseInt(time[1], 10));
            setNewEvent({ ...newEvent, start: newStart });
          }}
        />
        <button onClick={handleAddEvent}>Add Event</button>
      </div>
    </div>
  );
};

export default CalendarComponent;
