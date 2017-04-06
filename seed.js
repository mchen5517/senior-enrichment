const db = require('./db');
const Student = require('./db/models/student');
const Campus = require('./db/models/campus');

var Promise = require('bluebird');

db.sync({force: true})
.then(() => {
  const campuses = [];
  campuses.push(Campus.build({
    name: 'Aselia University',
    image: 'http://blog.talesofgame.com/wp-content/uploads/2016/04/TalesArticle_06.jpg'
  }));
  campuses.push(Campus.build({
    name: 'The Zoo',
    image: 'https://i.ytimg.com/vi/oV_idfKcCdQ/maxresdefault.jpg'
  }));
  campuses.push(Campus.build({
    name: 'University of Taipun',
    image: 'http://static.boredpanda.com/blog/wp-content/uploads/2015/11/puns-galore-3__880.jpg'
  }));
  return Promise.map(campuses, campus => campus.save());
})
.then(() => {
  const students = [];
  students.push(Student.build({
    name: 'Hugh Jazz',
    email: 'barty@gmail.com',
    campusId: 3
  }));
  students.push(Student.build({
    name: 'Captain Aifread',
    email: 'aifread@cpt.com',
    campusId: 1
  }));
  students.push(Student.build({
    name: 'Fox McCloud',
    email: 'sf64number1@sf64.org',
    campusId: 2
  }));
  students.push(Student.build({
    name: 'Lloyd Irving',
    email: 'im18andaminthesameclassasa12yearold@tos.com',
    campusId: 1
  }));
  students.push(Student.build({
    name: 'Peppy Hare',
    email: 'barrelroll@sf64.org',
    campusId: 2
  }));
  return Promise.map(students, student => student.save());
})
.then(() => console.log("Seeding success!"))
.catch(err => console.log("Seeding failed!\n", err))
.finally(() => {
  db.close();
  return null;
});