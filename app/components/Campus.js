import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { updateStudent } from '../redux/students'

class CampusPresentational extends React.Component {
  render () {
    return (
      <div>
        { this.props.campus && ( 
          <div className="panel panel-default">
            <div className="panel-heading text-center">
              {this.props.campus.name}
            </div>
            <div className="panel-body text-center">
              <div className="image-panel-container text-center">
                <img src={this.props.campus.image} />
              </div>
            </div>
            <div className="panel-footer">
              <div className="row">
                { this.props.students.map(student => (
                    <div className="col-md-3 col-sm-12 text-center" key={student.id}>
                      <Link to={`/students/${student.id}`}>{student.name}</Link>{" "}
                      <button 
                        className="btn btn-danger btn-sm" 
                        onClick={() => this.props.evict(student.id)}>
                          <span className="glyphicon glyphicon-remove"></span>
                      </button>
                    </div>
                  )) }
              </div>
            </div>
          </div>
          ) }
      </div>
    )
  }
}

export default connect(
    (state, ownProps) => ({
      campus: _.find(state.campuses, _.matchesProperty("id", Number(ownProps.params.id))),
      students: state.students.filter(student => student.campusId === Number(ownProps.params.id))
    }),
    dispatch => ({      // we need to pass it a function to remove the campus from the student
      evict: (id) => dispatch(updateStudent(id, {campusId: null}))
    })
  )(CampusPresentational);
