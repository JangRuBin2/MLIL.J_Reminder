import React from "react";
import Content from "../createReminder/content";
import DeadLine from "../createReminder/deadLine";
import Title from "../createReminder/title";
import MyCalendar from '../utils/calendar';
const EditPage = () : JSX.Element => {
  return (<><><h2>Create Reminder</h2>
    <div><DeadLine /></div>
    <div><Title /></div></><div><Content /></div><MyCalendar /></>
  )
}
export default EditPage;
