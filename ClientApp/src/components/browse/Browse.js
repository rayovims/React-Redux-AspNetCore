import React from 'react';
import { connect } from 'react-redux';
// import { Redirect, withRouter } from 'react-router-dom';
import { browseAD } from '../../actions';
import './browse.css';

class Browse extends React.Component {
    state = {
        selected: '',
    }

    componentDidMount () {
        //call function that is in redux store to browse Active Directory
        this.props.browseAD();
    }

    renderBrowseData = () => {
        //Radio button value here
        console.log("props", this.props.radioValue);
        //need radio button value to look for specific group type
        return this.props.browseData.map((data) => {
            return (
                <div className="list-group" key={data}>
                    <div className="list-group-item" 
                    onClick={() => {
                        this.setState({selected: data})
                        console.log(this)
                    }}>
                    {this.state.selected === data ? <div><i className="fas fa-folder-open"></i> {this.state.selected}</div> : <div><i className="fas fa-folder"></i> {data}</div>}
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
        if (this.state.selected === "") {
            display = <div>Nothing Selected...</div>;
        } else {
            display = <div>{this.state.selected}</div>; 
        }

        
        return (
            <div>
                <div className="row">
                    <div className="col-6 text-center">
                         <label>Group Name:</label>
                         <div className="display">Group name goes here</div>
                    </div>
                    <div className="col-6 text-center">
                         <label>Display Location:</label>
                         <div className="display">Group location goes here</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div>Browse AD folder Structure goes here</div>
                        <hr/>   
                        <div>{this.renderBrowseData()}</div> 
                    </div>
                    <div className="col-6 text-center">
                        <div>When a folder gets clicked it goes here</div>
                        <hr/>
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
        browseData: state.browseAD
    }
}

export default connect(mapStateToProps, {browseAD})(Browse);