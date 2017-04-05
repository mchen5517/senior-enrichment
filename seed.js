const db = require('./db');
const Student = require('./db/models/student');
const Campus = require('./db/models/campus');

var Promise = require('bluebird');

db.sync({force: true})
.then(() => {
  const campuses = [];
  campuses.push(Campus.build({
    name: 'Aselia University',
    img: 'http://blog.talesofgame.com/wp-content/uploads/2016/04/TalesArticle_06.jpg'
  }));
  campuses.push(Campus.build({
    name: 'The Zoo',
    img: 'https://i.ytimg.com/vi/oV_idfKcCdQ/maxresdefault.jpg'
  }));
  campuses.push(Campus.build({
    name: 'University of Taipun',
    img: 'http://blog.talesofgame.com/wp-content/uploads/2016/04/TalesArticle_06.jpg'
  }));
  return Promise.map(campuses, campus => campus.save());
})
.then(() => {
  const students = [];
  students.push(Student.build({
    name: 'Hugh Jazz',
    email: 'barty@gmail.com'
  }));
  students.push(Student.build({
    name: 'Captain Aifread',
    email: 'aifread@cpt.com'
  }));
  students.push(Student.build({
    name: 'Fox McCloud',
    email: 'sf64number1@sf64.org'
  }));
  students.push(Student.build({
    name: 'Lloyd Irving',
    email: 'igotoschoolwitha12yearold@tos.com'
  }));
  students.push(Student.build({
    name: 'Peppy Hare',
    email: 'barrelroll@sf64.org'
  }));
  return Promise.map(students, student => student.save());
})
.then(() => console.log("Seeding success!"))
.catch(err => console.log("Seeding failed!\n", err))
.finally(() => {
  db.close();
  return null;
});