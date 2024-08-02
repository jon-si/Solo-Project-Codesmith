import React from "react";
import MainContainer from "./container/MainContainer.jsx";

const Calendar = props => {
  return (
  <div id="calendar">
    <h1 id="header">August</h1>
    <MainContainer updateDate={props.updateDate}/>
  </div>
  );
};

export default Calendar;