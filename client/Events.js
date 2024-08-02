import React, { Component } from "react";
import EventContainer from "./container/EventContainer.jsx";
import { Link } from 'react-router-dom';

class Events extends Component{
  constructor(props) {
    super(props);
    this.events = [];
    this.state = {
      fetchedEvents: false
    }
  }

  componentDidMount() {
    fetch(`./events/${this.props.currDate}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(res => res.json())
      .then(data => {
        console.log(data, 'component mounted');
        this.events = data;
        return this.setState({
          ...this.state,
          fetchedEvents: true
        });
      })
  }

  render() {
    if (!this.state.fetchedEvents) {
      return (
        <div>
          <h1>Loading events, please wait...</h1>
        </div>
      )
    }

    const spread = [];
    console.log(this.events);
    if (this.events.length === 0){
      spread.push(<h1>no events added to this date</h1>);
    }
    else
    this.events.forEach(ele => {
      const {date, name, start, end} = ele;
      console.log(date, name, start, end, 'checking');
      spread.push(<EventContainer eventDate={date} eventName={name} startTime={start} endTime={end}/>);
    })

    return (
      <div id="eventpage">
        events
        {this.props.currDate}
        {spread}
        <Link to="/eventadder">
          <button className="events">new Event</button>
        </Link>
    
        <Link to="/">
          <button> back </button>
        </Link>
      </div>
      );
  }
}

export default Events;