import React from 'react';
import { Calendar, momentLocalizer, Event } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

interface MyEvent extends Event {
   resourceId?: number;
   id: number,
   title: string
}

const events: MyEvent[] = [
   {
      id: 0,
      title: 'Onboarding Session',
      start: new Date(2023, 5, 20, 9, 0),
      end: new Date(2023, 5, 20, 10, 0),
   },
   {
      id: 1,
      title: 'Interview with D...',
      start: new Date(2023, 5, 20, 11, 0),
      end: new Date(2023, 5, 20, 12, 0),
   },
   {
      id: 2,
      title: 'Lunch break',
      start: new Date(2023, 5, 20, 12, 0),
      end: new Date(2023, 5, 20, 13, 0),
   },
   {
      id: 3,
      title: 'Town Hall Meeting',
      start: new Date(2023, 5, 20, 14, 0),
      end: new Date(2023, 5, 20, 15, 0),
   },
   // Add more events here
];

const MyCalendar: React.FC = () => (
   <Calendar
      className='rounded-none h-[500px]'
      localizer={localizer}
      events={events}
      startAccessor="start"
      endAccessor="end"
      defaultView="week"
      views={['week']}
      step={60}
      timeslots={1}
      defaultDate={new Date(2023, 5, 20)}
      eventPropGetter={(event) => {
         const backgroundColor = event?.title?.includes('break') ? '#f0ad4e' : '#5bc0de';
         return { style: { backgroundColor } };
      }}
      min={new Date(2023, 5, 20, 9, 0)} // Start time: 9 AM
      max={new Date(2023, 5, 20, 18, 0)} // End time: 5 PM
   />
);

export default MyCalendar;
