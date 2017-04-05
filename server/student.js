const router = require('express').Router();
const db = require('../db');
const Student = require('../db/models/student');

router.get('/', (req, res, next) => {
  Student.findAll()
  .then(students => res.json(students))
  .catch(err => console.log(err));
});

module.exports = router;