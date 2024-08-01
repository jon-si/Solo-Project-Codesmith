import React from "react";
import MainContainer from "./container/MainContainer.jsx";

const Calendar = props => {
  console.log('here');
  return (
  <div id="calendar">
    <MainContainer updateDate={props.updateDate}/>
  </div>
  );
};

export default Calendar;