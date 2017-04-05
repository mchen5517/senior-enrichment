import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStudent } from '../redux/students';

class StudentPresentational extends React.Component {
  render () {
    return (
      <div>
        { this.props.student && this.props.student.name }
      </div>
    )
  }
}

export default connect(
    (state, ownProps) => ({
      // since the student is already on our state (on the students array), let's find the right one
      student: _.find(state.students, _.matchesProperty("id", Number(ownProps.params.id)))
    })
  )(StudentPresentational);
