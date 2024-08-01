const express = require('express');

const eventsController = require('../controller/eventsController.js');

const router = express.Router();

router.get('/:id',
  eventsController.getEvents,
  (req, res) => {
    return res.status(250).json(res.locals);
  }
)

router.post('/',
  eventsController.postEvents,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

module.exports = router;