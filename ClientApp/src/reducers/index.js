import { combineReducers } from 'redux';

const searchAD = (state = [], action ) => {
    switch (action.type) {
        case "SEARCH_AD":
            return action.payload;
        default:
            return state;
    }
}

//browse for users

const getOusReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_OU":
            return action.payload;
        default:
            return state;
    }
}

const getTypesReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_TYPE":
            return action.payload;
        default:
            return state;
    }
}

const getGroupsReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_GROUPS":
            return action.payload;
        default:
            return state;
    }
}

//ends here
const searchUserReducer = (state = null, action) => {
    switch (action.type) {
        case "SEARCH_USER":
            return action.payload;
        default:
            return state;
    }
}

const browseUsersReducer = (state = null, action) => {
    switch (action.type) {
        case "BROWSE_USERS":
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
    getOusReducer,
    getTypesReducer,
    getGroupsReducer,
    searchAD,
    selectDomainReducer,
    getUsersReducer,
    searchUserReducer,
    browseUsersReducer
})