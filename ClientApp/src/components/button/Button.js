import React from 'react';
import './button.css';
import { connect } from 'react-redux';
import { selectButton } from '../../actions';
import { Redirect } from 'react-router-dom';

class Button extends React.Component {

    handleBtnClick () {
        if(this.props.radioSelected === null) {
            alert("Please choose a type");

        }
        this.props.selectButton(this.props.value)
    }

    render () {

        if(this.props.radioSelected !== null && this.props.btnSelected !== null) {
            return <Redirect to={`/${this.props.btnSelected}`}/>
        }

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
}

const mapStateToProps = (state) => {
    return {
        radioSelected: state.selectRadioReducer,
        btnSelected: state.selectedBtnReducer
    }
}

export default connect(mapStateToProps, {selectButton})(Button);