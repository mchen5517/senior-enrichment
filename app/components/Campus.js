import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { updateStudent } from '../redux/students';
import { updateCampus } from '../redux/campuses';
import { Modal } from 'react-bootstrap';

/*****
  This component set deals with a the single campus view.  It requires a local state to
  deal with the form and modal, therefore it is a controlled component.
*****/

class CampusPresentational extends React.Component {
  render () {
    return (
      <div>
        { this.props.campus && ( 
          <div>

            <div className="panel panel-default">
              <div className="panel-heading text-center">
                {this.props.campus.name}{"\t"}
                <button className="btn btn-secondary btn-xs" onClick={this.props.toggleModal}>
                  <span className="glyphicon glyphicon-edit"></span>
                </button> 
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
                        <Link to={`/students/${student.id}`}>{student.name}</Link>{"\t"}
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

            <Modal 
              show={this.props.modalOpen}
              onHide={this.props.toggleModal}>
                <Modal.Header closeButton>
                  Edit Campus
                </Modal.Header>
                <form onSubmit={this.props.onUpdateCampus}>
                  <Modal.Body>
                    <div className="form-group">
                      <label htmlFor="campusNameInput">Name</label>
                      <input 
                        id="campusNameInput" 
                        name="campusNameInput"
                        type="text"
                        className="form-control" 
                        defaultValue={this.props.campus.name} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="campusImageInput">Image URL</label>
                      <input 
                        id="campusImageInput" 
                        name="campusImageInput"
                        type="text"
                        className="form-control" 
                        defaultValue={this.props.campus.image} />
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <button className="btn btn-primary btn-sm">Submit Changes</button>
                  </Modal.Footer>
                </form>
            </Modal>

          </div>
          ) }
      </div>
    )
  }
}

/*****
  React Component Container to hold the local state of the edit form (including the modal).
*****/

class CampusContainer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      modalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.onUpdateCampus = this.onUpdateCampus.bind(this);
  }
  toggleModal(){
    this.setState({modalOpen: !this.state.modalOpen});
  }
  onUpdateCampus(evt){
    evt.preventDefault();
    this.props.updateCampus({name: evt.target.campusNameInput.value, image: evt.target.campusImageInput.value})
    .then(() => this.setState({modalOpen: false}))
    .catch(err => console.log(err));
  }
  render(){
    return (
      <CampusPresentational 
        campus={this.props.campus}
        students={this.props.students}
        modalOpen={this.state.modalOpen}
        toggleModal={this.toggleModal} 
        evict={this.props.evict}
        onUpdateCampus={this.onUpdateCampus} />
    )
  }
}

/*****
  Connect our store to this container.
*****/

export default connect(
    (state, ownProps) => ({
      campus: _.find(state.campuses, _.matchesProperty("id", Number(ownProps.params.id))) || {},
      students: state.students.filter(student => student.campusId === Number(ownProps.params.id))
    }),
    (dispatch, ownProps) => ({      // we need to pass it a function to remove the campus from the student
      evict: (id) => dispatch(updateStudent(id, {campusId: null})),
      updateCampus: (newValuesObj) => dispatch(updateCampus(ownProps.params.id, newValuesObj))
    })
  )(CampusContainer);
