import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { updateStudent } from '../redux/students'

/*****
  This file contains a presentational component and exports a container created with connect.
  The presentational component contains all the current student (based on the url) information.
  The information is placed inside a form, so users can update it.  The component is uncontrolled.
  Connect passes down the student, his current campus, and a list of all the campuses.
*****/

class StudentPresentational extends React.Component {
  render () {
    return (
      <div>
        { this.props.student && (
          <div>
            <form onSubmit={(evt) => this.props.updateStudent(evt)}> 
              <label>Name: </label>
              <div className="form-group">
                <input name="name" defaultValue={this.props.student.name} />
              </div>
              <label> E-mail: </label>
              <div className="form-group">
                <input name="email" defaultValue={this.props.student.email} />
              </div>
               { this.props.campus && (
                  <div>
                    <label>Currently at: </label>
                    <div className="form-group">
                      <Link to={`/campuses/${this.props.campus.id}`}>
                        {this.props.campus.name}
                      </Link>
                    </div>
                  </div>
              )}
               <label>Deport to: </label>
               <div className="form-group">
                <select name="campus" defaultValue={this.props.student.campusId}>
                  <option>Nowhere</option>
                  {this.props.campuses.map(campus => (
                      <option key={campus.id} value={campus.id}>
                          {campus.name}
                      </option>
                    ))}
                </select>
               </div>
                <button
                  type="submit"
                  className="btn btn-warning btn-xs">
                    Update Student
               </button>
             </form>
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
        campus,
        campuses: state.campuses
      }
    },
    (dispatch, ownProps) => ({
      updateStudent: (evt) => {
        evt.preventDefault();
        dispatch(updateStudent(Number(ownProps.params.id),
        {
          name: evt.target.name.value,
          email: evt.target.email.value,
          campusId: Number(evt.target.campus.value)
        }
      ))}
    })
  )(StudentPresentational);
