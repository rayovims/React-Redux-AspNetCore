import React from 'react';
import { connect } from 'react-redux';
import { selectButton } from '../../actions';
import { Redirect } from 'react-router-dom';

import './button.css';


class Button extends React.Component {

    handleBtnClick () {
        this.props.selectButton(this.props.value)
    }

    render () {

        if(this.props.radioSelected !== null && this.props.btnSelected !== null) {
            return <Redirect to={`/${this.props.btnSelected}`}/>
        }

        if (this.props.radioSelected !== null) {
            return (
            <button 
            className="btn"
            type="button"
            onClick={this.handleBtnClick.bind(this)}
            >
                {this.props.value}
            </button>
            )
        }

        return (
            <button 
            className="btn"
            type="button"
            disabled={true}
            >
                {this.props.value}
            </button>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        radioSelected: state.selectRadioReducer,
        btnSelected: state.selectedBtnReducer
    }
}

export default connect(mapStateToProps, {selectButton})(Button);