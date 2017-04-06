import React from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../redux/students';

class NewStudentPresentational extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={(evt) => this.props.addStudent(evt)}>
          <label>Name</label>
          <div className="form-group">
            <input name="name" /> 
          </div>
          <label>Email</label>
          <div className="form-group">
            <input name="email" /> 
          </div>
          <label>Campus</label>
          <div className="form-group">
            <select name="campus">
              <option>Nowhere</option>
              {this.props.campuses.map(campus => <option value={campus.id} key={campus.id}>{campus.name}</option>)}
            </select> 
          </div>
          <button type="summit" className="btn btn-default">Add Student</button>        
        </form>
      </div>
    );
  };

}

export default connect(
  state => ({campuses: state.campuses}),
  dispatch => ({
    addStudent: (evt) => {
      evt.preventDefault();
      dispatch(addStudent(
        evt.target.name.value,
        evt.target.email.value,
        Number(evt.target.campus.value)
      ))
      evt.target.name.value = "";
      evt.target.email.value = "";
      evt.target.campus.value = null;
    }})
  )(NewStudentPresentational);