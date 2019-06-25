import React from 'react';
import { connect } from 'react-redux';
import { selectRadio } from '../../actions';

class Radio extends React.Component {
    render () {
        return (
            <div>
                <input
                    className="radio-btn"
                    type="radio"
                    value={this.props.value}
                    name="btn"
                    onChange={() => this.props.selectRadio(this.props.value)}
                />
                <label>{this.props.label}</label>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { radioBtn: state.selectRadioReducer}
}

export default connect(mapStateToProps, {selectRadio})(Radio);