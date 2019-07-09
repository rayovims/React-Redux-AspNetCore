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

const searchUserReducer = (state = null, action) => {
    switch (action.type) {
        case "SEARCH_USER":
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

const selectDomainReducer = (state = null, action) => {
    switch(action.type) {  
        case "DOMAIN":
            return action.payload;
        default:
            return state
    }
}

const getUsersReducer = (state = [], action) => {
    switch (action.type) {
        case "USERS_IN_GROUP":
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    selectRadioReducer,
    selectedBtnReducer,
    browseAD,
    searchAD,
    selectDomainReducer,
    getUsersReducer,
    searchUserReducer
})