import React from 'react';
import { connect } from 'react-redux';
import { addCampus } from '../redux/campuses';
import { Modal } from 'react-bootstrap';

class NewCampusPresentational extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      image: '',
    }
    this.onNameChange = this.onNameChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(evt) {
    this.setState({name: evt.target.value});
  }
  onImageChange(evt) {
    this.setState({image: evt.target.value});
  }
  onSubmit(evt) {
    evt.preventDefault();
    this.props.addCampus(
      this.state.name,
      this.state.image
    );
    this.setState({name: '', image: ''});
  }

  render() {
    return (
      <div>
        <Modal.Header closeButton>
          Add Campus
        </Modal.Header>
        <form onSubmit={this.onSubmit}>
          <Modal.Body>
            <label>Name</label>
            <div className="form-group">
              <input name="name" className="form-control" value={this.state.name} onChange={this.onNameChange} /> 
            </div>
            <label>Image URL</label>
            <div className="form-group">
              <input name="image" className="form-control" value={this.state.image} onChange={this.onImageChange} /> 
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" className="btn btn-default">Add Campus</button>  
          </Modal.Footer>      
        </form>
      </div>
    );
  };

}

export default connect(
  null,
  dispatch => ({
    addCampus: (name, image) => dispatch(addCampus(name, image))
  })
)(NewCampusPresentational);