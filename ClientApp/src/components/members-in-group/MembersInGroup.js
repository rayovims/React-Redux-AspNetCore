import React from 'react';
import { connect } from 'react-redux';
import { searchUsersInGroup } from '../../actions';
import SearchInfo from '../searchInfo/SearchInfo';
import "./members-in-group.css";
import Modal from '../modal/Modal';

class MembersInGroup extends React.Component {

    state = {
        selected: [],
    }


    componentDidMount() {
        this.props.searchUsersInGroup(this.props.group);
    }

    renderUsers = () => {
        return this.props.users.map((user) => {
            return (
                <div className="row" key={user.id}>
                    <div className="col-1"></div>
                    <div className="list-group col-10">
                        <div 
                        className={this.state.selected.includes(user) ? "list-group-item active" : "list-group-item"} 
                        onClick={() => {
                            this.setState({ selected: [...this.state.selected, user]});
                            if(this.state.selected.includes(user)) {
                                let index = this.state.selected.indexOf(user);
                                this.state.selected.splice(index, 1);
                                this.setState({selected: this.state.selected});

                            }
                        }} 
                        style={{textAlign: "left", marginBottom: '10px'}}
                        >
                            <div className="row">
                                <div className="col-5">
                                    <p>{user.name}</p>
                                </div>
                                <div className="col-1"></div>
                                <div className="col-5" style={{textAlign: "left"}}>
                                    <p>Account of {user.account}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }

    removeUser = () => {
        console.log("Remove users selected");
    }

    // browseUser = () => {
    //     return <Modals/>
    // }

    // searchUser = () => {
    //     return <Modals/>
    // }


    render () {
        return (
            <div>
                <SearchInfo
                    name="gg_ACSISup (US\gg_ACSISup)"
                    location="CN=gg_ACSISup,OU=Groups,OU=OUAdmins,DC=us,DC=ups,DC=com"
                />
                <hr/>
                <div>
                    <div className="row" style={{marginTop: '10px'}}>
                        <div className="col-1"></div>
                        <div className="col-5 card-title" style={{textAlign: "left"}}>Name</div>
                        <div className="col-5 card-title" style={{textAlign: "left"}}>Account</div>
                    </div>
                    <div id="users">
                        {this.renderUsers()}
                    </div>
                    <hr id="fix"/>
                </div>
                <div className="row" style={{marginTop: "10px"}}>
                    <div className="col-4 text-center">
                        {/* <button onClick={this.searchUser} className="btn">Add (Search)</button> */}
                        <Modal/>
                    </div>
                    <div className="col-4 text-center">
                        <button onClick={this.browseUser} className="btn">Add (Browse)</button>
                    </div>
                    <div className="col-4 text-center">
                        <button onClick={this.removeUser} className="btn">Remove</button>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        users: state.getUsersReducer
    };
}

export default connect(mapStateToProps, {searchUsersInGroup})(MembersInGroup);