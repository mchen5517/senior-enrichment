const router = require('express').Router();
const db = require('../db');
const Campus = require('../db/models/campus');
const Student = require('../db/models/student');

router.get('/', (req, res, next) => {
  Campus.findAll()
  .then(campuses => res.json(campuses))
  .catch(err => console.log(err));
});

router.delete('/:id', (req, res, next) => {
  Campus.findById(req.params.id)
  .then(campus => campus.destroy())
  .then(campus => res.sendStatus(200))
  .catch(err => console.log(err));
});

router.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(campus => res.json(campus))
  .catch(err => console.log(err));
})

module.exports = router;