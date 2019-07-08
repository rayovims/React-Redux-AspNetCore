import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { selectDomain } from '../../actions';
import { connect } from 'react-redux';
import "./domainSelector.css";

class DomainSelector extends React.Component {

  state = {
    domain: ''
  };

  render () {
    return (
      <DropdownButton title="Select Domain" id="btn">
        <Dropdown.Item onClick={() => this.props.selectDomain('ups.com')}>UPSCOM</Dropdown.Item>
        <Dropdown.Item onClick={() => this.props.selectDomain('americas.ups.com')}>AMERICAS</Dropdown.Item>
        <Dropdown.Item onClick={() => this.props.selectDomain('canada.ups.com')}>CANADA</Dropdown.Item>
        <Dropdown.Item onClick={() => this.props.selectDomain('asiapac.ups.com')}>ASIAPAC</Dropdown.Item>
        <Dropdown.Item onClick={() => this.props.selectDomain('europe.ups.com')}>EUROPE</Dropdown.Item>
        <Dropdown.Item onClick={() => this.props.selectDomain('us.ups.com')}>US</Dropdown.Item>
      </DropdownButton>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    selectDomain : state.selectDomain
  }
}

export default connect(mapStateToProps, {selectDomain})(DomainSelector);
