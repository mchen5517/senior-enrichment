'use strict'
const api = require('express').Router();
const db = require('../db');
const studentRouter = require('./student');
const campusRouter = require('./campus');

api.use('/students', studentRouter);
api.use('/campuses', campusRouter);


module.exports = api