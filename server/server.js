const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

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
  
app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });
  
module.exports = app;
  