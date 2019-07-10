import React from "react";
import { Modal } from 'react-bootstrap';
import { browseUsers } from '../../actions';
import { connect } from 'react-redux';
import './modal.css';

class BrowseUserModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      userName: ''
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount () {
      this.props.browseUsers();
  }

  componentDidUpdate () {
      console.log(this.props);
  }

  renderBrowse = () => {
      if(this.props.users === null) {
          return (
              <div>
                  Loading...
              </div>
          )
      } else {
        return this.props.users.map(user => {
            return (
                <div className="row" key={user.id}>
                  <div className="col-4">
                  </div>
                  <div className="list-group col-8">
                  <div className="list-group-item" style={{marginBottom: '5px'}}>
                      <div className="row">
                          <div className="col-1"></div>
                          <div className="col-5">
                              <p>{user.name}</p>
                          </div>
                          <div className="col-5">
                              <p>Account {user.account}</p>
                          </div>
                      </div>    
                  </div> 
                  </div>
                </div>
            )
        })
      }
  }

  render() {
    return (
        <div>
        <button className="btn" onClick={this.handleShow}>
          Add (Browse)
        </button>

        <Modal show={this.state.show} onHide={this.handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Browse Users</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="row">
                <div className="col-1"></div>
                <div className="col-10">
                    {this.renderBrowse()}
                </div>
              </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {users : state.browseUsersReducer};
}

export default connect(mapStateToProps, {browseUsers})(BrowseUserModal);
