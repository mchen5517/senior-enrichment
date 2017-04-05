import axios from 'axios';

const INIT   = "INIT_CAMPUS";
const CREATE = "CREATE_CAMPUS";
const UPDATE = "UPDATE_CAMPUS";
const REMOVE = "DELETE_CAMPUS";

const init = campuses => ({type: INIT, campuses});
const create = campus => ({type: CREATE, campus});
const update = campus => ({type: UPDATE, campus});
const destroy = id => ({type: REMOVE, campus});

export default function reducer (campuses = [], action){
  switch(action.type) {
    case INIT:
      return action.campuses;
    case CREATE:
      return [action.campus, ... campuses];
    case UPDATE:
      return campuses.filter(campus => action.campus.id === campus.id ? action.campus : campus)
    case REMOVE:
      return campuses.filter(campus => campus.id !==  action.id);
    default: return campuses;
  }
}