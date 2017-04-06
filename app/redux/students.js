import axios from 'axios';
import {REMOVE as REMOVE_CAMPUS} from './campuses';

const INIT   = "INIT_STUDENT";
const CREATE = "CREATE_STUDENT";
const UPDATE = "UPDATE_STUDENT";
const REMOVE = "DELETE_STUDENT";

const init = students => ({type: INIT, students});
const create = student => ({type: CREATE, student});
const update = student => ({type: UPDATE, student});
const destroy = id => ({type: REMOVE, id});

export default function reducer (students = [], action){
  switch(action.type) {
    case INIT:
      return action.students;
    case CREATE:
      return [action.student, ... students];
    case UPDATE:
      return students.map(student => action.student.id === student.id ? action.student : student)
    case REMOVE:
      return students.filter(student => student.id !==  action.id);
    case REMOVE_CAMPUS:
      return students.map(student => {
        if(student.campusId === action.id) student.campusId = null;
        return student;
      })
    default: return students;
  }
}

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
  .then(res => res.data)
  .then(students => dispatch(init(students)))
  .catch(err => console.log(err));
}

export const updateStudent = (studentId, newValuesObj) => dispatch => {
  return axios.put(`/api/students/${studentId}`, newValuesObj)
  .then(res => res.data)
  .then(student => dispatch(update(student)))
  .catch(err => console.log(err));
}

export const deleteStudent = (id) => dispatch => {
  return axios.delete(`/api/students/${id}`)
  .then(() => dispatch(destroy(id)))
  .catch(err => console.log(err));
}

export const addStudent = (name, email, campusId) => dispatch => {
  return axios.post('/api/students', {name, email, campusId})
  .then(res => res.data)
  .then(student => dispatch(create(student)))
  .catch(err => console.log(err));
}