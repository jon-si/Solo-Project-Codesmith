const fs = require('fs/promises');
const fsCallback = require('fs');
const path = require('path');

const eventsController = {};

eventsController.getEvents = (req, res, next) => {
  console.log('getting events');

  //take from database
  res.locals.events = {
    codesmith: {start: "1:30", end: "10:30"},
  }
  return next();
}

eventsController.postEvents = (req, res, next) => {
  const {name, start, end} = req.body
  console.log(req.body);
  res.locals.block = req.body;
  return next();
}

module.exports = eventsController;