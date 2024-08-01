import React, { useState } from "react";
import { Link } from 'react-router-dom';

const EventAdder = props => {
  const [state, setState] = useState({
    name: 'jon',
    start: '0:00',
    end: '12:00',
  });

  const parseTime = (time) => {
    console.log(time);
    const splitTime = time.split(':');
    if (splitTime.length !== 2 || isNaN(Number(splitTime[0])) || isNaN(Number(splitTime[1]))) {
      return undefined;
    }

    return {
      hour: Number(splitTime[0]),
      minute: Number(splitTime[1]),
    }
  }

  const handleSubmit = () => {
    console.log(state);
    // const [name, start, end] = state; 
    let eventInfo = {};
    const startTime = parseTime(state.start);
    const endTime = parseTime(state.end);
    const name = state.name; 
    if (startTime && endTime) {
      eventInfo = {
        name, startTime, endTime,
        date: props.currDate,
      };
    };
    console.log(eventInfo);
    fetch('./events/add', {
      method: 'POST',
      body: JSON.stringify(eventInfo),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })

    return;
  };

  const handleInput = (e) => {
    const{ name, value } = e.target;
    setState({
      ...state,
      [name]: value});
    console.log(state);
  };

  return (
  <div id="eventadder">
    event adder
    <form></form>
    <div className="eventFields">
      <label htmlFor="name">Event Name:</label>
      <input name="name" placeholder="Name" value={state.name} onChange={handleInput} />
    </div>

    <div className="eventFields">
      <label htmlFor="name">Start Time:</label>
      <input name="start" placeholder="00:00" value={state.start} onChange={handleInput} />
    </div>  

    <div className="eventFields">
      <label htmlFor="name">End Time:</label>
      <input name="end" placeholder="00:00" value={state.end} onChange={handleInput} />
    </div>  
    <Link to="/">
      <button onClick={handleSubmit}> submit </button>
    </Link>

    <Link to="/">
      <button> back </button>
    </Link>
  </div>
  
  );
};

export default EventAdder;