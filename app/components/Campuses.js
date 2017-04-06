import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class CampusesPresentational extends React.Component {
  render () {
    return (
      <div>
        {this.props.campuses.map(campus => {
          return (
              <div className="col-md-4 col-sm-12" key={campus.id}>
                <Link to={`/campuses/${campus.id}`}>
                  <div className="panel panel-default">
                    <div className="panel-heading">
                      {campus.name}
                    </div>
                    <div className="panel-body image-panel-container">
                      <img src={campus.image} />
                    </div>
                  </div>
                </Link>
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

    })
  )(CampusesPresentational);