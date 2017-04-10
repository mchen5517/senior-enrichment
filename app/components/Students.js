import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { deleteStudent } from '../redux/students';
import { Modal } from 'react-bootstrap';

import NewStudent from './NewStudent'


class StudentsPresentational extends React.Component {
  render () {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.props.toggleModal}>
          <span className="glyphicon glyphicon-plus" /> Add Student
        </button>
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <td>Student Name</td>
              <td>Email Address</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody>
          {this.props.students.map(student => {
            return (
                <tr key={student.id}>
                  <td>
                    <Link to={`/students/${student.id}`}>
                      {student.name}
                    </Link>
                  </td>
                  <td>
                    {student.email}
                  </td>
                  <td>
                    <button 
                      className="btn btn-danger btn-sm" 
                      onClick={() => this.props.deleteStudent(student.id)}>
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                  </td>
                </tr>
              )
          })}
          </tbody>
        </table>
        <Modal show={this.props.modalOpen} onHide={this.props.toggleModal}>
          <NewStudent />
        </Modal>
      </div>
    )
  }
}

class StudentsContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal(){
    this.setState({modalOpen: !this.state.modalOpen});
  }
  render () {
    return (
      <StudentsPresentational
       modalOpen={this.state.modalOpen}
       toggleModal={this.toggleModal}
       students={this.props.students}
       deleteStudent={this.props.deleteStudent} />
    )
  }
}

export default connect(
    state => ({
      students: state.students
    }),
    dispatch => ({
      deleteStudent: (id) => dispatch(deleteStudent(id))
    })
  )(StudentsContainer);