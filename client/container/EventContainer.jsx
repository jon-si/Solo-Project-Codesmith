import React from 'react';
import { Link } from 'react-router-dom';

const EventContainer = props => {
  return (
    <div className="eventBox">
      <div className="dateNum">{props.date}</div>
      <Link to="/events">
        <button className="events"></button>
      </Link>
    </div>
  );
}

export default EventContainer;