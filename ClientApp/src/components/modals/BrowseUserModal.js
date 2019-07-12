import React from "react";
import { Modal } from 'react-bootstrap';
import { getOus, getTypes, browseUsers } from '../../actions';
import { connect } from 'react-redux';
import './modal.css';

class BrowseUserModal extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      ou: '',
      type: '',
      selected: ''
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  componentDidMount () {
    this.props.getOus();
  }
  
  renderUsers = () => {
    if(this.props.Users) {
      return this.props.Users.map(user => {
        return (
            <div 
            key={user.id}
            className="row list-group list-group-item" 
            style={{marginBottom: "5px", marginRight: '10px'}}
            onClick={() => {
              this.setState({selected: user});
              this.handleClose();
            }}
            >
              User {user.name}
            </div>
        )
    })
    }
    else {
      return <div></div>;
    }
        
    }

    renderTypes = () => {
        return this.props.Type.map(type => {
            return (
            <div 
            key={type} 
            className="row list-group list-group-item"
            id="fix-border"
            onClick={() => {
                this.setState({type});
                this.props.browseUsers(this.state.ou, type);
            }}
            >
                {this.state.type === type ? 
                    <div><i className="fas fa-folder-open"></i> {type}</div> :
                    <div><i className="fas fa-folder"></i> {type}</div>
                }
            </div>
            )
        })
    }

  renderOus = () => {
    //Radio button value here
    // console.log("props", this.props.radioValue);
    //need radio button value to look for specific group type
    return this.props.Ou.map((data) => {
        return (
            <div className="list-group" key={data}>
                <div className="list-group-item" 
                    id="fix-border"
                    onClick={() => {
                    this.setState({ou: data});
                    this.props.getTypes(data);

                    }}
                    style={{marginBottom: '5px'}}
                >
                {this.state.ou === data ? 
                <div><i className="fas fa-folder-open"></i> {this.state.ou}
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10 list-group list-group-item" id="fix-border">
                            {this.renderTypes()}
                        </div>
                    </div> 
                </div>
                :
                <div> <i className="fas fa-folder"></i> {data}</div>
                }
                </div>
            </div>
        )
    })
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
                {/* <div className="col-1"></div> */}
                <div className="col-5" id="overflow">
                    <div>
                      {this.renderOus()}
                    </div>
                </div>
                <div className="col-1"></div>
                <div className="col-5" id="overflow">
                  <div>{this.renderUsers()}</div>
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
    return {
      Ou: state.getOusReducer,
      Type: state.getTypesReducer,
      Users: state.browseUsersReducer
    };
}

export default connect(mapStateToProps, {getOus, getTypes, browseUsers})(BrowseUserModal);
