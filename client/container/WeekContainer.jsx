import React from 'react';
import { connect } from 'react-redux';
import DayContainer from './DayContainer.jsx';

const dayOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const BUFFER = 4; 
const mapStateToProps = ({
  
})

const WeekContainer = props => {
  const days = [];
  let i =props.dateId + BUFFER - 7;
  while (i <= 31) {
    if (i <= 0) {days.push(<DayContainer date='' updateDate={props.updateDate} key={i}/>)}
    else days.push(<DayContainer date={i} updateDate={props.updateDate} key={i}/>)
    i += 7;
  }
  return (
    <div className="weekBox">
      <h2>{dayOfWeek[props.dateId]}</h2>
      {days}
    </div>
  );
}

export default WeekContainer;