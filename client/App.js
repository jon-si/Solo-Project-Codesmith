import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';

import Calendar from "./Calendar.js";
import Events from "./Events.js";
import EventAdder from "./EventAdder.js";

import MainContainer from "./container/MainContainer.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiResponse: "",
      currentDate: 0
    }

    this.updateDate = this.updateDate.bind(this);
  }

  componentDidMount() {
    fetch("/")
      .then (res => res.json())
      .then((res) => {
        this.setState({apiResponse: res})
      })
  }

  updateDate(newDate) {
    this.setState({currentDate: newDate});
  }

  render() {
    return (
      <div id="app">
        <Routes>
          <Route
            exact
            path="/"
            Component={
              () => <Calendar 
              updateDate={this.updateDate}
              />
            }
          />
          <Route
            exact
            path="/events"
            Component={
              () => <Events 
              currDate={this.state.currentDate}
              />
            }
          />
          <Route
            exact
            path="/eventadder"
            Component={
              () => <EventAdder
              currDate={this.state.currentDate}
              />
            }
          />
        </Routes>
      </div>
    )
  }
}

export default App;
