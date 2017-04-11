import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { deleteCampus } from '../redux/campuses';
import { Modal } from 'react-bootstrap';
import NewCampus from './NewCampus'

/*****
  This component holds the list of links to campuses in the form of a set of panels.
*****/

class CampusesPresentational extends React.Component {

  constructor(props) {
    super();
    this.state = {
      modalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal(){
    this.setState({modalOpen: !this.state.modalOpen});
  }

  render () {
    return (
      <div>
        <button className="btn btn-primary" onClick={this.toggleModal}>
          <span className="glyphicon glyphicon-plus" /> Add Campus
        </button>
        <div className="row">
          {this.props.campuses.map(campus => {
            return (
                <div className="col-md-4 col-sm-12" key={campus.id}>
                    <div className="panel panel-default">
                      <Link to={`/campuses/${campus.id}`}>
                        <div className="panel-heading text-center">
                          {campus.name}
                        </div>
                        <div className="panel-body image-thumbnail-container">
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
        <Modal show={this.state.modalOpen} onHide={this.toggleModal}>
          <NewCampus />
        </Modal>
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