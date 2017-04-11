import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { deleteStudent, sortStudentsByName, sortStudentsByEmail } from '../redux/students';
import { Modal } from 'react-bootstrap';

import NewStudent from './NewStudent'


class StudentsPresentational extends React.Component {

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
      <div>
        <button className="btn btn-primary" onClick={this.toggleModal}>
          <span className="glyphicon glyphicon-plus" /> Add Student
        </button>
        <table className="table table-hover table-striped table-bordered">
          <thead>
            <tr>
              <td>
                Student Name 
                <button className="btn btn-link" onClick={this.props.sortStudentsByName} >
                  <span className="glyphicon glyphicon-sort-by-alphabet"/>
                </button>
              </td>
              <td>
                Email Address
                <button className="btn btn-link" onClick={this.props.sortStudentsByEmail} >
                  <span className="glyphicon glyphicon-sort-by-attributes"/>
                </button>
              </td>
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
        <Modal show={this.state.modalOpen} onHide={this.toggleModal}>
          <NewStudent />
        </Modal>
      </div>
    )
  }
}


export default connect(
    state => ({
      students: state.students
    }),
    dispatch => ({
      deleteStudent: (id) => dispatch(deleteStudent(id)),
      sortStudentsByName: () => dispatch(sortStudentsByName()),
      sortStudentsByEmail: () => dispatch(sortStudentsByEmail())
    })
  )(StudentsPresentational);