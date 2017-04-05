import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


class CampusesPresentational extends React.Component {
  render () {
    return (
      <ul>
        {this.props.campuses.map(campus => {
          return (
              <li key={campus.id}>
                <Link to={`/campuses/${campus.id}`}>
                  {campus.name}
                </Link>
              </li>
            )
        })}
      </ul>
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