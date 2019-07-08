import React from 'react';
import { connect } from 'react-redux';
import { searchUsersInGroup } from '../../actions';
import SearchInfo from '../searchInfo/SearchInfo';
import "./members-in-group.css";

class MembersInGroup extends React.Component {
    componentDidMount() {
        this.props.searchUsersInGroup(this.props.group);
    }

    renderUsers = () => {
        return this.props.users.map(user => {
            return (
                <div className="list-group">
                    <div className="list-group-item">
                        <p>{user}</p>
                    </div>
                </div>
            )
        })
    }

    render () {
        return (
            <div>
                <SearchInfo
                name="test"
                location="test1"
                />
                <hr/>
                <div id="scroll">
                    {this.renderUsers()}
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        users: state.getUsersReducer
    };
}

export default connect(mapStateToProps, {searchUsersInGroup})(MembersInGroup);