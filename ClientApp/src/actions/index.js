import getAD from '../apis/getAD';

export const searchAD = group => async dispatch => {
    let response;
    if (group === undefined) {
        response = await getAD.get(`/search`);
    } else {
    response = await getAD.get(`/search/${group}`);
    }
    dispatch({ type: "SEARCH_AD", payload: response.data});
}

export const searchUser = user => async dispatch => {
    const response = await getAD.get(`/find/${user}`);
    dispatch({ type: "SEARCH_USER", payload: response.data});
}

export const browseAD = () => async dispatch => {
    const response = await getAD.get("/browse/");
    dispatch({ type: "BROWSE_AD", payload: response.data});
}

export const searchUsersInGroup = (group) => async dispatch => {
    const response = await getAD.get(`/user/${group}`);
    dispatch({type: "USERS_IN_GROUP", payload: response.data});
}

export const selectDomain = (domain) => {
    return {
        type: "DOMAIN",
        payload: domain
    }
}

export const selectButton = (value) => {
    return {
        type: 'BTN_VALUE',
        payload: value
    }
}

export const selectRadio = (value) => {
    return {
        type: "RADIO_VALUE",
        payload: value
    }
}