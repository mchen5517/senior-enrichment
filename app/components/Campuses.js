import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { deleteCampus } from '../redux/campuses';
import NewCampus from './NewCampus'

class CampusesPresentational extends React.Component {
  render () {
    return (
      <div>
        <div className="row">
          {this.props.campuses.map(campus => {
            return (
                <div className="col-md-4 col-sm-12" key={campus.id}>
                    <div className="panel panel-default">
                      <Link to={`/campuses/${campus.id}`}>
                        <div className="panel-heading text-center">
                          {campus.name}
                        </div>
                        <div className="panel-body image-panel-container">
                          <img src={campus.image} />
                        </div>
                      </Link>
                      <div className="panel-footer">
                        <button 
                          className="btn btn-danger btn-sm btn-block" 
                          onClick={() => this.props.deleteCampus(campus.id)}>
                            <span className="glyphicon glyphicon-remove"></span>
                        </button>
                      </div>
                    </div>

                </div>
              )
          })}
        </div>
      <NewCampus />
      </div>
    )
  }
}

export default connect(
    state => ({
      campuses: state.campuses
    }),
    dispatch => ({
      deleteCampus: (id) => dispatch(deleteCampus(id))
    })
  )(CampusesPresentational);