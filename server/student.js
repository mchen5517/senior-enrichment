const router = require('express').Router();
const db = require('../db');
const Student = require('../db/models/student');
const Campus = require('../db/models/campus');

router.get('/', (req, res, next) => {
  Student.findAll({include: Campus})
  .then(students => res.json(students))
  .catch(err => console.log(err));
});

// router.get('/:id', (req, res, next) => {
//   Student.findById(req.params.id)
//   .then(student => res.json(student))
//   .catch(err => console.log(err));
// });


module.exports = router;