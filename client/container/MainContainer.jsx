import React from 'react';
import WeekContainer  from './WeekContainer.jsx';

const MainContainer = props => {
  const weeks = [];
  for (let i = 0; i < 7; i++){
    weeks.push(<WeekContainer dateId={i} updateDate={props.updateDate} key={i}/>)
  }
  return (
  <div className="container">
    <h1 id="header">Calendar</h1>
    <div className="outerBox">
        {weeks}
    </div>
  </div>
  );
}

export default MainContainer;