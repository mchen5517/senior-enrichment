import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class StudentPresentational extends React.Component {
  render () {
    return (
      <div>
        { this.props.student && (
          <div>
            <p>
              {this.props.student.name}
            </p> { this.props.student.campus && (
                <p>Currently at:{" "}
                  <Link to={`/campuses/${this.props.student.campus.id}`}>
                    {this.props.student.campus.name}
                  </Link>
                </p>
            )}
          </div>
        )}
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
