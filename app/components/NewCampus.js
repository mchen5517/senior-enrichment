import React from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../redux/campuses';

class NewStudentPresentational extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={(evt) => this.props.addCampus(evt)}>
          <label>Name</label>
          <div className="form-group">
            <input name="name" /> 
          </div>
          <label>Image URL</label>
          <div className="form-group">
            <input name="image" /> 
          </div>
          <button type="summit" className="btn btn-default">Add Campus</button>        
        </form>
      </div>
    );
  };

}

export default connect(
  null,
  dispatch => ({
    addCampus: (evt) => {
      evt.preventDefault();
      dispatch(addCampus(
        evt.target.name.value,
        evt.target.image.value
      ))
      evt.target.name.value = "";
      evt.target.image.value = "";
    }})
  )(NewStudentPresentational);