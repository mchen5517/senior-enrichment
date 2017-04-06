import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { deleteStudent } from '../redux/students';


class StudentsPresentational extends React.Component {
  render () {
    return (
      <table className="table table-hover table-striped">
        <thead>
          <tr>
            <td>Student Name</td>
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
  )(StudentsPresentational);