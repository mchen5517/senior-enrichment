const router = require('express').Router();
const db = require('../db');
const Campus = require('../db/models/campus');

router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(err => console.log(err));
});

module.exports = router;