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

export const fetchStudents = () => dispatch => {
  axios.get('/api/students')
  .then(res => res.data)
  .then(students => dispatch(init(students)))
  .catch(err => console.log(err));
}

// export const fetchStudent = (id) => {
//   return axios.get(`/api/students/${id}`)
//   .then(res => res.data)
//   .catch(err => console.log(err));
// }

export const updateStudent = (studentId, campusId) => dispatch => {
  return axios.put(`/api/students/${studentId}`, {campusId})
  .then(res => res.data)
  .then(student => dispatch(update(student)))
  .catch(err => console.log(err));
}