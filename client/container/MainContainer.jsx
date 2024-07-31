import React from 'react';
import WeekContainer  from './WeekContainer.jsx';

const MainContainer = props => {
  return (
  <div className="container">
    <div className="outerBox">
        <h1 id="header">Calendar</h1>
        <WeekContainer/>
    </div>
  </div>
  );
}

export default MainContainer;