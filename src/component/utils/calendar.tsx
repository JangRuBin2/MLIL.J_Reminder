import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// 이벤트 데이터 예시
const events = [
  {
    title: '회의',
    start: new Date(2023, 8, 15, 10, 0),
    end: new Date(2023, 8, 15, 11, 30),
  },
  {
    title: '점심 시간',
    start: new Date(2023, 8, 15, 12, 0),
    end: new Date(2023, 8, 15, 13, 0),
  },
  // 다른 이벤트 데이터 추가
];

// localizer 설정
const localizer = momentLocalizer(moment);

function MyCalendar() {
  return (
    <div>
      <h1>나의 캘린더</h1>
      <Calendar
        localizer={localizer}
        events={events} // 이벤트 데이터 전달
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}

export default MyCalendar;
