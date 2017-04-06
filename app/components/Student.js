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
            </p>
            <p>
              {this.props.student.email}
            </p>
             { this.props.campus && (
                <p>Currently at:{" "}
                  <Link to={`/campuses/${this.props.campus.id}`}>
                    {this.props.campus.name}
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
    (state, ownProps) => {
      const student = _.find(state.students, _.matchesProperty("id", Number(ownProps.params.id)));
      const campus = student && _.find(state.campuses, _.matchesProperty("id", student.campusId));
      return {
        student,
        campus
      }
    }
  )(StudentPresentational);
