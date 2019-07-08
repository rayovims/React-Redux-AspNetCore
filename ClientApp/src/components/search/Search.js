import React from "react";
import { connect } from "react-redux";
// import { Redirect } from 'react-router-dom';
import { searchAD } from "../../actions";
// import SearchInfo from "../searchInfo/SearchInfo";
import DomainSelector from "../domain-selector/DomainSelector";
import MembersIngGroup from '../members-in-group/MembersInGroup';
import "./search.css";

class Search extends React.Component {
  state = {
    search: "",
    name: "",
    location: "",
    selected: ''
  };

  componentDidMount() {
    this.props.searchAD();
  }

  handleOnChange = e => {
    this.setState({ search: e.target.value });
    this.props.searchAD(e.target.value);
  };

  renderList = () => {
    if (Array.isArray(this.props.searchData)) {
      return this.props.searchData.map(data => {
        return (
          <div className="list-group" key={data}>
            <div
              className="list-group-item"
              onClick={() => this.setState({ selected: data })}
            >
              {data}
            </div>
          </div>
        );
      });
    }
    return (
      <div id="search" className="list-group" key={this.props.searchData}>
        <div
          className="list-group-item"
          onClick={() => this.setState({selected: this.props.searchData})}
        >
          {this.props.searchData}
        </div>
      </div>
    );
  };

  handleDomain = () => {
    if (this.props.domainSelector === null) {
      return <DomainSelector />;
    } 
    else if (this.state.selected) {
        return <MembersIngGroup group={this.state.selected}/>
    }
    else 
    {
      return (
        <div>
          <div className="row">
            <div className="col-3" />
            <div className="col-6 text-center" style={{ marginBottom: "15px", marginTop: "15px" }}>
              <input
                className="form-control"
                value={this.state.value}
                onChange={e => this.handleOnChange(e)}
                spellCheck="false"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-2" />
            <div className="col-8 text-center" id="scroll">
              {this.renderList()}
            </div>
          </div>
        </div>
      );
    }
  };

  render() {
    // if(this.props.buttonValue === null || this.props.radioValue === null) {
    //     return <Redirect to="/"/>
    // }
    return (
      <div style={{textAlign: "center"}}>
        {this.handleDomain()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buttonValue: state.selectedBtnReducer,
    radioValue: state.selectRadioReducer,
    searchData: state.searchAD,
    domainSelector: state.selectDomainReducer
  };
};

export default connect(
  mapStateToProps,
  { searchAD }
)(Search);
