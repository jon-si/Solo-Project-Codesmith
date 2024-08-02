import React from 'react';
import { Link } from 'react-router-dom';

const EventContainer = props => {
  return (
    <div className="eventBox">
      
      <div>Name: {props.eventName}</div>
      <div>Start time: {props.startTime.hour} : {props.startTime.minute} </div>
      <div>End time: {props.endTime.hour} : {props.endTime.minute} </div>
      <Link to="/events">
        <button className="events"></button>
      </Link>
    </div>
  );
}

export default EventContainer;