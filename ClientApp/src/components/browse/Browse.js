import React from 'react';
import { connect } from 'react-redux';
// import { Redirect, withRouter } from 'react-router-dom';
import { getOus, getTypes, getGroups } from '../../actions';
import SearchInfo from '../searchInfo/SearchInfo';
import './browse.css';

class Browse extends React.Component {
    state = {
        ou: '',
        type: ''
    }

    componentDidMount () {
        //call function that is in redux store to browse Active Directory
        this.props.getOus();
    }

    // renderTypes = (ou) => {
        // this.props.getTypes(ou);
        // return this.props.Type.map(type => {
        //     return (
        //         <div>
        //             {type}
        //         </div>
        //     )
        // })
    // }

    componentDidUpdate() {
        console.log(this)
    }

    renderStructure = () => {
        return (
            <div><i className="fas fa-folder-open"></i> <p>{this.state.ou}</p>
                <div className="row">
                    <div className="list-group list-group-item">
                        {this.props.Type}
                    </div>
                </div> 
            </div> 
        )
    }

    renderOus = () => {
        //Radio button value here
        // console.log("props", this.props.radioValue);
        //need radio button value to look for specific group type
        return this.props.Ou.map((data) => {
            return (
                <div className="list-group" key={data}>
                    <div className="list-group-item" 
                    onClick={() => {
                        this.setState({ou: data});
                        // this.renderTypes(data);
                        this.props.getTypes(data);

                    }}
                    style={{marginBottom: '5px'}}>
                    {this.state.ou === data ? <div><i className="fas fa-folder-open"></i> <p>{this.state.ou}</p>
                <div className="row">
                    <div className="list-group list-group-item">
                        {this.props.Type.map(types => {
                            <div>{types}</div>
                        })}
                    </div>
                </div> 
            </div>
 : <div><i className="fas fa-folder"></i> {data}</div>}
                    </div>
                </div>
            )
        })
    }

    render () {
        let display;

        // if(this.props.buttonValue === null || this.props.radioValue === null) {
        //     return <Redirect to="/"/>
        // }
        if (this.state.ou === "") {
            display = <div>Nothing Selected...</div>;
        } else {
            display = <div>{this.state.ou}</div>; 
        }

        
        return (
            <div>
                <SearchInfo
                    name="gg_ACSISup (US\gg_ACSISup)"
                    location="CN=gg_ACSISup,OU=Groups,OU=OUAdmins,DC=us,DC=ups,DC=com"
                />
                <hr/>
                <div className="row" style={{marginBottom: '25px'}}>
                    <div className="col-6">  
                        <div>
                        {this.renderOus()}
                        </div> 
                    </div>
                    <div className="col-6 text-center">
                        <div className="list-group">
                            <div className="list-group-item">
                                {display}
                            </div>
                        </div>
                    </div>        
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        buttonValue: state.selectedBtnReducer,
        radioValue: state.selectRadioReducer,
        Ou: state.getOusReducer,
        Type: state.getTypesReducer,
        Groups: state.getGroupsReducer
    }
}

export default connect(mapStateToProps, {getOus, getTypes, getGroups})(Browse);