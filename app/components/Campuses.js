import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { deleteCampus } from '../redux/campuses';


class CampusesPresentational extends React.Component {
  render () {
    return (
      <div className="row">
        {this.props.campuses.map(campus => {
          return (
              <div className="col-md-4 col-sm-12" key={campus.id}>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <Link to={`/campuses/${campus.id}`}>
                      {campus.name}
                    </Link>
                    <button 
                      className="btn btn-danger btn-sm" 
                      onClick={() => this.props.deleteCampus(campus.id)}>
                        <span className="glyphicon glyphicon-remove"></span>
                    </button>
                  </div>
                  <div className="panel-body image-panel-container">
                    <img src={campus.image} />
                  </div>
                </div>
              </div>
            )
        })}
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