'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into Sequelize so any other part of the application could call Sequelize.model('user') OR Sequelize.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)

const User = require('./user');
const Campus = require('./campus');
const Student = require('./student');
Student.belongsTo(Campus);
Campus.hasMany(Student);

module.exports = {User, Campus, Student};
