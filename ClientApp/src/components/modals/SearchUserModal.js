import React from "react";
import { Modal } from 'react-bootstrap';
import { searchUser } from '../../actions';
import { connect } from 'react-redux';
import './modal.css';

class SearchUserModal extends React.Component {
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

  searchUser = (e) => {
      this.setState({userName: e.target.value});
  }

  renderUsers = () => {
      return (
        <div onClick={() => {
            this.addUser(this.props.user);
            this.handleClose();
        }}>
          {this.props.user}
        </div>
      ) 
  }

  addUser = (user) => {
      console.log("User: ", user);
      console.log("Now get this user and add him to the specified group... you can find specified group in redux store");
  }

  componentDidUpdate() {
    this.props.searchUser(this.state.userName);
  }

  render() {
    return (
        <div>
        <button className="btn" onClick={this.handleShow}>
          Add (Search)
        </button>

        <Modal show={this.state.show} onHide={this.handleClose} size="lg" centered>
          <Modal.Header closeButton>
            <Modal.Title>Search for user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <div className="row">
                  <div className="col-2 text-center">
                  <label>Name</label>
                  </div>
                  <div className="col-8">
                  <input
                    value={this.state.userName}
                    onChange={(e) => this.searchUser(e)}
                    className="form-control"
                    />
                  </div>
              </div>
              <hr/>
              <div className="row">
                  <div className="col-1"></div>
                  <div className="col-10">
                      <div className="list-group list-group-item">
                        {this.renderUsers()}
                      </div>
                  </div>
              </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {user : state.searchUserReducer};
}

export default connect(mapStateToProps, {searchUser})(SearchUserModal);
