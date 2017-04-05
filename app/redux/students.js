import axios from 'axios';

const INIT   = "INIT_STUDENT";
const CREATE = "CREATE_STUDENT";
const UPDATE = "UPDATE_STUDENT";
const REMOVE = "DELETE_STUDENT";

const init = students => ({type: INIT, students});
const create = student => ({type: CREATE, student});
const update = student => ({type: UPDATE, student});
const destroy = id => ({type: REMOVE, student});

export default function reducer (students = [], action){
  switch(action.type) {
    case INIT:
      return action.students;
    case CREATE:
      return [action.student, ... students];
    case UPDATE:
      return students.filter(student => action.student.id === student.id ? action.student : student)
    case REMOVE:
      return students.filter(student => student.id !==  action.id);
    default: return students;
  }
}