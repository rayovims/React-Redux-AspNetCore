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

//browsing for groups

export const getOus = () => async dispatch => {
    const response = await getAD.get("/ou");
    dispatch({ type: "GET_OU", payload: response.data});
}

export const getTypes = ou => async dispatch => {
    const response = await getAD(`/type/${ou}`);
    dispatch({type: "GET_TYPE", payload: response.data});
}

export const getGroups = (ou, type) => async dispatch => {
    const response = await getAD(`browsegroups/${ou}/${type}`);
    dispatch({type: "GET_GROUPS", payload: response.data});
}

//ends here

//browsing for users in group

export const browseUsers = (ou, type) => async  dispatch => {
    const response = await getAD.get(`/browseusers/${ou}/${type}`);
    dispatch({ type: "BROWSE_USERS", payload: response.data});
}

//ends here

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