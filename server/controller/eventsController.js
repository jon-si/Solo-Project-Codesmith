const fs = require('fs/promises');
const fsCallback = require('fs');
const path = require('path');
const Events = require('../models/eventsModel');

const eventsController = {};

eventsController.getEvents = (req, res, next) => {
  console.log(req.params.id, 'getting events');

  //take from database
  Events.find({date: req.params.id})
  .then(event => {
    console.log(event);
    res.locals.eventList = event;
    return next();
  })
  .catch(err => {
    return next(err);
  })
}

eventsController.postEvents = (req, res, next) => {
  const {date, name, startTime, endTime} = req.body
  // console.log(date, name, startTime, endTime);
  Events.create({date, name, start: startTime, end: endTime})
  .then(user => {
    // console.log(user);
    return next();
  })
  .catch(err => {
    return next(err);
  })
}

module.exports = eventsController;