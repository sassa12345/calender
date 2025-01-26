import React, { useState } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function Calendar() {
  const [events, setEvents] = useState([]);

  const handleSelectSlot = ({ start, end }) => {
    const title = window.prompt('新しいイベントのタイトルを入力してください');
    if (title) {
      setEvents([...events, { start, end, title }]);
    }
  };

  const handleSelectEvent = (event) => {
    const action = window.prompt('イベントを編集するには新しいタイトルを入力してください。削除するには "delete" と入力してください。', event.title);
    if (action === 'delete') {
      setEvents(events.filter(e => e !== event));
    } else if (action) {
      setEvents(events.map(e => (e === event ? { ...e, title: action } : e)));
    }
  };

  return (
    <div>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
      />
    </div>
  );
}

export default Calendar;
