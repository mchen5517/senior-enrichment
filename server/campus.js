const router = require('express').Router();
const db = require('../db');
const Campus = require('../db/models/campus');
const Student = require('../db/models/student');

router.get('/', (req, res, next) => {
  Campus.findAll({ include: [Student] })
  .then(campuses => res.json(campuses))
  .catch(err => console.log(err));
});

module.exports = router;