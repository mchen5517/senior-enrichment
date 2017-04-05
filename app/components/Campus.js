import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

class CampusPresentational extends React.Component {
  render () {
    return (
      <div>
        { this.props.campus && this.props.campus.name }
      </div>
    )
  }
}

export default connect(
    (state, ownProps) => ({
      campus: _.find(state.campuses, _.matchesProperty("id", Number(ownProps.params.id)))
    })
  )(CampusPresentational);
