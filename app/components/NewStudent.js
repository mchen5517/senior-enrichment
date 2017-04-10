import React from 'react';
import { connect } from 'react-redux';
import { addStudent } from '../redux/students';
import { Modal } from 'react-bootstrap';

class NewStudentPresentational extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      campus: undefined
    }
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onCampusChange = this.onCampusChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onNameChange(evt) {
    this.setState({name: evt.target.value});
  }
  onEmailChange(evt) {
    this.setState({email: evt.target.value});
  }
  onCampusChange(evt) {
    this.setState({campus: evt.target.value});
  }
  onSubmit(evt) {
    evt.preventDefault();
    this.props.addStudent(
      this.state.name,
      this.state.email,
      this.state.campus
    );
    this.setState({name: '', email: '', campus: undefined});
  }


  render() {
    return (
      <div>
        <Modal.Header closeButton> 
          Add Student
        </Modal.Header>
        <form onSubmit={this.onSubmit}>
          <Modal.Body>
            <label>Name</label>
            <div className="form-group">
              <input name="name" className="form-control" value={this.state.name} onChange={this.onNameChange} /> 
            </div>
            <label>Email</label>
            <div className="form-group">
              <input name="email" className="form-control" value={this.state.email} onChange={this.onEmailChange} /> 
            </div>
            <label>Campus</label>
            <div className="form-group">
              <select name="campus" className="form-control" value={this.state.campus} onChange={this.onCampusChange} >
                <option>Nowhere</option>
                {this.props.campuses.map(campus => <option value={campus.id} key={campus.id}>{campus.name}</option>)}
              </select> 
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button type="submit" className="btn btn-default">Add Student</button>
          </Modal.Footer>
        </form>
      </div>
    );
  };

}

export default connect(
  state => ({campuses: state.campuses}),
  dispatch => ({
    addStudent: (name, email, campus) => dispatch(addStudent(name, email, campus))
  })
)(NewStudentPresentational);