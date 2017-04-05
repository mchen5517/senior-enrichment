'use strict'
const api = require('express').Router();
const db = require('../db');
const studentRouter = require('./student');

api.use('/students', studentRouter);

module.exports = api