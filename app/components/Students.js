import React from 'react';
import { connect } from 'react-redux';

class StudentsPresentational extends React.Component {
  render () {
    return (
      <ul>
        {this.props.students.map(student => {
          return (
              <li key={student.id}>
                {student.name}
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