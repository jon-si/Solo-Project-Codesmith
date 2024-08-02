// require('../.env').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;
const mongoURI = 'mongodb+srv://jonathansi778:fwtGwYw6j7OIXW71@cluster0.oayzujn.mongodb.net/';
mongoose.connect(mongoURI);

const eventsRouter = require('./routes/events.js');

app.use(express.json());
// app.use('/client', express.static(path.resolve(__dirname, '../client')));

app.use('/events', eventsRouter);
app.use('/events/add', eventsRouter);

app.get('/',
  (req, res) => {
    console.log('using server');
    return res.status(200).sendFile(path.resolve(__dirname, '../client/index.js'));
  }
);

/**
 * 404 handler
 */
app.use('/', (req,res) => {
  res.status(404).send('Not Found');
});
  
  /**
   * Global error handler
   */
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err });
});

mongoose.connection.once('open', () => {
  console.log('connected to mongo');
  app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });
})

  
module.exports = app;
  