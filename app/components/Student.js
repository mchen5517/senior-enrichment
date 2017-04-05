import React from 'react';
import { connect } from 'react-redux';

class StudentPresentational extends React.Component {
  render () {
    return (
      <div>
      </div>
    )
  }
}

export default connect(
    state => ({
      student: state.student
    }),
    dispatch => ({

    })
  )(StudentsPresentational);