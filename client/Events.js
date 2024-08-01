import React from "react";
import EventContainer from "./container/EventContainer.jsx";
import { Link } from 'react-router-dom';

const Events = props => {

  let events = [];

  for (let i = 0; i < 2; i++){
    events.push(<EventContainer/>);
  }

  return (
  <div id="eventpage">
    events
    {props.currDate}

    <Link to="/eventadder">
      <button className="events">new Event</button>
    </Link>

    <Link to="/">
      <button> back </button>
    </Link>
  </div>
  
  );
};

export default Events;