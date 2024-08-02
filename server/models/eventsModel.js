const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
    date: { type: Number, required: true, unique: false },
    name: { type: String, required: true, unique: false },
    start: { type: Object, required: true, unique: true},
    end: { type: Object, required: true },
  });
  
  module.exports = mongoose.model('Events', eventsSchema);