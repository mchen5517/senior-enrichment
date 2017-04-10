import React from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../redux/campuses';
import { Modal } from 'react-bootstrap';

class NewCampusPresentational extends React.Component {

  render() {
    return (
      <div>
        <form onSubmit={this.props.addCampus}>
          <label>Name</label>
          <div className="form-group">
            <input name="name" /> 
          </div>
          <label>Image URL</label>
          <div className="form-group">
            <input name="image" /> 
          </div>
          <button type="submit" className="btn btn-default">Add Campus</button>        
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
  )(NewCampusPresentational);