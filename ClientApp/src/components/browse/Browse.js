import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { browseAD } from '../../actions';
import './browse.css';

class Browse extends React.Component {

    state = {
        selected: ''
    }

    componentDidMount () {
        this.props.browseAD();
    }

    renderBrowseData () {
        //need radio button value to look for specific group type
        return this.props.browseData.map((data) => {
            return (
                <div className="list-group" key={data.temperatureF}>
                    <div className="list-group-item" onClick={()=> this.setState({selected: data.summary})}>
                        {data.summary}
                    </div>
                </div>
            )
        })
    }

    render () {
        if(this.props.buttonValue === null || this.props.radioValue === null) {
            return <Redirect to="/"/>
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
                    {/* <div className="col-2"></div> */}
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
                                {this.state.selected}
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