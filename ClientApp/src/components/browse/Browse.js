import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { getOus, getTypes, getGroups } from '../../actions';
import MembersInGroup from '../members-in-group/MembersInGroup';
import DomainSelector from '../domain-selector/DomainSelector';
import './browse.css';

class Browse extends React.Component {
    state = {
        ou: '',
        type: '',
        selected: ''
    }

    componentDidMount () {
        //call function that is in redux store to browse Active Directory
        this.props.getOus();
    }

    renderGroups = () => {
        return this.props.Groups.map(group => {
            return (
                <div 
                key={group}
                className="row list-group list-group-item"
                id="handleClick" 
                style={{marginBottom: "5px"}}
                onClick={() => this.setState({selected: group})}
                >
                    Group {group}
                </div>
            )
        })
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
                this.props.getGroups(this.state.ou, type);
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

    handleComponents = () => {
        if(this.props.domainSelector === null) {
            return <DomainSelector/>;
        }
        else if (this.state.selected) {
            return <MembersInGroup group={this.state.selected} />;
        }
        else {
            return (
                <div style={{marginTop: '25px'}}>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 text-center">
                        <h4>Browse for groups</h4>
                    </div>
                </div>
                <div className="row" style={{marginBottom: '25px'}}>
                    <div className="col-5" id="overflow">  
                        <div>
                        {this.renderOus()}
                        </div> 
                    </div>
                    <div className="col-7 text-center" id="overflow">
                        <div className="list-group">
                            <div className="list-group-item" id="fix-border">
                                {this.renderGroups()}
                            </div>
                        </div>
                    </div>        
                </div>
                </div>
            )
        }
    }

    render () {
        // if(this.props.buttonValue === null || this.props.radioValue === null) {
        //     return <Redirect to="/"/>
        // }
        
        return (
            <div>{this.handleComponents()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        buttonValue: state.selectedBtnReducer,
        radioValue: state.selectRadioReducer,
        Ou: state.getOusReducer,
        Type: state.getTypesReducer,
        Groups: state.getGroupsReducer,
        domainSelector: state.selectDomainReducer
    }
}

export default connect(mapStateToProps, {getOus, getTypes, getGroups})(Browse);