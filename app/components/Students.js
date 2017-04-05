import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class StudentsPresentational extends React.Component {
  render () {
    return (
      <ul>
        {this.props.students.map(student => {
          return (
              <li key={student.id}>
                <Link to={`/students/${student.id}`}>
                  {student.name}
                </Link>
              </li>
            )
        })}
      </ul>
    )
  }
}

export default connect(
    state => ({
      students: state.students
    }),
    dispatch => ({

    })
  )(StudentsPresentational);