import { combineReducers } from 'redux';

const searchAD = (state = [], action ) => {
    switch (action.type) {
        case "SEARCH_AD":
            return action.payload;
        default:
            return state;
    }
}

const browseAD = (state = [], action) => {
    switch (action.type) {
        case "BROWSE_AD":
            return action.payload;
        default:
            return state;
    }
}

const selectRadioReducer = (state = null, action ) => {
    switch (action.type) {
        case "RADIO_VALUE":
            return action.payload;
        default:
            return state
    }
}

const selectedBtnReducer = (state = null, action) => {
    switch (action.type) {
        case "BTN_VALUE":
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    selectRadioReducer,
    selectedBtnReducer,
    browseAD,
    searchAD
})