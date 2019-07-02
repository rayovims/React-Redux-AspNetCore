import React from 'react';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import { searchAD } from '../../actions';
import SearchInfo from '../../searchInfo/SearchInfo';
import './search.css';

class Search extends React.Component {

    state = {
        search: '',
        name: '',
        location: '',
        selected: []
    }
    
    handleOnChange = (e) => {
        this.setState({search: e.target.value})
        this.props.searchAD(e.target.value);
    }

    handleInfo = () => {
        if (this.state.name !== '') {
            return <SearchInfo name={this.state.name} location={this.state.location}/>
        }
    }

    renderList = () => {
        // console.log(this.props.searchData);
        if (Array.isArray(this.props.searchData)) {
            return this.props.searchData.map((data) => {
                return (
                    <div className="list-group" key={data}>
                        <div className="list-group-item" onClick={()=> this.setState({selected: data})}>
                            {data}
                        </div>
                    </div>
                )
            })
        }
        return (
            <div id="search" className="list-group" key={this.props.searchData}>
                <div className="list-group-item" onClick={() => this.setState({selected: {"name": this.props.searchData}})}>
                    {this.props.searchData}
                </div>
            </div>
        )
    }

    componentDidUpdate () {
        console.log("selected: ", this.state.selected);
        if (this.state.selected.length === 0) {
            console.log("CLEAR");
        } else console.log(this.state.selected.name)
    }

    render () {
        // if(this.props.buttonValue === null || this.props.radioValue === null) {
        //     return <Redirect to="/"/>
        // }
        return (
            <div>
                {this.handleInfo()}
                <SearchInfo name="Name" location="Location"/>
                <hr/>
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 text-center" style={{marginBottom: "15px"}}>
                        <input
                            className="form-control"
                            value={this.state.value}
                            onChange={e => this.handleOnChange(e)}
                            spellCheck="false"
                        />       
                    </div>
                </div>
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 text-center" id="scroll">
                        {this.renderList()}
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
        searchData: state.searchAD
    }
}

export default connect(mapStateToProps, {searchAD})(Search);