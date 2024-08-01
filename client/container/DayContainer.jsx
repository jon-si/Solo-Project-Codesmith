import React from 'react';
import { Link } from 'react-router-dom';

const DayContainer = ({date, updateDate}) => {


  return (
    <div className="dayBox">
      <div className="dateNum">{date}</div>
      <Link to="/events">
        <button className="events" onClick={() => updateDate(date)}></button>
      </Link>
    </div>
  );
}

export default DayContainer;